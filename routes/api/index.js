import express from 'express';
import reservations from './reservations';
import exchange from './exchange';

const router = express.Router();

router.use('/reservations', reservations);
router.use('/exchange', exchange);

export default router;
