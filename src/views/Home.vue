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
            <h2>First subject</h2>
            <input class="w-50" type="text">
            <h2>Second subject</h2>
            <input class="w-50" type="text">
            <h2>Exam score</h2>
            <input type="number" class="w-25">
            <h2>City</h2>
            <input class="w-50" list="city">
            <datalist id="city" readonly="true">
              <option v-for="c in cities">{{c.name}}</option>
            </datalist>
            <br>
            <h2>Do you want to study in other city?
              <input style="zoom:2" type="checkbox"></h2>
            <button class="btn btn-dark w-50" @click="getData">Search</button>
          </div>
          <div v-if="recommendations" class="col-md-7" data-aos="fade-left">
            <div class="mx-5 p-5" style="background-color: #30304A">
              <h4>Find {{ recommendations.length }} professions:</h4>
              <hr>
              <h1>{{ recommendations[page].profession }}</h1>
              <hr>
              <h2>Specialities:</h2>
              <div class="specialities my-2" v-for="spec in recommendations[page].specialities">
                <button class="btn btn-dark" type="button" data-toggle="collapse"
                        :data-target="'#example'+spec.code" aria-expanded="false" :aria-controls="'example'+spec.code">
                  {{ spec.name }}
                </button>
                <div class="collapse bg-secondary" :id="'example'+spec.code">
                  <div class="p-2">
                    <h3>Code of speciality: {{ spec.code }}</h3>
                    <h3>Universities:</h3>
                    <div class="universities my-2" v-for="uni in spec.universities">
                      <button class="btn btn-dark" type="button" data-toggle="collapse"
                              :data-target="'#example'+uni.code" aria-expanded="false" :aria-controls="'example'+uni.code">
                        {{ uni.name }}
                      </button>
                      <div class="collapse bg-secondary" :id="'example'+uni.code">
                        <div class="p-2">
                          <h3>City: {{ uni.city }}</h3>
                          <h3>Total grants for this speciality: {{ uni.grant_total }} (rus:{{ uni.grant_rus }}, kaz:{{ uni.grant_kaz }})</h3>
                          <h3><a style="text-decoration:underline;" target="_blank" :href="'http://'+uni.site">Click here to visit their website</a></h3>
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
        <div class="soon-bottom mt-5 row container">
          <div class="col-4">
          </div>
          <div class="contacts col-5 d-flex flex-column">
            <h3 class="my-4">Contacts</h3>
            <h3 style="opacity: 0.5">+7 702 759 0126</h3>
            <h3 style="opacity: 0.5">+7 701 678 0211</h3>
            <h3 style="opacity: 0.5">emainfo@gmail.com</h3>
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
      page: 0,
      show: false,
      en: {
        aboutH1: 'About project',
        aboutText: 'This app will help to future students in universities and professions choose',
        howWorkH1: 'Fill the form',
        soonH1: 'Project members'
      },
      cities: {
          0: {
              id: 0,
              name: 'Pavlodar'
          },
          1: {
              id: 1,
              name: 'Almaty'
          }
      },
      recommendations: [{
        profession: 'UX/UI designeer',
        specialities: [
          {
            name: 'Computer Science and Software',
            code: '5B007876',
            universities: [
              {
                name: 'Suleyman Demirel University',
                site: 'sdu.edu.kz',
                code: 322,
                city: 'Almaty',
                grant_total: 222,
                grant_rus: 22,
                grant_kaz:111
              },
              {
                name: 'IITU',
                site: 'iitu.kz',
                code: 12,
                city: 'Almaty',
                grant_total: 222,
                            grant_rus: 22,
                            grant_kaz:111
                        }
                    ]
                },
                {
                    name: 'Information systems',
                    code: '5B00422',
                    universities: [
                        {
                            name: 'SDU',
                            site: 'sdu.kz',
                            code: 322,
                            city: 'Almaty',
                            grant_total: 222,
                            grant_rus: 22,
                            grant_kaz:111
                        },
                        {
                            name: 'IITU',
                            site: 'iitu.kz',
                            code: 12,
                            city: 'Almaty',
                            grant_total: 222,
                            grant_rus: 22,
                            grant_kaz:111
                        }
                    ]
                }
            ],
        },
          {
              profession: 'Backend Developer',
              specialities: [
                  {
                      name: 'CSS',
                      code: '5b0d05',
                      universities: [
                          {
                              name: 'SDU',
                              site: 'sdu.kz',
                              code: 322,
                              city: 'Almaty',
                              grant_total: 222,
                              grant_rus: 22,
                              grant_kaz:111
                          },
                          {
                              name: 'IITU',
                              site: 'iitu.kz',
                              code: 12,
                              city: 'Almaty',
                              grant_total: 222,
                              grant_rus: 22,
                              grant_kaz:111
                          }
                      ]
                  },
                  {
                      name: 'IS',
                      code: '5b005',
                      universities: [
                          {
                              name: 'SDU',
                              site: 'sdu.kz',
                              code: 322,
                              city: 'Almaty',
                              grant_total: 222,
                              grant_rus: 22,
                              grant_kaz:111
                          },
                          {
                              name: 'IITU',
                              site: 'iitu.kz',
                              code: 12,
                              city: 'Almaty',
                              grant_total: 222,
                              grant_rus: 22,
                              grant_kaz:111
                          }
                      ]
                  }
              ],
          }
      ],
    }
  },
  methods: {
      getData () {
          const api = 'http://130.61.58.200/api/v1/univer/recommendations/?first_subject=a&second_subject=b&city=ALL'
          axios.get(api).then((response) => {
              console.log(response.data)
              this.recommendations = response.data
          })
      }
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

  .back-side,
  .circle-1,
  .circle-2,
  .circle-3,
  .nav,
  .soon-img
  {
    position: absolute;
  }

  .back-side {
    width: 33%;
    top:0;
    left: 28rem;
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

  .soon-bottom,
  .xs-display
  {
    display: none;
  }

  .step {
    display: -webkit-box;
    margin-top: 1rem;
    width: 60%;
    img {
      width: 2.25rem;
    }
  }

</style>
