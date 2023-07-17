import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getHotels, getRooms } from '@/controllers/hotel-controlller';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken);
hotelsRouter.get('', getHotels);
hotelsRouter.get('/:hotelId', getRooms);

export { hotelsRouter };
