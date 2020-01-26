import io from 'socket.io-client'
import {actions as reservationsActions} from '@ups/ducks/reservations'
import store from "./store"

// connect to socket and set listeners
const startListeningToReservations = () => {

	const socket = io.connect('http://localhost:9999')

	socket.on('connect', () => {
		store.dispatch(reservationsActions.setListenerStatus({status:true}))
	});

	socket.on('disconnect', () => {
		store.dispatch(reservationsActions.setListenerStatus({status:false}))
	});

	socket.on('newReservation', (reservation) => {
		store.dispatch(reservationsActions.pushReservation(reservation))
	})

	socket.on('error', (err) => {
		store.dispatch(reservationsActions.setListenerStatus({status:false, err}))
	});
}


export default startListeningToReservations