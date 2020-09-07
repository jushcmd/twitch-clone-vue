<template>
  <component :is="tag" :class="size">
    <slot />
  </component>

</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: "span"
    },
    size: {
      type: String,
      default: "font-size-3", // normal:14, small:12, xsmall:11, xxsmall:10
    }
  }
}
</script>


<style scoped>

</style>
