import { Response, Request, NextFunction } from 'express';
import { UsersServices } from '../services/database/users.services';
import boom from '@hapi/boom';

const userServices = new UsersServices();

export class UserController {

    async create(req: Request, res: Response, next: NextFunction) {
        const CreateUser = await userServices.create({
          username: req.body.username || 'Not Name',
          email: req.body.email,
          password: req.body.password,
        });

       res.json({data: CreateUser});
      }

      async getAll(req: Request, res: Response, next: NextFunction) {
        const Users = await userServices.getAll({
          id: req.params.id
        });

       res.json({data: Users});
      }

      async getOne(req: Request, res: Response, next: NextFunction) {
        const User = await userServices.getOne({
          id: req.params.id
        })

        if(!User) return next(boom.notFound('Not found User'))
        res.json({data: User})
      }

      async Update(req: Request, res: Response, next: NextFunction) {
        const UserUpdate = await userServices.Update({id: req.params.id}, req.body);

        if(!UserUpdate) return next(boom.notFound('Not found User'))
        res.json({data: UserUpdate})
      }

      async remove(req: Request, res: Response, next: NextFunction) {
        const UserRemove = await userServices.Remove({id: req.params.id})

        if(!UserRemove) return next(boom.notFound('Not found User'))

        res.json({data: `The user has been successfully deleted` })
      }

}