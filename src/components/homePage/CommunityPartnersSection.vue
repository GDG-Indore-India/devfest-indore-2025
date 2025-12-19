<template>
  <div class="community-partners-section">
    <div class="community-partners-container">
      <!-- Section Title -->
      <div class="section-header">
        <h2 class="section-title">Community Partners</h2>
        <p class="section-description">
          We're proud to collaborate with these amazing community organizations that share our passion for technology and innovation.
        </p>
      </div>

      <!-- Partners Grid -->
      <div class="partners-grid">
        <div 
          v-for="(partner, index) in partners" 
          :key="index" 
          class="partner-item"
        >
          <div class="partner-logo-wrapper">
            <img 
              :src="partner.logo" 
              :alt="partner.name" 
              class="partner-logo"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gdgProfessionalLogo from '@/assets/community-partner-logos/Copy of GDG Professional - Horizontal - Light 2.png'
import ffdgIndoreLogo from '@/assets/community-partner-logos/ffdgindore 1.svg'
import fofIndoreLogo from '@/assets/community-partner-logos/FOF INDORE-LOGO (1) 1.png'
import indorixLogo from '@/assets/community-partner-logos/indorix 1 (1).png'
import mlIndoreLogo from '@/assets/community-partner-logos/ML Indore Logo (2) 1 (1).png'
import gdgIndoreLogo from '@/assets/community-partner-logos/Logo_Black_Short 1.png'
import techCommunityLogo from '@/assets/community-partner-logos/image 33005.png'
import idcCommunityLogo from '@/assets/community-partner-logos/IDC_Community_Partner.png'
import sakhiLogo from '@/assets/community-partner-logos/Sakhi.png'
import Headstart from '@/assets/community-partner-logos/Headstart.png'
import Mist from '@/assets/community-partner-logos/Mist.png'
import MyFm from '@/assets/community-partner-logos/MyFm.png'
import Workie from '@/assets/community-partner-logos/Workie.png'

export default {
  name: 'CommunityPartnersSection',
  data() {
    return {
      partners: [
        {
          name: 'GDG Professional',
          logo: gdgProfessionalLogo
        },
        {
          name: 'FFGDG Indore',
          logo: ffdgIndoreLogo
        },
        {
          name: 'FOF Indore',
          logo: fofIndoreLogo
        },
        {
          name: 'Indorix',
          logo: indorixLogo
        },
        {
          name: 'ML Indore',
          logo: mlIndoreLogo
        },
        {
          name: 'GDG Indore',
          logo: gdgIndoreLogo
        },
        {
          name: 'Tech Community',
          logo: techCommunityLogo
        },
        {
          name: 'IDC Community Partner',
          logo: idcCommunityLogo
        },
        {
          name: 'Sakhi',
          logo: sakhiLogo
        },
        {
          name: 'Headshort',
          logo: Headstart
        },
        {
          name: 'Mist',
          logo: Mist
        },
        {
          name: 'My Fm',
          logo: MyFm
        },
        {
          name: 'Workie',
          logo: Workie
        }


      ]
    }
  },
  methods: {
    handleImageError(event) {
      event.target.style.display = 'none';
    }
  }
}
</script>

<style scoped>
.community-partners-section {
  width: 100%;
  padding: var(--space-2xl) var(--padding-section-x) var(--space-2xl);
  display: flex;
  justify-content: center;
  background-color: #ffffff;
}

.community-partners-container {
  max-width: var(--content-max-width);
  width: var(--content-width);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

/* Section Header */
.section-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  text-align: left;
}

.section-title {
  font-size: var(--text-4xl);
  font-weight: bold;
  color: var(--color-text-body);
  margin: 0;
}

.section-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-body);
  margin: 0;
  max-width: 700px;
}

/* Partners Grid */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md) var(--space-lg);
  margin-top: var(--space-sm);
  align-items: center;
  justify-items: start;
}

.partner-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: var(--space-lg);
  transition: opacity 0.2s ease;
  width: 100%;
}

.partner-item:hover {
  opacity: 0.8;
}

.partner-logo-wrapper {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: var(--space-md);
  background-color: #ffffff;
  border-radius: var(--radius-sm);
}

.partner-logo {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  transition: transform 0.2s ease;
}

.partner-item:hover .partner-logo {
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .community-partners-container {
    width: var(--content-width-tablet);
  }

  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl) var(--space-lg);
  }

  .partner-logo-wrapper {
    height: 100px;
  }
}

@media (max-width: 768px) {
  .community-partners-section {
    padding: 3rem var(--padding-section-x) 2rem;
  }

  .community-partners-container {
    width: var(--content-width-mobile);
    gap: var(--space-xl);
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 0.95rem;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl) var(--space-lg);
    margin-top: var(--space-lg);
  }

  .partner-logo-wrapper {
    height: 90px;
  }
}

@media (max-width: 480px) {
  .community-partners-section {
    padding: 2.5rem var(--padding-section-x) 1.5rem;
  }

  .community-partners-container {
    gap: var(--space-lg);
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-description {
    font-size: 0.9rem;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg) var(--space-md);
  }

  .partner-item {
    padding: var(--space-md);
  }

  .partner-logo-wrapper {
    height: 80px;
    padding: var(--space-sm);
  }
}
</style>

