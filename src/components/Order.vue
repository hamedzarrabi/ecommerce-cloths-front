<template>
  <div class="container mx-auto">

    <!-- Main Shop -->
    <div
      class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-10 p-4 space-x-10"
    >
      <div class="flex flex-row flex-shrink justify-center gap-2">
        <!-- Product images -->
        <div class="space-y-2 justify-self-end">
          <img src="/images/product-9.jpg" class="w-16 h-16" alt="" />
          <img src="/images/product-8.jpg" class="w-16 h-16" alt="" />
          <img src="/images/product-7.jpg" class="w-16 h-16" alt="" />
          <img src="/images/product-6.jpg" class="w-16 h-16" alt="" />
          <img src="/images/product-5.jpg" class="w-16 h-16" alt="" />
        </div>
        <div class="justify-self-end overflow-hidden">
          <img
            src="/images/product-10.jpg"
            class="w-full hover:scale-150"
            alt=""
          />
        </div>
      </div>
      <!-- Descriptions -->
      <div class="justify-start items-start mt-4 space-y-6 w-[400px]">
        <p class="text-lg font-semibold flex">Style: LCO00007</p>
        <p class="text-xl font-medium flex">
          Cutter & Buck Rainier PrimaLoft® Womens Eco Insulated Full Zip Puffer
          Jacket
        </p>
        <p class="text-lg font-medium flex">
          $200.00 - <span class="text-gray-500 ml-2">Ship free!</span>
        </p>
        <div class="">
          <span class="flex text-lg text-yellow-300 items-center">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <p class="text-gray-700 text-lg ml-4">5 reviews</p>
          </span>
        </div>
        <p class="text-lg font-medium flex">
          Color: <span class="text-gray-500 ml-2">Choose below</span>
        </p>
        <!-- Colors -->
        <div class="flex gap-4">
          <div
            class="bg-[#46434B] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-[#ACABA2] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-[#F38035] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-[#D54D54] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-black p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-[#384782] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-[#3072AD] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-[#324D3F] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-[#54503F] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
          <div
            class="bg-[#345169] p-3 rounded-full hover:ring-black hover:ring-offset-2 hover:ring-1 hover:cursor-pointer"
          ></div>
        </div>
        <div class="flex justify-between">
          <p class="text-lg font-semibold flex">
            size: <span class="text-gray-500 ml-2 font-normal">Required</span>
          </p>
          <a href="" class="text-red-300">Size Chart</a>
        </div>
        <div class="block gap-4">
          <button
            class="uppercase py-1 px-4 border hover:bg-black hover:text-white m-1"
          >
            XS
          </button>
          <button
            class="uppercase py-1 px-4 border hover:bg-black hover:text-white m-1"
          >
            S
          </button>
          <button
            class="uppercase py-1 px-4 border hover:bg-black hover:text-white m-1"
          >
            M
          </button>
          <button
            class="uppercase py-1 px-4 border hover:bg-black hover:text-white m-1"
          >
            L
          </button>
          <button
            class="uppercase py-1 px-4 border hover:bg-black hover:text-white m-1"
          >
            XL
          </button>
          <button
            class="uppercase py-1 px-4 border hover:bg-black hover:text-white m-1"
          >
            XXL
          </button>
          <button
            class="uppercase py-1 px-4 border hover:bg-black hover:text-white m-1"
          >
            XXXL
          </button>
        </div>
        <div class="items-start">
          <label class="text-lg font-semibold flex">Qty</label> <br />
          <div class="flex gap-2 items-center">
            <input
              type=""
              class="w-12 py-2 px-1 font-semibold border border-gray-300 -mt-4 flex place-content-center text-center"
              value="1"
            />
            <button
              class="py-2 px-2 w-full bg-[#81C2BE] hover:bg-[#76b6b2] -mt-4"
            >
              Add to Cart
            </button>
          </div>
          <button class="mt-6">
            <i class="far fa-heart"></i>
            Add to Wishlist
          </button>

          <!-- List Right Description -->
          <div class="mt-10">
            <button
              class="description-label active flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
              @click="showProductDesc = !showProductDesc"
            >
              <span class="text-lg">Product Descriptions</span>
              <!-- Down Arrow -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
                v-if="!showProductDesc"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              <!-- Up Arrow -->
              <svg
                v-if="showProductDesc"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            <!-- Description Product -->
            <div
              class="description-content mt-2 px-4 py-2 bg-gray-50 rounded-md shadow-md transition ease-in-out duration-300 text-left"
              v-if="showProductDesc"
            >
              <p class="mb-4">
                The Cutter &amp; Buck Rainier PrimaLoft Women's Eco Insulated
                Full-Zip Puffer Jacket is a high-quality and eco-friendly winter
                coat that provides both style and warmth. This jacket for women
                is made with PrimaLoft Eco insulation, which is made from
                recycled materials, making it an eco-friendly option. The
                insulation is designed to keep you warm even in wet conditions,
                ensuring that you stay comfortable no matter the weather. The
                jacket features a full-zip front and a high collar, providing
                extra warmth and protection from the cold.
              </p>
              <p class="mb-4 text-left border-b-2 p-2">
                The iconic and sustainable Rainier Puffer Jacket is engineered
                from lightweight, recycled, down-alternative insulation for
                exceptional four season versatility, designed to be your
                favorite quilted womens full zip eco-friendly puffer jacket for
                golf, skiing, hiking, walking, and your other epic everyday
                adventures. The Rainier’s Primaloft® Silver Insulation is
                crafted from 70% recycled polyester, keeping you warm so you can
                stay outside year round and make a difference for the planet.
              </p>
              <ul class="mb-4 list-inside list-disc">
                <li class="">100% Nylon shell</li>
                <li class="">
                  Primaloft® Silver Insulation made from 70% recycled polyester
                </li>
                <li class="">
                  Contains an average of 5 recycled plastic bottles
                </li>
                <li class="">Concealed stowaway hood packs inside collar</li>
                <li class="">Wind &amp; water resistant</li>
                <li class="">Packs into its own pocket</li>
                <li class="">Full zip with front side pockets</li>
                <li class="">CB logo at left sleeve</li>
                <li class="">Imported</li>
                <li class="">Machine wash</li>
              </ul>
              <p>
                <a
                  href="https://cutterbuck.com/sustainable-products/ladies/"
                  class="text-blue-500 hover:text-blue-700"
                >
                  Shop more women's eco-friendly styles </a
                >.
              </p>
            </div>
          </div>

          <div class="mt-4">
            <button
              @click="showShippingDesc = !showShippingDesc"
              class="description-label flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
            >
              <span class="text-lg">Shipping &amp; Returns</span>
              <!-- Down Arrow -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
                v-if="!showShippingDesc"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              <!-- Up Arrow -->
              <svg
                v-if="showShippingDesc"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            <!-- Description Shipping -->
            <div
              v-if="showShippingDesc"
              class="description-content mt-2 px-4 py-2 bg-gray-50 rounded-md shadow-md transition ease-in-out duration-300 text-left"
            >
              <p class="mb-4">
                Most packages are delivered within 3-10 business days to all
                U.S. addresses. We ship via UPS, and are unable to ship to PO
                boxes or APO/FPO addresses at this time.
              </p>
              <ul class="mb-4 list-disc list-inside text-left">
                <li>
                  All order placed before 11am Pacific Time Monday-Friday will
                  ship the next business day. Orders placed Saturday and Sunday
                  will ship by Tuesday.
                </li>
                <li>
                  For Fan Shop orders (orders with Collegiate/Professional
                  Sports embroidery) add 5-7 business days to your delivery
                  time.
                </li>
                <li>
                  Business days are Monday through Friday, excluding Federal
                  holidays within the U.S.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View Customers  -->
    <div class="mt-16 p-4">
      <div class="flex">
        <h1 class="text-2xl font-bold">Customers Also Viewed</h1>
      </div>
      <div
        class="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-4 justify-center items-center"
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
            <img
              src="/images/product-1.jpg"
              alt=""
              class="transition-opacity"
            />
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
            <img
              src="/images/product-2.jpg"
              alt=""
              class="transition-opacity"
            />
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
            <img
              src="/images/product-3.jpg"
              alt=""
              class="transition-opacity"
            />
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
            <img
              src="/images/product-4.jpg"
              alt=""
              class="transition-opacity"
            />
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
            <img
              src="/images/product-9.jpg"
              alt=""
              class="transition-opacity"
            />
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
      </div>
    </div>

    <!-- Customer Reviews  -->
    <div class="justify-center mt-20">
      <h1 class="text-2xl font-medium">Customer Reviews</h1>

      <!-- Review -->
      <div class="flex justify-center items-center space-x-10 mt-10">
        <p class="font-semibold text-xl">4.8</p>

        <span class="flex text-lg text-gray-500 items-center">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <p class="text-gray-700 text-lg ml-4">5 reviews</p>
        </span>

        <p>Based on 5 Reviews</p>
      </div>

      <!-- Button Review -->
      <div class="flex justify-between items-center mt-10">
        <p class="uppercase text-lg font-semibold border-b-2">review 5</p>
        <button
          class="capitalize bg-[#81C2BE]  hover:bg-[#78b4b0]  py-2 px-4 text-white"
          @click="showReview = ! showReview"
        >
          write a review
        </button>
      </div>

      <!-- Form Review -->
      <div class="mt-10 justify-center items-center flex" v-if="showReview">
        <form class="flex">
          <div class="space-y-12">
            <div class="">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Personal Review
              </h2>

              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="sm:col-span-3">
                  <label
                    for="first-name"
                    class="flex text-sm font-medium leading-6 text-gray-900"
                    >Name</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="w-full border py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-inset focus:ring-black focus-visible:outline sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="email"
                    class="flex text-sm font-medium leading-6 text-gray-900"
                    >Email</label
                  >
                  <div class="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      class="w-full border py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-inset focus:ring-black focus-visible:outline sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="street-address"
                    class="flex text-sm font-medium leading-6 text-gray-900"
                  >
                    Title of Review
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autocomplete="street-address"
                      class="w-full border py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-inset focus:ring-black focus-visible:outline sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="how"
                    class="flex text-sm font-medium leading-6 text-gray-900"
                  >
                    Title of Review
                  </label>
                  <div class="mt-2">
                    <textarea
                      name="how"
                      id="how"
                      cols="70"
                      rows="10"
                      class="w-full border py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-inset focus:ring-black focus-visible:outline sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                class="bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- Comment -->
      <div class="flex mt-20 mb-20">
        <div class="w-1/4 flex items-center space-x-4">
          <div class="bg-gray-400 p-6 text-white rounded-full">HZ</div>
          <div class="space-y-2">
            <p class="text-sm flex">Hamed Z.</p>
            <p class="text-sm">03/24/2022</p>
            <span class="flex text-sm text-gray-500 items-center">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
          </div>
        </div>
        <div class="w-3/4">
          <ul class="list-inside">
            <li class="flex font-semibold text-lg">
              Perfect light weight jacket
            </li>
            <li class="flex mt-4 text-left">
              This jacket is great and it’s the perfect Tennessee orange. It’s
              light weight but warm. It has a nice cut so it’s very flattering.
              I love that it’s packable because that makes it easy to put in any
              bag for an extra layering piece on cool evenings.
            </li>
            <li class="">
              <a href="#" class="flex mt-2 text-blue-500"
                >Cutter & Buck Rainier PrimaLoft® Womens Eco Insulated Full Zip
                Puffer Jacket</a
              >
            </li>
          </ul>
          <div class="flex items-center mt-4 justify-between">
            <div class="">
              <button class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                <p class="font-sm">Share</p>
              </button>
            </div>

            <div class="flex space-x-2">
              <p class="">Was this helpful?</p>
              <button class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <p class="">2</p>
              </button>
              <button class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                  />
                </svg>
                <p class="">0</p>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      showProductDesc: false,
      showShippingDesc: false,
      showReview : false
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>