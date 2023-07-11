import Bonuses from 'components/Bonuses';
import Header from 'components/Header';
import './App.scss';

function App() {
	return (
		<div className='page'>
			<Header />
			<div className='bonuses'>
				<div className='container'>
					<Bonuses />
				</div>
			</div>
		</div>
	);
}

export default App;
