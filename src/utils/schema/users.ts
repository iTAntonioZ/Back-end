import Joi from 'joi';

export const USER_CREATE_SCHEMA = Joi.object({
    username: Joi.string().optional(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  })