import mongoose from "mongoose";

const SerieSchema = mongoose.Schema({
  name: { type: String, required: true },

});
let Serie;

if(mongoose.models.Serie){
  Serie = mongoose.model("Serie");
}
else{
  Serie = mongoose.model("Serie", SerieSchema);

}
export default Serie;
