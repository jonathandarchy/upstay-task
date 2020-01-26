import express from 'express';
const router = express.Router();
import {getAllReservations} from '@upstay/db/reservations'

router.get('/', async (req, res, next) => {
	try {
		const reservations = await getAllReservations();
		res.json(reservations.rows)
	} catch (err) {
		next(err)
	}
})

export default router;
