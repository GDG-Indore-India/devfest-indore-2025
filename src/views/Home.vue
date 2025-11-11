<template>
  <div class="home-page">
    <HeroSection />
    <StatisticsSection />
    <WhatToExpectSection />
    <LastYearSection />
  </div>
</template>

<script>
import HeroSection from '@/components/homePage/HeroSection.vue'
import StatisticsSection from '@/components/homePage/StatisticsSection.vue'
import WhatToExpectSection from '@/components/homePage/WhatToExpectSection.vue'
import LastYearSection from '@/components/homePage/LastYearSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    StatisticsSection,
    WhatToExpectSection,
    LastYearSection
  }
}
</script>

<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>