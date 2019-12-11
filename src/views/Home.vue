<template>
  <div id="home" class="w-100 h-100">
    <div class="circle-9"></div>
    <div class="circle-10"></div>
    <div class="circle-11"></div>
    <div class="circle-12"></div>
    <div class="container-fluid navigation py-3 d-flex w-100">
        <div class="container-fluid">
          <img src="https://owips.com/sites/default/files/clipart/search-icon/203074/search-icon-purple-203074-7172937.png" class="md-display logo pt-2" alt="logo">
          <nav class="nav float-right">
            <a class="nav-link" href="#about"><span>&nbsp;&nbsp;Abou</span>t</a>
            <a class="nav-link" href="#how-work"><span>&nbsp;&nbsp;How it work</span>s</a>
            <a class="nav-link" href="#contacts"><span>&nbsp;&nbsp;Contact</span>s</a>
          </nav>
        </div>
      </div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section container-fluid h-100 about" @keypress="$refs.fullpage.api.setScrollingSpeed(1000)" @wheel="$refs.fullpage.api.setScrollingSpeed(1000)" style="overflow: hidden">
        <div class="container-fluid row mx-0" id="about">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1>{{ en.aboutH1 }}</h1>
            <h3 class="mt-4">{{ en.aboutText }}</h3>
          </div>
          <div class="col-md-7 d-flex">
            <div class="circle-1" data-aos="fade-up" data-aos-duration="3000"></div>
            <div class="circle-2" data-aos="fade-down" data-aos-duration="3000"></div>
            <div class="circle-3" data-aos="fade-left" data-aos-duration="3000"></div>
            <div class="circle-4" data-aos="fade-left" data-aos-duration="3000"></div>
            <div class="md-display text-center">
              <img src="https://images.vexels.com/media/users/3/128480/isolated/preview/0582ce1095705aa691a4938302de2dce-purple-magnifier-line-icon-svg-by-vexels.png" data-aos="zoom-in" data-aos-delay="1000" class="w-100 front-side" style="z-index: 999" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="section container-fluid how-work h-100 w-100" @keypress="$refs.fullpage.api.setScrollingSpeed(1000)" @wheel="$refs.fullpage.api.setScrollingSpeed(1000)" id="how-work" style="overflow-x: hidden">
        <div class="container-fluid row mx-0" >
          <div class="col-md-5 order-md-first d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="800" >
            <h1 class="pb-5 md-display">{{ en.howWorkH1 }}</h1>
            <h2 class="py-2">First subject</h2>
            <input class="w-50" v-model="firstSub" list="firstsub" type="text">
            <datalist id="firstsub">
              <option v-for="subject in subjects">{{subject}}</option>
            </datalist>
            <h2 class="py-2">Second subject</h2>
            <input class="w-50" v-model="secondSub" list="secondsub" type="text">
            <datalist id="secondsub">
              <option v-for="subject in subjects">{{subject}}</option>
            </datalist>
            <h2 class="py-2">Exam score</h2>
            <input type="number" v-model="exam" class="w-25">
            <h2 class="py-2">City</h2>
            <input class="w-50" v-model="city" list="city">
            <datalist id="city">
              <option v-for="city in cities">{{city}}</option>
            </datalist>
            <br>
            <div class="py-2 d-inline-flex">
              <h2>Do you want to study in other city?</h2>
              <input class="ml-1" id="checkbox" style="zoom:2" type="checkbox" v-model="checked">
            </div>
            <div class="py-2 w-75 d-inline-flex justify-content-between">
              <h2>Select study language</h2>
              <div class="d-inline-flex">
                <h2>
                <input type="radio" value="ru" v-model="lang" v-on:change="this.generateLists">RU</h2>
              </div>
              <div class="d-inline-flex">
                <h2>
                <input type="radio" value="en" v-model="lang" v-on:change="this.generateLists">EN</h2>
              </div>
              <div class="d-inline-flex">
                <h2>
                <input type="radio" value="kz" v-model="lang" v-on:change="this.generateLists">KZ</h2>
              </div>
            </div>
            <button class="btn btn-dark w-50" @click="getData">Search</button>
          </div>
          <div v-if="recommendations" class="col-md-7" data-aos="fade-left">
            <div class="mx-5 p-5" style="background-color: #30304A">
              <h4>Find {{ recommendations.length }} professions:</h4>
              <hr>
              <h1>{{ recommendations[page].profession }}</h1>
              <hr>
              <h2>Specialities:</h2>
              <div class="specialities my-2 mx-1 d-inline-block" v-for="spec in recommendations[page].specialities">
                <button class="btn btn-dark" type="button" data-toggle="collapse"
                        :data-target="'#example'+spec.code.split(' ')[0]" aria-expanded="false" :aria-controls="'example'+spec.code.split(' ')[0]">
                  {{ spec.name }}
                </button>
                <div class="collapse bg-secondary" :id="'example'+spec.code.split(' ')[0]">
                  <div class="p-2">
                    <h3>Code of speciality: {{ spec.code }}</h3>
                    <h3>Universities:</h3>
                    <div class="universities d-inline-block mx-1 my-2" v-for="uni in spec.universities">
                      <button class="btn btn-dark" type="button" data-toggle="collapse"
                              :data-target="'#example'+uni.code" aria-expanded="false" :aria-controls="'example'+uni.code">
                        {{ uni.name }}
                      </button>
                      <div class="collapse bg-secondary" :id="'example'+uni.code">
                        <div class="p-2">
                          <h3>City: {{ uni.city }}</h3>
                          <h3>Total grants for this speciality: {{ uni.grant_total }}</h3>
                          <h3><a style="text-decoration:underline;" :href="uni.site">Click here to visit their website</a></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between m-5">
                <button class="btn btn-dark w-25" @click="page--">Prev</button>
                <button class="btn btn-dark w-25" @click="page++">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section container-fluid soon how-work h-100 w-100" @keypress="$refs.fullpage.api.setScrollingSpeed(1000)" @wheel="$refs.fullpage.api.setScrollingSpeed(1000)" style="overflow: hidden">
        <div class="container-fluid row mx-0" id="contacts">
          <div class="col-md-7 order-md-last">
            <img data-aos="fade-up" data-aos-delay="800" src="https://images.vexels.com/media/users/3/128480/isolated/preview/0582ce1095705aa691a4938302de2dce-purple-magnifier-line-icon-svg-by-vexels.png" class="w-50 soon-img-2" alt="">
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="800" class="col-md-5 order-md-first d-flex flex-column justify-content-center">
            <h1>{{ en.soonH1 }}</h1>
            <br>
            <h2>Mukushev Meir</h2>
            <h2>Melis Yessey</h2>
            <h2>Tungatarov Aibol</h2>
          </div>
        </div>
      </div>
    </full-page>
  </div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        scrollBar: true,
        scrollingSpeed: 1000
      },
      firstSub: null,
      secondSub: null,
      city: null,
      exam: null,
      checked: false,
      page: 0,
      show: false,
      lang: null,
      en: {
        aboutH1: 'About project',
        aboutText: 'This app will help to future students in choose universities and professions',
        howWorkH1: 'Fill the form',
        soonH1: 'Project members'
      },
      subjects: null,
      cities: null,
      recommendations: null,
    }
  },
  methods: {
      generateLists () {
          this.getCity()
          this.getSubs()
      },
      getData () {
          const city = this.checked ? 'ALL' : this.city
          console.log(city)
          const api = 'http://130.61.58.200/api/v1/univer/recommendations/?first_subject='+this.firstSub+'&second_subject='+this.secondSub+'&city='+city+'&score='+this.exam+'&interface_lang='+this.lang
          axios.get(api).then((response) => {
              this.recommendations = response.data
          })
      },
      getCity () {
          const api = 'http://130.61.58.200/api/v1/univer/city/list?interface_lang='+this.lang
          axios.get(api).then((response) => {
              this.cities = response.data.data
          })
      },
      getSubs () {
          const api = 'http://130.61.58.200/api/v1/univer/subject/list?interface_lang='+this.lang
          axios.get(api).then((response) => {
              this.subjects = response.data.data
          })
      }
  },
  mounted () {
      this.getCity()
      this.getSubs()
  }
}
</script>

