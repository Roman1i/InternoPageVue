<template>
  <div id="app">
    <HeaderBlock></HeaderBlock>
    <router-view></router-view>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'

export default {
  name: 'app',
  components: {
    HeaderBlock,
    FooterBlock
  },
  methods: {
    ...mapMutations(['SET_ACTIVE_PROJECT'])
  },
  computed: {
    ...mapGetters(['getHomeProjects', 'getHomeArticles', 'getBlogNews', 'sortedProjects'])
  }
}
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

a {
    text-decoration: none;
}

.center {
    margin-left: calc(50vw - 1200px/2);
    margin-right: calc(50vw - 1200px/2);
    width: 1200px;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

nav {
  a {
    color: #292F36;

    &.router-link-exact-active {
      color: #CDA274;
    }
  }
}
</style>
