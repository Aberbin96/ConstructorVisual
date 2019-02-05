<template>
  <section :class="component_class" >
      <slot></slot>
  </section>
</template>

<script>
  export default {
    props: ['component_class'],
  }
</script>