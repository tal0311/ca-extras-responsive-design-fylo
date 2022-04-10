<template>
  <section class="feature-list flex">
    <section v-for="(feature, idx) in features" :key="idx">
      <features-preview :item="feature" />
    </section>
  </section>
</template>

<script>
import featuresPreview from './featurePreview.vue'
export default {
  name: 'featuresList',
  components: {
    featuresPreview,
  },
  data() {
    return {
      features: [
        {
          img: new URL(
            '../assets/images/icon-access-anywhere.svg',
            import.meta.url
          ).href,
          title: 'Access your files, anywhere',
          desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
        },

        {
          img: new URL(
            '../assets/images/icon-security.svg',
            import.meta.url
          ).href,
          title: 'Security you can trust',
          desc: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
        },

        {
         img: new URL(
            '../assets/images/icon-collaboration.svg',
            import.meta.url
          ).href,
          title: 'Real-time collaboration',
          desc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
        },

        {
         img: new URL(
            '../assets/images/icon-any-file.svg',
            import.meta.url
          ).href,
          title: 'Store any type of file',
          desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        },
      ],
    }
  },
}
</script>

<style></style>
