import React, { Component } from 'react';
import './css/Input.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

export default class Input extends Component {
	static defaultProps = {
		apiKey: 'irtFAaS7MxuaQq70RX4v0TEpoPdOYDfA',
	};
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			cityName: '',
			cityId: '',
			country: '',
			lat: '',
			long: '',
			region: '',
			temperature: '',
			realFeel: '',
			humidity: '',
			pressure: '',
			uvIndex: '',
			uvIndexText: '',
			windSpeed: '',
			windDirection: '',
			visibility: '',
			cloudCover: '',
			icon: '',
			text: '',
		};
		this.getData = this.getData.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async getData() {
		try {
			let res = await axios.get(
				`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.props.apiKey}&q=${this.state.city}`
			);
			let resData = res.data[0];
			this.setState({
				cityName: resData.LocalizedName,
				cityId: resData.Key,
				country: resData.Country.LocalizedName,
				lat: resData.GeoPosition.Latitude,
				long: resData.GeoPosition.Longitude,
				region: resData.Region.EnglishName,
			});
			let cityWh = await axios.get(
				`http://dataservice.accuweather.com/currentconditions/v1/${this.state.cityId}?apikey=${this.props.apiKey}&details=true`
			);
			let cityData = cityWh.data[0];
			this.setState({
				temperature: cityData.Temperature.Metric.Value,
				realFeel: cityData.RealFeelTemperature.Metric.Value,
				pressure: cityData.Pressure.Metric.Value,
				uvIndex: cityData.UVIndex,
				uvIndexText: cityData.UVIndexText,
				humidity: cityData.RelativeHumidity,
				windSpeed: cityData.Wind.Speed.Metric.Value,
				windDirection: cityData.Wind.Direction.Localized,
				visibility: cityData.Visibility.Metric.Value,
				cloudCover: cityData.CloudCover,
				icon: cityData.WeatherIcon,
				text: cityData.WeatherText,
				epochTime: cityData.EpochTime,
			});
			const newCity = { ...this.state, id: uuidv4() };
			this.props.create(newCity);
			console.log(this.state);
			console.log(res.data);
			console.log(cityData);
		} catch (err) {
			console.log(err);
			alert("Sorry, we couldn't find what you searched for! Try again!");
		}
	}

	handleSubmit(evt) {
		evt.preventDefault();

		this.getData();

		this.setState({ city: '' });
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	render() {
		return (
			<form className='Input' onSubmit={this.handleSubmit}>
				<div>
					<label className='Input-label' htmlFor='city'>
						City:
					</label>
					<input
						name='city'
						type='text'
						id='city'
						value={this.state.city}
						onChange={this.handleChange}
						placeholder='Search city'
						required
					/>
				</div>
				<button className='Input-btn'>Get Weather!</button>
				<h6 className='Input-link'>
					View more on{' '}
					<a href='https://www.accuweather.com/'>AccuWeather.com</a>
				</h6>
			</form>
		);
	}
}
