export function formatDate(date: Date): string {
	let day = ('0' + date.getDate()).slice(-2);
	let month = ('0' + date.getMonth()).slice(-2);

	return day + '.' + month;
}
