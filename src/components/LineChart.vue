<template>
  <div v-show="graphStock" class="graph">
    <canvas id="stock-chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const chartData = {
        type: "line",
        data: {
          labels: ["Preço inicial do dia", "Preço final do dia"],
          datasets: [
            {
              label: "",
              data: [0, 10, 15],
              backgroundColor: "#e4558d",
              borderColor: "#e4558d",
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }

export default {
  name: 'LineChart',
  data() {
    return {
      chartData,
      chart: "",
      codData: ""
    }
  },
  props: ["graphStock"],
  watch: {
    async graphStock(e) {
      this.chartData.data.datasets[0].label = e;

      
      const response = await fetch(`https://sheet.best/api/sheets/326958cd-35bc-41a7-b0c2-57cbce2e8ed8/COD/${e}`);
      const result = await response.json();
      
      const today = parseFloat(result[0].HOJE.replace("R$ ", "").replace(",", "."));
      console.log(today)
      
      const variation = parseFloat(result[0].VARIACAO.replace("%", "").replace(",", "."))
      

      const yesterday = today/(1 + (variation/100))
      console.log(yesterday)
      
      this.chartData.data.datasets[0].data = [yesterday, today]

      this.chart.update()
    }
  },
  mounted() {
    const ctx = document.getElementById('stock-chart');
    this.chart = new Chart(ctx, this.chartData);
  }
}

</script>

<style>

.graph {
  text-align: center;
}

canvas {
  max-height: 200px;
  width: 100%;
  padding-left: 2rem;
  padding-bottom: 1rem;
  
}
</style>