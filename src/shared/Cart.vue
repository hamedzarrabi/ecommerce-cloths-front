<template>
  <div class=" ml-16 rounded-md overflow-hidden">
    <img :src="img" alt="" />
    <p class="mt-4 text-lg">
      {{ title }}
    </p>
    <p class="flex mt-2 font-bold ml-6 text-lg text-gray-500">{{ price }} $</p>
    <p class="p-2 bg-gray-100 mt-4 hover:bg-gray-200 cursor-pointer">
      <span class="font-extrabold hover:text-[#81C2BE]">+</span> Quike Shop
    </p>
  </div>
</template>

<script>
export default {
    name: "Cart",
    props: {
        img: {
            type: String,
            required: true,
            defualt: "/images/blog-3.jpg"
        },
        title: {
            type: String,
            required: true,
            defualt: "Cutter & Buck Virtue Eco Pique Recycled Womens Polo"
        },
        price: {
            type: Number,
            required: true,
            defualt: 44
        }
    },
    data() {
        return {

        }
    }
};
</script>

<style>
</style>