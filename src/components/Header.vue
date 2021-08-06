<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-4 col-sm-2">
          <router-link to="/">
            <img class="header__logo" src="../assets/logo.png" alt="" />
          </router-link>
        </div>

        <div class="col-6 offset-2 col-sm-8">
          <div class="navbar d-flex justify-content-between align-items-center">
            <nav class="nav display-none">
              <router-link class="header__rlink" to="#"
                >вебмастерам</router-link
              >
              <router-link class="header__rlink" to="#"
                >рекламодателям</router-link
              >
            </nav>
            <hr class="header__hr display-none" />
            <div style="color: #55b570">
              <button class="header__btn">вход</button>
              <span class="display-none">|</span>
              <button class="header__btn display-none">регистрация</button>
            </div>
            <hr class="header__hr" />

            <form class="form">
              <input
                class="form__input"
                type="radio"
                name="opt"
                id="opt1"
                checked
              />
              <label class="form__lable active" for="opt1">RU</label>
              <input class="form__input" type="radio" name="opt" id="opt2" />
              <label class="form__lable active" for="opt2">EN</label>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 5px 4px #ccc;
  z-index: 10;

  &__logo {
    width: 110px;
    height: 50px;
    margin-top: 25px;
  }

  &__rlink {
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
      transform: translate(0, -28px);
      border-radius: 6px;
    }

    &:hover::before {
      width: 100%;
    }

    &:nth-child(1) {
      margin-right: 50px;
    }
  }

  &__hr {
    width: 2px;
    height: 80px;
    background-color: #ccc;
  }

  &__btn {
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #55b570;
    outline: none;
    border: none;
    background-color: transparent;
    opacity: 0.8;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

}

.form {
  background: #f9f9f9;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 14px;
  height: 30px;
  width: 78px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &__input[type="radio"] {
    display: none;
  }

  &__lable {
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #797979;
    padding: 8px 10px;
    border-radius: 14px;
  }

  &__input[type="radio"]:checked + &__lable {
    padding: 8px 13.5px;
    color: #fff;
    background-color: #4eaae0;
    transition: all 0.35s ease-in-out;
  }
}

hr:not([size]) {
  height: 50px;
}

@media only screen and (max-width: 576px) {
  .header {
    overflow: hidden;
    padding: 0;

    &__logo {
      padding-top: 14px;
    }
  }
  .navbar {
    padding-left: 10px;
  }
}
</style>
