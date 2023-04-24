<template>
  <div class="main-section">
    <div class="sub-section">
      <SideBar v-if="isSideBar" :close="togglesidebar"></SideBar>
    </div>
    <div class="sub-section">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    SideBar
  },
  data () {
    return {
      isSideBar: true,
      cart: []
    }
  },
  methods: {
    togglesidebar () {
      this.isSideBar = !this.isSideBar
    },
    addcart (id) {
      console.log('before ' + this.cart)
      this.cart.push(id)
      console.log('after ' + this.cart)
    }
  }
}
</script>

<style scoped>
  .main-section {
    display: inline-flex;
  }
  .sub-section {
    display: inline;
  }
</style>
