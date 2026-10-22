import mongoose,{Schema} from 'mongoose';
const watchlistSchema=new Schema({userSessionId:{type:String,required:true,index:true},carId:{type:Schema.Types.ObjectId,ref:'Car',required:true}},{timestamps:true});
watchlistSchema.index({userSessionId:1,carId:1},{unique:true});
export const Watchlist=mongoose.models.Watchlist||mongoose.model('Watchlist',watchlistSchema);
