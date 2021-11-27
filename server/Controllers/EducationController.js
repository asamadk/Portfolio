const express = require('express');

const EducationService = require('../Service/EducationService');
const auth = require('../Middleware/auth');

const router = express.Router();

router.post("/",auth,EducationService.addEducation);
router.get("/:educationId", EducationService.getOneEducation);
router.get("/", EducationService.getAllEducation);
router.delete("/:educationId", auth,EducationService.deleteEducation);
router.put("/:educationId",auth,EducationService.updateEducation);


module.exports = router;