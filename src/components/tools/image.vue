<template>
  <img :class="component_class" :src="image" :alt="name">
</template>

<script>
  export default {
    props: ['image','component_class','name'],
  }
</script>