<template>
  <div class="">
    <Slider v-model="value" :merge="merge" :format="format" />
  </div>
</template>

<script>
import Slider from "@vueform/slider";
export default {
  name: "MultiRange",
  components: {
    Slider,
  },
  props: {
    min: Number,
    max: Number,
  },
  data() {
    return {
      value: [7, 62],
      merge: 10,
      format: {
        prefix: "$",
        decimals: 2,
      },


    };
  },
};
</script>

<style src="@vueform/slider/themes/default.css">

</style>