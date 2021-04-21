<template>
  <div class="favcard-wrapper">
    <div class="identity">
      <h3>Ação</h3>
      <h4>Nome Ação</h4>
    </div>
    <div class="stock-numbers">
      <h4>Preço</h4>
      <h5>Porcentagem</h5>
    </div>
    <div class="graph-period-buttons">
      <button class="graph-period-button">1D</button>
      <button class="graph-period-button">5D</button>
      <button class="graph-period-button">1M</button>
      <button class="graph-period-button">6M</button>
      <button class="graph-period-button">1A</button>
      <button class="graph-period-button">5A</button>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512" fill="rgb(250, 251, 253)"><title>Heart</title><path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"></path></svg>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.favcard-wrapper {
  position: relative;
  width: 350px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  padding: 1rem;
  height: 300px;
}

.identity, .stock-numbers {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
}

.identity h3, .stock-numbers h4 {
  margin-right: 1rem;

}

.favcard-wrapper .graph-period-buttons {
  text-align: right;
}

.favcard-wrapper svg {
  width: 33px;
  height: 33px;
  top: 1rem;
  right: 1rem;
  position: absolute;

}



</style>