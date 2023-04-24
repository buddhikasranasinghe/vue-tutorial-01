<template>
    <div class="side-nav" v-if="isSideNav">
        <ul>
            <li>
                <router-link to="/" @click="toggleSideNav">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/about" @click="toggleSideNav">About us</router-link>
            </li>
            <li>
                <router-link to="/shop" @click="toggleSideNav">Shop</router-link>
            </li>
            <li>
                <router-link to="/read" @click="toggleSideNav">Read</router-link>
            </li>
            <li>
                <router-link to="/add-book" @click="toggleSideNav">Add Book</router-link>
            </li>
        </ul>
    </div>
    <div class="side-nav-btn" v-if="isSideNavBtn">
        <button type="btn" @click="toggleSideNav">
            <i class="bi bi-list"></i>
        </button>
    </div>
</template>

<script>
export default {
  props: ['isSideBar', 'close'],
  data () {
    return {
      isSideNav: true,
      isSideNavBtn: false
    }
  },
  methods: {
    toggleSideNav () {
      if (window.innerWidth < 834) {
        this.isSideNav = !this.isSideNav
      }
    },
    sideBarValue () {
      if (window.innerWidth < 834) {
        this.isSideNav = false
        this.isSideNavBtn = true
      } else {
        this.isSideNav = true
        this.isSideNavBtn = false
      }
    }
  },
  mounted () {
    if (window.innerWidth < 834) {
      this.isSideNav = false
      this.isSideNavBtn = true
    } else {
      this.isSideNavBtn = false
    }
  },
  created () {
    window.addEventListener('resize', this.sideBarValue)
  }
}
</script>

<style>
    @media (max-width : 834px){
        .side-nav {
            position:absolute;
            z-index: 101;
        }
    }
    .side-nav {
        background-color: rgb(114, 114, 114);
        padding: 20px;
        color: rgb(255, 255, 255);
        width: 200px;
        height: 100vh;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    .side-nav-btn {
        position: fixed;
        top: 45px;
        right: 30px;
    }
</style>
