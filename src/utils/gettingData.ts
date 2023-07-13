import { BonusesInfo } from 'types';
import { formatDate } from './dateFormatting';

let headers = {
	AccessKey: process.env.ACCESS_KEY || '',
	'Content-Type': 'application/json',
};

export async function getBonusesInfo(): Promise<BonusesInfo | null> {
	return fetch(`${process.env.ACCESS_TOKEN_URL}/api/v3/clients/accesstoken`, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({
			idClient: process.env.CLIENT_ID || '',
			accessToken: '',
			paramName: 'device',
			paramValue: process.env.DEVICE_ID || '',
			latitude: 0,
			longitude: 0,
			sourceQuery: 0,
		}),
	})
		.then((response) => response.json())
		.then((resultAuth) =>
			fetch(
				`${process.env.GET_BONUS_URL}/api/v3/ibonus/generalinfo/${resultAuth.accessToken}`,
				{
					headers: headers,
				}
			)
		)
		.then((response) => response.json())
		.then((infoByAvailableBonuses) => ({
			currentQuantity: infoByAvailableBonuses.data.currentQuantity,
			forBurningQuantity: infoByAvailableBonuses.data.forBurningQuantity,
			dateBurning: formatDate(new Date(infoByAvailableBonuses.data.dateBurning)),
		}))
		.catch((error) => {
			console.log(error);
			return null;
		});
}
