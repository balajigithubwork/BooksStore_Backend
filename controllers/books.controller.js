const addBookSchema = require("../schema/bookSchema.js");

const addBooks = async (req, res) => {
  const payload = req.body;
  try {
    let data = await addBookSchema.create(payload);
    res.json({ message: "book added successfully", data: data }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(400);
  }
};

const allBooks = async (req, res) => {
  try {
    const data = await addBookSchema.find();
    res.json({ data: data }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(400);
  }
};

const editBooks = async (req, res) => {
  const payload = req.body;
  let id = payload.id;
  try {
    let data = await addBookSchema.findByIdAndUpdate(id, payload);
    res.json({ message: "book edited successfully", data: data }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(400);
  }
};

const oneBooks = async (req, res) => {
  const id = req.body.id;
  try {
    const data = await addBookSchema.findById(id);
    res.json({ data: data });
  } catch (error) {
    res.json({ message: error.message }).status(400);
  }
};
const deleteBooks = async (req, res) => {
  const id = req.body.id;
  try {
    const data = await addBookSchema.deleteOne({ _id: id });
    res.json({ data: data });
  } catch (error) {
    res.json({ message: error.message }).status(400);
  }
};

module.exports = { addBooks, allBooks, editBooks, oneBooks, deleteBooks };
