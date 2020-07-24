import React from 'react';
import Weather from './Weather';
import './App.css';
import './index.css';
import Footer from './Footer';

function App() {
	return (
		<div className='App'>
			<h1>Weather Now</h1>
			<Weather />
			<Footer />
		</div>
	);
}

export default App;
