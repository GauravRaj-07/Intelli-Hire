import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js'
import { enhanceJobDescription, enhanceProfessionalSummary, enhanceProjectDescription, uploadResume } from '../controllers/aiController.js'

const router=express.Router()

router.post('/enhance-pro-sum',protectRoute,enhanceProfessionalSummary)
router.post('/enhance-job-desc',protectRoute,enhanceJobDescription)
router.post('/enhance-project-desc',protectRoute,enhanceProjectDescription)
router.post('/upload-resume',protectRoute,uploadResume)

export default router
