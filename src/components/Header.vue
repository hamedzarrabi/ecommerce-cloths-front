<template>
  <!-- Body -->
  <div
    class=" xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2"
  >
    <header class="w-full">
      <!-- Header Serch -->
      <nav class="">
        <div class="flex xl:grid lg:grid md:grid mr-10 items-center xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 ">

          <div class="hidden md:flex  justify-center ml-[35px]">

            <div
              class="py-3 border-2 rounded-xl click:border border-gray-100 focus-within:border-black"
            >
              <input
                type="text"
                placeholder="Search Products"
                class="ml-2 focus:outline-none"
              />
              <button class="mx-10 md:mx-2 " aria-label="Search">
                <i class="fas fa-search"></i>
              </button>
            </div>

          </div>

          <div class="justify-center grid ml-10">
            <img src="../../public/images/logo.svg" alt="" class="cursor-pointer" @click="home" />
          </div>

          <div class="hidden md:flex space-x-10 items-center mt-2">
            <div class="hover:text-[#81C2BE]">
              <button class="header-action-btn" @click="login">
                <i class="fa-regular fa-user"></i> <br />
                Sign in
              </button>
            </div>
            <div class="hover:text-[#81C2BE]">
              <button class="relative header-action-btn ">
                <i class="fa-solid fa-cart-shopping"></i> <br />
                Cart
                <p class="absolute  -top-2 ml-4 -mt-2 -mr-1 text-white px-2 bg-gray-500 rounded-full">1</p>
              </button>
            </div>

            <div class="hover:text-[#81C2BE]">
              <button class="relative header-action-btn">
                <i class="fa-regular fa-heart"></i> <br />
                Wishlist
                <div class="absolute -top-2 ml-6 -mt-2 -mr-1 text-white px-2 bg-[#81C2BE] rounded-full">100</div>
              </button>
            </div>
          </div>

          <!-- Icon menu modal -->
          <div class="w-full">
            <div class="md:hidden flex justify-end mr-10" v-show="!modalMenu">
              <button class="" @click="modalMenu = true">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
          </div>

        </div>
      </nav>

      <hr />

      <!-- Header Menu -->
<ul ref="headerMenu" v-if="navLogin"
  class="hidden md:flex justify-center space-x-6 text-xl  font-normal bg-white top-0 left-0 z-10  right-0 py-2 fixed rounded-sm"
>
  <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>Home</li></router-link>
  <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>Shop</li></router-link>
  <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>About</li></router-link>
  <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>Blog</li></router-link>
  <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>Contact</li></router-link>
</ul>
    </header>

    <!-- Modal -->
    <div class="w-full" v-show="modalMenu">
      <!-- Header Menu -->

      <ul class="justify-center space-x-6 text-xl mt-4 font-normal sticky z-0">
        <!--Close button-->
        <div class="justify-end flex mr-6">
          <button
            type="button"
            class="rounded-none flex border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
            @click="modalMenu = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>Home</li></router-link>
        <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>Shop</li></router-link>
        <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>About</li></router-link>
        <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>Blog</li></router-link>
        <router-link to="" class="hover:text-[#81C2BE] transition duration-300"><li>Contact</li></router-link>
      </ul>
      <div class="space-x-10 mt-6 bg-gray-100 p-6">
        <button class="header-action-btn">
          <i class="fa-regular fa-user"></i> <br />
          Sign in
        </button>
        <button class="relative header-action-btn">
          <i class="fa-solid fa-cart-shopping"></i> <br />
          Cart
          <div class="absolute -top-2 ml-4 -mt-2 -mr-1 text-white px-2 bg-gray-500 rounded-full">1</div>
        </button>
        <button class="relative header-action-btn">
          <i class="fa-regular fa-heart"></i> <br />
          Wishlist
          <div class="absolute -top-2 ml-6 -mt-2 -mr-1 text-white px-2 bg-[#81C2BE] rounded-full">100</div>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      modalMenu: false,
      navLogin : true
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
      this.navLogin = false;
    },
    home() {
      this.$router.push("/");
      this.navLogin = true;
    }
  },
  mounted() {
  const headerMenuHeight = this.$refs.headerMenu.offsetHeight;
  document.body.style.paddingTop = headerMenuHeight + "px";
  window.addEventListener("scroll", function() {
    if (window.pageYOffset >= headerMenuHeight) {
      this.$refs.headerMenu.classList.add("fixed");
      this.$refs.headerMenu.classList.add("expanded"); // اضافه کردن کلاس برای بزرگ کردن بخش هدر
    } else {
      this.$refs.headerMenu.classList.remove("fixed");
      this.$refs.headerMenu.classList.remove("expanded"); // حذف کلاس برای بزرگ کردن بخش هدر
    }
  }.bind(this));
}
};
</script>

<style scoped>
</style>