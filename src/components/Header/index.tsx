import { FC } from 'react';
import './styles.scss';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';
const Header: FC = () => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='logo'>Логотип</div>
					<button className='info-btn'>
						<InfoIcon />
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
