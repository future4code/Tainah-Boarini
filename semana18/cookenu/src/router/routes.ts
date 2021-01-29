import express from 'express';

import { createUser } from "../endpoints/createUser"
import { login } from '../endpoints/login';

export const router = express.Router()

router.post("/create-user", createUser)
router.post("/login", login)