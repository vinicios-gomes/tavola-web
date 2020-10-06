<template>
  <div id="resultados">
    <header>
      <h1>Resultado Eleição conselho fiscal</h1>
    </header>
    <div id="container">
      <div class="cardResult">
        <header>
          <img src="../assets/abs.png" />
          <span>
            <h2>Abstenho-me</h2>
          </span>
        </header>
        <p>{{ votacoes.abstencoes }}</p>
      </div>
      <div class="cardResult">
        <header>
          <img src="../assets/plusicon.png" />
          <span>
            <h2>Aprovar a chapa</h2>
          </span>
        </header>
        <p>{{ votacoes.aprovar }}</p>
      </div>
      <div class="cardResult">
        <header>
          <img id="dif" src="../assets/circ.png" />
          <span>
            <h2>Aptos a votar</h2>
          </span>
        </header>
        <p>{{ votacoes.aptos }}</p>
      </div>
      <div class="cardResult">
        <header>
          <img src="../assets/plusicon.png" />
          <span>
            <h2>Total de votos</h2>
          </span>
        </header>
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
  height: 300px;
  background-color: rgba($color: #ffffff, $alpha: 1);
  border: 1px solid rgba($color: #000, $alpha: 0.3);
  margin: 10px;
  border-radius: 15px;
  h2 {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
    //background-color: rgba($color: #004767, $alpha: 0.7);
    margin-bottom: 40px;
  }
  p {
    font-size: 4rem;
    margin-top: 20px;
  }
  header {
    display: flex;
    align-items: center;
    //justify-content: space-between;
    width: 100%;
    margin: 5px;
    img {
      width: 80px;
      height: 80px;
      margin-left: 8px;
    }
    span {
      display: flex;
      flex-direction: row;
      border-bottom: 2px solid rgba($color: #000, $alpha: 0.3);
      width: 100%;
      height: 10px;
      align-items: center;
      margin-left: 3px;
    }
    #dif {
      border: 5px solid #000;
      border-radius: 50px;
    }
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
