<template>
  <div class="last-year-section">
    <div class="last-year-container">
      <!-- Top Section: Title and Description -->
      <div class="top-content">
        <h2 class="section-title">Last Year at DevFest</h2>
        <p class="section-description">
          DevFest 2024 was an unforgettable experience, uniting 1,000+ passionate participants and 35+ expert speakers for a day filled with inspiration and learning. Attendees engaged in 25+ dynamic sessions, featuring lightning talks, workshops, and discussions on cutting-edge technologies. The event showcased the power of community, collaboration, and knowledge exchange, with participants gaining insights into the latest trends and tools in tech.
        </p>
      </div>

      <!-- Main Group Image -->
      <div class="main-image-container">
        <img src="@/assets/last-year-images/group-image-2024.jpg" alt="DevFest 2024 Group Photo" class="main-group-image" />
      </div>

      <!-- Statistics Section -->
      <div class="stats-section">
        <div class="stat-box stat-box-blue">
          <div class="stat-number">35+</div>
          <div class="stat-label">Speakers</div>
        </div>
        <div class="stat-box stat-box-pink">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Participants</div>
        </div>
        <div class="stat-box stat-box-yellow">
          <div class="stat-number">25+</div>
          <div class="stat-label">Sessions</div>
        </div>
        <div class="stat-box stat-box-green">
          <div class="stat-number">1</div>
          <div class="stat-label">Day(s)</div>
        </div>
      </div>

      <!-- Bottom Two Images -->
      <div class="bottom-images">
        <div class="bottom-image-wrapper">
          <img src="@/assets/last-year-images/image-1.jpg" alt="Speaker Session" class="bottom-image" />
        </div>
        <div class="bottom-image-wrapper">
          <img src="@/assets/last-year-images/image-2.jpg" alt="Panel Discussion" class="bottom-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastYearSection'
}
</script>

<style scoped>
.last-year-section {
  width: 100%;
  padding: 4rem 1rem 2rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
}

.last-year-container {
  max-width: 1400px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Top Content */
.top-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.section-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #000000;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Main Image */
.main-image-container {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #000000;
}

.main-group-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Statistics Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.stat-box {
  border: 1px solid #000000;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.stat-box-blue {
  background-color: #B3E5FC;
}

.stat-box-pink {
  background-color: #FFB3D9;
}

.stat-box-yellow {
  background-color: #FFF9C4;
}

.stat-box-green {
  background-color: #C8E6C9;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1E1E1E;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.stat-label {
  font-size: 1rem;
  color: #1E1E1E;
  margin: 0.5rem 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Bottom Images */
.bottom-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.bottom-image-wrapper {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #000000;
}

.bottom-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .last-year-container {
    width: 90%;
  }
  
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .bottom-images {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .last-year-section {
    padding: 3rem 1rem 1.5rem 1rem;
  }
  
  .last-year-container {
    width: 95%;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-description {
    font-size: 0.95rem;
  }
  
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-box {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .last-year-section {
    padding: 2.5rem 0.75rem 1rem 0.75rem;
  }
  
  .last-year-container {
    width: 95%;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-description {
    font-size: 0.9rem;
  }
  
  .stats-section {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .stat-box {
    padding: 1.25rem 1rem;
  }
  
  .stat-number {
    font-size: 1.75rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
  }
}
</style>

