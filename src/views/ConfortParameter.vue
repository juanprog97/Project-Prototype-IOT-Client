<template>
  <div id="container-registerConform">
    <ImageSVG nameImage="welcome-home" width="95vw" />
    <h1 id="header-form">Comfort parameters</h1>
    <p id="instruction-text">
      Please fil out the following information to adapt the system to you
    </p>
    <form id="formRegister" @submit="checkForm">
      <label for="minimumAC">Minimum AC temperature</label>
      <input
        type="number"
        id="minimumAC"
        placeholder=""
        v-model="minTemperature"
      />
      <label for="maxAc">Maximum AC temperature</label>
      <input type="number" id="maxAc" v-model="maxTemperature" />
      <label for="minWater">Minimum water temperature</label>
      <input type="number" id="minWater" v-model="minWaterTemperature" />
      <label for="maxW">Maximum water temperature</label>
      <input type="number" id="maxW" v-model="maxWaterTemperature" />
      <spam id="errors-form" v-if="errors.length > 0">
        <ul>
          <li v-for="(error, index) in errors" v-bind:key="index">
            {{ error }}
          </li>
        </ul>
      </spam>
      <input type="submit" value="Next" />
    </form>
  </div>
</template>

<script>
import ImageSVG from "../components/FileSvg.vue";
export default {
  data() {
    return {
      minTemperature: "",
      maxTemperature: "",
      minWaterTemperature: "",
      maxWaterTemperature: "",
      errors: [],
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      e.preventDefault();
      if (this.minTemperature == "") {
        this.errors.push("Minimum AC temperature is mandatory");
      }
      if (this.maxTemperature == "") {
        this.errors.push("Maximum AC temperature  is mandatory");
      }
      if (this.minWaterTemperature == "") {
        this.errors.push("Minimum water temperature  is mandatory");
      }
      if (this.maxWaterTemperature == "") {
        this.errors.push("Maximum AC temperature is mandatory");
      }
      if (this.errors.length == 0) {
        //Procede a guardar la informacion
      }
    },
  },
  components: {
    ImageSVG,
  },
};
</script>

<style lang="scss" scoped>
#container-registerConform {
  text-align: center;

  #instruction-text {
    font-size: clamp(1em, 1.3vw, 1.6em);
    margin-top: 1em;
  }
  img {
    margin: 0 auto;
  }
  #formRegister {
    display: flex;
    margin-top: 1em;
    flex-direction: column;
    padding: 0em 1em;
    text-align: center;
    gap: 0.5em;
    input[type="text"] {
      border: 2px solid black;
      padding: 0.2em 0.2em;
      font-size: clamp(1.8em, 2.1vw, 2.2em);
    }
    input[type="number"] {
      border: 2px solid black;
      padding: 0.2em 0.2em;
      font-size: clamp(1.8em, 2.1vw, 2.2em);
    }
    input[type="time"] {
      border: 2px solid black;
      padding: 0.2em 0.2em;
      font-size: clamp(1.8em, 2.1vw, 2.2em);
    }
    input[type="submit"] {
      border: 2px solid black;
      padding: 0.2em 0.2em;
      margin-top: 1em;
      width: 100%;
      align-self: center;
      font-size: clamp(1.5em, 1.8vw, 2em);
      margin-bottom: 1em;
      background-color: #95cafe;
      border-radius: 5px;
    }
    label {
      text-align: start;
      font-weight: bold;
      font-size: clamp(1.2em, 1.4vw, 1.8em);
    }
  }
  #errors-form {
    color: rgb(168, 14, 14);
    font-weight: bold;
    font-size: clamp(1em, 1.3vw, 1.6em);
    ul {
      list-style-type: none;
    }
  }
}
</style>