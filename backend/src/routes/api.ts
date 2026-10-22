import {Router} from 'express';
import {compareCars,getCar,listCars} from '../controllers/carController';
import {createReview,deleteReview} from '../controllers/reviewController';
import {liveStatus} from '../controllers/livePriceController';
import {addWatchlist,getWatchlist,removeWatchlist} from '../controllers/watchlistController';
import type {Server} from 'socket.io';
export function apiRoutes(io:Server){const router=Router();router.get('/cars',listCars);router.get('/cars/compare',compareCars);router.get('/cars/:id',getCar);router.get('/live-prices/status',liveStatus);router.get('/watchlist/:sessionId',getWatchlist);router.post('/watchlist',addWatchlist);router.delete('/watchlist/:sessionId/:carId',removeWatchlist);router.post('/reviews',(req,res)=>createReview(req,res,io));router.delete('/reviews/:id',deleteReview);return router;}
