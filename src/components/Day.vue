<template>
  <li class="day">
    <h2 class="title">
      {{
        meteoday.day === 0
          ? "Aujourd'hui"
          : "J +" + meteoday.day + " : " + parseDate(meteoday.datetime)
      }}
    </h2>
    <div class="card">
      <div class="card-front">
        <img
          class="picto"
          :src="pictoFetcher(this.meteoday.weather)"
          :alt="parseWeather(meteoday.weather)"
        />
      </div>
      <div class="card-back">
        <p>Prévisions : {{ parseWeather(meteoday.weather) }}</p>
        <p>Probabilité de pluie : {{ meteoday.probarain }}%</p>
        <p>Temperature min/max : {{ meteoday.tmin }}°C/{{ meteoday.tmax }}°C</p>
        <p>Vent : {{ meteoday.wind10m }}km/h</p>
      </div>
    </div>
  </li>
</template>

<script>
import dayjs from "dayjs";
import codetemps from "../assets/codetemps.json";
import fetchPicto from "../utils";
export default {
  name: "Day",
  props: ["meteoday"],
  methods: {
    parseDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
    },
    parseWeather(code) {
      return codetemps[code];
    },
    pictoFetcher(code) {
      return fetchPicto(code);
    },
  },
};
</script>

<style scoped>
.day {
  background-color: whitesmoke;
  margin: 10px;
  width: 25%;
  height: 210px;
  border: solid 2px darkmagenta;
  border-radius: 10px;
  perspective: 1000px;
}
.title{
    margin: 10px;
}
.picto {
  width: auto;
  height: 70%;
}
.card {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.day:hover .card {
  transform: rotateY(180deg);
}
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
</style>
