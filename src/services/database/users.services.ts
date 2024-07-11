import { db } from '../db';
import { Prisma, users } from '@prisma/client';

export class UsersServices {
  create(data: Prisma.usersCreateInput): Promise<users> {
    return db.users.create({
      data,
    });
  }

  getAll(where?: Prisma.usersWhereInput): Promise<users[]> {
    return db.users.findMany({
      where
    })
  }

  getOne(where: Prisma.usersWhereUniqueInput): Promise<users | null> {
    return db.users.findUnique({
      where
    })
  }

  Update(where: Prisma.usersWhereUniqueInput, data: Prisma.usersUpdateInput) {
    return db.users.update({ where, data })
  }

  Remove(where: Prisma.usersWhereUniqueInput) {
    return db.users.delete({ where });
  }

}