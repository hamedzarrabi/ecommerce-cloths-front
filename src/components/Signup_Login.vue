<template>
  <div class="">
    <div class="container mx-auto mt-16 h-2/4 w-2/4 mb-6">
      <!-- Sigup | Register -->
      <div
          v-if="change"
          class="justify-center grid xl:grid-cols-2 lg:grid-cols-2 space-x-4 md:grid-cols-2 sm:grid-cols-1 shadow-md bg-[#ebf4f5] pr-6 rounded-3xl overflow-hidden"
      >
        <div class="">
          <img src="/Images/marissa-grootes-Register.jpg" class=""/>
        </div>
        <div class="justify-center space-y-4 mt-16">
          <h1 class="mb-10 border-b-2 text-gray-600 text-xl uppercase">
            Register
          </h1>

          <!-- Form Register -->
          <Form action="" @submit="registerUser">
            <div class="justify-center space-y-4">
              <Field
                  v-model="register.name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
                  :rules="validateName"
              />
              <error-message name="name" class="text-red-400"/>

              <Field
                  v-model="register.email"
                  name="email"
                  type="email"
                  placeholder="email"
                  class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
                  :rules="validateEmail"
              />
              <error-message name="email" class="text-red-400"/>

              <Field
                  v-model="register.phoneNumber"
                  type="number"
                  name="phoneNumber"
                  placeholder="PhoneNumber"
                  class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
                  :rules="validatePhone"
              />
              <error-message name="phoneNumber" class="text-red-400"/>

              <Field
                  v-model="register.password"
                  type="password"
                  name="password"
                  placeholder="password"
                  class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
                  :rules="validatePassword"
              />
              <error-message name="password" class="text-red-400"/>
              <span>

              </span>
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
                    class="text-base hover:text-red-600 cursor-pointer text-red-300"
                    @click="switchLoginRegister"
                >Login</a
                >
              </p>
            </div>
          </Form>
        </div>
      </div>

      <!-- Login -->
      <Form action="" @submit="login">
        <div
            v-if="!change"
            class="justify-center grid xl:grid-cols-2 lg:grid-cols-2 space-x-4 md:grid-cols-2 sm:grid-cols-1 shadow-md bg-[#ebf4f5] pr-6 rounded-3xl overflow-hidden"
        >

          <div class="">
            <img src="/Images/Login.jpg" class=""/>
          </div>
          <div class="justify-center space-y-4 mt-16">
            <h1 class="mb-10 border-b-2 text-gray-600 text-xl uppercase">
              Login
            </h1>
            <div class="justify-center space-y-4">
              <Field
                  v-model="signIn.email"
                  type="email"
                  name="email"
                  placeholder="email"
                  class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full mt-6"
                  :rules="validateLogin"
              />
              <error-message name="email" class="text-red-400" />

              <Field
                  v-model="signIn.password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex shadow-sm w-full"
                  :rules="validateLogin"
              />
              <error-message name="password" class="text-red-400" />
              <div class="flex items-center mt-10">
                <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    class="form-checkbox h-5 w-5 text-black focus:outline-none focus:bg-black rounded mt-6"

                />
                <label
                    for="remember-me"
                    class="ml-2 block text-sm text-gray-900 mt-6"
                >
                  Remember me
                </label>
              </div>
              <div class="flex">
                <a href=""> Forgot Password? </a>
              </div>
            </div>
            <!-- Buttons -->
            <div class="justify-center space-x-6 mt-16">
              <button
                  class="hover:bg-black hover:text-white rounded px-4 py-2"
              >
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
      </Form>

    </div>
  </div>
</template>

<script>
import {POSITION, useToast} from "vue-toastification";
import {mapActions} from "vuex";
import {Form, Field, ErrorMessage} from "vee-validate";
import {UserService} from "@/service/UserService";


export default {
  name: "SignupLogin",
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      min: 5,
      change: false,

      // Login
      signIn: {
        email: "",
        password: "",
      },

      //   Register
      register: {
        name: '',
        phoneNumber: Number,
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(['loginUser', 'setIsLoggedIn']),

    switchLoginRegister() {
      this.change = !this.change;
    },

    async login() {
      const toast = useToast();
      const success = await this.loginUser(this.signIn);

      if (success) {
        console.log('Successfully Login.');
        toast.success("Successfully Login.");
        this.setIsLoggedIn(true);
        return this.$router.push("/");

      } else {
        toast.error("Login Failed!");
        console.log('Unsuccessfully');
        return this.$router.push("/login");
      }
    },
    async registerUser(values) {
      // console.log(JSON.stringify(values, null, 2));

      const toast = useToast();

      try {
        const register = UserService.register(values);
        if (register) {
          toast.success("Register is Successfully!");
          return this.$router.push("/");
        } else  {
          toast.error("Register is failed!");
          return this.$router.push("/login");
        }
      } catch (error) {
        toast.error("This email has already been registered!");
        console.log(error);
      }
    },


    // VALIDATION FORM
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },

    validateName(value) {
      if (!value) {
        return 'This field is required';
      }
      const min = 5;
      if (value.length < min) {
        return 'This field must be bigger 5 character';
      }
      return true;
    },

    validatePhone(value) {
      if (!value) {
        return 'This field is required';
      }
      const min = 11;
      const max = 15;
      if (value.length > max || value.length < min) {
        return 'This field must be between 11 and 15 number';
      }
      return true;
    },
    validatePassword(value) {
      if (!value) {
        return 'This field is required';
      }
      const min = 5;
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid password';
      }
      return true;
    },
    validateLogin(value) {
      if (!value) {
        return 'This field is required';
      }
      return true;
    }

  },
  computed: {}

};
</script>

<style>
</style>