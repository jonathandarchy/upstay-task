/**
 * Get formatted date
 * Takes a second argument to increment days
 * @param date
 * @param nightsToAdd
 * @returns {string}
 */
export const printDate = (date, nightsToAdd = 0) => {
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];
	date = new Date(date);
	if (nightsToAdd)
		date.setDate(date.getDate() + nightsToAdd);

	let day = date.getDate();
	return (day < 10 ? '0' : '') + day + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
}