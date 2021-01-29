import express from 'express';

import { createUser } from "../endpoints/createUser"
import { getSelfieProfile } from '../endpoints/getSelfieProfile';
import { getUserProfile } from '../endpoints/getUserProfile';
import { login } from '../endpoints/login';

export const router = express.Router()

router.post("/signup", createUser)
router.post("/login", login)
router.get("/user/profile", getSelfieProfile)
router.get("/user/:id", getUserProfile)
router.post("/recipe")