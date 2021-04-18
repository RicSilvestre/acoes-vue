<template>
  <section>
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


<style>
section {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
}
</style>