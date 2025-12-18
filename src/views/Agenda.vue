<template>
  <div class="page-content">
    <div class="page-content-container">
      <!-- Header Section -->
      <section class="header-section" aria-label="Page header">
        <h1 class="page-title">Agenda</h1>
        <p class="preamble">
          Follow code demonstrations by our expert speakers on different tracks. 
          Check out the schedule below and don't forget to mark your calendar so 
          that you don't miss out on any sessions.
        </p>
      </section>

      <!-- Static Events Section -->
      <section class="static-events-section" aria-label="Main events">
        <EventItem
          v-for="event in staticEvents"
          :key="event.id"
          :event="event"
          @click="openModal(event)"
        />
      </section>

      <!-- Track Navigation -->
      <nav class="track-navigation" aria-label="Event track filters">
        <div class="track-tabs" role="tablist">
          <button
            v-for="track in dynamicTracks"
            :key="track"
            class="track-tab no-select"
            :class="{ active: activeTrack === track }"
            role="tab"
            :aria-selected="activeTrack === track"
            :tabindex="activeTrack === track ? 0 : -1"
            @click="activeTrack = track"
            @keydown.enter.prevent="activeTrack = track"
            @keydown.space.prevent="activeTrack = track"
          >
            {{ track }}
          </button>
        </div>
      </nav>

      <!-- Dynamic Events Section -->
      <section class="dynamic-events-section" aria-label="Track events">
        <template v-if="dynamicEvents.length > 0">
          <EventItem
            v-for="event in dynamicEvents"
            :key="event.id"
            :event="event"
            @click="openModal(event)"
          />
        </template>
        <div v-else class="empty-state">
          <p>No events scheduled for this track.</p>
        </div>
      </section>

      <!-- Event Modal -->
      <EventModal
        :show="showModal"
        :event="selectedEvent"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import EventItem from '@/components/EventItem.vue'
import EventModal from '@/components/EventModal.vue'
import speakersData from '@/assets/data/speakers.json'

// Helper function to get talkTitle by speaker name
const getTalkTitle = (speakerName) => {
  const speaker = speakersData.find(s => s.name === speakerName)
  return speaker?.talkTitle || speakerName
}

