<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
}
</style>
