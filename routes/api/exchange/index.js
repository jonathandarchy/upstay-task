import express from 'express';
import axios from 'axios'
const router = express.Router();

router.get('/', (req, res, next) => {
	axios.get(`https://api.exchangeratesapi.io/latest?base=${req.query.baseCurrency}`)
		.then(response => {
			res.json(response.data)
		})
		.catch(error => {
			next(error)
		});
})

export default router;