const EVENTS = [
  // Static Main Events - Shared across all tracks
  {
    id: 1,
    startTime: '8:30 AM',
    endTime: '10:00 AM',
    title: 'Registrations',
    track: 'Main Event',
    date: 'December 20, 2025',
    fullTime: '08:30 AM to 10:00 AM',
    duration: '1 Hr 30 Min',
    overview: 'Join us for the registration of DevFest Indore 2025. Meet the organizers, learn about the event schedule, and get ready for an amazing day of learning and networking.'
  },
  
  // Cloud+ML Track Events
  {
    id: 4,
    startTime: '10:15 AM',
    endTime: '10:30 AM',
    title: 'Opening Note',
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '10:15 AM to 10:30 AM',
    duration: '15 Min',
    overview: 'Opening note for the Cloud+ML track.'
  },
  {
    id: 5,
    startTime: '10:30 AM',
    endTime: '11:15 AM',
    title: getTalkTitle('Himanshu Jain'),
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '10:30 AM to 11:15 AM',
    duration: '45 Min',
    overview: 'Session by Himanshu Jain on Reinventing Learning: How AI Is Transforming the Future of Education.'
  },
  {
    id: 6,
    startTime: '11:15 AM',
    endTime: '12:00 PM',
    title: getTalkTitle('Nikhilesh Tayal'),
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '11:15 AM to 12:00 PM',
    duration: '45 Min',
    overview: 'Session by Nikhilesh Tayal on Building Intelligent AI Agents: From RAG Pipelines to Real-World BFSI Use Cases.'
  },
  {
    id: 7,
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    title: 'Panel Discussion',
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '12:00 PM to 1:00 PM',
    duration: '1 Hr',
    overview: 'An engaging panel discussion featuring industry experts sharing insights on the latest trends in technology, innovation, and developer tools.'
  },
  {
    id: 8,
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    title: 'Lunch',
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '1:00 PM to 2:00 PM',
    duration: '1 Hr',
    overview: 'Take a break and enjoy lunch while networking with fellow attendees, speakers, and organizers.'
  },
  {
    id: 9,
    startTime: '2:00 PM',
    endTime: '2:20 PM',
    title: 'IIST [Bhavesh]',
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '2:00 PM to 2:20 PM',
    duration: '20 Min',
    overview: 'Session by IIST representative Bhavesh.'
  },
  {
    id: 10,
    startTime: '2:20 PM',
    endTime: '3:00 PM',
    title: getTalkTitle('Ganesh Divekar'),
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '2:20 PM to 3:00 PM',
    duration: '40 Min',
    overview: 'Session by Ganesh Divekar, Lead AI Engineer.'
  },
  {
    id: 11,
    startTime: '3:00 PM',
    endTime: '3:40 PM',
    title: getTalkTitle('Shashank Saxena'),
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '3:00 PM to 3:40 PM',
    duration: '40 Min',
    overview: 'Session by Shashank Saxena on Operationalising AI Agents at Scale with the Vertex AI Agent Engine.'
  },
  {
    id: 12,
    startTime: '3:40 PM',
    endTime: '4:00 PM',
    title: 'Closing Note',
    track: 'Cloud+ML',
    date: 'December 20, 2025',
    fullTime: '3:40 PM to 4:00 PM',
    duration: '20 Min',
    overview: 'Closing note for the Cloud+ML track.'
  },

  // Mobile+Web Track Events
  {
    id: 13,
    startTime: '10:15 AM',
    endTime: '10:30 AM',
    title: 'Opening Note',
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '10:15 AM to 10:30 AM',
    duration: '15 Min',
    overview: 'Opening note for the Mobile+Web track.'
  },
  {
    id: 14,
    startTime: '10:30 AM',
    endTime: '11:15 AM',
    title: getTalkTitle('Ankit Sharma'),
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '10:30 AM to 11:15 AM',
    duration: '45 Min',
    overview: 'Session by Ankit Sharma on Smart Angular Apps with Gemini: Building an AI-Powered Writing Assistant.'
  },
  {
    id: 15,
    startTime: '11:15 AM',
    endTime: '12:00 PM',
    title: getTalkTitle('Divyanshu Bhargava'),
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '11:15 AM to 12:00 PM',
    duration: '45 Min',
    overview: 'Session by Divyanshu Bhargava on Scaling Server-Driven UI with Stack.'
  },
  {
    id: 16,
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    title: 'Panel Discussion',
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '12:00 PM to 1:00 PM',
    duration: '1 Hr',
    overview: 'An engaging panel discussion featuring industry experts sharing insights on the latest trends in technology, innovation, and developer tools.'
  },
  {
    id: 17,
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    title: 'Lunch',
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '1:00 PM to 2:00 PM',
    duration: '1 Hr',
    overview: 'Take a break and enjoy lunch while networking with fellow attendees, speakers, and organizers.'
  },
  {
    id: 18,
    startTime: '2:00 PM',
    endTime: '2:20 PM',
    title: 'FM [Ravi]',
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '2:00 PM to 2:20 PM',
    duration: '20 Min',
    overview: 'Session by FM representative Ravi.'
  },
  {
    id: 19,
    startTime: '2:20 PM',
    endTime: '3:00 PM',
    title: getTalkTitle('Abhishek Doshi'),
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '2:20 PM to 3:00 PM',
    duration: '40 Min',
    overview: 'Session by Abhishek Doshi on Power of BuildContext in Flutter.'
  },
  {
    id: 20,
    startTime: '3:00 PM',
    endTime: '3:40 PM',
    title: 'Srashti Jain',
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '3:00 PM to 3:40 PM',
    duration: '40 Min',
    overview: 'Session by Srashti Jain.'
  },
  {
    id: 21,
    startTime: '3:40 PM',
    endTime: '4:00 PM',
    title: 'Closing Note',
    track: 'Mobile+Web',
    date: 'December 20, 2025',
    fullTime: '3:40 PM to 4:00 PM',
    duration: '20 Min',
    overview: 'Closing note for the Mobile+Web track.'
  },

  // PM+Design+Ent Track Events
  {
    id: 22,
    startTime: '10:15 AM',
    endTime: '10:30 AM',
    title: 'Opening Note',
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '10:15 AM to 10:30 AM',
    duration: '15 Min',
    overview: 'Opening note for the PM+Design+Ent track.'
  },
  {
    id: 23,
    startTime: '10:30 AM',
    endTime: '11:15 AM',
    title: 'Rahul Chautel',
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '10:30 AM to 11:15 AM',
    duration: '45 Min',
    overview: 'Session by Rahul Chautel.'
  },
  {
    id: 24,
    startTime: '11:15 AM',
    endTime: '12:00 PM',
    title: 'Sunny Ralli',
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '11:15 AM to 12:00 PM',
    duration: '45 Min',
    overview: 'Session by Sunny Ralli.'
  },
  {
    id: 25,
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    title: 'Panel Discussion: The Great Reinvention - Turning AI Disruption into a Competitive Advantage',
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '12:00 PM to 1:00 PM',
    duration: '1 Hr',
    overview: 'This panel will explore how startups and enterprises are adapting to AI-led change, turning uncertainty into opportunity using AI-driven strategies, real-world lessons from founders building in competitive markets, and what it takes to stay relevant in an AI-first economy.'
  },
  {
    id: 26,
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    title: 'Lunch',
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '1:00 PM to 2:00 PM',
    duration: '1 Hr',
    overview: 'Take a break and enjoy lunch while networking with fellow attendees, speakers, and organizers.'
  },
  {
    id: 27,
    startTime: '2:00 PM',
    endTime: '2:20 PM',
    title: 'Open Discussion Activity',
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '2:00 PM to 2:20 PM',
    duration: '20 Min',
    overview: 'An interactive open discussion activity for the PM+Design+Ent track.'
  },
  {
    id: 28,
    startTime: '2:20 PM',
    endTime: '3:00 PM',
    title: 'Gautam Billore',
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '2:20 PM to 3:00 PM',
    duration: '40 Min',
    overview: 'Session by Gautam Billore.'
  },
  {
    id: 29,
    startTime: '3:00 PM',
    endTime: '3:40 PM',
    title: getTalkTitle('Shachita Jain'),
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '3:00 PM to 3:40 PM',
    duration: '40 Min',
    overview: 'Session by Shachita Jain on From Coding to Catalyzing: Becoming a Technical Product Manager.'
  },
  {
    id: 30,
    startTime: '3:40 PM',
    endTime: '4:00 PM',
    title: 'Closing Note',
    track: 'PM+Design+Ent',
    date: 'December 20, 2025',
    fullTime: '3:40 PM to 4:00 PM',
    duration: '20 Min',
    overview: 'Closing note for the PM+Design+Ent track.'
  }
]

