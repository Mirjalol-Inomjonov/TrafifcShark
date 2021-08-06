<template>
  <div class="service">
    <div class="container">
      <h2 class="title title_md service__title">Работать с нами это</h2>

      <div class="service__data text-center">
        <div class="card">
          <img class="card__icon" src="../assets/icon11.png" alt="" />
          <p class="subtitle subtitle_color-black">
            Уверенность и стабильность! Мы на рынке с 2015г.
          </p>
        </div>
        <div class="card">
          <img class="card__icon" src="../assets/icon2.png" alt="" />
          <p class="subtitle subtitle_color-black">
            Уверенность и стабильность! Мы на рынке с 2015г.
          </p>
        </div>
        <div class="card">
          <img class="card__icon" src="../assets/icon3.png" alt="" />
          <p class="subtitle subtitle_color-black">
            Уверенность и стабильность! Мы на рынке с 2015г.
          </p>
        </div>
        <div class="card">
          <img class="card__icon" src="../assets/icon4.png" alt="" />
          <p class="subtitle subtitle_color-black">
            Уверенность и стабильность! Мы на рынке с 2015г.
          </p>
        </div>
        <div class="card">
          <img class="card__icon" src="../assets/icon5.png" alt="" />
          <p class="subtitle subtitle_color-black">
            Уверенность и стабильность! Мы на рынке с 2015г.
          </p>
        </div>
        <div class="card">
          <img class="card__icon" src="../assets/icon6.png" alt="" />
          <p class="subtitle subtitle_color-black">
            Уверенность и стабильность! Мы на рынке с 2015г.
          </p>
        </div>
        <button class="button button_outline service__button">
          Регистрация
        </button>
      </div>
    </div>
    <div class="service__info">
      <div class="container">
        <div class="service__info-text">
          <h2 class="title title_sm">мы всегда в топе!</h2>
          <p class="subtitle">
            Мы прямой рекламодатель с собственными офферами, которые входят в
            топ-чарты AppStore и Google Play.
          </p>
        </div>

        <article class="service__article">
          <div>
            <h2 class="title">ТОП</h2>
            <p class="subtitle">
              Наши офферы входят в ТОПы в AppStore и Google Play
            </p>
          </div>
          <div>
            <h2 class="title">ОФФЕРЫ</h2>
            <p class="subtitle">
              Мы делаем собственные белые мобильные офферы, которые вы не
              найдете ни в одной другой партнерке
            </p>
          </div>
          <div>
            <h2 class="title">2,5 <sub>$</sub></h2>
            <p class="subtitle">
              Мы платим до $2.5 за инсталл и принимаем трафик со всего мира
            </p>
          </div>
        </article>
      </div>
    </div>

    <div class="container">
      <div class="service__pay">
        <h2 class="title title_md mb-3">
          Еженедельные выплаты <span style="color: #2e99da">от $100</span>
        </h2>
        <p class="subtitle subtitle_color-gray">
          На удобную для вас платежную систему из перечисленных ниже
        </p>
      </div>
      <div
        class="
          service__clients
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <img class="service__clients-img" src="../assets/clinet1.png" alt="" />
        <img class="service__clients-img" src="../assets/clinet2.png" alt="" />
        <img class="service__clients-img" src="../assets/clinet3.png" alt="" />
        <img class="service__clients-img" src="../assets/clinet4.png" alt="" />
        <img class="service__clients-img" src="../assets/clinet5.png" alt="" />
        <img class="service__clients-img" src="../assets/clinet6.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
};
</script>

<style lang="scss">
.service {
  &__title {
    margin-bottom: 80px;
  }
  &__data {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 84px 30px;
  }

  &__button {
    grid-column: 2/3;
  }

  &__info {
    background-image: url("../assets/bgr img2.png");
    background-size: cover;
    padding: 200px 0;
  }

  &__info-text {
    padding-bottom: 80px;
  }

  &__article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }

  &__clients {
    margin: 80px 0;
  }
}

@media only screen and (max-width: 576px) {
  .service {
    &__title {
      margin: 32px 0;
    }

    &__data {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
    }

    &__button {
      grid-row: 4/5;
      grid-column: 1/3;
    }

    &__info {
      background-image: url("../assets/bgr rwd.png");
      background-repeat: no-repeat;
      background-size: cover;
      padding: 100px 0;
      .subtitle {
        font-size: 16px;
        line-height: 19px;
      }
    }

    &__info-text {
      padding-bottom: 32px;
      .title {
        font-size: 20px;
        line-height: 25px;
      }
      .subtitle {
        font-size: 16px;
        line-height: 19px;
      }
    }

    &__article {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 32px 0;

      .title {
        font-size: 60px;
      }

      .subtitle {
        font-size: 16px;
        line-height: 16px;
      }
    }

    &__pay {
      .title {
        font-size: 20px;
        line-height: 25px;
      }
      .subtitle {
        font-size: 16px;
        line-height: 15px;
      }
    }

    &__clients {
      flex-wrap: wrap;
      gap: 15px;
    }
  }
}
</style>
