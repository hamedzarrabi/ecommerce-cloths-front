<template>
  <div class="flex flex-column mx-10 space-x-6 my-4">
    <div class="w-1/5  bg-gray-200 justify-center items-center rounded p-4">
      <h1 class="border-b border-white p-4 text-lg text-greenHamed">Admin Panel</h1>
      <div class=" justify-center items-center space-y-4" v-for="item in menuAdmin" :key="item">

        <button class="flex mt-4 hover:bg-greenHamed p-2 rounded w-full" @click="modalMenu(item)">{{ item }}</button>

      </div>
    </div>
    <div class="w-5/6 flex bg-gray-50 rounded p-4 justify-center items-center" v-show="blog">
      <add-edit-blog @close-modal="closeModal" v-if="blog"   class="mt-10"/>
    </div>
    <div class="w-5/6 flex bg-gray-50 rounded p-4 justify-center items-center" v-show="contact">
      <contact-view-admin @close-modal="closeModal" v-if="contact"   class="mt-10" />
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import AddEditBlog from "@/shared/Modal/AddBlog.vue";
import ContactViewAdmin from "@/views/ContactViewAdmin.vue";

export default defineComponent({
  name: "PanelAdmin",
  components: {
    AddEditBlog,
    ContactViewAdmin
  },
  data() {
    return {
      menuAdmin: [
        'Dashboard',
        'Users',
        'Contact',
        'Add Blog',
        'Add Product'
      ],
      blog: false,
      contact: false,

    };
  },
  methods: {
    modalMenu(item) {
      if (item === 'Add Blog') {
        this.blog = !this.blog;
        this.contact = false;
      }
      else if (item === 'Contact') {
        this.contact = !this.contact;
        this.blog = false;
      }
    },
    closeModal() {
      this.blog = false;
    }
  },
})
</script>

<style scoped>
</style>