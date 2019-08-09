<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html,
  body,
  #app {
    background: #0C0C24;
    color: #ffffff;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;

    @media screen and (min-width:320px) {
      font-size: 6px;
    }

    @media screen and (min-width:375px) {
      font-size: 7px;
    }

    @media screen and (min-width:425px) {
      font-size: 8px;
    }

    @media screen and (min-width:768px) {
      font-size: 10px;
    }

    @media screen and (min-width: 780px) {
      font-size: 8px;
    }

    @media screen and (min-width: 860px) {
      font-size: 10px;
    }

    @media screen and (min-width:1024px) {
      font-size: 12px;
    }

    @media screen and (min-width:1200px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1680px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 20px;
    }

    @media screen and (min-width: 2048px) {
      font-size: 22px;
    }

    @media screen and (min-width: 2560px) {
      font-size: 28px;
    }

    @media screen and (min-width: 3840px) {
      font-size: 42px;
    }

    @media screen and (min-width: 4200px) {
      font-size: 56px;
    }
  }

  body {
    overflow-x: hidden;
  }

</style>
