<template>
  <div id="cardvot">
    <span>
      <img src="../assets/check-list.svg" />
      <p>{{ name }}</p>
    </span>
    <a :href="link">Votar</a>
  </div>
</template>

<script>
export default {
  name: 'CardVot',
  props: ['link', 'name'],
};
</script>

<style lang="scss" scoped>
#cardvot {
  width: 890px;
  height: 60px;
  padding: 15px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072);
  align-items: center;
  margin: 10px;
  justify-content: space-between;
  span {
    display: flex;
    flex-direction: row;
    width: 250px;
  }
  img {
    width: 34px;
    height: 34px;
    margin-right: 25px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
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
  #cardvot {
    width: 100%;
  }
}
</style>
