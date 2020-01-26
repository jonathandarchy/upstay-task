import { query } from './pg';

/**
 * Add reservation to db
 * @param reservation
 * @returns {Promise<*>}
 */
export const addReservation = async reservation => {
	const text = 'INSERT INTO reservations(uuid, hotel_id, currency, price, guest_name, room_name, arrival_date, nights) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
	const values = [
		reservation.uuid,
		reservation.hotel_id,
		reservation.currency,
		reservation.price,
		reservation.guest_name,
		reservation.room_name,
		reservation.arrival_date,
		reservation.nights
	]

	return await query(text,values).then()
};

/**
 * Get all reservations from db
 * @returns {Promise<*>}
 */
export const getAllReservations = async () => {
	const text = 'SELECT reservations.uuid, reservations.currency, reservations.price, reservations.room_name, reservations.arrival_date, reservations.nights, hotels.name AS hotel_name FROM reservations INNER JOIN hotels ON reservations.hotel_id=hotels.id'
	return await query(text,null).then()
};