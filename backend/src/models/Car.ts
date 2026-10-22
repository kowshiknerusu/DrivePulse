import mongoose, { Schema } from 'mongoose';

const carSchema = new Schema({
  make: {type:String, required:true}, model: {type:String, required:true}, basePrice:{type:Number,required:true}, topPrice:{type:Number,required:true},
  bodyType:String, fuelType:String, transmission:String, seating:Number, engineCc:Number, maxPower:String, mileageOrRange:String,
  dimensions:String, safetyRating:String, features:[String], variants:[String], images:[String], pros:[String], cons:[String], upcoming:{type:Boolean,default:false}
}, {timestamps:true});
carSchema.index({make:'text',model:'text',bodyType:1,fuelType:1});
export const Car = mongoose.models.Car || mongoose.model('Car',carSchema);
