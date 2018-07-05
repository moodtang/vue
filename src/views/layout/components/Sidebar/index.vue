<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#1c2b36"
      text-color="#ffffff"
      active-text-color="#42b983"
    >
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>

import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {

      console.log("这是路由里面的sidebar");
      console.log(this.sidebar);
      console.log(this.permission_routers);
      return !this.sidebar.opened
    },
  }
}
</script>
<style>
  .app{
    color: #42b983;
  }
</style>
