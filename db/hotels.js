import { query } from './pg';

// Get hotel name by id
export const getHotel = async hotelID => {
	const text = 'SELECT name FROM hotels WHERE id = $1'
	return await query(text,[hotelID]).then()
};