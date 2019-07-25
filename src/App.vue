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
    @media screen and (max-width:768px) {
      font-size: 8px;
    }
    @media screen and (max-width:320px) {
      font-size: 7px;
    }
  }

  #app {
    @media screen and (max-width: 768px) {
      overflow-x: hidden;
    }
  }

  body {
    overflow-x: hidden;
  }

</style>
