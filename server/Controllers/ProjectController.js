const express = require("express");

const ProjectService = require("../Service/ProjectService");
const uploadMulter = require("../Middleware/multer");
const auth = require("../Middleware/auth");

const router = express.Router();

router.post(
  "/",
  auth,
  uploadMulter.single("projectImage"),
  ProjectService.addProject
);
router.get("/:projectId", ProjectService.getOneProject);
router.get("/", ProjectService.getAllProjects);
router.delete("/:projectId", auth, ProjectService.deleteProject);
router.put(
  "/:projectId",
  auth,
  uploadMulter.single("projectImage"),
  ProjectService.updateProject
);

module.exports = router;