<template>
  <section class="clients text-center">
    <div class="container">
      <h2 class="clients__title">Нам доверяют</h2>
      <div
        class="
          clients__wrapper
          d-flex
          align-items-center
          justify-content-around
          flex-wrap
        "
      >
        <img class="clients__img" src="../assets/clients icon1.png" alt="" />
        <img class="clients__img" src="../assets/clients icon2.png" alt="" />
        <img class="clients__img" src="../assets/clients icon3.png" alt="" />
        <img class="clients__img" src="../assets/clients icon4.png" alt="" />
        <img class="clients__img" src="../assets/clients icon5.png" alt="" />
        <img class="clients__img" src="../assets/clients icon6.png" alt="" />
        <img class="clients__img" src="../assets/clients icon7.png" alt="" />
        <img class="clients__img" src="../assets/clients icon8.png" alt="" />
        <img class="clients__img" src="../assets/clients icon9.png" alt="" />
        <img class="clients__img" src="../assets/clients icon10.png" alt="" />
        <img class="clients__img" src="../assets/clients icon11.png" alt="" />
        <img class="clients__img" src="../assets/clients icon12.png" alt="" />
        <img class="clients__img" src="../assets/clients icon13.png" alt="" />
        <img class="clients__img" src="../assets/clients icon14.png" alt="" />
        <img class="clients__img" src="../assets/clients icon15.png" alt="" />
        <img class="clients__img" src="../assets/clients icon16.png" alt="" />
      </div>
      <p class="clients__text">и десятки других популярных компаний</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clients",
};
</script>

<style lang="scss">
.clients {
  &__wrapper {
    gap: 50px;
    margin: 89px 0 80px 0;
  }

  &__img {
    height: 36px;
  }

  &__title {
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
  }

  &__text {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #939393;
  }
}

@media screen and (max-width: 576px) {
  .clients {
    &__wrapper {
      gap: 20px;
      margin: 32px 0 25px 0;
    }

    &__title {
      font-size: 20px;
      line-height: 25px;
    }

    &__text {
      font-size: 13px;
      line-height: 15px;
    }

    &__img {
      height: 20px;
    }
  }
}
</style>
