// routes/items.js
import express from "express";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";
import { upload } from "../utils/cloudinary.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);


// Upload image route
router.post("/upload", upload.array("images"), (req, res) => {
  const imageUrls = req.files.map((file) => file.path);
  res.json({ imageUrls });
});

export default router;
