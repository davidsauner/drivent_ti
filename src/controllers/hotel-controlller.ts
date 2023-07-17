import httpStatus from 'http-status';
import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import { hotelService } from '@/services';

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req as { userId: number };

  try {
    const hotels = await hotelService.getHotels(userId);
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    if (error.name === 'BadRequestError') return res.status(httpStatus.BAD_REQUEST).send(error.message);
    if (error.name === 'PaymentRequiredError') return res.status(httpStatus.PAYMENT_REQUIRED).send(error.message);
    if (error.name === 'NotFoundError') return res.sendStatus(httpStatus.NOT_FOUND);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getRooms(req: AuthenticatedRequest, res: Response) {
  const { userId } = req as { userId: number };
  const id = Number(req.params.hotelId);

  try {
    const rooms = await hotelService.getRooms(userId, id);
    return res.status(httpStatus.OK).send(rooms);
  } catch (error) {
    if (error.name === 'BadRequestError') return res.status(httpStatus.BAD_REQUEST).send(error.message);
    if (error.name === 'PaymentRequiredError') return res.status(httpStatus.PAYMENT_REQUIRED).send(error.message);
    if (error.name === 'NotFoundError') return res.sendStatus(httpStatus.NOT_FOUND);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
