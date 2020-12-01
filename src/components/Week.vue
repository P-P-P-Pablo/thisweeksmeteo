<template>
  <div class="week">
    <h1>{{ meteoweek.city.name + " " + meteoweek.city.cp }}</h1>
    <ul>
      <li
        class="day"
        v-bind:key="meteoday.day"
        v-for="meteoday in meteoweek.forecast"
      >
        <h2>
          {{
            meteoday.day === 0
              ? "Aujourd'hui"
              : "J +" + meteoday.day + " : " + parseDate(meteoday.datetime)
          }}
        </h2>
        <p>Prévisions : {{ parseWeather(meteoday.weather) }}</p>
        <p>Probabilité de pluie : {{ meteoday.probarain }}%</p>
        <p>Temperature min/max : {{ meteoday.tmin }}°C/{{ meteoday.tmax }}°C</p>
        <p>Vent : {{ meteoday.wind10m }}km/h</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import codetemps from "../assets/codetemps.json";
export default {
  name: "Week",
  components: {},
  data() {
    return {
      meteoweek: [],
    };
  },
  mounted() {
    axios
      .get(
        `https://api.meteo-concept.com/api/forecast/daily?token=${process.env.VUE_APP_API_KEY}&insee=69266`
      )
      .then((response) => (this.meteoweek = response.data));
  },
  methods: {
    parseDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
    },
    parseWeather(code) {
      return codetemps[code];
    },
  },
};
</script>

<style>
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}
.week ul{
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
.day {
  background-color: lightcoral;
  margin: 10px;
  width: 40%;
  height: auto;
  border: solid 2px darkmagenta;
  border-radius :10px;
}
</style>
