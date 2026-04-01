import ai from "../lib/ai.js"
import { ENV } from "../lib/env.js"
import { Resume } from "../models/Resume.js"


// controller for enhancing a resume's job description
// POST: /api/ai/enhance-job-desc
export const enhanceJobDescription=async(req,res)=>{
    try {
        const {userContent}=req.body

        if(!userContent) return res.status(400).json({message:'Missing required fields'})

        const response=await ai.chat.completions.create({
            model:ENV.OPENAI_MODEL,
            messages:[
                {role:"system",content:"You are an expert in resume writing.Your task is to enhance the job description of a resume. The summary should bt 1-2 sentences also highlighting key responsibilities and achievements. Use action verbs and quantifiable results where possible. Make it ATS-friendly. and only return text no options or anything else."},
                {role:"user",content:userContent}
            ]
        })

        const enhancedContent=response.choices[0].message.content
        return res.status(200).json({enhancedContent})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}
// controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary=async(req,res)=>{
    try {
        const {userContent}=req.body

        if(!userContent) return res.status(400).json({message:'Missing required fields'})

        const response=await ai.chat.completions.create({
            model:ENV.OPENAI_MODEL,
            messages:[
                {role:"system",content:"You are an expert in resume writing.Your task is to enhance the professional summary of a resume. The summary should bt 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly. and only return text no options or anything else."},
                {role:"user",content:userContent}
            ]
        })

        const enhancedContent=response.choices[0].message.content
        return res.status(200).json({enhancedContent})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

// controller for enhancing a resume's project description
// POST: /api/ai/enhance-project-desc
export const enhanceProjectDescription=async(req,res)=>{
    try {
        const {userContent}=req.body

        if(!userContent) return res.status(400).json({message:'Missing required fields'})

        const response=await ai.chat.completions.create({
            model:ENV.OPENAI_MODEL,
            messages:[
                {role:"system",content:"You are an expert in resume writing. Your task is to enhance the project description of a resume. The description should be concise, highlighting key technologies used, your specific contributions, and the project's impact or results. Use action verbs and quantifiable results where possible. Make it ATS-friendly. and only return text no options or anything else."},
                {role:"user",content:userContent}
            ]
        })

        const enhancedContent=response.choices[0].message.content
        return res.status(200).json({enhancedContent})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

// controller for uploading a resume to the database
// POST: /api/ai/uplaod-resume
export const uploadResume=async(req,res)=>{
    try {
        const {resumeText,title}=req.body
        const userId=req.user._id

        if(!resumeText) return res.status(400).json({message:'Missing required fields'})

        const systemPrompt="You are an expert AI Agent to extract data from resume. You must return data in JSON format."

        const userPrompt=`extract data from this resume: ${resumeText}
        
        Provide data strictly in the following JSON format with no additional text before or after:
        
        {
          "professional_summary": "",
          "skills": ["", ""],
          "personal_info": {
            "image": "",
            "full_name": "",
            "profession": "",
            "email": "",
            "phone": "",
            "location": "",
            "linkedin": "",
            "website": ""
          },
          "experience": [
            {
              "company": "",
              "position": "",
              "start_date": "",
              "end_date": "",
              "description": "",
              "is_current": false
            }
          ],
          "project": [
            {
              "name": "",
              "description": "",
              "type": ""
            }
          ],
          "education": [
            {
              "institution": "",
              "degree": "",
              "field": "",
              "graduation_date": "",
              "gpa": ""
            }
          ]
        }
        `

        const response=await ai.chat.completions.create({
            model:ENV.OPENAI_MODEL,
            messages:[
                {role:"system",content:systemPrompt},
                {role:"user",content:userPrompt}
            ],
            response_format:{type:'json_object'}
        })

        const extractedData=response.choices[0].message.content
        const parsedData=JSON.parse(extractedData)
        
        const newResume=await Resume.create({userId,title,...parsedData})
        return res.json({resumeId:newResume._id})
    } catch (error) {
        console.error("Error in uploadResume:", error)
        return res.status(400).json({message:error.message})
    }
}