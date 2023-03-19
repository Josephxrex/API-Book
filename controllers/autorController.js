import Autor from "../models/Autor.js";

const createAutor = async (req, res) => {
    try {
      const { name, nationality, birthDate } = req.body;
      const newAutor = new Autor({ name, nationality, birthDate });
      await newAutor.save();
      res.status(201).json(newAutor);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  const getAutores = async (req, res) => {
    try {
      const autores = await Autor.find();
      res.status(200).json(autores);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  const getAutorById = async (req, res) => {
    const { id } = req.params;
    try {
      const autor = await Autor.findById(id);
      res.status(200).json(autor);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  const updateAutorById = async (req, res) => {
    const { id } = req.params;
    const { name, nationality, birthDate } = req.body;
    try {
      const updatedAutor = await Autor.findByIdAndUpdate(
        id,
        { name, nationality, birthDate },
        { new: true }
      );
      res.status(200).json(updatedAutor);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  const deleteAutorById = async (req, res) => {
  const { id } = req.params;
  try {
    await Autor.findByIdAndDelete(id);
    res.status(200).json({ message: "Autor deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export { createAutor, getAutores, getAutorById, updateAutorById, deleteAutorById };


  