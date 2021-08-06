<template>
  <section class="form-section">
    <div class="container">
      <h3 class="form-section__title">Остались вопросы? Готовы ответить!</h3>
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2">
          <input class="input" type="text" placeholder="Ваше имя" />
          <input class="input" type="text" placeholder="Ваши контакты" />
          <input class="input" type="text" placeholder="Ваше предложение" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-4 offset-sm-4">
          <button class="button button_outline button_color-white">
            написать нам
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style lang="scss">
.form-section {
  background-image: url("../assets/Group 2.png");
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 355px;
  padding-bottom: 144px;
  height: 100%;

  &__title {
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #ffffff;
  }

  .input {
    padding: 28px 30px;
    border-radius: 40px;
    background-color: #ffffff;
    width: 100%;
    outline: none;
    border: none;
    margin-bottom: 20px;
    &:nth-child(1) {
      margin-top: 40px;
    }

    &:focus {
      box-shadow: 0 0 5px 4px #ccc;
    }

    &::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: rgba(126, 126, 126, 0.5);
    }
  }
}

@media only screen and (max-width: 576px) {
  .form-section {
    background-image: url("../assets/bgr rwd2.png");
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 125px 0;
    .input {
      padding: 20px 22px;
      &::placeholder {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
}
</style>
