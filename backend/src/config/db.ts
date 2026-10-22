import mongoose from 'mongoose';
import {Car} from '../models/Car';
import {seedCars} from '../data/cars';

export async function connectDatabase(uri:string) {
  await mongoose.connect(uri);
  if (await Car.countDocuments() === 0) {
    await Car.insertMany(seedCars.map(({_seedIndex,...car})=>car));
    console.log('DrivePulse demo catalog seeded with 20 cars.');
  }
}
