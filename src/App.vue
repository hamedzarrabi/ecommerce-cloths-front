<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&family=Ubuntu:wght@300&display=swap');


#app {
  font-family: "Jost", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Header from "@/components/Header.vue";
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
}
</script>