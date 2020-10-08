<template>
  <div id="resultados">
    <h1>Resultados</h1>
    <div v-for="votacao in votacoes" :key="votacao.id" v-if="votacao.vote">
      <header>
        <h2>{{ votacao.nome }}</h2>
      </header>
      <div id="cards">
        <card-result
          :name="`Abstenho - me`"
          :votos="votacao.resultados.abstencoes"
          :srcImg="require('@/assets/abs.png')"
          class="cards"
        />
        <card-result
          :name="`Aprovar a chapa`"
          :votos="votacao.resultados.aprovar"
          :srcImg="require('@/assets/plusicon.png')"
          class="cards"
        />
        <card-result
          :name="`Aptos a votar`"
          :votos="votacao.resultados.aptos"
          :srcImg="require('@/assets/circ.png')"
          class="cards"
        />
        <card-result
          :name="`Total de votos`"
          :srcImg="require('@/assets/abs.png')"
          :votos="votacao.resultados.total"
          class="cards"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardResult from '../components/CardResult.vue';
import Votacoes from '../services/votacoes';

export default {
  name: 'Resultados',
  components: {
    CardResult,
  },
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
        console.log(this.votacoes);
        console.log(this.somaTotal);
      });
    },
  },
  computed: {
    somaTotal(id) {
      // eslint-disable-next-line operator-linebreak
      const totalVotos =
        // eslint-disable-next-line operator-linebreak
        this.votacoes[id].resultados.abstencoes +
        // eslint-disable-next-line operator-linebreak
        this.votacoes[id].resultados.aprovar +
        this.votacoes[id].resultados.aptos;

      return totalVotos;
    },
  },
};
</script>

<style lang="scss" scoped>
#resultados {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  h1 {
    padding-bottom: 20px;
    padding-left: 10px;
    border-bottom: 1px solid #000;
    width: 80%;
  }
  #cards {
    display: flex;
    flex-direction: row;
    padding-bottom: 50px;
    flex-wrap: wrap;
  }
  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
}
</style>
