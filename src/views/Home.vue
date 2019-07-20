<template>
  <div id="home" class="w-100 h-100">
      <div class="container-fluid p-3 navigation w-100">
        <div class="container-fluid">
          <img src="../assets/logo_kinoplay.png" class="pt-2" alt="logo">
          <nav class="nav float-right">
            <a class="nav-link" href="#">Menu</a>
            <a class="nav-link" href="#">Menu</a>
            <a class="nav-link" href="#">Menu</a>
            <a class="nav-link" href="#">Menu</a>
            <a class="nav-link active" href="#">Menu</a>
          </nav>
        </div>
      </div>
      <div class="container-fluid about">
        <div class="container-fluid row">
          <div class="col-5 d-flex flex-column justify-content-center">
            <h1>О проекте<h3>Kinoplay - интерактивная игровая платформа для кинотеатров. Играй в Kinoplay. Зарабатывай бонусы. Ходи в кино бесплатно!</h3>
            </h1>
            <div class="buttons d-inline-flex float-left">
              <a href="" class="btn btn-outline-primary">Get App</a>
              <a href="" class="btn btn-outline-danger ml-4">Get App</a>
            </div>
            <div class="social-networks">
              <a href="">
                <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
              </a>
              <a href="">
                <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/>
              </a>
              <a href="">
                <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'youtube' }"/>
              </a>
            </div>
          </div>
          <div class="col-7 d-flex justify-content-center">
            <img src="../assets/8.png" class="w-100" style="z-index: 999" alt="">
            <img src="../assets/9.png" class="back-side" alt="">
          </div>
        </div>
      </div>
      <div class="container-fluid how-work w-100">
        <div class="container-fluid row mx-0">
          <div class="col-5">
            <h1>Как это работает</h1>
            <div class="step d-flex flex-row">
              <img src="../assets/li.png" class="align-self-center" alt="">
              <div class="d-flex flex-column px-4">
                <br>
                <h5>Скачайте приложение</h5>
                <h5 style="opacity: 0.5">Войдите в приложение и зарегистрируйтесь</h5>
              </div>
            </div>
            <div class="step d-flex flex-row">
              <img src="../assets/li.png" class="align-self-center" alt="">
              <div class="d-flex flex-column px-4">
                <br>
                <h5>Сканируйте QR с экрана кинотеатра</h5>
                <h5 style="opacity: 0.5">Заходите в зал кинотеатра и отсканируйте QR с экрана для подключения к игре</h5>
              </div>
            </div>
            <div class="step d-flex flex-row">
              <img src="../assets/li.png" class="align-self-center" alt="">
              <div class="d-flex flex-column px-4">
                <br>
                <h5>Отвечайте на вопросы и зарабатывайте</h5>
                <h5 style="opacity: 0.5">Отвечая на вопросы игры правильно, Вы зарабатываете бонусы которые сможете тратить на кассах кинотеатра</h5>
              </div>
            </div>
          </div>
          <div class="col-7 d-flex align-items-center">
            <img src="../assets/screen.png" class="w-100 ml-5 my-5 soon-img-2" alt="">
          </div>
        </div>
      </div>
      <div class="container-fluid how-play w-100">
        <div class="container-fluid row">
          <div class="col-6">
            <h1>Как играть?</h1>
            <div class="row">
              <div class="col-9">
                <h5 class="py-3">Нажмите на кнопку «play» и отсканируйте QR код с экрана кинотеатра.</h5>
                <h5 class="py-3">Ваше имя должно появиться на экране кинотеатра</h5>
                <h5 class="py-3">После того как закончиться отсчёт времени игра автоматический начнётся</h5>
                <div class="borderer px-4 mt-4">
                  <h5 class="py-3">Выберите один из вариантов ответа, чем быстрее и правильнее вы будете отвечать тем больше вероятность победы</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid how-work w-100">
        <div class="container-fluid row mx-0 pt-5">
          <div class="col-5 pt-3">
            <h1>Скоро <h2>в кинотеатрах</h2></h1>
            <div class="buttons">
              <a href="" class="btn btn-outline-primary mt-5">Get App</a>
            </div>
            <div class="social-networks">
              <a href="">
                <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
              </a>
              <a href="">
                <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/>
              </a>
              <a href="">
                <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'youtube' }"/>
              </a>
            </div>
          </div>
          <div class="col-7">
            <img src="../assets/screen.png" class="w-100 ml-5 my-5 soon-img-2" alt="">
            <img src="../assets/8.png" class="soon-img" alt="">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped lang="scss">

  @font-face {
    font-family: 'Gilroy';
    src: url("../assets/fonts/Gilroy-Light.otf");
  }

  #home {
    font-family: Gilroy;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  li {
    font-weight: 900;
  }

  h1 {
    font-size: 100px;
    line-height: 143px;
  }

  h3 {
    font-size: 22px;
    line-height: 29px;
  }

  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  nav {
    .active {
      border-bottom: 4px solid #CD6BFC;
      color: #CD6BFC;
    }
  }

  .nav-link:hover,
  .nav-link:active {
    border-bottom: 4px solid #CD6BFC;
    color: #CD6BFC;
  }

  .back-side {
    position: absolute;
    width: 70%;
    top:25px;
    right: 0;
  }

  .btn-outline-primary,
  .btn-outline-danger {
    font-size: 14px;
    padding: 3% 9% 3% 9%;
    border-radius: 14px;
    color: #ffffff;
  }

  .borderer {
    background: linear-gradient(158.16deg, #CD6BFC 9.53%, #5C27FE 89.62%);
    border-radius: 10px;
  }

  .buttons {
    margin: 5% 0 10% 0;
  }

  .nav-link {
    margin-left: 40px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
    color: #ffffff;
  }

  .how-work {
    padding-top: 10%;
    padding-bottom: 10%;
    background-color: #151641;
  }

  .how-play {
    padding-top: 10%;
    background: url("../assets/screens.png") no-repeat;
    background-size: cover;
    padding-bottom: 75%;
  }
  
  .icon {
    color: #FF34DA;
    margin: 4%;
  }

  .icon:hover {
    color:#ffffff;
  }

  .soon-img {
    width: 80%;
    position: absolute;
    top:8%;
    left:-30%;
  }

  .soon-img-2 {
    border: 15px solid #0D0C26;
    border-right: none;
    box-sizing: border-box;
    border-radius: 36px 0 0 36px;
    box-shadow: 20px 20px 20px 4px rgba(0,0,0,0.5)
  }










  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }

</style>
