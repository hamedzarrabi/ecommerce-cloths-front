<template>
  <div
    class="description-label active  items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 border-b border-black"
  >
    <div
      @click="open"
      class="flex justify-between cursor-pointer"
    >
      <p class="text-lg">{{ header }}</p>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div class="mt-5 w-full" v-if="isOpen">
      <slot></slot>
    </div>

  </div>
</template>


<script>
export default {
  name: "CollapseAccording",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    caretIcon() {
        return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    }
  }
};
</script>

<style>
</style>