<template>
  <div class="justify-center items-center bg-gray-200 my-4 mx-4 space-y-4 rounded-md overflow-hidden">

  <div class="">
    <img :src="image" class="w-full" alt="">
    <p class="text-center mt-6 text-sm">{{ formattedUpdateDate }}</p>
    <h4 class="text-center capitalize font-bold text-2xl">{{ title }}</h4>

    <p class="text-center" :class="{ 'line-clamp-1' : !showMore, 'line-clamp-none' : showMore}">
      {{ text }} <br/>
    </p>

    <button @click="showMore = !showMore" v-if="!showMore" class="text-greenHamed">More...</button>
    <button @click="showMore = !showMore" v-if="showMore" class="text-greenHamed">Less...</button>



  </div>
    <div class="flex mx-4 mb-4 space-x-4">
      <button @click="showModal = !showModal" class="py-2 px-6 mb-4 bg-red-200 hover:bg-red-500 hover:text-white rounded">Delete</button>
      <button @click="editBlog"  class="py-2 px-6 mb-4 bg-greenHamedLight hover:bg-greenHamed hover:text-white rounded">Edit</button>

      <confirm :is-visible="showModal" @confirm="deleteBlog" @cancel="cancel"/>
    </div>
  </div>



<!--  <template >-->
<!--    <div class="modal">-->
<!--      <add-edit-blog @click="closeModal"  />-->
<!--    </div>-->
<!--  </template>-->


</template>

<script>
import {defineComponent} from 'vue';
import AddEditBlog from "@/shared/Modal/AddBlog.vue";
import {useToast} from "vue-toastification";
import {BlogService} from "@/service/BlogService";
import Confirm from "@/shared/Modal/Confirm.vue";

export default defineComponent({
  name: "CartBlog",
  components: {
    AddEditBlog,
    Confirm
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: '/images/category-3.jpg'
    },
    date: {
      type: null,
      required: true,
      default: '2023/3/12',
    },
    title: {
      type: String,
      required: true,
      default: 'cloths in the germany'
    },
    text: {
      type: String,
      required: true,
      default: 'Explore the various website template\n' +
          ' options to create a blog that best represents your\n' +
          'brand. Each template can be customized to fit your\n '
    },
    showEditBlog: {
      type: null,
      required: false,
      default: false
    }

  },
  data() {
    return {
      showModal: false,
      showMore: false,
      userId: '',
      blogId: ''
    }
  },
  computed: {
    formattedUpdateDate() {
      const date = new Date(this.date);
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return date.toLocaleString('en-US', options);
    },
  },
  methods: {
    editBlog() {
      console.log('Id: ' + this.id);
      return this.$router.push(`/blog/editBlog/${this.id}`);
    },
    deleteBlog() {
      const toast = useToast();
      const response = BlogService.deleteBlog(this.id);
      try {
        if (response) {
          toast.success('Delete Successfully');
          this.showModal = false;
          return this.$router.push('/blog');
        }
      } catch (e) {
        toast.error(e);
      }
    },
    cancel() {
      this.showModal = false;
    },
    closeModal() {
      // this.blog = false;
      return this.$router.push('/blog');
    }
  },
})
</script>


<style scoped>
.modal {
  position: relative;
}
</style>