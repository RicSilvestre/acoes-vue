<template>
  <section class="body-wrapper">
    <Header></Header>
    <Card5 :childData="apiData"></Card5>
    <GraphWrapper></GraphWrapper>
  </section>
</template>

<script>
import GraphWrapper from './GraphWrapper.vue';
import Header from './Header.vue';
import Card5 from './Card5.vue';

export default {
  name: "BodyWrapper",
  props: ["apiData"],
  data() {
    return {
      childData: this.apiData
    }
  },
  components: {
    GraphWrapper,
    Header,
    Card5
  }
}
</script>


<style scoped>
section {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  
  height: 80%;
}
</style>