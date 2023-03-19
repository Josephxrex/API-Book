import mongoose from 'mongoose';

const GeneroSchema = mongoose.Schema({
  name: { type: String, required: true },
});

let Genero;

if (mongoose.models.Genero) {
  Genero = mongoose.model('Genero');
} else {
  Genero = mongoose.model('Genero', GeneroSchema);
}

export default Genero;
