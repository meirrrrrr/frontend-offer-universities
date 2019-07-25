<template>
  <div id="home" class="w-100 h-100">
      <div class="container-fluid p-3 navigation d-flex w-100">
        <div class="container-fluid">
          <img src="../assets/logo_kinoplay.png" class="logo pt-2" alt="logo">
          <nav class="nav float-right">
            <a class="nav-link" href="#">Menu</a>
            <a class="nav-link" href="#">Menu</a>
            <a class="nav-link" href="#">Menu</a>
            <a class="nav-link" href="#">Menu</a>
            <a class="nav-link active" href="#">Menu</a>
          </nav>
          <div class="nav-toggle">
            <div class="collapse" id="navbarToggleExternalContent">
              <div class="mt-5">
                <ul type="none">
                  <li><a href="">О проекте</a></li>
                  <li><a href="">Как работает</a></li>
                  <li><a href="">Как играть</a></li>
                  <li><a href="">Контакты</a></li>
                </ul>
              </div>
            </div>
            <nav class="navbar-dark">
              <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div class="container-fluid w-100 about" style="overflow: hidden">
        <div class="container-fluid row">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1>О проекте</h1>
            <h3>Kinoplay - интерактивная игровая платформа для кинотеатров. Играй в Kinoplay. Зарабатывай бонусы. Ходи в кино бесплатно!</h3>
          </div>
          <div class="col-md-7 d-flex">
            <div class="circle-1" data-aos="fade-up" data-aos-duration="3000"></div>
            <div class="circle-2" data-aos="fade-down" data-aos-duration="3000"></div>
            <div class="circle-3" data-aos="fade-left" data-aos-duration="3000"></div>
            <div class="circle-4" data-aos="fade-left" data-aos-duration="3000"></div>
            <img src="../assets/8.png" data-aos="zoom-in" data-aos-delay="1000" class="front-side" style="z-index: 999" alt="">
            <img src="../assets/9.png" data-aos="fade-right" data-aos-delay="1300" data-aos-duration="3000" class="back-side" alt="">
          </div>
        </div>
      </div>
      <div class="container-fluid how-work w-100">
        <div class="container-fluid row mx-0" >
          <div class="col-md-7 order-md-last d-flex flex-column align-items-center" data-aos="fade-left" data-aos-delay="1500" >
            <h1 class="xs-display">Как это работает</h1>
            <img src="../assets/screen.png" class="w-100 ml-5 my-5 soon-img-2" alt="">
          </div>
          <div class="col-md-5 order-md-first mb-5" data-aos="fade-up" data-aos-delay="800" >
              <h1 class="md-display">Как это работает</h1>
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
        </div>
      </div>
      <div class="how-play w-100" style="overflow-x: hidden;">
        <div class="row m-5">
          <div class="col-md-6 order-md-last gap"></div>
          <div class="col-md-6 order-md-first">
            <h1 data-aos="fade-up" data-aos-delay="800">Как играть?</h1>
            <div class="circle-5"></div>
            <div class="circle-6"></div>
            <div class="circle-7"></div>
            <div class="circle-8"></div>
            <div class="row">
              <div class="col-9">
                <div class="how-play-steps">
                  <h5 data-aos="fade-up" data-aos-delay="850" class="py-4"><span class="num">01</span></h5>
                  <h5 data-aos="fade-up" data-aos-delay="850" class="py-4">Для того чтобы войти в игру, введите PIN код с экранов кинотеатров</h5>
                </div>
                <div class="how-play-steps">
                  <h5 data-aos="fade-up" data-aos-delay="850" class="py-4"><span class="num">02</span></h5>
                  <h5 data-aos="fade-up" data-aos-delay="850" class="py-4">Отвечайте на вопросы и зарабатывайте баллы, которые вы сможете потратить в кассах кинотеатра</h5>
                </div>
                <div class="how-play-steps">
                  <h5 data-aos="fade-up" data-aos-delay="850" class="py-4"><span class="num">03</span></h5>
                  <h5 data-aos="fade-up" data-aos-delay="1000" class="py-4">Подключитесь к интернету</h5>
                </div>
                <div class="how-play-steps">
                  <h5 data-aos="fade-up" data-aos-delay="850" class="py-4"><span class="num">04</span></h5>
                  <h5 data-aos="fade-up" data-aos-delay="1000" class="py-4">В зависимости от вашего места получайте баллы</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid how-work w-100">
        <div class="container-fluid row mx-0">
          <div class="col-md-7 order-md-last">
            <img data-aos="fade-up" data-aos-delay="800" src="../assets/screen.png" class="w-100 ml-5 my-5 soon-img-2" alt="">
            <img data-aos="fade-up" data-aos-delay="1300" src="../assets/8.png" class="soon-img" alt="">
          </div>
          <div data-aos="fade-up" data-aos-delay="800" class="col-md-5 order-md-first py-3">
            <h1>Скоро</h1>
            <h2>в кинотеатрах</h2>
          </div>
        </div>
        <div class="soon-bottom container">
          <img src="../assets/logo_kinoplay.png" class="logo-bottom" alt="logo">
          <h3>info@kinoplay.kz</h3>
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
    font-size: 6rem;
    line-height: 10rem;
    @media screen and (max-width: 320px) {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 19px;
  }

  nav {
    .active {
      border-bottom: 4px solid #CD6BFC;
      color: #CD6BFC;
    }
  }

  .about {
    .col-md-7 {
      justify-content: center;
    }
  }

  .back-side {
    position: absolute;
    width: 41rem;
    top:.75rem;
    left: 16rem;
  }

  .circle-1 {
    position: absolute;
    z-index: 1000;
    width: 18rem;
    height: 18rem;
    bottom:-5rem;
    left: 3.25rem;
    border-radius: 50%;
    background: radial-gradient(301.16px at 83.63% 85.41%, #4D0EB1 0%, #2D0A8C 100%);
  }

  .circle-2 {
    position: absolute;
    width: 14rem;
    height: 14rem;
    top: 12rem;
    left: 7.25rem;
    border-radius: 50%;
    background: radial-gradient(205.97px at 83.63% 85.41%, #282A64 0%, #151641 100%);
    box-shadow: 10px 20px 50px #050512;
  }

  .circle-3 {
    position: absolute;
    width: 18rem;
    height: 18rem;
    right:-2rem;
    top:2.5rem;
    border-radius: 50%;
    background: radial-gradient(247.00px at 83.63% 85.41%, #4D0EB1 0%, #2D0A8C 100%);
  }

  .circle-4 {
    position: absolute;
    width: 7.25rem;
    height: 7.25rem;
    bottom: 10.5rem;
    right: -7rem;
    border-radius: 50%;
    background: radial-gradient(125.55px at 83.63% 85.41%, #282A64 0%, #151641 100%);
    box-shadow: .75rem 1.5rem 3.25rem #050512;
  }

  .circle-5 {
    position: absolute;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    top:110%;
    left:-30%;
    background: radial-gradient(315.11px at 83.63% 85.41%, #282A64 0%, #151641 100%);
    box-shadow: .75rem 1.5rem 3.25rem #050512;
  }

  .circle-6 {
    position: absolute;
    width: 7.25rem;
    height: 7.25rem;
    top:200%;
    left:10%;
    border-radius: 50%;
    background: radial-gradient(151.81px at 83.63% 85.41%, #4D0EB1 0%, #2D0A8C 100%);
  }

  .circle-7 {
    position: absolute;
    width: 34.25rem;
    height: 34.25rem;
    top:110%;
    left: 175%;
    border-radius: 50%;
    background: radial-gradient(483.34px at 83.63% 85.41%, #4D0EB1 0%, #2D0A8C 100%);
  }

  .circle-8 {
    position: absolute;
    width: 20rem;
    height: 20rem;
    top: 190%;
    left: 150%;
    border-radius: 50%;
    background: radial-gradient(315.11px at 83.63% 85.41%, #282A64 0%, #151641 100%);
    box-shadow: .75rem 1.5rem 3.25rem #050512;
  }

  .front-side {
    width: 75%;
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

  .how-play-steps {
    display: inline-flex;
  }

  .icon {
    color: #FF34DA;
    margin: 4%;
  }

  .icon:hover {
    color:#ffffff;
  }

  .logo {
    position: absolute;
    top: 2%;
    width: 8.25rem;
  }

  .nav-link:hover,
  .nav-link:active {
    border-bottom: 4px solid #CD6BFC;
    color: #CD6BFC;
  }

  .nav-link {
    margin-left: 40px;
    font-size: 0.85rem;
    line-height: 1rem;
    letter-spacing: 0.1em;
    color: #ffffff;
  }

  .nav-toggle {
    display: none;
  }

  .num {
    display: inline;
    color: #FF34DA;
    margin-left: 1rem;
    margin-right: 3rem;
  }

  .soon-img {
    width: 22.75rem;
    position: absolute;
    top:5rem;
    left:-7rem;
  }

  .soon-img-2 {
    border: 1rem solid #0D0C26;
    border-right: none;
    box-sizing: border-box;
    border-radius: 2.5rem 0 0 2.5rem;
    box-shadow: 20px 20px 20px 4px rgba(0,0,0,0.5)
  }

  .soon-bottom {
    display: none;
  }

  .xs-display {
    display: none;
  }

  @media screen and (max-width:768px) {

    [data-aos] {
      /*CSS transitions*/
      -o-transition-property: none !important;
      -moz-transition-property: none !important;
      -ms-transition-property: none !important;
      -webkit-transition-property: none !important;
      transition-property: none !important;
      /*CSS transforms*/
      -o-transform: none !important;
      -moz-transform: none !important;
      -ms-transform: none !important;
      -webkit-transform: none !important;
      transform: none !important;
      /*CSS animations*/
      -webkit-animation: none !important;
      -moz-animation: none !important;
      -o-animation: none !important;
      -ms-animation: none !important;
      animation: none !important;
    }

    #home {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .about {
      margin-top: 5rem;
      .col-md-7 {
        justify-content: normal;
      }
    }

    .back-side {
      left: 4rem;
    }

    .circle-4 {
      display: none;
    }

    .circle-1 {
      left:-14rem;
    }

    .circle-2 {
      top: 0;
      left: 30rem;
    }

    .circle-3 {
      width: 14rem;
      height: 14rem;
      top:45rem;
      left: 35rem;
    }

    .circle-5 {
      width: 12rem;
      height: 12rem;
      top:-62rem;
      left:-6rem;
      background: radial-gradient(102.58px at 83.63% 85.41%, #4D0EB1 0%, #2D0A8C 100%);
    }

    .circle-6 {
      width: 8rem;
      height: 8rem;
      top:-55rem;
      left:-5rem;
      border-radius: 50%;
      background: radial-gradient(68.93px at 83.63% 85.41%, #282A64 0%, #151641 100%);
    }

    .circle-7 {
      width: 20rem;
      height: 20rem;
      top:-15rem;
      left: 35rem;
    }

    .circle-8 {
      width: 10rem;
      height: 10rem;
      top: -35rem;
      left: 40rem;
    }

    .front-side {
      margin-left: -4rem;
    }

    .gap {
      padding-top: 100%;
    }

    .how-play,
    .how-work {
      width: 100%;
    }

    .logo-bottom {
      width: 4.5rem;
    }

    .navbar-toggler-icon {
      width: 3rem;
      height: 3rem;
    }

    .nav-link {
      display:none;
    }

    .nav-toggle {
      display: block;
      width: 95%;
      ul {
        padding-top: 15%;
        padding-left: 0;
        li {
          font-size: 3rem;
        }
      }
    }

    .navigation {
      margin-top: 3%;
      margin-bottom: 3%;
    }

    .num {
      margin-right: 6rem;
    }

    .how-play {
      background-size: contain;
      .col-md-6 {
        margin-top:10%;
      }
    }

    .logo {
      position: absolute;
      top: 2%;
    }

    .md-display {
      display: none;
    }

    .soon-img {
      width: 16.5rem;
      position: absolute;
      top:5rem;
      left:-2rem;
    }

    .soon-img-2 {
      margin-right: -22%;
    }

    .soon-bottom {
      display: inline-flex;
      margin-top: 8rem;
      h3 {
        margin-left: 45%;
        color: #FF34DA;
      }
    }

    .xs-display {
      display: flex;
    }
  }

</style>
