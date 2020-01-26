import axios from 'axios'
import config from '@ups/config'

export const getExchangeRates = () => {
    const url = `${config.apiUrl}/exchange?baseCurrency=${config.defaultCurrency}`;
    return axios({
        method: 'get',
        url: url,
    })
        .then(response => ({response: response.data }))
        .catch(err => ({ error: err.response.data }))
};
