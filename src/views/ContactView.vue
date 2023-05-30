<script setup>

</script>

<template>
  <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 container mx-auto my-14">
    <div class="justify-center items-center">
      <img src="/Images/Cloths.jpg" class="w-full h-full" alt="">
    </div>
    <div class="flex mx-6 mt-16">
      <form action="" class="items-center my-6 space-x-8">
        <p class="self-center font-semibold text-lg">CONTACT</p>
        <input type="text" placeholder="Name" class=" border border-gray-200 mt-4  w-[280px] px-2 py-2" />
        <input type="email" placeholder="Email" class=" border border-gray-200 mt-4  w-[280px] px-2 py-2" />
        <textarea placeholder="Message" class="flex border border-gray-200 mt-4 w-[600px] h-[200px] px-2 py-2"></textarea>
        <button class="bg-black p-2 text-white px-16 flex mt-10 hover:bg-white hover:border-2 hover:border-black hover:text-black duration-100">Send</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>