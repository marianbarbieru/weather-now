import React, { Component } from 'react';
import Input from './Input';
import City from './City';
import './index.css';
// import axios from 'axios';

export default class Weather extends Component {
	static defaultProps = {
		apiKey: 'irtFAaS7MxuaQq70RX4v0TEpoPdOYDfA',
	};
	constructor(props) {
		super(props);
		this.state = {
			cities: [],
		};
		this.createCity = this.createCity.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	createCity(newCity) {
		this.setState({ cities: [...this.state.cities, newCity] });
	}
	handleRemove(id) {
		this.setState({
			cities: this.state.cities.filter((city) => city.id !== id),
		});
	}

	render() {
		let citiesWh = this.state.cities.map((city) => (
			<City
				key={city.id}
				id={city.id}
				city={city.cityName}
				region={city.region}
				country={city.country}
				date={city.epochTime}
				lat={city.lat}
				long={city.long}
				text={city.text}
				pressure={city.pressure}
				UV={city.uvIndex}
				UVText={city.uvIndexText}
				icon={city.icon}
				temperature={city.temperature}
				feels={city.realFeel}
				humidity={city.humidity}
				windSpeed={city.windSpeed}
				windDirection={city.windDirection}
				visibility={city.visibility}
				cloudCover={city.cloudCover}
				remove={this.handleRemove}
			/>
		));
		return (
			<div>
				<Input create={this.createCity} />
				{citiesWh}
			</div>
		);
	}
}
