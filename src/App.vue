<template>
  <div id="app">
    <menu-lateral />
    <Base />
  </div>
</template>

<script>
import MenuLateral from './components/Menu.vue';
import Base from './components/Base.vue';

export default {
  name: 'app',
  components: {
    MenuLateral,
    Base,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  height: 100%;
  flex-direction: row;
  color: #000;
}
</style>
