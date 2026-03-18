// useStreamClient is our custom hook

import { useEffect, useRef, useState } from "react"
import { sessionApi } from "../api/sessions"
import {StreamChat} from 'stream-chat'
import { disconnectStreamClient, initializeStreamClient } from "../lib/stream"
import toast from "react-hot-toast"

function useStreamClient(session,loadingSession,isHost,isParticipant) {
    const [streamClient,setStreamClient]=useState(null)
    const [call,setCall]=useState(null)
    const [chatClient,setChatClient]=useState(null)
    const [channel,setChannel]=useState(null)
    const [isInitailizingCall,setIsInitializingCall]=useState(true)
    const initializedKeyRef = useRef(null)

    useEffect(()=>{
        let cancelled = false
        let videoCall=null
        let chatClientInstance=null

        const initCall=async()=>{
            if(!session?.callId) return
            if(!isHost && !isParticipant) return
            if (initializedKeyRef.current === session.callId) return

            try {
                setIsInitializingCall(true)
                const {token,userId,userName,userImage}=await sessionApi.getStreamToken()

                const client=await initializeStreamClient({
                    id:userId,
                    name:userName,
                    image:userImage
                },token)

                if (cancelled) return
                initializedKeyRef.current = session.callId
                setStreamClient(client)

                videoCall=client.call("default",session.callId)
                await videoCall.join({create:true})
                if (cancelled) return
                setCall(videoCall)

                const apiKey=import.meta.env.VITE_STREAM_API_KEY
                chatClientInstance=StreamChat.getInstance(apiKey)

                // avoid consecutive connectUser calls for same user
                if(!chatClientInstance.user || chatClientInstance.user.id !== userId){
                    // if some other user is connected, disconnect first
                    if(chatClientInstance.user && chatClientInstance.user.id !== userId){
                        await chatClientInstance.disconnectUser()
                    }

                    await chatClientInstance.connectUser(
                        {
                            id:userId,
                            name:userName,
                            image:userImage
                        },
                        token
                    )
                }
                if (cancelled) return
                setChatClient(chatClientInstance)

                const chatChannel=chatClientInstance.channel("messaging",session.callId)
                await chatChannel.watch()
                if (cancelled) return
                setChannel(chatChannel)
            } catch (error) {
                toast.error("Failed to join Video Call")
                console.error("Error init call",error);
            }finally{
                if (!cancelled) setIsInitializingCall(false)
            }
        }

        if(session && !loadingSession) initCall()

        // cleanup - for performance reasons
        return ()=>{
            cancelled = true;
            // iife
            ;(async()=>{
                try {
                    if(videoCall) await videoCall.leave()
                    if(chatClientInstance) await chatClientInstance.disconnectUser()
                    await disconnectStreamClient()    
                } catch (error) {
                    console.error("Cleanup error:",error);
                    
                }
            })()
        }
    },[session?.callId,loadingSession,isHost,isParticipant])

    return{
        streamClient,
        call,
        chatClient,
        channel,
        isInitailizingCall
    }
  
}

export default useStreamClient