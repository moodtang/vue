<template>

  <!--实现响应式导航栏-->
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
   <!--   <tags-view></tags-view>-->
      <tags-views></tags-views>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>

  import Navbar from './components/Navbar'
  import AppMain from './components/AppMain'
  import Sidebar from './components/Sidebar/index'
  import ResizeMixin from './mixin/ResizeHandler'
  import { mapGetters } from 'vuex'
  import  TagsViews from  './components/TagsView'

  export default {
    name: "Layout",
    components: {
      Navbar,
      Sidebar,
      AppMain,
      TagsViews
    },
    mounted(){

    },
    mixins: [ResizeMixin],
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      sidebar() {
        return this.$store.state.app.sidebar
      },
      device() {
        return this.$store.state.app.device
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('closeSideBar', { withoutAnimation: false })
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "src/styles/mixin.scss";
  .app-wrapper {
    height: 100%;

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }

    .el-container {
      /*  line-height: 100%;*/
      height: 100%;
    }
    .app-wrapper {
      @include clearfix;
      position: relative;
      height: 100%;
      width: 100%;
    }
    .drawer-bg {
      background: #000;
      opacity: 0.3;
      width: 100%;
      top: 0;
      height: 100%;
      position: absolute;
      z-index: 999;
    }
  }

</style>
