<template>
  <div class="tops-and-bottoms">
    <div class="card-5">
      <div class="card-5-header">
        <span></span>
        <h2>Maiores Altas</h2>
      </div>
      <!-- fazer um tipo de v-for aqui pra cada um dos top 5 -->
      <div v-if="childData">
        <div v-for="(top, index) in top5" :key="index" class="stock-row">
          <span>{{top[1]}}</span>
          <span style="color: #33dd44">{{top[0]}}%</span>
          <span>{{top[2]}}</span>
        </div>
      </div>
    </div>
    <div class="card-5">
      <div class="card-5-header">
        <span></span>
        <h2>Maiores Baixas</h2>
      </div>
      <div v-for="(bottom, index) in bottom5" :key="index" class="stock-row">
          <span>{{bottom[1]}}</span>
          <span style="color: #f92e3a">{{bottom[0]}}%</span>
          <span>{{bottom[2]}}</span>
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Card5",
  props: ["childData"],
  data() {
    return {
      top5: "",
      bottom5: ""
    }
  },
  watch: {
    childData: async function() {
      let arrayGeral = [];
      
      if (this.childData) {
      for (const i of this.childData) {
        if (i.VARIACAO != null && i.VARIACAO != "NA" && i.VARIACAO != "" && !i.COD.match(/^ALTA/)) {
          const variacao = i.VARIACAO.replace("%", "")
          const variacaoNumber = Number(variacao.replace(",", "."))
          
          arrayGeral.push([variacaoNumber, i.COD, i.HOJE])
          
        
        }
      }
      arrayGeral.sort((a, b) => a[0] - b[0]);
      
      const bottom5Numbers = arrayGeral.slice(0, 5);
      const bottom5 = bottom5Numbers.map(top => {
        return top = [String(top[0]).replace(".", ","), top[1], top[2]]
      })

      const top5Numbers = arrayGeral.reverse().slice(0, 5);
      const top5 = top5Numbers.map(top => {
        return top = [String(top[0]).replace(".", ","), top[1], top[2]]
      })
      
      this.top5 = top5;
      this.bottom5 = bottom5;      
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tops-and-bottoms {
    display: flex;
    justify-content: space-between;
}

.card-5 {
    width: 47%;
    padding: 1.5rem;
    border-radius: 25px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.stock-row {
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: .5px solid #fff;
  margin-top: 1rem;
}
</style>
