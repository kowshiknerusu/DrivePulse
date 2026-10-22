import axios from 'axios';
import {cars,type Car,type Review} from '../data/cars';
export const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:4000/api/v1',timeout:5000});
export type ApiCar=Car&{_id?:string};
export async function getCars():Promise<ApiCar[]>{try{const {data}=await api.get('/cars');return Array.isArray(data)?data:data.items||[];}catch{return []}}
export async function getCatalog():Promise<Car[]>{const live=await getCars();if(!live.length)return cars;return cars.map(local=>{const current=live.find(x=>x.make===local.make&&x.model===local.model);return current?{...local,...current,id:local.id,backendId:current._id||current.backendId,images:local.images}:local})}
export async function getCar(id:string):Promise<ApiCar|undefined>{try{const {data}=await api.get(`/cars/${id}`);return data;}catch{return undefined}}
export async function postReview(carId:string,review:Review){try{const {data}=await api.post('/reviews',{carId,...review});return data;}catch{return undefined}}
export async function deleteReview(id:string){try{await api.delete(`/reviews/${id}`);return true}catch{return false}}
export async function fetchWatchlist(sessionId:string){try{const {data}=await api.get(`/watchlist/${encodeURIComponent(sessionId)}`);return data as {carId:ApiCar|string}[]}catch{return null}}
export async function addWatchlist(sessionId:string,carId:string){try{await api.post('/watchlist',{userSessionId:sessionId,carId});return true}catch{return false}}
export async function removeWatchlist(sessionId:string,carId:string){try{await api.delete(`/watchlist/${encodeURIComponent(sessionId)}/${encodeURIComponent(carId)}`);return true}catch{return false}}
export async function compareCars(ids:string[]){if(ids.length>4)throw new Error('Compare at most four cars.');try{const {data}=await api.get('/cars/compare',{params:{ids:ids.join(',')}});return data as Car[]}catch{return []}}
