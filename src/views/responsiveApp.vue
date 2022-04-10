<template>
  <section class="app-container main-layout">
    <header-app />
    <hero-app />
    <features-list />
    <productive-section />
    <testimonials-list />
    <contact-form />
    <app-footer />
  </section>
</template>

<script>
import headerApp from '../components/headerApp.vue'
import heroApp from '../components/heroApp.vue'
import featuresList from '../components/featuresList.vue'
import productiveSection from '../components/productiveSection.vue'
import testimonialsList from '../components/testimonialsList.vue'
import contactForm from '../components/contactForm.vue'
import appFooter from '../components/appFooter.vue'

export default {
  name: 'responsive-app',
  components: {
    headerApp,
    heroApp,
    featuresList,
    productiveSection,
    testimonialsList,
    contactForm,
    appFooter,
  },
}
</script>

<style></style>
