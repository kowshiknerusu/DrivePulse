import type {Request,Response} from 'express';
import {Review} from '../models/Review';
import {Car} from '../models/Car';
import type {Server} from 'socket.io';
export async function createReview(req:Request,res:Response,io:Server) {
  const {carId,reviewerName,rating,comment}=req.body||{};
  if(!carId||!reviewerName?.trim()||!comment?.trim()||!Number.isInteger(Number(rating))||rating<1||rating>5)return res.status(400).json({error:'Provide your name, a comment, and a whole-number rating from 1 to 5.'});
  const car=await Car.findById(carId); if(!car)return res.status(404).json({error:'Car not found'});
  const review=await Review.create({carId,reviewerName:reviewerName.trim(),rating:Number(rating),comment:comment.trim()}); io.emit('new_review',{carId,review}); res.status(201).json(review);
}
export async function deleteReview(req:Request,res:Response) { const result=await Review.findByIdAndDelete(req.params.id); return result?res.status(204).send():res.status(404).json({error:'Review not found'}); }
