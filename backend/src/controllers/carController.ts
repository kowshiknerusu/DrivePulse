import type {Request,Response} from 'express';
import {Car} from '../models/Car';
import {Review} from '../models/Review';

const isDbReady=()=>Car.db.readyState===1;
export async function listCars(req:Request,res:Response) {
  const {q='',make,bodyType,fuel,transmission,sort='popular',minPrice,maxPrice,page='1',limit='24'}=req.query;
  const p=Math.max(1,Number(page)||1),size=Math.min(48,Math.max(1,Number(limit)||24));
  const filter:any={};
  if(q)filter.$or=[{make:new RegExp(String(q),'i')},{model:new RegExp(String(q),'i')}];
  if(make)filter.make={$in:String(make).split(',')}; if(bodyType)filter.bodyType={$in:String(bodyType).split(',')};
  if(fuel)filter.fuelType={$in:String(fuel).split(',')}; if(transmission)filter.transmission={$in:String(transmission).split(',')};
  if(minPrice||maxPrice)filter.basePrice={$gte:Number(minPrice)||0,$lte:Number(maxPrice)||Number.MAX_SAFE_INTEGER};
  if(!isDbReady())return res.json({items:[],total:0,page:p,pages:0,notice:'Database unavailable. Start MongoDB to load the demo catalog.'});
  const sortBy:any=sort==='price-asc'?{basePrice:1}:sort==='price-desc'?{basePrice:-1}:sort==='rated'?{createdAt:-1}:{upcoming:-1,make:1};
  const [items,total]=await Promise.all([Car.find(filter).sort(sortBy).skip((p-1)*size).limit(size).lean(),Car.countDocuments(filter)]);
  res.json({items,total,page:p,pages:Math.ceil(total/size),notice:'Illustrative demo catalog.'});
}
export async function getCar(req:Request,res:Response) {
  const car:any=await Car.findById(req.params.id).lean(); if(!car)return res.status(404).json({error:'Car not found'});
  const reviews=await Review.find({carId:car._id}).sort({createdAt:-1}).lean(); res.json({...car,communityReviews:reviews});
}
export async function compareCars(req:Request,res:Response) {
  const ids=String(req.query.ids||'').split(',').filter(Boolean).slice(0,4); res.json(await Car.find({_id:{$in:ids}}).lean());
}
