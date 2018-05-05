<template>
  <div id="app">
    <notifications></notifications>
    <div class="md-page-container">
      <md-app md-mode="reveal">
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <routerlink to="/"><span class="md-title">Wolflib</span></routerlink>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible" class="md-alignment-top-center">
          <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
          <md-avatar class="md-large">
            <img src="./assets/img/avatar.png" />
          </md-avatar>
          <md-list>
            <md-list-item>
              <span class="md-list-item-text"><routerlink to="/books">MY BOOKS</routerlink></span>
            </md-list-item>
          </md-list>

          <md-list>
            <md-list-item>
              <span class="md-list-item-text"><routerlink to="/categories">MY CATEGORIES</routerlink></span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
    
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
     </md-app>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss" scoped>
 .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
