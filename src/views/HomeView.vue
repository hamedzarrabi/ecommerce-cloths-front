<template>
  <!-- Slide Picture -->
  <div
    class="h-[800px] w-full mt-4 bg-cover"
    style="background-image: url('/images/hero-banner.jpg')"
  >
    <div class="flex container mx-auto">
      <div class="mt-[200px] xl:ml-[250px] lg:ml-[250px] md:ml-[100px]">
        <p class="font-semibold text-2xl flex ml-10">Fashion Everyday</p>
        <p
          class="font-black xl:text-8xl lg:text-8xl md:text-4xl text-4xl flex mt-4 ml-10"
        >
          Unrivalled
        </p>
        <p
          class="font-black xl:text-8xl lg:text-8xl md:text-4xl text-4xl flex xl:-mt-4 ml-10"
        >
          Fashion House
        </p>
        <button
          class="capitalize px-10 justify-start flex mt-8 py-4 bg-gray-900 text-white rounded-md ml-10 hover:bg-white hover:text-black transition duration-200"
        >
          shop now
        </button>
      </div>
    </div>
  </div>

  <!-- Services -->
  <div class="mt-4">
    <ul
      class="grid p-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
    >
      <div
        class="grid grid-rows-2 grid-flow-col gap-4 justify-center items-center"
      >
        <img class="row-span-2" src="/images/service-icon-1.svg" alt="" />
        <p class="capitalize col-span-2 flex font-bold">Free Shipping</p>
        <p class="capitalize col-span-2 -mt-4">On All Order Over $599</p>
      </div>

      <div
        class="grid grid-rows-2 grid-flow-col gap-4 justify-center items-center mt-4 -ml-6"
      >
        <img class="row-span-2" src="/images/service-icon-2.svg" alt="" />
        <p class="capitalize col-span-2 flex font-bold">Easy Returns</p>
        <p class="capitalize col-span-2 -mt-4">30 Day Returns Policy</p>
      </div>

      <div
        class="grid grid-rows-2 grid-flow-col gap-4 items-center justify-center mt-4"
      >
        <img class="row-span-2" src="/images/service-icon-3.svg" alt="" />
        <p class="capitalize col-span-2 flex font-bold">Secure Payment</p>
        <p class="capitalize col-span-2 -mt-4">100% Secure Gaurantee</p>
      </div>

      <div
        class="grid grid-rows-2 grid-flow-col gap-4 items-center justify-center mt-4 w-full"
      >
        <img class="row-span-2" src="/images/service-icon-4.svg" alt="" />
        <p class="capitalize col-span-2 flex font-bold">Special Support</p>
        <p class="capitalize col-span-2 -mt-4">24/7 Dedicated Support</p>
      </div>
    </ul>
  </div>

  <!-- Category Big -->
  <div class="container mx-auto mt-10">
    <div
      class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full justify-around gap-6"
    >
      <div class="flex w-full justify-center">
        <div class="relative overflow-hidden">
          <img
            class="transition ease-in-out duration-500 hover:scale-105 w-auto h-auto object-contain"
            src="/Images/category-1.jpg"
            alt=""
          />
        </div>
        <div class="absolute self-end p-4">
          <button
            class="flex self-center bg-white py-4 px-10 rounded hover:bg-black hover:text-white"
          >
            Sunglass & Eye
          </button>
        </div>
      </div>

      <div class="flex w-full justify-center">
        <div class="relative overflow-hidden">
          <img
            class="transition ease-in-out duration-500 hover:scale-105 w-auto h-auto object-contain"
            src="/Images/category-2.jpg"
            alt=""
          />
        </div>
        <div class="absolute self-end p-4 sm:flex justify-center">
          <button
            class="flex self-center bg-white py-4 px-10 rounded hover:bg-black hover:text-white transition duration-300"
          >
            Active & Outdoor
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Category -->
  <div class="container mx-auto mt-10">
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-between gap-6"
    >
      <div class="flex w-full justify-center">
        <div class="relative overflow-hidden">
          <img
            class="transition ease-in-out duration-500 hover:scale-105 w-auto h-auto object-contain"
            src="/Images/category-3.jpg"
            alt=""
          />
        </div>
        <div class="absolute self-end p-4">
          <button
            class="flex self-center bg-white py-4 px-10 rounded hover:bg-black hover:text-white"
          >
            Sunglass & Eye
          </button>
        </div>
      </div>

      <div class="flex w-full justify-center">
        <div class="relative overflow-hidden">
          <img
            class="transition ease-in-out duration-500 hover:scale-105 w-auto h-auto object-contain"
            src="/Images/category-4.jpg"
            alt=""
          />
        </div>
        <div class="absolute self-end p-4">
          <button
            class="flex self-center bg-white py-4 px-10 rounded hover:bg-black hover:text-white"
          >
            Exclusive Footwear
          </button>
        </div>
      </div>

      <div class="flex w-full justify-center">
        <div class="relative overflow-hidden">
          <img
            class="transition ease-in-out duration-500 hover:scale-105 w-auto h-auto object-contain"
            src="/Images/Jewelry.jpg"
            alt=""
          />
        </div>
        <div class="absolute self-end p-4">
          <button
            class="flex self-center bg-white py-4 px-10 rounded hover:bg-black hover:text-white"
          >
            Jewelry
          </button>
        </div>
      </div>

      <div class="flex w-full justify-center">
        <div class="relative overflow-hidden">
          <img
            class="transition ease-in-out duration-500 hover:scale-105 w-auto h-auto object-contain"
            src="/Images/category-6.jpg"
            alt=""
          />
        </div>
        <div class="absolute self-end p-4">
          <button
            class="flex self-center bg-white py-4 px-10 rounded hover:bg-black hover:text-white"
          >
            Sports Cap
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Products of the week -->
  <div class="justify-center items-center mt-[150px]">
    <div class="font-semibold text-4xl">
      <p>Products of the week</p>
    </div>
    <div class="space-x-8 mt-6 font-bold text-l mb-16">
      <a href="" class="capitalize">Best seller</a>
      <a href="" class="capitalize">Hot collection</a>
      <a href="" class="capitalize">Trendly</a>
      <a href="" class="capitalize">New arrival</a>
    </div>
  </div>

  <!-- Product Shop -->
  <div class="container mx-auto w-3/4">
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-y-4 gap-4"
    >
      <!-- Part 1 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-red-500 p-2 text-white flex">%25</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-1.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Varsi Leather Bag</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">
              $ 37.5 <span class="ml-6 line-through text-gray-500">65.2</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Part 2 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-green-500 p-2 text-white flex">New</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-2.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="mt-8 sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Fit Twill Shirt for Woman</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">
              $ 42 <span class="ml-6 line-through text-gray-500">75.2</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Part 3 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-red-500 p-2 text-white flex">%25</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-3.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="mt-8 sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Grand Atlantic Chukka Boots</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">$ 55.2</p>
          </div>
        </div>
      </div>

      <!-- Part 4 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-red-500 p-2 text-white flex">%25</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-4.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="mt-8 sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Women's Faux-Trim Shirt</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">
              $ 37.5 <span class="ml-6 line-through text-gray-500">65.2</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Part 5 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-red-500 p-2 text-white flex">%25</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-5.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Varsi Leather Bag</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">
              $ 37.5 <span class="ml-6 line-through text-gray-500">65.2</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Part 6 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-green-500 p-2 text-white flex">New</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-6.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="mt-8 sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Fit Twill Shirt for Woman</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">
              $ 42 <span class="ml-6 line-through text-gray-500">75.2</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Part 7 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-red-500 p-2 text-white flex">%25</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-7.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="mt-8 sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Grand Atlantic Chukka Boots</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">$ 55.2</p>
          </div>
        </div>
      </div>

      <!-- Part 8 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-red-500 p-2 text-white flex">%25</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-8.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="mt-8 sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Women's Faux-Trim Shirt</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">
              $ 37.5 <span class="ml-6 line-through text-gray-500">65.2</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Part 9 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-red-500 p-2 text-white flex">%25</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-9.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="mt-8 sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Grand Atlantic Chukka Boots</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">$ 55.2</p>
          </div>
        </div>
      </div>

      <!-- Part 10 -->
      <div class="relative group">
        <!-- Off -->
        <div class="absolute flex self-center">
          <div class="items-center self-start">
            <p class="bg-red-500 p-2 text-white flex">%25</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg">
          <img src="/images/product-10.jpg" alt="" class="transition-opacity" />
        </div>
        <!-- Btn Add to cart -->
        <div
          class="absolute bottom-0 w-full bg-transparent xl:-mb-6 lg:-mb-6 md:mb-0 sm:mb-0 xl:opacity-0 transform xl:translate-y-8 transition-all duration-300 ease-in-out xl:group-hover:opacity-100 xl:group-hover:-translate-y-24 flex justify-center sm:static sm:opacity-100 sm:translate-y-0"
        >
          <div class="flex items-center">
            <button class="bg-white p-4 rounded-l-md">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button
              class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black px-10 py-4"
            >
              <i class="fa fa-shopping-basket" aria-hidden="true"></i> Add to
              Cart
            </button>
            <button class="bg-white p-4 rounded-r-md">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Describe Product -->
        <div class="mt-8 sm:mt-0 sm:ml-8">
          <div class="flex">
            <p class="font-semibold">Women's Faux-Trim Shirt</p>
          </div>
          <div class="flex mt-2">
            <p class="font-semibold">
              $ 37.5 <span class="ml-6 line-through text-gray-500">65.2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Button View All Product -->
  <div class="justify-center items-center mt-16">
    <button
      class="bg-white border-2 border-black px-6 py-2 rounded hover:bg-black hover:text-white"
    >
      View All Products
    </button>
  </div>

  <!-- Latest fashion -->
  <div class="mt-16 container mx-auto w-3/4">
    <div class="justify-center items-center flex">
      <p class="text-4xl capitalize font-semibold">Latest fashion news</p>
    </div>
  </div>

  <!-- News -->
  <div
    class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-16 container mx-auto w-3/4 gap-4"
  >
    <!-- One -->
    <div class="justify-center items-center">
      <div class="flex overflow-hidden">
        <img
          src="/Images/blog-1.jpg"
          alt="blog1"
          class="transition w-auto h-auto hover:scale-110 duration-700"
        />
      </div>
      <div class="">
        <p class="mt-4 justify-around flex">
          <span class="uppercase text-gray-600">Fshion</span>
          <span class="uppercase text-gray-600">31 may 2023</span>
        </p>
      </div>
      <div class="mt-4 justify-between">
        <p class="text-xl font-bold">
          Worthy Cyber Monday Fashion From Casmart
        </p>
      </div>
    </div>

    <!-- Two -->
    <div class="justify-center items-center">
      <div class="flex overflow-hidden">
        <img
          src="/Images/blog-2.jpg"
          alt="blog1"
          class="transition w-auto h-auto hover:scale-110 duration-700"
        />
      </div>
      <div class="">
        <p class="mt-4 justify-around flex">
          <span class="uppercase text-gray-600">Fshion</span>
          <span class="uppercase text-gray-600">31 may 2023</span>
        </p>
      </div>
      <div class="mt-4 justify-between">
        <p class="text-xl font-bold">
          Holiday Home Decoration I’ve Recently Ordered
        </p>
      </div>
    </div>

    <!-- Three -->
    <div class="justify-center items-center">
      <div class="flex overflow-hidden">
        <img
          src="/Images/blog-3.jpg"
          alt="blog1"
          class="transition w-auto h-auto hover:scale-110 duration-700"
        />
      </div>
      <div class="">
        <p class="mt-4 justify-around flex">
          <span class="uppercase text-gray-600">Fshion</span>
          <span class="uppercase text-gray-600">31 may 2023</span>
        </p>
      </div>
      <div class="mt-4 justify-between">
        <p class="text-xl font-bold">
          Unique Ideas for Fashion You Haven’t heard yet
        </p>
      </div>
    </div>
  </div>

  <!-- Subscribe -->
  <div class="container mx-auto w-3/5 mt-16 p-6">
    <div
      class="mt-4 bg-cover w-full h-[400px] border border-gray-200"
      style="background-image: url('/Images/newsletter-bg.png')"
    >
      <div class="justify-center items-center mt-16">
        <p class="text-4xl">Subscribe Newsletter</p>
        <p class="text-gray-500 justify-between mt-4">
          Enter your email below to be the first to know about new collections
          and product launches.
        </p>
      </div>

      <div class="justify-center items-center mt-16 ">
        <input
          type="text"
          class="p-4 bg-gray-100 xl:w-[500px] lg:w-[400px] md:w-[300px] sm:w-[100px] border focus:border-t-black focus:border-b-black focus:border-l-black outline-none"
          placeholder="Enter your email"
        />
        <button class="p-4 rounded-r-lg bg-black text-white border">
          Subscribe
        </button>
      </div>
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Login from '@/components/Signup_Login.vue'
export default {
  name: "HomeView",
  components: {
    Footer,
    Login
  },
};
</script>
<style>
</style>