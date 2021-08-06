<template>
  <section class="up-vertical">
    <div class="container">
      <h2 class="title title_md">Топовые вертикали</h2>
      <div class="row up-vertical__app">
        <div class="col-12 col-sm-4">
          <div class="up-vertical-card">
            <img
              class="up-vertical-card__icon"
              src="../assets/up icon1.png"
              alt=""
            />
            <h3 class="up-vertical-card__title">Installs</h3>
            <p class="up-vertical-card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>

        <div class="col-12 col-sm-4">
          <div class="up-vertical-card">
            <img
              class="up-vertical-card__icon"
              src="../assets/up icon2.png"
              alt=""
            />
            <h3 class="up-vertical-card__title">Installs</h3>
            <p class="up-vertical-card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>

        <div class="col-12 col-sm-4">
          <div class="up-vertical-card">
            <img
              class="up-vertical-card__icon"
              src="../assets/up icon3.png"
              alt=""
            />
            <h3 class="up-vertical-card__title">Installs</h3>
            <p class="up-vertical-card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>

        <div class="col-12 col-sm-4">
          <div class="up-vertical-card">
            <img
              class="up-vertical-card__icon"
              src="../assets/up icon4.png"
              alt=""
            />
            <h3 class="up-vertical-card__title">Installs</h3>
            <p class="up-vertical-card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>

        <div class="col-12 col-sm-4">
          <div class="up-vertical-card">
            <img
              class="up-vertical-card__icon"
              src="../assets/up icon5.png"
              alt=""
            />
            <h3 class="up-vertical-card__title">Installs</h3>
            <p class="up-vertical-card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>

        <div class="col-12 col-sm-4">
          <div class="up-vertical-card">
            <img
              class="up-vertical-card__icon"
              src="../assets/up icon6.png"
              alt=""
            />
            <h3 class="up-vertical-card__title">Installs</h3>
            <p class="up-vertical-card__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UpVertical",
};
</script>

<style lang="scss">
.up-vertical {
  margin: 90px 0 80px 0;

  &__app {
    margin-top: 80px;
    grid-row-gap: 30px;
  }
}

.up-vertical-card {
  background-image: url("../assets/Group1.png");
  background-repeat: no-repeat;
  padding: 40px;
  box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  width: 100%;
  background-size: 100%;

  &__icon {
    width: 100px;
    margin-bottom: 87px;
  }

  &__title {
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
  }

  &__subtitle {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
}

@media only screen and (max-width: 576px) {
  .up-vertical-card {
    background-image: url("../assets/Group 43.png");
    background-repeat: no-repeat;
    text-align: center;
    padding: 42px;

    &__icon {
      width: 80px;
      margin-bottom: 75px;
    }

    &__title {
      margin-top: 50px;
    }
  }
}
</style>
