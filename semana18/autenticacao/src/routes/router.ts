import express from "express"
import { createUser } from "../controller/createUser"

const router = express.Router()

// ------------- controller imports ------------

router.post("/signup", createUser)

export default router