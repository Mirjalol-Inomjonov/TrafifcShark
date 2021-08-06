<template>
  <main class="main">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="option"
    />

    <div>
      <div class="router">
        <router-link class="router__link" to="#">вебмастерам</router-link>
        <router-link class="router__link" to="#">рекламодателям</router-link>
      </div>

      <div class="container">
        <div class="main__text">
          <h1 class="title">Мобильная партнерская сеть</h1>
          <p class="subtitle">Только рабочие офферы от прямых рекламодателей</p>
        </div>

        <div
          class="main__data d-flex align-items-center justify-content-around"
        >
          <div>
            <h2 class="main__info">300+</h2>
            <p class="main__subtitle">офферов по всему миру</p>
          </div>

          <div class="main__line"></div>

          <div>
            <h2 class="main__info">70+</h2>
            <p class="main__subtitle">активных рекламодателей</p>
          </div>

          <div class="main__line"></div>

          <div>
            <h2 class="main__info">6 лет</h2>
            <p class="main__subtitle">в аффилейт маркетинге</p>
          </div>

          <div class="main__line"></div>

          <div>
            <h2 class="main__info">10.000+</h2>
            <p class="main__subtitle">конверсий в день</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <article class="article d-flex justify-content-around">
              <div class="article__item article_border-right text-center">
                <p class="subtitle subtitle_color-black">
                  Я пользователь соцсетей, блогер, владелец сайта или
                  арбитражник и хочу сотрудничать с топовыми мировыми брендами.
                </p>
                <button class="button">
                  веб-мастерам
                  <svg
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.55301 19.7709C5.55324 19.7706 5.55352 19.7704 5.55375 19.7702L9.61625 15.688C9.92059 15.3821 9.91946 14.8875 9.6136 14.5831C9.30778 14.2787 8.81313 14.2799 8.50875 14.5857L5.78125 17.3265L5.78125 0.78125C5.78125 0.349765 5.43149 -1.92866e-07 5 -2.11727e-07C4.56852 -2.30588e-07 4.21875 0.349765 4.21875 0.78125L4.21875 17.3264L1.49125 14.5857C1.18688 14.2799 0.692228 14.2788 0.386407 14.5831C0.0805095 14.8875 0.0794547 15.3822 0.383751 15.688L4.44625 19.7702C4.44649 19.7704 4.44676 19.7706 4.44699 19.7709C4.75238 20.0769 5.24863 20.0759 5.55301 19.7709Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>

              <div class="article__item text-center">
                <p class="subtitle subtitle_color-black">
                  Я владелец компании или маркетолог и хочу привлечь новых
                  клиентов и увеличить продажи с помощью онлайн-рекламы.
                </p>
                <button class="button button_bgr-green">
                  рекламодателю &nbsp;
                  <svg
                    width="20"
                    height="10"
                    viewBox="0 0 20 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7709 4.44699C19.7706 4.44676 19.7704 4.44648 19.7702 4.44625L15.688 0.383747C15.3821 0.0794115 14.8875 0.0805441 14.5831 0.386403C14.2787 0.692224 14.2799 1.18687 14.5857 1.49125L17.3265 4.21875H0.78125C0.349766 4.21875 0 4.56851 0 5C0 5.43148 0.349766 5.78125 0.78125 5.78125H17.3264L14.5857 8.50875C14.2799 8.81312 14.2788 9.30777 14.5831 9.61359C14.8875 9.91949 15.3822 9.92054 15.688 9.61625L19.7702 5.55375C19.7704 5.55351 19.7706 5.55324 19.7709 5.55301C20.0769 5.24762 20.0759 4.75137 19.7709 4.44699Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      option: {
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      },
    };
  },
};
</script>

<style lang="scss">
.router {
  display: none;

  &__link {
    display: inline-block;
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: right;
    text-transform: uppercase;
    color: #565656;
    text-decoration: none;
    gap: 50px;

    &:hover {
      color: #2e9adb;
    }

    &::before {
      content: "";
      width: 0;
      height: 5px;
      background-color: #2e9adb;
      display: block;
      margin: auto;
      transition: all 0.3s linear;
      transform: translate(0, 0px);
      border-radius: 6px;
    }

    &:hover::before {
      width: 100%;
    }
  }
}
#tsparticles {
  position: absolute;
  width: 100%;
}
.main {
  margin-top: 100px;
  padding-bottom: 80px;
  overflow: hidden;
  background-image: url("../assets/main bgr img.png");

  &__text {
    margin: 171px 0 100px;
  }

  &__info {
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    color: #ffffff;
  }

  &__subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }

  &__line {
    width: 2px;
    height: 150px;
    left: 441px;
    top: 450px;
    background: rgba(255, 255, 255, 0.25);
  }
}

.article {
  background: #ffffff;
  box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  &__item {
    padding: 58px 50px;
    margin: 0px;
  }

  &_border-right {
    border-right: 1px solid #f3f3f3;
  }
}

@media only screen and (max-width: 576px) {
  #tsparticles {
    height: 100%;
  }
  
  .router {
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    padding: 13px;
    &__link {
      letter-spacing: 2px;
    }
  }

  .main {
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 32px;
    &__text {
      margin: 100px 0 50px 0;
      .title {
        font-weight: 900;
        font-size: 40px;
        line-height: 50px;
      }
    }

    &__line {
      display: none;
    }

    &__data {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
    }

    &__info {
      font-weight: 800;
      font-size: 30px;
      line-height: 37px;
    }

    &__subtitle {
      font-weight: 500;
      font-size: 13px;
      line-height: 15px;
    }
  }

  .article {
    display: flex;
    flex-direction: column;
    text-align: center;

    &__item {
      padding: 16px 20px;
    }

    &_border-right{
      border-bottom: 1px solid #f3f3f3;
    }
  }

}
</style>
