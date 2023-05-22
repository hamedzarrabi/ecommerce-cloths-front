<template>
  <div class="ml-2">
    <div class="flex">
      <div class="space-x-2">
        <div
          class="relative cursor-pointer focus:ring-inset focus:ring-black hover:ring-2 hover:ring-offset-2 hover:ring-inset hover:ring-gray-700 rounded-full"
          :class="colors"
          @click.prevent="selectedColor"
        >
          <div class="p-4"></div>
          <div class="absolute ml-2.5 -mt-6" v-show="isSelected">
            <i class="fas fa-check text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeColor",
  props: {
    colors: {},
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    selectedColor() {
      return (this.isSelected = !this.isSelected);
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>