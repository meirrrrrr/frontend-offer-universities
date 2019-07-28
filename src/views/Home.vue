<template>
  <div id="home" class="w-100 h-100">
    <div class="circle-9"></div>
    <div class="circle-10"></div>
    <div class="circle-11"></div>
    <div class="circle-12"></div>
    <div class="language md-display">
      <button class="lang-selector" v-on:click="lang=true"><span>&nbsp;R</span>U</button>
      <button class="lang-selector" v-on:click="lang=false"><span>&nbsp;EN</span>G</button>
    </div>
    <div class="container-fluid navigation py-3 d-flex w-100">
        <div class="container-fluid">
          <img src="../assets/logo.svg" class="md-display logo pt-2" alt="logo">
          <nav v-if="lang" class="nav float-right">
            <a class="nav-link" href="#about"><span>&nbsp;&nbsp;О проект</span>е</a>
            <a class="nav-link" href="#how-work"><span>&nbsp;&nbsp;Как работае</span>т</a>
            <a class="nav-link" href="#how-play"><span>&nbsp;&nbsp;Как играт</span>ь</a>
            <a class="nav-link" href="#contacts"><span>&nbsp;&nbsp;Контакт</span>ы</a>
          </nav>
          <nav v-else class="nav float-right">
            <a class="nav-link" href="#about"><span>&nbsp;&nbsp;Abou</span>t</a>
            <a class="nav-link" href="#how-work"><span>&nbsp;&nbsp;How it work</span>s</a>
            <a class="nav-link" href="#how-play"><span>&nbsp;&nbsp;How to pla</span>y</a>
            <a class="nav-link" href="#contacts"><span>&nbsp;&nbsp;Contact</span>s</a>
          </nav>
          <div class="nav-toggle">
            <nav class="navbar-dark">
              <img src="../assets/logo.svg" class="logo-mobile pt-2" alt="logo">
              <button class="navbar-toggler collapsed float-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
              </button>
            </nav>
            <div class="collapse" id="navbarsExampleDefault">
                <ul v-if="lang" type="none">
                  <li><a href="#about">О проекте</a></li>
                  <li><a href="#how-work">Как работает</a></li>
                  <li><a href="#how-play">Как играть</a></li>
                  <li><a href="#contacts">Контакты</a></li>
                </ul>
                <ul v-else type="none">
                  <li><a href="#about">About</a></li>
                  <li><a href="#how-work">How it works</a></li>
                  <li><a href="#how-play">How to play</a></li>
                  <li><a href="#contacts">Contacts</a></li>
                </ul>
                <div class="language d-inline-flex">
                  <button class="lang-selector" v-on:click="lang=true"><span>&nbsp;R</span>U</button>
                  <button class="lang-selector" v-on:click="lang=false"><span>&nbsp;EN</span>G</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section container-fluid h-100 about" style="overflow: hidden">
        <div class="container-fluid row mx-0" id="about">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1 v-if="lang">{{ ru.aboutH1 }}</h1>
            <h1 v-else>{{ en.aboutH1 }}</h1>
            <h3 class="mt-3" v-if="lang">{{ ru.aboutText }}</h3>
            <h3 class="mt-4" v-else>{{ en.aboutText }}</h3>
          </div>
          <div class="col-md-7 d-flex">
            <div class="circle-1" data-aos="fade-up" data-aos-duration="3000"></div>
            <div class="circle-2" data-aos="fade-down" data-aos-duration="3000"></div>
            <div class="circle-3" data-aos="fade-left" data-aos-duration="3000"></div>
            <div class="circle-4" data-aos="fade-left" data-aos-duration="3000"></div>
            <div class="md-display">
              <img src="../assets/8.png" data-aos="zoom-in" data-aos-delay="1000" class="front-side" style="z-index: 200" alt="">
              <img src="../assets/9.png" data-aos="fade-right" data-aos-delay="1300" data-aos-duration="3000" class="back-side" alt="">
            </div>
            <div class="xs-display my-5">
              <img src="../assets/first_block.png" class="w-100 h-100" style="z-index: 200" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="section container-fluid how-work h-100 w-100" id="how-work" style="overflow-x: hidden">
        <div class="container-fluid row mx-0" >
          <div class="col-md-7 order-md-last d-flex flex-column" data-aos="fade-left" data-aos-delay="1500" >
            <h1 v-if="lang" class="w-75 xs-display">{{ ru.howWorkH1 }}</h1>
            <h1 v-else class="w-75 xs-display">{{ en.howWorkH1 }}</h1>
            <img src="../assets/screen.png" class="soon-img-2 xl-w-100" alt="">
          </div>
          <div class="col-md-5 order-md-first d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="800" >
              <h1 v-if="lang" class="md-display">{{ ru.howWorkH1 }}</h1>
              <h1 v-else class="md-display">{{ en.howWorkH1 }}</h1>
            <div class="step pt-5">
              <img src="../assets/li.svg" class="align-self-center" alt="">
              <div class="d-flex flex-column pt-2 px-4">
                <h5>Скачайте приложение</h5>
                <h5 style="opacity: 0.5">Войдите в приложение и зарегистрируйтесь</h5>
              </div>
            </div>
            <div class="step">
              <img src="../assets/li.svg" class="align-self-center" alt="">
              <div class="d-flex flex-column pt-2 px-4">
                <h5>Введите PIN код с экрана кинотеатра</h5>
                <h5 style="opacity: 0.5">Заходите в зал кинотеатра и пропишите PIN код с экрана для подключения к игре</h5>
              </div>
            </div>
            <div class="step">
              <img src="../assets/li.svg" class="align-self-center" alt="">
              <div class="d-flex flex-column pt-2 px-4">
                <h5>Отвечайте на вопросы и зарабатывайте</h5>
                <h5 style="opacity: 0.5">Отвечая на вопросы игры правильно, Вы зарабатываете бонусы которые сможете тратить на кассах кинотеатра</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section container-fluid how-play" data-aos="fade-up" data-aos-anchor-placement="top-center" style="overflow-x: hidden;">
        <div class="container-fluid row mx-0" id="how-play">
          <div class="col-md-6 order-md-last gap"></div>
          <div class="col-md-6 order-md-first">
            <h1 class="py-5" v-if="lang" data-aos="fade-up" data-aos-delay="800">{{ ru.howPlayH1 }}</h1>
            <h1 class="py-5" v-else data-aos="fade-up" data-aos-delay="800">{{ en.howPlayH1 }}</h1>
            <div class="circle-5"></div>
            <div class="circle-6"></div>
            <div class="circle-7"></div>
            <div class="circle-8"></div>
            <div class="row" id="steps">
              <div class="col-md-6 col-xl-9">
                <div data-aos="fade-up" data-aos-delay="850" data-aos-anchor="#steps" class="how-play-steps">
                  <h5 class="py-3"><span class="num">01</span></h5>
                  <h5 class="steps py-3">Для того чтобы войти в игру, введите PIN код с экранов кинотеатров</h5>
                </div>
                <div data-aos="fade-up" data-aos-delay="900" data-aos-anchor="#steps" class="how-play-steps">
                  <h5 class="py-3"><span class="num">02</span></h5>
                  <h5 class="steps py-3">Отвечайте на вопросы и зарабатывайте баллы, которые вы сможете потратить в кассах кинотеатра</h5>
                </div>
                <div data-aos="fade-up" data-aos-delay="950" data-aos-anchor="#steps" class="how-play-steps">
                  <h5 class="py-3"><span class="num">03</span></h5>
                  <h5 class="steps py-3">Подключитесь к интернету</h5>
                </div>
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-anchor="#steps" class="how-play-steps">
                  <h5 class="py-3"><span class="num">04</span></h5>
                  <h5 class="steps py-3">В зависимости от вашего места получайте баллы</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section container-fluid soon how-work h-100 w-100" style="overflow: hidden">
        <div class="container-fluid row mx-0" id="contacts">
          <div class="col-md-7 order-md-last">
            <img data-aos="fade-up" data-aos-delay="800" src="../assets/screen.png" class="soon-img-2" alt="">
            <img data-aos="fade-up" data-aos-delay="1300" src="../assets/8.png" class="soon-img" alt="">
          </div>
          <div v-if="lang" data-aos="fade-up" data-aos-anchor="#contacts" data-aos-delay="800" class="col-md-5 order-md-first d-flex flex-column justify-content-between">
            <h1>{{ ru.soonH1 }}
              <h2>{{ ru.soonH2 }}</h2>
            </h1>
            <div class="md-display">
              <div class="contacts d-flex flex-column">
                <h5 class="my-4">По вопросу <br>сотрудничества</h5>
                <h5 style="opacity: 0.5">+7 707 555 7437</h5>
                <h5 style="opacity: 0.5">+7 701 678 0211</h5>
                <h5 style="opacity: 0.5">info@kinoplay.kz</h5>
              </div>
            </div>
          </div>
          <div v-else data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="800" class="col-md-5 order-md-first d-flex flex-column justify-content-center">
            <h1>{{ en.soonH1 }}</h1>
            <h2>{{ en.soonH2 }}</h2>
          </div>
        </div>
        <div class="soon-bottom mt-5 row container">
          <div class="col-4">
            <img src="../assets/logo.svg" class="logo-bottom" alt="logo">
          </div>
          <div class="contacts col-5 d-flex flex-column">
            <h3 class="my-4">По вопросу сотрудничества</h3>
            <h3 style="opacity: 0.5">+7 707 555 7437</h3>
            <h3 style="opacity: 0.5">+7 701 678 0211</h3>
            <h3 style="opacity: 0.5">info@kinoplay.kz</h3>
          </div>
        </div>
      </div>
    </full-page>
  </div>

