<template>
  <div id="votacoes">
    <h1>Votações</h1>
    <div id="content">
      <div id="ts">
        <card-vot
          v-for="vote in votes"
          v-if="!vote.vote"
          :key="vote.id"
          :name="vote.nome"
          :link="vote.link"
        >
        </card-vot>
      </div>
    </div>
  </div>
</template>

<script>
import CardVot from '../components/CardVot.vue';
import Votacoes from '../services/votacoes';

export default {
  name: 'Votacoes',
  components: {
    CardVot,
  },
  data() {
    return {
      votes: [],
    };
  },
  mounted() {
    this.listar();

    this.intervalid = setInterval(() => {
      this.listar();
    }, 15000);
  },
  methods: {
    listar() {
      Votacoes.listar().then((response) => {
        this.votes = response.data.votacoes;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#votacoes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
h1 {
  padding-bottom: 20px;
  padding-left: 10px;
  border-bottom: 1px solid #000;
  width: 80%;
}
#ts {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
#content {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: initial;
  padding-top: 30px;
}
.card {
  width: 890px;
  height: 60px;
  padding: 15px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072);
  align-items: center;
  margin: 10px;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
  }
  img {
    width: 32px;
    height: 32px;
  }
  button {
    border: none;
    background-color: var(--color-primary);
    width: 78px;
    height: 40px;
    border-radius: 8px;
    color: #fff;

    &:hover {
      background-color: rgba(0, 70, 101, 0.9);
    }
  }
}
@media (max-width: 1150px) {
  #content {
    width: 100%;
  }
  .card {
    width: 90%;
  }
  @media (max-width: 570px) {
    .card {
    }
  }
}
</style>
