<template>
  <div id="app">
    <div class="hom">
      <div id="nav">
        <ul>
          <li>
            <a href="https://meet.jit.si/20200919admin" target="_blank">
              <img src="./assets/reuniao.png" />
              <p>Reunião</p>
            </a>
          </li>
          <li>
            <router-link to="votacoes">
              <img src="./assets/VOTACAO.png" />
              <p>Votacoes</p>
            </router-link>
          </li>
          <li>
            <router-link to="resultados">
              <img src="./assets/graphics.webp" />
              <p>Resultados</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div id="base">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
.hom {
  width: 100%;
  color: #000;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#nav {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  width: 10%;
  ul {
    list-style: none;
    margin-top: 50px;

    li > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      cursor: pointer;
      height: 12vh;
      text-decoration: none;
      color: #fff;

      img {
        width: 32px;
        height: 32px;
        color: #fff;
      }
      p {
        padding-top: 10px;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transition: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
#base {
  background-color: #fff;
  width: 90%;
  height: 100vh;
  border-radius: 50px 0 0 50px;
  padding-top: 50px;
  padding-left: 50px;
}

@media (max-width: 1150px) {
  #nav {
    p {
      display: none;
    }
  }
  #base {
    width: 100%;
    border-radius: 0;
  }
}
</style>
