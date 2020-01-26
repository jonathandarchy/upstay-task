import http from 'http';
import socketIO from 'socket.io';
import * as reservationsService from '@upstay/services/reservations';
import { addReservation } from './db/reservations';
import { getHotel } from './db/hotels';

export default (app) => {
	const server = http.Server(app);
	const io = socketIO(server);

	// runs reservations service on connection
	io.on('connection', socket => {
		reservationsService.start(async reservation => {
			console.log(reservation)
			try {
				const newReservation = await addReservation(reservation)
				if (newReservation) {
					// get hotel name
					const hotel = await getHotel(reservation.hotel_id)
					// broadcast a new reservation
					socket.broadcast.emit('newReservation', {
						...reservation,
						hotel_name: hotel.rows[0].name
					});
				}

			} catch (e) {
				console.log(e)
			}
		});

		socket.on('error', function (err) {
			console.log(err);
		});
	});

	return server;
};