<style scoped lang="scss">

  #home {
    font-family: Gilroy;
  }

  h1 {
    font-size: 4.75rem;
    line-height: 4.25rem;
    @media screen and (max-width: 320px) {
      font-size: 5rem;
    }
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1rem;
    line-height: 2rem;
  }

  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: .95rem;
    line-height: 1rem;
  }

  h3,
  h5
  {
    font-family: sf-ui-display;
  }

  li,
  h1
  {
    font-weight: 600;
  }

  .about {
    .col-md-7 {
      justify-content: center;
    }
    h3 {
      width: 75%;
    }
  }

  input {
    border: #fff;
    background-color: #fff;
    font-size: 1.2rem;
    padding-left: 10px;
    padding-right: 10px;
  }

  .circle-1,
  .circle-2,
  .circle-3,
  .nav,
  .soon-img
  {
    position: absolute;
  }

  .circle-1,
  .circle-2,
  .circle-3 {
    border-radius: 50%;
  }

  .collapse {
    border-radius: 0 10px 10px 10px;
  }

  .circle-1 {
    z-index: 300;
    width: 18rem;
    height: 18rem;
    bottom:-5rem;
    left: 3.25rem;
    background: radial-gradient(301.16px at 83.63% 85.41%, #F997FF 0%, #2D0A8C 100%);
  }

  .circle-2 {
    width: 14rem;
    height: 14rem;
    top: 0rem;
    left: -2rem;
    background: radial-gradient(205.97px at 83.63% 85.41%, #E788EE 0%, #151641 100%);
    box-shadow: 10px 20px 50px #050512;
  }

  .circle-3 {
    width: 14rem;
    height: 14rem;
    right:2rem;
    top:4rem;
    background: radial-gradient(247.00px at 83.63% 85.41%, #4D0EB1 0%, #E788EE 100%);
  }

  .contacts {
    h3,
    h5 {
      font-family: Gilroy;
    }
  }

  .front-side {
    width: 35%;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .how-work {
    padding-top: 7%;
    padding-right: 0;
    background-color: #44447F;

    .container-fluid {
      padding-right: 0;
    }

    .order-md-last {
      padding-right: 0;
    }
  }

  .logo {
    width: 5rem;
    padding-left: 15px;
  }

  .md-display {
    display: block;
  }

  .nav {
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

  .navigation {
    position: fixed;
    z-index: 999;
  }

  .soon {
    .soon-img-2 {
      width: 95%;
      float: right;
    }
    padding-top: 10%;
  }

</style>
