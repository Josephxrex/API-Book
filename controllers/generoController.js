import Genero from "../models/genero.js";

//Crear un nuevo genero
const createGenero = async (req, res) => {
  try {
    const { name } = req.body;
    const newGenero = new Genero({ name });
    await newGenero.save();
    res.status(201).json(newGenero);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Traer todos los generos
const getGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.status(200).json(generos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Traer un genero en especifico
const getGeneroById = async (req, res) => {
  const { id } = req.params;
  try {
    const genero = await Genero.findById(id);
    res.status(200).json(genero);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Actualizar un genero
const updateGeneroById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedGenero = await Genero.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json(updatedGenero);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Eliminar un genero
const deleteGeneroById = async (req, res) => {
  const { id } = req.params;
  try {
    await Genero.findByIdAndDelete(id);
    res.status(200).json({ message: "Genero deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export {
  createGenero,
  getGeneros,
  getGeneroById,
  updateGeneroById,
  deleteGeneroById,
};
