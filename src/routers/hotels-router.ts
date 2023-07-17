import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getHotels, getHotelsWithRooms } from '@/controllers/hotel-controlller';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken).get('/', getHotels).get('/:hotelId', getHotelsWithRooms);

export { hotelsRouter };
