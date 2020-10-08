<template>
  <div id="base">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Base',
};
</script>

<style lang="scss" scoped>
#base {
  width: 90%;
  background-color: #fff;
  border-radius: 50px 0 0 50px;
  padding-top: 50px;
  padding-left: 50px;
  overflow-y: auto;
}

@media (max-width: 1150px) {
  #base {
    width: 100%;
    border-radius: 0;
  }
}
</style>
