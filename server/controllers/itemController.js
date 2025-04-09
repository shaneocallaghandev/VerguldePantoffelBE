// controllers/itemController.js
import Item from "../models/Item.js";

// GET all items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new item
export const createItem = async (req, res) => {
    const { name, description, price, category, images, sold } = req.body;
    try {
      const newItem = new Item({
        name,
        description,
        price,
        category,
        images,
        sold: sold || false, // defaults to false
      });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // PUT update item 
  export const updateItem = async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  

// DELETE item
export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


