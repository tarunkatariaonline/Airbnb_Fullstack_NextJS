import mongoose from "mongoose";
const { Schema } = mongoose;
const locationSuggestionSchema = new Schema({
   
   locationSg:String

})

mongoose.models={};

export const LocationSuggestion = mongoose.model('LocationSuggestion', locationSuggestionSchema);