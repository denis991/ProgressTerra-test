import { FC, useEffect, useState } from 'react';
import './styles.scss';
import { ReactComponent as FireIcon } from 'assets/fire.svg';
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';
import { BonusesInfo } from 'types';
import { getBonusesInfo } from 'utils/gettingData';

const Bonuses: FC = () => {
	const [bonusesInfo, setBonusesInfo] = useState<BonusesInfo | null>(null);

	useEffect(() => {
		getBonusesInfo().then((info) => setBonusesInfo(info));
	}, []);

	return (
		<>
			{bonusesInfo && (
				<div className='bonuses-widget'>
					<div className='current-quantity'>{bonusesInfo.currentQuantity} бонусов</div>
					<div className='burning'>
						<span className='date-burning'>{bonusesInfo.dateBurning} сгорит</span>
						<FireIcon />
						<span className='for-burning-quantity'>{bonusesInfo.forBurningQuantity} бонусов</span>
					</div>
					<button className='next-btn'>
						<ArrowIcon />
					</button>
				</div>
			)}
		</>
	);
};

export default Bonuses;
