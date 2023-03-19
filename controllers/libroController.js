import Autor from "../models/Autor.js";
import Genero from "../models/Genero.js";
import Serie from "../models/Serie.js";
import Libro from "../models/Libro.js";
import mongoose from "mongoose";

const createLibro = async (req, res) => {
  try {
    const { title, author, year, genre, series, image } = req.body;

    // Verificar que el autor exista
    const autorExists = await Autor.findById(author);
    if (!autorExists) {
      return res.status(404).json({ message: "Autor not found." });
    }

    // Verificar que el género exista
    const generoExists = await Genero.findById(genre);
    if (!generoExists) {
      return res.status(404).json({ message: "Genero not found." });
    }

    // Verificar que la serie exista, si se proporcionó
    let serieExists = true;
    if (series) {
      serieExists = await Serie.findById(series);
      if (!serieExists) {
        return res.status(404).json({ message: "Serie not found." });
      }
    }

    const newLibro = new Libro({
      title,
      author,
      year,
      genre,
      series: serieExists ? series : null,
      image,
    });

    await newLibro.save();
    res.status(201).json(newLibro);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const getLibros = async (req, res) => {
  try {
    const libros = await Libro.find().populate("author genre series");
    res.status(200).json(libros);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getLibroById = async (req, res) => {
  const { id } = req.params;
  try {
    const libro = await Libro.findById(id).populate("author genre series");
    res.status(200).json(libro);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateLibroById = async (req, res) => {
  const { id } = req.params;
  const { title, author, year, genre, series, image } = req.body;

  try {
    // Verificar que el autor exista
    const autorExists = await Autor.findById(author);
    if (!autorExists) {
      return res.status(404).json({ message: "Autor not found." });
    }

    // Verificar que el género exista
    const generoExists = await Genero.findById(genre);
    if (!generoExists) {
      return res.status(404).json({ message: "Genero not found." });
    }

    // Verificar que la serie exista, si se proporcionó
    let serieExists = true;
    if (series) {
      serieExists = await Serie.findById(series);
      if (!serieExists) {
        return res.status(404).json({ message: "Serie not found." });
      }
    }

    const updatedLibro = await Libro.findByIdAndUpdate(
      id,
      {
        title,
        author,
        year,
        genre,
        series: serieExists ? series : null,
        image,
      },
      { new: true }
    ).populate("author genre series");

    res.status(200).json(updatedLibro);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const deleteLibroById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedLibro = await Libro.findByIdAndRemove(id);

    res.status(200).json({ message: "Book deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getLibrosye = async (req, res) => {
  try {
    const libros = await Libro.find().sort({ year: -1 }).populate("author genre series");
   res.status(200).json(libros);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getNewestLibros = async (req, res) => {
  try {
    const libros = await Libro.find().sort({ year: -1 }).limit(10).populate("author genre series");
    res.status(200).json(libros);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getLibrosbyGenero = async (req, res) => {
  const { idGenero } = req.params;

  try {
    const libros = await Libro.find({ genre: idGenero }).populate(
      "author genre series"
    );
    res.status(200).json(libros);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getLibrosBySerie = async (req, res) => {
  const { idSerie } = req.params;

  try {
    const libros = await Libro.find({ series: idSerie }).populate(
      "author genre series"
    );
    res.status(200).json(libros);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



export {
  createLibro,
  getLibros,
  getLibroById,
  updateLibroById,
  deleteLibroById,
  getLibrosye,
  getLibrosbyGenero,
  getLibrosBySerie,
  getNewestLibros
};
