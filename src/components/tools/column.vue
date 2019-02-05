<template>
  <div :class="component_class" >
      <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['component_class'],
  }
</script>