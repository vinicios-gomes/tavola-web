<template>
  <div id="resultados">
    <header>
      <h1>Resultado Eleição conselho fiscal</h1>
    </header>
    <div id="container">
      <div class="cardResult">
        <h2>Abstenho-me</h2>
        <p>{{ votacoes.abstencoes }}</p>
      </div>
      <div class="cardResult">
        <h2>Aprovar a chapa</h2>
        <p>{{ votacoes.aprovar }}</p>
      </div>
      <div class="cardResult">
        <h2>Aptos a votar</h2>
        <p>{{ votacoes.aptos }}</p>
      </div>
      <div class="cardResult">
        <h2>Total de votos</h2>
        <p>{{ this.somaTotal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Votacoes from '../services/votacoes';

export default {
  name: 'Resultados',
  data() {
    return {
      votacoes: {},
    };
  },
  mounted() {
    this.listar();

    this.intervalid = setInterval(() => {
      this.listar();
    }, 6000);
  },
  methods: {
    listar() {
      Votacoes.listar().then((response) => {
        this.votacoes = response.data.votacoes;
        console.log(response);
      });
    },
  },
  computed: {
    somaTotal() {
      const totalVotos = this.votacoes.abstencoes + this.votacoes.aprovar + this.votacoes.aptos;
      return totalVotos;
    },
  },
};
</script>

<style lang="scss" scoped>
.cardResult {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
  background-color: rgba($color: #cecece, $alpha: 0.5);
  margin: 10px;

  h2 {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #004767, $alpha: 0.7);
    margin-bottom: 40px;
  }
  p {
    font-size: 3rem;
  }
}
#resultados {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#container {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
