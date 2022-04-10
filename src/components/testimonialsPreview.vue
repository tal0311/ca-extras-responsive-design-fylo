<template>
  <section class="item ">
    <p>
      {{ item.content }}
    </p>

    <div class="item-info flex">
      <img class="user-img" :src="item.img" />
      <div class="info">
        <p>{{ item.name }}</p>
        <small>{{ item.position }}</small>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'testimonialsPreview',
  props: {
    item: Object,
  },
}
</script>

<style></style>
