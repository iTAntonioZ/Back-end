import express  from 'express';
import {UserController}  from '../controller/users.controller';
import { USER_CREATE_SCHEMA } from '../utils/schema/users';
import { ID_UUID } from '../utils/schema/general';
import { validatorHandler } from '../middlewares/validador.handler'

const router = express.Router();
const userController = new UserController();

router.get("/all", userController.getAll);
router.get('/:id/user', validatorHandler(ID_UUID, 'params'), userController.getOne)
router.post('/', validatorHandler(USER_CREATE_SCHEMA, 'body'), userController.create);
router.put('/:id/userupdate', validatorHandler(ID_UUID, 'params'), userController.Update)
router.delete('/:id/userdelete', validatorHandler(ID_UUID, 'params'), userController.remove)

export default router;