<template>
  <div class="home">
    <Header />
    <Main />
    <Service />
    <Up-Vertical />
    <Clients />
    <Form />
    <Footer/>
  </div>
</template>

<script>
import Clients from "../components/Clients.vue";
import Footer from '../components/Footer.vue';
import Form from "../components/Form.vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Service from "../components/Service.vue";
import UpVertical from "../components/UpVertical.vue";

export default {
  components: {
    Header,
    Main,
    Service,
    UpVertical,
    Clients,
    Form,
    Footer,
  },
  name: "Home",
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.home {
  overflow: hidden;
}

.title {
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 75px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;

  &_md {
    font-size: 30px;
    line-height: 37px;
    color: #000000;
  }
}

.subtitle {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;

  &_sm {
    font-size: 13px;
    line-height: 16px;
  }

  &_color-black {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  &_color-gray {
    color: #939393;
  }
}

.button {
  background: #2e9adb;
  box-shadow: 0px 10px 20px rgba(78, 170, 224, 0.35);
  border-radius: 40px;
  padding: 28px 50px;
  outline: none;
  border: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.15s linear;
  width: 100%;

  &:hover {
    background-color: rgb(15, 112, 168);
  }

  &_bgr-green {
    background-color: #55b570;
    &:hover {
      background-color: #0a7729;
    }
  }

  &_outline {
    background: transparent;
    border: 2px solid #2e9adb;
    color: #2e9adb;
    &:hover {
      background-color: transparent;
      opacity: 0.6;
    }
  }

  &_color-white {
    color: #ffffff;
    border-color: #ffffff;
  }
}

.card {
  // text-align: center;
  padding: 30px;
  border: none;

  &__icon {
    width: 65px;
    height: 65px;
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 576px) {
  .home {
    overflow: hidden;
  }
  .display-none {
    display: none;
  }

  .button {
    padding: 18px 34px;
    font-size: 16px;
    line-height: 24px;
  }

  .card {
    &__icon {
      width: 48px;
      height: 48px;
    }
  }
}
</style>
