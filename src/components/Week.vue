<template>
	<div class="week">
		<h1>
			{{ meteo.city ? meteo.city.name + ' ' + meteo.city.cp : 'loading' }}
		</h1>
		<ul>
			<Day
				v-bind:key="meteoday.day"
				:meteoday="meteoday"
				v-for="meteoday in meteo.forecast"
			/>
		</ul>
	</div>
</template>

<script>
import Day from './Day';
export default {
	name: 'Week',
	components: {
		Day,
	},
	props: ['meteo']
};
</script>

<style>
ul {
	list-style-type: none; /* Remove bullets */
	padding: 0; /* Remove padding */
	margin: 0; /* Remove margins */
}
.week ul {
	display: flex;
	background-color: lightblue;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-content: space-between;
	border: solid 2px darkblue;
	border-radius: 30px;
	padding-top: 5%;
	padding-bottom: 5%;
	margin: 5%;
}

</style>
