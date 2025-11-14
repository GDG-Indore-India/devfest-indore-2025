<template>
  <section class="register-page">
    <div class="container">
      <h1>Register</h1>
      <p class="sub">Complete your DevFest registration below without leaving the site.</p>
      <div class="widget-wrap">
        <iframe
          src="https://konfhub.com/widget/test-even?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=65729%2C65730&ticketId=65729%7C1%3B65730%7C1"
          id="konfhub-widget"
          title="Register for test even"
          width="100%"
          height="700"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
// no special logic required
</script>

<style scoped>
.register-page {
  padding: 7rem 1rem 3rem; /* account for fixed header */
}
.container {
  width: min(1100px, 94%);
  margin: 0 auto;
}
.sub { color: #555; margin-top: -0.25rem; margin-bottom: 1rem; }
.widget-wrap {
  background: #f0f0f0;
  border: 2px solid #000;
  border-radius: 18px;
  padding: 12px;
}
@media (max-width: 640px){
  .register-page{ padding-top: 6rem; }
}
</style>
