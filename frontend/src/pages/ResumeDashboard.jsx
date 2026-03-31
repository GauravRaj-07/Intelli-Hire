import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon,  TrashIcon,  UploadCloud,  UploadCloudIcon, XIcon } from 'lucide-react';
import { dummyResumeData } from '../data/assets';
import { useNavigate } from 'react-router';
import axiosInstance from '../lib/axios.js';
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext';


const ResumeDashboard = () => {

    const colors=["#9333ea","#d97706","#dc2626","#0284c7","#16a34a"]
    const { user } = useUser();
    const [allResumes, setAllResumes] = useState([]);
    const [showCreateResume, setShowCreateResume] = useState(false);
    const [showUploadResume, setShowUploadResume] = useState(false);
    const [title, setTitle] = useState('');
    const [resume, setResume] = useState(null);
    const [editResumeId, setEditResumeId] = useState('');
    const [isLoading,setIsLoading]=useState(false)

    const navigate=useNavigate()

    const loadAllResumes = async () => {
        
        // setAllResumes(dummyResumeData);
        try {
            const {data}=await axiosInstance.get('/resumes')
            setAllResumes(data.resumes)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const createResume=async(event)=>{
        try {
            event.preventDefault()
            const {data}=await axiosInstance.post('/resumes/create',{title})
            setAllResumes([...allResumes,data.resume])
            setTitle('')
            setShowCreateResume(false)
            navigate(`/app/builder/${data.resume._id}`) 
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
        
    }

    const uploadResume=async(event)=>{
        event.preventDefault()
        setIsLoading(true)
        try {
            const resumeText=await pdfToText(resume)
            const {data}=await axiosInstance.post('/ai/upload-resume',{title,resumeText})
            setTitle('')
            setResume(null)
            setShowUploadResume(false)
            navigate(`/app/builder/${data.resumeId}`)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
        setIsLoading(false)
    }

    const editTitle=async(event)=>{
        try {
            event.preventDefault()
            const {data}=await axiosInstance.put(`/resumes/update`,{resumeId:editResumeId,resumeData:{title}})
            setAllResumes(allResumes.map(resume=>resume._id===editResumeId ? {...resume,title} : resume))
            setTitle('')
            setEditResumeId('')
            toast.success(data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const deleteResume=async(resumeId)=>{
        try {
            const confirm=window.confirm('Are you sure you want to delete this resume?')
        if(confirm){
            // setAllResumes(prev=>prev.filter(resume=>resume._id!==resumeId))

            const {data}=await axiosInstance.delete(`/resumes/delete/${resumeId}`)
            setAllResumes(allResumes.filter(resume=>resume._id !== resumeId))
            toast.success(data.message)
        }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    useEffect(() => {
        loadAllResumes();
    }, []);
  return (
    <div>
        <div className='max-w-7xl mx-auto px-4 py-7.5'>
            <p className='text-2xl font-medium mb-6 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-base-content sm:hidden'>Welcome back, {user?.firstName || "there"}!</p>

            <div className='flex gap-4'>
                <button onClick={()=>setShowCreateResume(true)} className='w-full bg-base-100 sm:max-w-36 h-48 flex flex-col items-center justify-center gap-2 rounded-lg border group border-primary/20 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200'>
                    <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-primary via-secondary to-accent text-white rounded-full hover:scale-105'/>
                    <p className='text-sm group-hover:text-primary transition-all duration-200'>Create Resume</p>
                </button>
                <button onClick={()=>setShowUploadResume(true)} className='w-full bg-base-100 sm:max-w-36 h-48 flex flex-col items-center justify-center gap-2 rounded-lg border group border-primary/20 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200'>
                    <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-primary via-secondary to-accent text-white rounded-full hover:scale-105'/>
                    <p className='text-sm group-hover:text-primary transition-all duration-200'>Upload Existing</p>
                </button>
            </div>

            <hr className='my-6 border-primary/20 sm:w-[305px]'/>

            <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
                {allResumes.map((resume,index)=>{
                    const baseColor=colors[index % colors.length]
                    return(
                        <button key={index} onClick={()=>navigate(`/app/builder/${resume._id}`)} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{background:`linear-gradient(135deg,${baseColor}10,${baseColor}40)`,borderColor:baseColor+'40'}}>

                            <FilePenLineIcon className='size-7 group-hover:scale-105 transition-all' style={{color:baseColor}}/>

                            <p className='text-sm group-hover:scale-105 transition-all px-2 text-center' style={{color:baseColor}}>{resume.title}</p>
                            <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{color:baseColor+'90'}}>
                                Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                            </p>

                            <div onClick={e=>e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                                <TrashIcon onClick={()=>deleteResume(resume._id)} className='size-7 p-1.5 hover:bg-primary/50 rounded text-white transition-colors'/>
                                <PencilIcon onClick={()=>{setEditResumeId(resume._id); setTitle(resume.title)}} className='size-7 p-1.5 hover:bg-primary/50 rounded text-white transition-colors'/>

                            </div>

                        </button>
                    )
                })}

            </div>

            {
                showCreateResume && (
                    <form onSubmit={createResume} onClick={()=>setShowCreateResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                        <div onClick={e=>e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                            <h2 className='text-xl font-bold text-black mb-4'>Create a Resume</h2>
                            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 text-black' required/>

                            <button className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>Create Resume</button>
                            <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=>{setShowCreateResume(false); setTitle('')}}/>
                        </div>
                    </form>
                )
            }

            {
                showUploadResume && (
                    <form onSubmit={uploadResume} onClick={()=>setShowUploadResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                        <div onClick={e=>e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                            <h2 className='text-xl font-bold text-black mb-4'>Upload Resume</h2>
                            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 text-black' required/>

                            <div>
                                <label htmlFor="resume-input" className='block text-sm text-slate-700'>
                                    Select resume file
                                    <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-all'>
                                        {resume ? (
                                            <p className='text-green-700'>{resume.name}</p>
                                        ) : (
                                            <>
                                            <UploadCloud className='size-14 stroke-1'/>
                                            <p>Upload resume</p>
                                            </>
                                        )}

                                    </div>
                                </label>
                                <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e)=>setResume(e.target.files[0])}/>
                            </div>

                            <button disabled={isLoading} className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2'>
                            {isLoading && <LoaderCircleIcon className='animate-spin size-4 text-white'/>}
                            {isLoading ? 'Uploading...' : 'Upload Resume'}
                            </button>
                            <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=>{setShowUploadResume(false); setTitle('')}}/>
                        </div>
                    </form>
                )
            }

            {
                editResumeId && (
                    <form onSubmit={editTitle} onClick={()=>setEditResumeId('')} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
                        <div onClick={e=>e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
                            <h2 className='text-xl font-bold text-black mb-4'>Edit Resume Title</h2>
                            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 text-black' required/>

                            <button className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>Update</button>
                            <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=>{setEditResumeId(''); setTitle('')}}/>
                        </div>
                    </form>
                )
            }
        </div>
    </div>
  )
}

export default ResumeDashboard