export default {
  name: 'AgendaView',
  components: {
    EventItem,
    EventModal
  },
  setup() {
    const showModal = ref(false)
    const selectedEvent = ref({})
    const activeTrack = ref('')

    const staticEvents = computed(() => 
      EVENTS.filter(event => event.track === 'Main Event')
    )

    const dynamicTracks = computed(() => {
      const tracks = [...new Set(EVENTS.map(event => event.track))].filter(
        track => track !== 'Main Event'
      )
      if (!activeTrack.value && tracks.length > 0) {
        activeTrack.value = tracks[0]
      }
      return tracks
    })

    const dynamicEvents = computed(() =>
      EVENTS.filter(event => event.track === activeTrack.value)
    )

    const openModal = (event) => {
      selectedEvent.value = event
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
      selectedEvent.value = {}
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && showModal.value) {
        closeModal()
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleKeyDown)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeyDown)
    })

    return {
      staticEvents,
      dynamicTracks,
      dynamicEvents,
      activeTrack,
      showModal,
      selectedEvent,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
/* Header Section */
.header-section {
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 1rem);
}

.page-title {
  font-size: var(--text-4xl);
  font-weight: 600;
  color: #202124;
  margin: 0;
  letter-spacing: -0.5px;
  font-family: var(--font-sans);
}

.preamble {
  font-size: var(--text-base);
  line-height: 1.6;
  color: #000000;
  margin: 0;
  font-family: var(--font-sans);
}

/* Static Events Section */
.static-events-section {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Track Navigation */
.track-navigation {
  width: 100%;
  margin: 0;
  padding: 0;
}

.track-tabs {
  display: flex;
  gap: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  margin: 0;
  padding: 0;
}

.track-tabs::-webkit-scrollbar {
  display: none;
}

.track-tab {
  background-color: transparent;
  border: none;
  padding: clamp(var(--space-sm), 2vw, var(--space-md)) clamp(var(--text-sm), 3vw, var(--space-lg));
  font-size: clamp(0.7rem, 1.5vw, var(--text-sm));
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: var(--font-sans);
  min-height: 44px;
  display: flex;
  align-items: center;
  border-radius: var(--radius-xl);
}

.track-tab:hover {
  background-color: var(--color-bg-light);
  color: var(--color-text-primary);
}

.track-tab:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.track-tab.active {
  color: var(--color-accent);
  background-color: var(--color-accent-bg);
}

/* Dynamic Events Section */
.dynamic-events-section {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.empty-state {
  text-align: center;
  padding: clamp(var(--space-xl), 5vw, var(--space-3xl)) clamp(var(--space-md), 2vw, var(--space-xl));
  color: var(--color-text-secondary);
  font-size: clamp(0.8125rem, 1.5vw, var(--text-sm));
}

.empty-state p {
  margin: 0;
}
</style>

