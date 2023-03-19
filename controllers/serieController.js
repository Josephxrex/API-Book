import Serie from "../models/serie.js";

//Crear Una serie
const createSerie = async (req, res) => {
    try {
      const { name } = req.body;
      const newSerie = new Serie({ name });
      await newSerie.save();
      res.status(201).json(newSerie);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

//
  const getSeries = async (req, res) => {
    try {
      const series = await Serie.find();
      res.status(200).json(series);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  const getSerieById = async (req, res) => {
    const { id } = req.params;
    try {
      const serie = await Serie.findById(id);
      res.status(200).json(serie);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  const updateSerieById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedSerie = await Serie.findByIdAndUpdate(id, { name }, { new: true });
      res.status(200).json(updatedSerie);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  const deleteSerieById = async (req, res) => {
    const { id } = req.params;
    try {
      await Serie.findByIdAndDelete(id);
      res.status(200).json({ message: "Serie deleted successfully." });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export { createSerie, getSeries, getSerieById, updateSerieById, deleteSerieById };

  
  
  
  