import { Plus, Trash2, Loader2, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import axiosInstance from '../lib/axios'
import toast from 'react-hot-toast'

const ProjectForm = ({ data, onChange }) => {

    const [generatingIndex, setGeneratingIndex] = useState(-1)

    const generateDescription = async (index) => {
        try {
            setGeneratingIndex(index)
            const prompt = `enhance this project description "${data[index].description}" for the project "${data[index].name}" of type "${data[index].type}"`
            const response = await axiosInstance.post('/ai/enhance-project-desc', { userContent: prompt })
            updateProject(index, "description", response.data.enhancedContent)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        } finally {
            setGeneratingIndex(-1)
        }
    }

    const addProject = () => {
        const newProject = {
            name: "",
            type: "",
            description: ""
        }
        onChange([...data, newProject])
    }

    const removeProject = (index) => {
        const updated = data.filter((_, i) => i !== index)
        onChange(updated)
    }

    const updateProject = (index, field, value) => {
        const updated = [...data]
        updated[index] = { ...updated[index], [field]: value }
        onChange(updated)
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Projects</h3>
                    <p className='text-sm text-gray-500'>Add your projects</p>
                </div>
                <button onClick={addProject} className='flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-all'>
                    <Plus className='size-4' />
                    Add Projects
                </button>
            </div>


            <div className='space-y-4 mt-6'>
                {data.map((project, index) => (
                    <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
                        <div className='flex justify-between items-start'>
                            <h4 className='text-gray-800 font-medium'>Project #{index + 1}</h4>
                            <button onClick={() => removeProject(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                                <Trash2 className='size-4' />
                            </button>
                        </div>

                        <div className='grid gap-3'>

                            <input value={project.name || ""} onChange={(e) => updateProject(index, "name", e.target.value)} type="text" placeholder='Project Name' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm text-black' />

                            <input value={project.type || ""} onChange={(e) => updateProject(index, "type", e.target.value)} type="text" placeholder="Project Type (e.g., Personal, Academic)" className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm text-black' />

                        </div>

                        <div className='space-y-2 mt-2'>
                            <div className='flex items-center justify-between'>
                                <label className='text-sm font-medium text-gray-700'>Project Description</label>
                                <button disabled={generatingIndex===index || !project.name} onClick={()=>generateDescription(index)} className='flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
                                    {generatingIndex===index ? (<Loader2 className='size-4 animate-spin'/>) : (<Sparkles className='w-3 h-3'/>)}
                                    {generatingIndex===index ? "Enhancing..." : "AI Enhance"}
                                </button>
                            </div>
                            <textarea rows={4} value={project.description || ""} onChange={(e) => updateProject(index, "description", e.target.value)} placeholder='Describe your project...' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm text-black resize-none' />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectForm