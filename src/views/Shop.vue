<template>
  <div class="container mx-auto mt-10">
    <!-- Title -->
    <div class="flex">
      <p class="text-xl">Men's Shirts (48 Items)</p>
    </div>
    <!-- Tags & Sort -->
    <div class="flex mt-4 justify-between">
      <div class="space-x-2">
        <button
          class="py-2 px-4 border border-black hover:bg-black hover:text-white"
        >
          All
        </button>
        <button
          class="py-2 px-4 border border-black hover:bg-black hover:text-white"
        >
          Polo's
        </button>
        <button
          class="py-2 px-4 border border-black hover:bg-black hover:text-white"
        >
          Sweater
        </button>
        <button
          class="py-2 px-4 border border-black hover:bg-black hover:text-white"
        >
          Jean
        </button>
        <button
          class="py-2 px-4 border border-black hover:bg-black hover:text-white"
        >
          Tshert
        </button>
      </div>
      <div class="flex items-center w-[300px]">
        <label for="" class="w-full -mr-6">Sort By: </label>

        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>

    <!-- Body -->
    <div class="flex items-center my-16">
      <!-- Left main body -->
      <div class="w-1/4 space-y-2">


        <!-- Price -->
        <collapse-according header="Price">

          <!-- Detail Prices -->
          <div class="">
            <multi-range class="mt-16 mb-4"></multi-range>
          </div>
        </collapse-according>




        <!-- Size -->
        <collapse-according header="Sizes">
          <!-- Size Details -->
          <div class="">
            <ul class="flex justify-between w-full my-4">
              <li class="hover:border-b border-gray-500 px-4 py-2">
                <a href="">S</a>
              </li>
              <li class="hover:border-b border-gray-500 px-4 py-2">
                <a href="">M</a>
              </li>
              <li class="hover:border-b border-gray-500 px-4 py-2">
                <a href="">L</a>
              </li>
              <li class="hover:border-b border-gray-500 px-4 py-2">
                <a href="">XL</a>
              </li>
              <li class="hover:border-b border-gray-500 px-4 py-2">
                <a href="">XXL</a>
              </li>
              <li class="hover:border-b border-gray-500 px-4 py-2">
                <a href="">XXXL</a>
              </li>
            </ul>
          </div>
        </collapse-according>

        <!-- Color -->
        <collapse-according header="Colors">
                <!-- Color details -->
        <div class="mb-8 flex">
          <range-color colors="bg-[#81c2be]" />
          <range-color colors="bg-red-800" />
          <range-color colors="bg-green-800" />
          <range-color colors="bg-[#DFC3CF]" />
          <range-color colors="bg-[#764E2A]" />
          <range-color colors="bg-[#72716D]" />
          <range-color colors="bg-green-600" />
          <range-color colors="bg-[#A6BAD2]" />
        </div>
        </collapse-according>


      </div>

      <!-- Right main body -->
      <div class="w-3/4  grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <cart :img="images" :price="prices.two" title="Cutter & Buck Prospect Textured Stretch Womens Short Sleeve Polo" />
        <cart img="/images/blog-2.jpg" :price="prices.one" title="Cutter & Buck Northgate CB DryTec Short Sleeve Womens Polo"/>
        <cart img="/images/blog-3.jpg" :price="prices.three" title="Cutter & Buck Northgate  Sleeve Womens Polo" />
        <cart :img="images" :price="prices.two" title="Cutter & Buck Prospect Textured Stretch Womens Short Sleeve Polo" />
        <cart img="/images/blog-2.jpg" :price="prices.one" title="Cutter & Buck Northgate CB DryTec Short Sleeve Womens Polo"/>
        <cart img="/images/blog-3.jpg" :price="prices.three" title="Cutter & Buck Northgate  Sleeve Womens Polo" />

      </div>
    </div>
  </div>
</template>

<script>
import MultiRange from "@/shared/MultiRangeSlider.vue";
import RangeColor from "@/components/RangeColor.vue";
import CollapseAccording from "@/shared/CollapseAccording.vue";
import Cart from '@/shared/Cart.vue';


export default {
  components: {
    MultiRange,
    RangeColor,
    CollapseAccording,
    Cart,
  },
  data() {
    return {
      images: "/images/blog-1.jpg",
      prices: {
        one : 56,
        two: 65.12,
        three: 12.10
      }
    };
  },

  methods: {
  },
};
</script>

<style scoped>
</style>