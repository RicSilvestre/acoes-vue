<template>
  <div id="app">
    <Navigation></Navigation>
    <BodyWrapper :apiData="apiData"></BodyWrapper>
  </div>
</template>

<script>
import BodyWrapper from './components/BodyWrapper.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  data() {
    return {
      apiData: ""
    }
  },
  components: {
    BodyWrapper,
    Navigation
  },
  created: async function() {
    const response = await fetch("https://sheet.best/api/sheets/326958cd-35bc-41a7-b0c2-57cbce2e8ed8");
    this.apiData = await response.json();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  width: 100%;
  color: white;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #393c45;
    color: white;
    display: flex;
    
    height: 100vh;
}

nav, .card-5, .graph-wrapper {
    background-color: #2f3035;
}
</style>
