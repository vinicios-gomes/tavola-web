<template>
  <div id="cardresult">
    <header>
      <img :src="srcImg" />
      <span>
        <h2>{{ name }}</h2>
      </span>
    </header>
    <p>{{ votos }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardResult',
  props: ['name', 'votos', 'srcImg'],
};
</script>

<style lang="scss" scoped>
#cardresult {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 230px;
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
</style>
