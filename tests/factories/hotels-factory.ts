import faker from '@faker-js/faker';
import { Hotel } from '@prisma/client';
import { prisma } from '@/config';

export async function createHotel(): Promise<Hotel> {
  const hotel = await prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.image.city(),
    },
  });
  return hotel;
}

export async function createRoom(id: number) {
  const room = await prisma.room.create({
    data: {
      name: faker.name.findName(),
      capacity: faker.datatype.number(),
      hotelId: id,
    },
  });
  return room;
}

export async function createRoomWithCapacity(hotelId: number) {
  const room = await prisma.room.create({
    data: {
      name: faker.name.findName(),
      capacity: 1,
      hotelId: hotelId,
    },
  });
  return room;
}
