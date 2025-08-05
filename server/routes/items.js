// routes/items.js
import express from "express";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getItemById,
  updateAllItems,
} from "../controllers/itemController.js";
import { upload } from "../utils/cloudinary.js";


const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.patch("/:id", updateItem);
router.put("/:id", updateItem); 
router.delete("/:id", deleteItem);
router.post("/update-all-items", updateAllItems);

// Upload image route
router.post("/upload", upload.array("images"), (req, res) => {
    try {
      // Map the uploaded files to their Cloudinary URLs
      const imageUrls = req.files.map((file) => file.path);
  
      // Send the URLs back in the response
      res.status(200).json({ imageUrls });
    } catch (err) {
      res.status(500).json({ error: "Failed to upload images", details: err.message });
    }
  });
  

export default router;
