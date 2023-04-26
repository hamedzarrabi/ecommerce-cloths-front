<template>
  <div class="">
    <div class="container mx-auto mt-16 h-2/4 w-2/4 mb-6">
      <!-- Sigup | Register -->
      <div
        v-if="change"
        class="justify-center grid xl:grid-cols-2 lg:grid-cols-2 space-x-4 md:grid-cols-2 sm:grid-cols-1 shadow-md bg-[#ebf4f5] pr-6 rounded-3xl overflow-hidden"
      >
        <div class="">
          <img src="/Images/marissa-grootes-Register.jpg" class="" />
        </div>
        <div class="justify-center space-y-4 mt-16">
          <h1 class="mb-10 border-b-2 text-gray-600 text-xl uppercase">
            Register
          </h1>
          <div class="justify-center space-y-4">
            <input
              type="text"
              placeholder="firstName"
              class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
            />
            <input
              type="text"
              placeholder="lastName"
              class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
            />
            <input
              type="email"
              placeholder="email"
              class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
            />
            <input
              type="password"
              placeholder="paswword"
              class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
            />
          </div>
          <!-- Buttons -->
          <div class="justify-center space-x-10">
            <button
              class="hover:bg-black hover:text-white rounded px-4 py-2 mt-6"
            >
              Save
            </button>
            <button class="hover:bg-black hover:text-white rounded px-4 py-2">
              Cancel
            </button>
          </div>
          <!-- Google -->
          <div class="justify-center items-center">
            <button>
              <i class="fa-brands fa-google mt-4 text-red-300"></i> | Google
            </button>
          </div>
          <div class="flex justify-center">
            <p class="xl:mt-15 lg:mt-15 md:mt-5 sm:mt-5">
              I have an account |
              <a
                class="text-base  hover:text-red-600 cursor-pointer text-red-300"
                @click="switchLoginRegister"
                >Login</a
              >
            </p>
          </div>
        </div>
      </div>

      <!-- Login -->
      <div
        v-if="!change"
        class="justify-center grid xl:grid-cols-2 lg:grid-cols-2 space-x-4 md:grid-cols-2 sm:grid-cols-1 shadow-md bg-[#ebf4f5] pr-6 rounded-3xl overflow-hidden"
      >
        <div class="">
          <img src="/Images/Login.jpg" class="" />
        </div>
        <div class="justify-center space-y-4 mt-16">
          <h1 class="mb-10 border-b-2 text-gray-600 text-xl uppercase">
            Login
          </h1>
          <div class="justify-center space-y-4">
            <input
              type="email"
              placeholder="email"
              class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full mt-6"
            />
            <input
              type="password"
              placeholder="paswword"
              class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
            />
            <div class="flex items-center mt-10">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                class="form-checkbox h-5 w-5 text-black focus:outline-none focus:bg-black rounded mt-6"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900 mt-6">
                Remember me
              </label>
            </div>
            <div class="flex">
              <a href=""> Forgot Password? </a>
            </div>
          </div>
          <!-- Buttons -->
          <div class="justify-center space-x-6 mt-16">
            <button class="hover:bg-black hover:text-white rounded px-4 py-2">
              Login
            </button>
            <button class="hover:bg-black hover:text-white rounded px-4 py-2">
              Cancel
            </button>
          </div>

          <div class="flex justify-center">
            <p class="xl:mt-28 lg:mt-28 md:mt-5 sm:mt-5">
              Don't have an accoint?
              <a
                class="text-base hover:text-red-600 cursor-pointer text-red-300"
                @click="switchLoginRegister"
                >Register</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      change: false,
    };
  },
  methods: {
    switchLoginRegister() {
      this.change = !this.change;
    },
  },
};
</script>

<style>
</style>