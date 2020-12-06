<template>
  <div id="app">
    <img alt="Vue logo" src="https://media.giphy.com/media/xT3i0SV1CunfwGTToI/giphy.gif" />
    <Week :meteo="meteoweek"/>
  </div>
</template>

<script>
import Week from "./components/Week.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Week,
  },
  data() {
		return {
			meteoweek: [],
		};
	},
  beforeCreate() {
		axios
			.get(
				`https://api.meteo-concept.com/api/forecast/daily?token=${process.env.VUE_APP_API_KEY}&insee=69266`
			)
			.then((response) => (this.meteoweek = response.data));
	},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
