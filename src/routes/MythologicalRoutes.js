const express = require("express");
const router = express.Router();
const MythologicalController = require("../controllers/MythologicalController")

router
  .get("", MythologicalController.getMythological)
  .get("/readMythological/:_id", MythologicalController.readMythological)
  .post("/createMythological", MythologicalController.createMythological)
  .patch("/updateMythological/:_id", MythologicalController.updateMythological)
  .delete("/deleteMythological/:_id", MythologicalController.deleteMythological)

module.exports = router;
