import styled from 'styled-components';

export const Controls = styled.div`
	display:flex;
	justify-content: space-between;
	width: 100%;
	padding: 20px 0;
	@media (max-width: 576px) {
		flex-wrap: wrap;
	}
`;

export const Label = styled.label`
	font-size:16px;
`

export const SelectCurrency = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

export const FilterUuidInput = styled.input`
	padding: 5px;
	font-size:16px;
	min-width: 320px;
	border:0;
	border-bottom: 1px solid black;
	@media (max-width: 576px) {
		margin-bottom: 10px;
	}
`;

export const ReservationsWrapper = styled.div`
`;

export const Reservation = styled.div`
	border: 1px solid #f5f5f5;
	box-shadow: 0 0 9px 0 #f5f5f5;
	padding:20px;
	margin-bottom: 20px;
	transition: box-shadow 0.7s ease-in-out;
	&:hover {
		box-shadow: 0 0 9px 0 rgba(84, 133, 250, 0.3);
	}
	p {
		margin: 0;
	}
	& > div {
		display:flex;
		&:nth-of-type(1) {
			justify-content: flex-end;
			color: rgb(84, 133, 250);
			font-weight: 700;
		}
		&:nth-of-type(2) {
			padding: 20px 0;
			p:first-of-type {
				margin: 0 0 10px;
				color: #696969;
			}
			p:last-of-type {
				font-weight: 700; 
			}		
		}
		&:nth-of-type(3) {
			justify-content: flex-start;
		}
	}
	
	@media (max-width: 576px) {
		& > div {
			flex-wrap: wrap;
			&:nth-of-type(2) {
				& > div {
					flex-basis: 100%;
					width: 100%;
					margin-bottom: 10px;
					&:nth-of-type(1) {
						flex-basis: 50%;
						width: 50%;	
					}
					&:nth-of-type(2) {
						flex-basis: 50%;
						width: 50%;
					}
				} 
			}
			&:nth-of-type(3) {
				justify-content: center;
			}
		}
	}
`;

export const Col = styled.div`
	flex-basis:25%;
	width:25%;
`;

export const ErrorMessage = styled.div`
	max-width: 400px;
	margin: 40px auto;
    padding: 0 20px;
    text-align: center;
    border: 1px solid black;
`;
