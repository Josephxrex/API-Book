import mongoose from "mongoose";

const LibroSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Autor",
    required: true,
  },
  year: { type: Number, required: true },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genero",
    required: true,
  },
  series: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Serie",
    required: false,
  },
  image: { type: String, required: true },
});
const Libro = mongoose.model("Libro", LibroSchema);
export default Libro;
