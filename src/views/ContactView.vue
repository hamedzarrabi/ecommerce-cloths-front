<template>
  <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 container mx-auto my-14">
    <div class="justify-center items-center">
      <img src="/Images/Cloths.jpg" class="w-full h-full" alt="">
    </div>
    <div class="flex mx-6 mt-16">
      <Form action="" class="items-center my-6 space-x-8" @submit="sendMessage">
        <p class="self-center font-semibold text-lg">CONTACT</p>

        <Field ref="contactForm" name="name" v-model="contact.name" type="text" placeholder="Name" :rules="validateName"
               class=" border border-gray-200 mt-4  w-[280px] px-2 py-2"/>


        <Field ref="contactForm" name="email" v-model="contact.email" type="email" placeholder="Email" :rules="validateEmail"
               class=" border border-gray-200 mt-4  w-[280px] px-2 py-2"/>
        <br/>
        <div class="flex justify-between">
          <error-message name="name" class="text-red-400 "/>
          <error-message name="email" class="text-red-400"/>
        </div>

        <Field ref="contactForm" name="message" v-model="contact.message" placeholder="Message" :rules="validateName"
               class="flex border border-gray-200 mt-4 w-[600px] h-[200px] px-2 py-2"></Field>
        <error-message name="message" class="text-red-400"/>

        <button
            class="bg-black p-2 text-white px-16 focus:border-black flex mt-10 hover:bg-white hover:border-2 hover:border-black hover:text-black duration-100">
          Send
        </button>
      </Form>
    </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from "vee-validate";
import {UserService as ContactService} from "@/service/ContactService";
import {useToast} from "vue-toastification";

export default {
  name: "ContactView",
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    sendMessage(value) {
      const toast = useToast();
      const contact = ContactService.createContact(value);
      try {
        if (contact) {
          toast.success('Contact Send Successfully.');
          return this.$router.push('/');
        } else {
          toast.error('Contact Failed Send.');
          return this.$router.push('/contact');
        }
      } catch (error) {
        toast.error('This Contact is not correct.')
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



  },

}

</script>


<style scoped>

</style>