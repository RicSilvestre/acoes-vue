<template>
  <div class="graph-wrapper">
    <div class="graph-period-buttons">
      <button class="graph-period-button">1D</button>
      <button class="graph-period-button">5D</button>
      <button class="graph-period-button">1M</button>
      <button class="graph-period-button">6M</button>
      <button class="graph-period-button">1A</button>
      <button class="graph-period-button">5A</button>
    </div>
    <div class="graph-buttons-wrapper">
      <div class="graph-buttons">
        <button @click="getStock" class="graph-button">IBOV</button>
        <button @click="getStock" class="graph-button">IFIX</button>
        <button @click="getStock" class="graph-button">USD</button>
        <button @click="getStock" class="graph-button">BTC</button>
      </div>
      <LineChart :graphStock="graphStock" />      
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.vue'


export default {
  name: "GraphWrapper",
  data() {
    return {
      graphStock: ""
    }
  },
  components: {
    LineChart
  },
  methods: {
    getStock(e) {
      this.graphStock = e.target.innerText;
    }
  }
}
</script>

<style>
.graph-wrapper {
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin-top: 2rem;
    padding-right: 1rem;
    padding-top: 1rem;
}

.graph-period-buttons {
    align-self: flex-end;
}

.graph-period-button {
    width: 2rem;
    height: 2rem;
    background-color: #4c4d4f;
    margin-right: .2rem;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border: none;
}

.graph-period-button:last-child {
    margin-right: 0;
}

.graph-buttons-wrapper {
    display: grid;
    grid-template-columns: 1fr 5fr;
}

.graph-buttons {
    display: flex;
    flex-direction: column;

}

.graph-button {
    margin: 0 0 1rem 1rem;
    padding: .5rem;
    width: 100%;
    background-color: #4c4d4f;
    margin-right: .2rem;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border: none;
}

</style>