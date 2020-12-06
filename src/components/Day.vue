<template>
	<li class="day">
		<h2>
			{{
				meteoday.day === 0
					? "Aujourd'hui"
					: 'J +' + meteoday.day + ' : ' + parseDate(meteoday.datetime)
			}}
		</h2>
		<p>Prévisions : {{ parseWeather(meteoday.weather) }}</p>
		<p>Probabilité de pluie : {{ meteoday.probarain }}%</p>
		<p>Temperature min/max : {{ meteoday.tmin }}°C/{{ meteoday.tmax }}°C</p>
		<p>Vent : {{ meteoday.wind10m }}km/h</p>
	</li>
</template>

<script>
import dayjs from 'dayjs';
import codetemps from '../assets/codetemps.json';
export default {
    name:"Day",
    props: ['meteoday'],
    methods: {
		parseDate(date) {
			return dayjs(date).format('DD/MM/YYYY');
		},
		parseWeather(code) {
			return codetemps[code];
		},
	},
	
};
</script>

<style scoped>
.day {
	background-color: lightcoral;
	margin: 10px;
	width: 40%;
	height: auto;
	border: solid 2px darkmagenta;
	border-radius: 10px;
}
</style>
