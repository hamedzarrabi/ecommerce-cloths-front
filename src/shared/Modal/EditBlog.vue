<template>
  <div class="w-full" v-if="showModal">
    <div class="flex w-full justify-center items-center">
      <h1 class="my-10 text-3xl font-bold text-gray-400">Blog Page</h1>
    </div>
    <div class="flex  justify-center items-center">
      <Form class="w-full max-w-lg" @submit="save" enctype="multipart/form-data">

        <div class="flex flex-wrap -mx-3 mb-6 justify-center ">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Image
          </label>
          <div class="flex  justify-center items-center w-full md:w-full px-3 mb-6 md:mb-0 gap-4">
            <div class="relative w-3/4">
<!--                            <Field-->
<!--                                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"-->
<!--                                id="grid-first-name"-->
<!--                                accept="image/*"-->
<!--                                style="display: none"-->
<!--                                type="file"-->
<!--                                @change="onImageChange"-->
<!--                                name="image"-->
<!--                                :rules="validateImage"-->
<!--                                ref="fileInput"-->
<!--                            />-->
              <input
                  required
                  style="display: none"
                  type="file"
                  accept="image/*"
                  @change="onImageChange"
                  ref="fileInput"
              >
              <p v-if="!imageDemo" class="flex text-greenHamed">{{ blog.image }}</p>

              <div class="flex justify-center items-center">
                <a class="bg-red-300 cursor-pointer hover:bg-red-500 hover:text-white mt-6 py-2 px-6 capitalize"
                   @click="onPickFile">
                  Upload image
                </a>
              </div>
            </div>
            <div class="w-24 h-24 align-end" v-if="blog.blogId">
              <img v-if="!imageDemo"  :src="blog.image" class="h-full w-full object-cover rounded-full"
                   :alt="blog.image"/>
              <img ref="imagePreview" v-if="imageDemo"  :src="imageDemo" class="h-full w-full object-cover rounded-full"
                   :alt="blog.image"/>
            </div>
          </div>
          <error-message class="text-red-400" name="image"></error-message>
        </div>


        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Title
            </label>
            <Field
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Title"
                v-model="blog.title"
                name="title"
                :rules="validateTitle">
            </Field>

            <error-message class="text-red-400" name="title"></error-message>

            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4" for="grid-password">
              Text
            </label>
            <Field
                class="appearance-none block w-full h-[200px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Text"
                v-model="blog.text"
                name="text"
                :rules="validateText">
            </Field>

            <error-message class="text-red-400" name="text"></error-message>

            <div class="space-x-2 flex justify-center mt-10">
              <button class="py-2 px-4 bg-gray-200 hover:bg-red-500 hover:text-white rounded" @click="closeModal">
                Close
              </button>
              <!--              <button class="py-2 px-4 bg-greenHamed hover:bg-greenHamedDark hover:text-white rounded">{{ this.blog.blogId ? 'Update' : 'Save' }}</button>-->
              <button
                  class="py-2 px-4 bg-greenHamed hover:bg-greenHamedDark hover:text-white rounded"
                  v-if="!blog.blogId" @click="save">
                Save
              </button>
              <button
                  class="py-2 px-4 bg-greenHamed hover:bg-greenHamedDark hover:text-white rounded"
                  v-if="blog.blogId" @click="update">
                Update
              </button>
            </div>
          </div>

        </div>
      </Form>
    </div>

  </div>


</template>

<script>
import {defineComponent} from "vue";
import {BlogService} from "@/service/BlogService";
import {useToast} from "vue-toastification";
import {Form, Field, ErrorMessage} from "vee-validate";


export default defineComponent({
  name: "CartBlog",
  props: {
    toggleModal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Form, Field, ErrorMessage
  },
  data() {
    return {
      showModal: true,
      imageDemo: '',
      blog: {
        blogId: this.$route.params.id,
        title: '',
        image: [],
        text: ''
      }
    };
  },
  methods: {
    onImageChange(event) {
      // this.blog.image = event.target.files[0];
      const image = event.target.files;
      if (image.length === 0) {
        return;
      }
      const file = image[0];
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validImageTypes.includes(file.type)) {
        alert('Please add a valid image file (JPEG, PNG or GIF).');
        return;
      }
      const blobUrl = URL.createObjectURL(file);
      this.blog.image = image[0];
      this.imageDemo = blobUrl
      this.$refs.imagePreview = blobUrl;
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    closeModal() {
      return this.$router.push('/blog');
    },


    async save() {
      const toast = useToast();
      const userId = localStorage.getItem('userId');

      const formData = new FormData();
      formData.append("title", this.blog.title);
      formData.append("text", this.blog.text);
      formData.append("image", this.blog.image);

      const createBlog = await BlogService.createBlog(formData, userId);

      try {
        if (createBlog) {
          toast.success('Blog create successfully.');
          return this.$router.push('/blog');
        } else {
          toast.error('Blog not created.');
        }
      } catch (error) {
        toast.error('This Blog is not correct.');
      }
      // console.log('Blog: ' + JSON.stringify(value));
    },

    update() {
      const toast = useToast();
      const userId = localStorage.getItem('userId');

      const formData = new FormData();

      formData.append("blogId", this.blog.blogId);
      formData.append("title", this.blog.title);
      formData.append("text", this.blog.text);
      formData.append("image", this.blog.image);

      const updateBlog = BlogService.editBlog(userId, this.blog.blogId, formData);

      try {
        if (updateBlog) {
          toast.success('Blog updated.');
          return this.$router.push('/blog');
        } else {
          toast.error('Blog not update.');
        }
      } catch (error) {
        toast.error('This Blog is not correct.');
      }

    },

    validateTitle(value) {
      if (!value) {
        return 'This field is required';
      }
      const min = 2;
      const max = 30;
      if (value.length > max || value.length < min) {
        return 'This field must be between 2 and 30 number';
      }
      return true;
    },

    validateText(value) {
      if (!value) {
        return 'This field is required';
      }
      const min = 11;
      const max = 2000;
      if (value.length > max || value.length < min) {
        return 'This field must be between 11 and 2000 number';
      }
      return true;
    },

    validateImage(value) {
      if (!value) {
        return 'This field is required';
      }
      return true;
    },
  },
  async created() {
    if (this.blog.blogId) {
      let response = await BlogService.findBlogById(this.blog.blogId);
      if (response) {
        this.blog.title = response.title;
        this.blog.image = response.image;
        this.blog.text = response.text;
        console.log(this.blog);
      }
    }
  },

  

});

</script>

<style scoped>
</style>
