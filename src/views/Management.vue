<template>
  <div class="body-wrapper config-wrapper">
    <h1>Configurações</h1>
    <div class="configuracoes">
      <button>Importar Favoritos</button>
      <button>Exportar Favoritos</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.config-wrapper {
  flex-direction: column;
  text-align: left;
}

.config-wrapper h1 {
  margin-bottom: 2rem;
}

.configuracoes {
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
}

.configuracoes button {
  margin: 0 0 1rem 1rem;
  padding: .8rem;
  width: auto;
  background-color: #4c4d4f;
  margin-right: .2rem;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.configuracoes button:hover {
  background-color: #e4558d;
}

</style>