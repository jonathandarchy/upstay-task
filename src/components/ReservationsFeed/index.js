import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { actions as reservationsActions} from '@ups/ducks/reservations'
import { actions as exchangeActions} from '@ups/ducks/exchange'
import { printDate } from '@ups/utils/dates';
import config from '@ups/config'
import Spinner from '@ups/components/Spinner'
import {
	Col,
	Controls, ErrorMessage,
	FilterUuidInput, Label,
	Reservation,
	ReservationsWrapper,
	SelectCurrency
} from './style';

const ReservationsFeed = (props) => {

	// uuid search filter
	const [uuid, setUuid] = useState("")

	/**
	 * Request reservations and rates
	 */
	useEffect(() => {
		props.getAllReservationsRequest();
		props.getExchangeRatesRequest();
	},[])

	/**
	 * Listen to new reservations when our feed is ready
	 */
	useEffect(() => {
		if (!props.isListening && !props.feedLoading) {
			props.listenToNewReservations()
		}
		// could do cleanup here and disconnect
	},[props.feedLoading])

	/**
	 * Print reservations
	 * @returns {any[]}
	 */
	const mapReservations = () => {
		return Object.keys(props.reservations).map((key) => {
			const reservation = props.reservations[key];
			const price = adjustPrice(reservation.price,reservation.currency)

			if (reservation.uuid.indexOf(uuid) === -1) return null
			return (
				<Reservation key={`reservation-${key}`}>
					<div>
						{props.selectedCurrency + ' ' + price}
					</div>
					<div>
						<Col>
							<p>Check-In:</p>
							<p>{printDate(reservation.arrival_date)}</p>
						</Col>
						<Col>
							<p>Check-Out</p>
							<p>{printDate(reservation.arrival_date, reservation.nights)}</p>
						</Col>
						<Col>
							<p>Hotel</p>
							<p>{reservation.hotel_name}</p>
						</Col>
						<Col>
							<p>Room</p>
							<p>{reservation.room_name}</p>
						</Col>
					</div>
					<div>{reservation.uuid}</div>
				</Reservation>
			)}
		)
	}


	/**
	 * Build exchange rates' select options
	 * @returns {*[]}
	 */
	const mapRates = () => {
		return Object.keys(props.exchangeRates).map(key =>
			<option
				key={`option-${key}`}
				value={key}
			>{key}</option>
		)
	}


	/**
	 * Adjust reservation price to the selected currency according
	 * to its price and currency
	 * @param price
	 * @param currency
	 * @returns {number}
	 */
	const adjustPrice = (price, currency) => {
		return props.selectedCurrency !== currency
			? (currency === config.defaultCurrency.toLowerCase()
					? Math.round(price * props.exchangeRates[props.selectedCurrency])
					: Math.round((price / props.exchangeRates[currency.toUpperCase()]) * props.exchangeRates[props.selectedCurrency])
			)
			: price
	}

	// show error message if we have an error fetching reservations or exchange rates
	if (props.exchangeError || props.reservationsError) return (
		<ErrorMessage>
			<p>An error occurred,g try reloading the page</p>
		</ErrorMessage>
	)

	// show spinner while our rates and reservations are not populated
	if (props.feedLoading) return <Spinner />

	return (
		<>
			<Controls>
				<Label htmlFor={"uuid"}>
					<FilterUuidInput
						type="text"
						id="uuid"
						value={uuid}
						onChange={e => setUuid(e.target.value)}
						placeholder={"Filter by uuid"}
					/>
				</Label>
				<Label htmlFor={"chooseCurrency"}>
					Choose Currency
					<SelectCurrency
						name="chooseCurrency"
						id="chooseCurrency"
						onChange={e => props.changeCurrency(e.target.value)}
						value={props.selectedCurrency}
					>
						{mapRates()}
					</SelectCurrency>
				</Label>
			</Controls>

			<ReservationsWrapper>
				{mapReservations()}
			</ReservationsWrapper>
		</>
	);
};

ReservationsFeed.propTypes = {
	getAllReservationsRequest: PropTypes.func,
	getExchangeRatesRequest: PropTypes.func,
	listenToNewReservations: PropTypes.func,
	changeCurrency: PropTypes.func,
	reservations: PropTypes.object,
	exchangeRates: PropTypes.object,
	selectedCurrency: PropTypes.string,
	exchangeError: PropTypes.object,
	reservationsError: PropTypes.object,
	feedLoading: PropTypes.bool,
	isListening: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		reservations: state.reservations.items,
		exchangeRates: state.exchange.rates,
		isListening: state.reservations.isListening,
		exchangeError: state.exchange.error,
		reservationsError: state.exchange.error,
		selectedCurrency: state.exchange.selectedCurrency,
		feedLoading: !state.exchange.rates || !state.reservations.items
	}
};

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			...reservationsActions,
			...exchangeActions,
		}, dispatch
	)
});

export default (connect(mapStateToProps, mapDispatchToProps))(ReservationsFeed);

