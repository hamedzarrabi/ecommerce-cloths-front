<template>
  <div class="" v-if="isVisible">
    <div class="fixed flex inset-0 z-50 justify-center items-center bg-gray-800/25">
      <div class="flex flex-col w-1/6 rounded-lg shadow-lg bg-white">
        <!--   Header  -->
        <div class="p-5 bg-gray-100">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-semibold">Delete</h3>
            <button class="p-1 leading-none" @click="emitCancel">
              <div class="text-2xl.font-semibold h-6 w-6">
                <span class="hover:text-greenHamed">X</span>
              </div>
            </button>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6">
          <p>Are you sure for Delete.</p>
        </div>

        <!-- Footer -->
        <div class="p-6 flex justify-end items-center space-x-2">
          <button class="py-2 px-3 bg-gray-300 hover:bg-gray-500 rounded-lg hover:text-white" @click="emitCancel">Cancel</button>
          <button class="py-2 px-3 bg-red-300 hover:bg-red-500 rounded-lg hover:text-white" @click="emitConfirm">Confirm</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
  },
  data() {
    return {

    }
  },
  methods: {
    emitCancel() {
      this.$emit('cancel');
    },
    emitConfirm() {
      this.$emit('confirm');
    }
  }
}
</script>


<style scoped>

</style>