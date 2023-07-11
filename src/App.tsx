import BonusesWidget from 'components/BonusesWidget';
import './App.scss';
import { ReactComponent as InfoIcon } from 'assets/info.svg';

function App() {
	return (
		<div className='page'>
			<div className='container'>
				<div className='row'>
					<div className='logo'>Логотип</div>
					<button className='info-btn'>
						<InfoIcon />
					</button>
				</div>
			</div>

			<div className='bonuses'>
				<div className='container'>
					<BonusesWidget />
				</div>
			</div>
		</div>
	);
}

export default App;
