import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { createResume, deleteResume, getPublicResumeById, getResumeById, getUserResumes, updateResume } from "../controllers/resumeController.js"
import upload from "../lib/multer.js"

const router=express.Router()

router.get('/',protectRoute,getUserResumes)
router.post('/create',protectRoute,createResume)
router.put('/update',upload.single('image'),protectRoute,updateResume)
router.delete('/delete/:resumeId',protectRoute,deleteResume)
router.get('/get/:resumeId',protectRoute,getResumeById)
router.get('/public/:resumeId',getPublicResumeById)

export default router