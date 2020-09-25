<template>
  <div id="votacoes">
    <h1>Votacoes</h1>
    <div id="content">
      <div class="btState">
        <button>Em andamento</button>
        <button>Finalizado</button>
      </div>
      <div class="card">
        <div>
          <p>Icone</p>
          <p>Cidades maravilhosas</p>
        </div>
        <button type="button">Votar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Votacoes',
};
</script>

<style lang="scss" scoped>
h1 {
  padding-bottom: 20px;
  padding-left: 10px;
  border-bottom: 1px solid #000;
  width: 80%;
}
#content {
  width: 90%;
  height: 80vh;
  background-color: #cecece;
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding-left: 10%;
  padding-top: 30px;
}
.card {
  width: 50%;
  height: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  background-color: rgb(0, 0, 0, 0.2);
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
  }
  button {
    border: none;
    background-color: var(--color-primary);
    width: 60px;
    height: 40px;
    border-radius: 8px;
    color: #fff;
  }
}
</style>
