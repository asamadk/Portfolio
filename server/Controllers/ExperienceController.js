const express = require('express');

const ExperinceService = require('../Service/ExperienceService');
const auth = require('../Middleware/auth');

const router = express.Router();

router.post("/",auth,ExperinceService.addExperience);
router.get("/:experienceId", ExperinceService.getOneExperience);
router.get("/", ExperinceService.getAllExperiences);
router.delete("/:experienceId",auth, ExperinceService.deleteExperience);
router.put("/:experienceId",auth, ExperinceService.updateExperience);


module.exports = router;