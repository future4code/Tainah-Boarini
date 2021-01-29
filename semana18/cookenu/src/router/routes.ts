import express from 'express';

import { createUser } from "../endpoints/createUser"
import { getUserProfile } from '../endpoints/getUserProfile';
import { login } from '../endpoints/login';

export const router = express.Router()

router.post("/signup", createUser)
router.post("/login", login)
router.get("/user/profile", getUserProfile)