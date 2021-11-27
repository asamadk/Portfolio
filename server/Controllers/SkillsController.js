const express = require("express");

const SkillsService = require("../Service/SkillsService");
const auth = require("../Middleware/auth");

const router = express.Router();

router.post("/", auth, SkillsService.addSkill);
router.get("/:skillId", SkillsService.getOneSkill);
router.get("/", SkillsService.getAllSkills);
router.delete("/:skillId", auth, SkillsService.deleteSkill);
router.put("/:skillId", auth, SkillsService.updateSkill);

module.exports = router;