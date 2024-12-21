import express from "express";

import {
  addpost,
  allpost,
  deletepost,
  getpost,
  searchPosts,
  updatepost,
} from "../controllers/blogController.js";

const router = express.Router();

router.post("/addpost", addpost);
router.get("/allposts", allpost);
router.delete("/:id", deletepost);
router.post("/:id", updatepost);
router.get("/search", searchPosts);
router.get("/:id", getpost);
export default router;
