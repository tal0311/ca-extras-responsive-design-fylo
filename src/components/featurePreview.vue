<template>
  <div class="feature flex">
    <img :src="item.img" alt="" />
    <div class="content-wrapper">
      <h4>{{ item.title }}</h4>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'featuresPreview',
  props: {
    item: Object,
  },
}
</script>

<style></style>
