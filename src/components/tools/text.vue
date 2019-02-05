<template>
  <component :class="component_class" :is="tag">{{ text }}</component>
</template>

<script>
  export default {
    props: ['text','tag','component_class'],
  }
</script>