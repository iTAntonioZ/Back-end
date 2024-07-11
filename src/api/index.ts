import express from 'express';
import users from './users'
import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';

const router = express.Router();

/*
Esto se quedo pues, cuando se ejecuta **yarn test** tira error. 
Para mantener el entorno sin errores se quedo 
*/
router.get<{}, MessageResponse>('/', (req, res) => {res.json({message: 'API - 👋🌎🌍🌏',});});


router.use('/emojis', emojis);
router.use('/users',  users)

export default router;
