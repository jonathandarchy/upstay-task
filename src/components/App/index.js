import React from 'react';
import {
	Container,
	Title
} from './style';
import SVGUpstay from './assets/svg-upstay';
import ReservationsFeed from '../ReservationsFeed';

const App = () => {
	return (
		<Container>
			<Title><SVGUpstay /><span>Reservations</span></Title>
			<ReservationsFeed />
		</Container>
	);
};


export default App;

