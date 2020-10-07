<template>
  <div id="votacoes">
    <h1>Votações</h1>
    <div id="content">
      <div class="btState">
        <button>Em andamento</button>
        <button>Finalizado</button>
      </div>
      <div id="ts">
        <div class="card">
          <div>
            <img src="../assets/check-list.svg" />
            <p>Cidades maravilhosas</p>
          </div>
          <button type="button">Votar</button>
        </div>
        <div class="card">
          <div>
            <img src="../assets/check-list.svg" />
            <p>Cidades maravilhosas</p>
          </div>
          <button type="button">Votar</button>
        </div>
        <div class="card">
          <div>
            <img src="../assets/check-list.svg" />
            <p>Cidades maravilhosas</p>
          </div>
          <button type="button">Votar</button>
        </div>
        <div class="card">
          <div>
            <img src="../assets/check-list.svg" />
            <p>Cidades maravilhosas</p>
          </div>
          <button type="button">Votar</button>
        </div>
        <div class="card">
          <div>
            <img src="../assets/check-list.svg" />
            <p>Cidades maravilhosas</p>
          </div>
          <button type="button">Votar</button>
        </div>
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
#votacoes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
h1 {
  padding-bottom: 20px;
  padding-left: 10px;
  border-bottom: 1px solid #000;
  width: 80%;
}
.btState {
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  button {
    width: 150px;
    height: 30px;
    border: none;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072);
  }
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
