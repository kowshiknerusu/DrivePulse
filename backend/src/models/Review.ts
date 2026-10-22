import mongoose, {Schema} from 'mongoose';
const reviewSchema = new Schema({carId:{type:Schema.Types.ObjectId,ref:'Car',required:true,index:true},reviewerName:{type:String,required:true,trim:true,maxlength:60},rating:{type:Number,required:true,min:1,max:5},comment:{type:String,required:true,trim:true,maxlength:1200}},{timestamps:true});
export const Review = mongoose.models.Review || mongoose.model('Review',reviewSchema);
