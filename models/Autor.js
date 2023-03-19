import mongoose from "mongoose";

const AutorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
});

const Autor = mongoose.model("Autor", AutorSchema);
export default Autor;
