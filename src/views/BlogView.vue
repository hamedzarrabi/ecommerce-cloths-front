<template>
  <div
      class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container mx-auto mt-16 mb-16 bg-gray-100 space-x-4">
    <div class="" v-for="item in blogs" :key="item.id">
      <CartBlog :id="item.id" :title="item.title" :text="item.text" :date="item.updateDateBlog" :image="item.image" />
    </div>

  </div>

</template>


<script>
import CartBlog from "@/shared/CartBlog.vue";
import AddEditBlog from "@/shared/Modal/AddBlog.vue";
import {BlogService} from "@/service/BlogService";

export default {
  name: "BlogView",
  components: {
    CartBlog,
    AddEditBlog
  },
  data() {
    return {
      blogs: [],
      selectedBogId: Number,
      selectedUserId: Number,
    }
  },
  methods: {

  },
  created() {
    const blog = BlogService.findAllBlogs().then(res => this.blogs = res.data);
    console.log(blog)
  },
}

</script>

<style scoped>

</style>