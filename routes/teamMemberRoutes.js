import express from "express";
import {
  addTeamMember,
  getTeamMembers,
} from "../controllers/teamMemberControllers.js";

const router = express.Router();

router.route("").post(addTeamMember).get(getTeamMembers);

export default router;
