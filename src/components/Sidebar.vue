<template>
  <div id="container-link">
    <button id="linkPage" @click="RouterLink('Home')">
      <FileImage nameImage="homeButton" width="40vw" height="40vw" />
      <p>Home</p>
    </button>
    <button id="linkPage" @click="RouterLink('LiveNow')">
      <FileImage nameImage="liveNowButton" width="40vw" height="40vw" />
      <p>Live Now</p>
    </button>
    <button id="linkPage" @click="RouterLink('Summary')">
      <FileImage nameImage="summaryButton" width="40vw" height="40vw" />
      <p>Summary</p>
    </button>
    <button id="linkPage" @click="RouterLink('Settings')">
      <FileImage nameImage="settingsButton" width="40vw" height="40vw" />
      <p>Settings</p>
    </button>
  </div>
</template>

<script>
import FileImage from "../components/FileSvg.vue";
export default {
  name: "Sidebar",

  methods: {
    RouterLink(page) {
      switch (page) {
        case "Home":
          this.$router.push({ name: "home" });
          break;
        case "LiveNow":
          this.$router.push({ name: "activityToday" });
          break;
        case "Summary":
          this.$router.push({ name: "summary" });
          break;
        case "Settings":
          this.$router.push({ name: "/" });
          break;
        default:
          break;
      }
    },
  },
  components: {
    FileImage,
  },
};
</script>

<style lang="scss" scoped>
#container-link {
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 2px solid #0b94b8;
  gap: 1em;
  border-radius: 5px 5px 0px 0px;
  //position: fixed;

  width: auto;
  height: 100%;
  justify-content: space-around;
  // -webkit-backface-visibility: hidden;
  left: 0;

  background-color: #efefef;
  #linkPage {
    border: none;
    p {
      font-size: clamp(0.8em, 3.5vw, 4.5em);
      color: #70b4f7;
      font-weight: bold;
    }
  }
}
</style>