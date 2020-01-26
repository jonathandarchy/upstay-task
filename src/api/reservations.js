import axios from 'axios'
import config from '@ups/config'

export const getAllReservations = () => {
    const url = `${config.apiUrl}/reservations`;
    return axios({
        method: 'get',
        url: url,
    })
        .then(response => ({reservations: response.data }))
        .catch(err => ({ error: err.response.data }))
};
