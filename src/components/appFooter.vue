<template>
  <section class="footer flex main-layout">
    <div class="footer-wrapper">
      <div class="logo">
        <img src="./../assets/images/logo.svg" />
      </div>
      <div class="info-container flex">
        <div class="location-container flex">
          <i class="fa-solid fa-location-dot"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div class="mail-phone-container">
          <div class="container flex">
            <i class="fa-solid fa-phone-volume"></i>
            <p>+1-543-123-4567</p>
          </div>
          <div class="container flex">
            <i class="fa-solid fa-envelope"></i>
            <p>example@fylo.com</p>
          </div>
        </div>
        <div class="about-container">
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>
        <div class="contact-container">
          <p>contact us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div class="social-container flex">
          <i class="fa-brands fa-twitter-square"></i>
          <i class="fa-brands fa-facebook-square"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app-Footer',
}
</script>

<style></style>
