<template>
  <div class="page">
    <BadgeGenerator />
  </div>
</template>

<script>

import BadgeGenerator from '../components/Badges.vue'

export default {
  name: 'BadgeView',
  components: {
    BadgeGenerator
  }
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  background-color: #ffffff;
}

h1 {
  font-size: 4rem;
  font-weight: 600;
  color: #000000;
}
</style>

