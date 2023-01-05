import Router from 'express';

import { deleteChar, getCharById, getChars, addChar } from "./controllers/charController.js";

const router = Router();

router.get("/", (req, res) => {
    getChars(req, res)
});

router.get("/:id", (req, res) => {
    getCharById(req, res)
});

router.post("/", (req, res) => {
    addChar(req, res)
})

router.delete("/:id", (req, res) => {
    deleteChar(req, res)
})

export default router;