</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      options: {
        scrollBar: true
      },
      lang: true,
      en: {
        aboutH1: 'About project',
        aboutText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam blanditiis nam officiis placeat quidem.',
        howWorkH1: 'How it works',
        howPlayH1: 'How to play?',
        soonH1: 'Coming',
        soonH2: 'soon'
      },
      ru: {
        aboutH1: 'О проекте',
        aboutText: 'Kinoplay - интерактивная игровая платформа для кинотеатров. Играй в Kinoplay. Зарабатывай бонусы. Ходи в кино бесплатно!',
        howWorkH1: 'Как это работает',
        howPlayH1: 'Как играть?',
        soonH1: 'Скоро',
        soonH2: 'в кинотеатрах'
      }
    }
  }
}
</script>

<style scoped lang="scss">

  #home {
    font-family: Gilroy;
  }

  li {
    font-weight: 600;
  }

  h1 {
    font-weight: 600;
    font-size: 4.75rem;
    line-height: 4.25rem;
    @media screen and (max-width: 320px) {
      font-size: 5rem;
    }
  }

  h3 {
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 2rem;
  }

  h5 {
    font-family: Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: .95rem;
    line-height: 1rem;
  }

  .about {
    .col-md-7 {
      justify-content: center;
    }
    h3 {
      width: 75%;
    }
  }

  .about,
  .how-play,
  .how-work {
    height: 100%;
  }

  .back-side {
    position: absolute;
    width: 37rem;
    top:0;
    left: 14rem;
  }

  .circle-1 {
    position: absolute;
    z-index: 300;
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
    width: 14rem;
    height: 14rem;
    right:2rem;
    top:4rem;
    border-radius: 50%;
    background: radial-gradient(247.00px at 83.63% 85.41%, #4D0EB1 0%, #2D0A8C 100%);
  }

  .contacts {
    h3,
    h5 {
      font-family: Gilroy;
    }
  }

  .front-side {
    width: 18rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .how-work {
    padding-top: 7%;
    padding-right: 0;
    background-color: #151641;
    .container-fluid {
      padding-right: 0;
    }
    .order-md-last {
      padding-right: 0;
    }
  }

  .how-play {;
    height: 100% !important;
    padding-top: 5%;
    background: url("../assets/2b.png") no-repeat;
    background-size: cover;
    padding-bottom: 60%;
  }

  .how-play-steps {
    display: inline-flex;
    .steps {
      width: 65%;
    }
  }

  .icon {
    color: #FF34DA;
    margin: 4%;
  }

  .icon:hover {
    color:#ffffff;
  }

  .language {
    display: inline-flex;
    position: fixed;
    z-index: 910;
    bottom:10%;
    right: 5%;
  }

  .lang-selector {
    font-size: .75rem;
    border: none;
    background: none;
    line-height: 1rem;
    margin-right: .5rem;
    padding: .5rem 0 0 .5rem;
    color: #ffffff;
  }

  .lang-selector:hover,
  .lang-selector:active,
  .lang-selector:focus {
    span {
      border-bottom: 1px solid #1FD5FF;
    }
    color: #1FD5FF;
  }

  .lang-selector:focus {
    outline: none;
  }

  .logo {
    width: 5rem;
    padding-left: 15px;
  }

  .md-display {
    display: flex;
  }

  .nav {
    position: absolute;
    right: 3%;
    top:0;
    padding-top: .75rem;
  }

  .nav-link:hover,
  .nav-link:active {
    span {
      padding-bottom: 3px;
      border-bottom: .1rem solid #CD6BFC;
    }
    color: #CD6BFC;
  }

  .nav-link {
    margin-left: 2rem;
    font-size: 0.85rem;
    line-height: 1rem;
    letter-spacing: 0.1em;
    color: #ffffff;
  }

  .nav-toggle {
    display: none;
  }

  .navigation {
    position: fixed;
    z-index: 999;
  }

  .num {
    font-size: .85rem;
    color: #FF34DA;
    margin-left: 1rem;
    margin-right: 3rem;
  }

  .soon {
    .soon-img-2 {
      width: 95%;
      float: right;
    }
    padding-top: 10%;
  }

  .soon-img {
    width: 22%;
    position: absolute;
    bottom:0;
    left:0;
  }

  .soon-img-2 {
    width: 100%;
    border: 1rem solid #0D0C26;
    border-right: none;
    box-sizing: border-box;
    border-radius: 2.5rem 0 0 2.5rem;
    box-shadow: 20px 20px 70px 0px rgba(0, 0, 0, 0.5);
  }

  .soon-bottom {
    display: none;
  }

  .step {
    display: -webkit-box;
    margin-top: 1rem;
    img {
      width: 2.25rem;
    }
    /*h5 {*/
    /*  width: 65% !important;*/
    /*}*/
    width: 60%;
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

    h1 {
      font-size: 5.75rem;
      line-height: 5rem;
    }

    h3 {
      font-size: 1.8rem;
      width: 80% !important;
    }

    .about {
      margin-top: 5rem;
      .col-md-7 {
        justify-content: normal;
      }
    }

    .about,
    .how-work,
    .how-play {
      .container-fluid {
        padding-right: 0;
        padding-left: 0;
      }
      height: inherit !important;
    }

    .circle-1,
    .circle-2,
    .circle-3,
    .circle-4,
    .circle-5,
    .circle-6,
    .circle-7,
    .circle-8 {
      display: none;
    }

    .gap {
      padding-bottom: 50%;
      padding-top: 100%;
    }

    .how-play,
    .how-work {
      width: 100%;
    }

    .language {
      padding-left: 0;
      position: relative;
      margin-top:1rem;
      left: 0;
      margin-left: 0;
      .lang-selector {
        padding-left: 0;
        margin-left: 0;
        font-size: 1.5rem;
        font-weight: normal;
        opacity: 0.5;
      }
    }

    .logo-bottom {
      width: 8rem;
      margin: 0;
    }

    .nav-link {
      display:none;
    }

    .navbar-toggler {
      border: none;
      background: transparent !important;
    }

    .nav-toggle {
      display: block;
      width: 100%;
      ul {
        padding-top: 20%;
        padding-left: 0;
        margin-left: 0;
        li {
          font-size: 3rem;
        }
      }
    }

    .navigation {
      position: relative;
      margin-top: 3%;
      margin-bottom: 3%;
    }

    .num {
      font-size: 1.5rem;
      margin-right: 6rem;
    }

    .how-play {
      background: url("../assets/3b.png") no-repeat;
      padding-bottom: 0;
      background-size: contain;
      .col-md-6 {
        margin-top:10%;
        h1 {
          padding-top: 20% !important;
          padding-bottom: 0 !important;
        }
        h5 {
          font-size: 1.75rem;
          line-height: 2rem;
        }
      }
    }

    .how-work {
      h1 {
        padding-top: 10%;
      }
      .order-md-first {
        padding-bottom: 10%;
      }
      .order-md-last {
        padding-right: 0;
        margin-right: 0;
      }
      .container-fluid {
        padding-right: 0;
        margin-right: 0;
      }
      padding-right: 0;
      margin-right: 0;
    }

    .how-play-steps {
      padding-bottom: 4rem;
    }

    .icon-bar {
      width: 22px;
      height: 2px;
      background-color: #B6B6B6;
      display: block;
      transition: all 0.2s;
      margin-top: 4px
    }

    .logo-mobile {
      width: 8rem;
    }

    .md-display {
      display: none;
    }

    .soon-img-2 {
      width: 90%;
      float:right;
      margin-top: 10%;
    }

    .soon-bottom {
      display: inline-flex;
      padding-bottom: 2rem;
    }

    .step {
      img {
        width: 7rem;
      }
      h5 {
        padding-top: 2rem;
        font-size: 2rem;
        line-height: 2.5rem;
      }
    }

    .xs-display {
      display: flex;
    }

    .xl-w-100 {
      width: 100% !important;
    }

    /*Animation*/

    .navbar-toggler .top-bar {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }

    .navbar-toggler .middle-bar {
      opacity: 0;
    }

    .navbar-toggler .bottom-bar {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }

    .navbar-toggler.collapsed .top-bar {
      transform: rotate(0);
    }

    .navbar-toggler.collapsed .middle-bar {
      opacity: 1;
    }

    .navbar-toggler.collapsed .bottom-bar {
      transform: rotate(0);
    }

    .navbar-toggler .top-bar {
    transform: rotate(45deg);
    transform-origin: 10% 10%;
  }

    .navbar-toggler .middle-bar {
      opacity: 0;
    }

    .navbar-toggler .bottom-bar {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }

    .navbar-toggler.collapsed .top-bar {
      transform: rotate(0);
    }

    .navbar-toggler.collapsed .middle-bar {
      opacity: 1;
    }

    .navbar-toggler.collapsed .bottom-bar {
      transform: rotate(0);
    }
  }

  @media screen and (max-width: 767px) {
    .circle-9 {
      position: absolute;
      border-radius: 50%;
      width: 10rem;
      height: 10rem;
      right: 3rem;
      top: 35rem;
      background: radial-gradient(64.01px at 83.63% 85.41%, #282A64 0%, #151641 100%);
      box-shadow: 10px 20px 50px #050512;
    }

    .circle-10 {
      position: absolute;
      border-radius: 50%;
      width: 22rem;
      height: 22rem;
      left: -10rem;
      top: 75rem;
      z-index: 400;
      background: radial-gradient(117.35px at 83.63% 85.41%, #4D0EB1 0%, #2D0A8C 100%);
    }

    .circle-11 {
      position: absolute;
      border-radius: 50%;
      width: 18rem;
      height: 18rem;
      left: -5rem;
      top: 210rem;
      background: radial-gradient(93.55px at 83.63% 85.41%, #4D0EB1 0%, #2D0A8C 100%);
    }

    .circle-12 {
      position: absolute;
      border-radius: 50%;
      width: 12rem;
      height: 12rem;
      left: -4rem;
      top: 222rem;
      background: radial-gradient(68.93px at 83.63% 85.41%, #282A64 0%, #151641 100%);
      box-shadow: 10px 20px 50px #050512;
    }
  }

</style>
