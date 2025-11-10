<template>
  <v-dialog v-model="dialog" max-width="850">
    <template #activator="{ props: activatorProps }">
      <div
        v-bind="activatorProps"
        class="text-center ma-0 fill-height card-activator"
      >
        <div class="heightabove">
          <v-avatar size="170">
            <v-img
              :src="getImgUrl(speakerData.image)"
              :alt="speakerData.name"
              cover
            />
          </v-avatar>
          <p class="text-body-8 gdg-heading mb-1" style="font-weight: 600; font-size: 1.1rem;">
            {{ speakerData.name }}
          </p>
          <p class="mt-1 mb-0 font-weight-300" style="font-size: 100%">
           {{ truncatedBio }}
          </p>
          <!-- <v-chip
            class="ma-2 max-width-chip"
            :color="getChipColor(speakerData.track)"
          >
            {{ speakerData.track }}
          </v-chip> -->
        </div>
        <!-- <div class="height">
          <v-btn
            v-if="speakerData.social?.twitter"
            icon
            size="small"
            :href="speakerData.social.twitter"
            target="_blank"
            variant="flat"
            color="#1da1f2"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            v-if="speakerData.social?.linkedin"
            icon
            size="small"
            :href="speakerData.social.linkedin"
            target="_blank"
            variant="flat"
            color="#0077b5"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </div> -->
      </div>
    </template>

    <v-card class="rounded-xl pa-4">
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="4" class="d-flex align-center justify-center">
              <v-avatar size="220" class="speaker-dialog-avatar">
                <v-img
                  :src="getImgUrl(speakerData.image)"
                  :alt="speakerData.name"
                  cover
                />
              </v-avatar>
            </v-col>

            <v-col cols="12" md="8">
              <p class="text-h4 font-weight-bold mb-2" style="line-height: 1.2;">
                {{ speakerData.name }}
              </p>

              <!-- <p v-if="speakerData.tagline" class="text-body-1 text-medium-emphasis mb-4" style="word-wrap: break-word;">
                {{ speakerData.tagline }}
              </p> -->

              <!-- <p v-if="speakerSession" class="text-h6 font-weight-bold my-4">
                {{ speakerSession.title }}
              </p> -->

              <p
  v-if="speakerData.company?.designation || speakerData.company?.name"
  class="font-weight-bold my-4 text-body-1 text-medium-emphasis mb-4"
  style="word-wrap: break-word;"
>
  {{ speakerData.company?.designation }} 
  <span v-if="speakerData.company?.designation && speakerData.company?.name"> at </span>
  {{ speakerData.company?.name }}
</p>


              <p class="text-body-1 my-4">
                {{ speakerData.bio }}
              </p>

              <PersonSocialInfo
                v-if="speakerData.social"
                :socialInfo="speakerData.social"
                class="mb-4"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions class="justify-end pa-4">
        <v-btn
          variant="text"
          @click="dialog = false"
          class="font-weight-bold"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import PersonSocialInfo from "@/components/common/PersonSocialInfo.vue";
// Removed SpeakerSessionsCard as it's replaced by the computed prop

export default {
  name: "SpeakerDialog",
  components: {
    PersonSocialInfo,
    // SpeakerSessionsCard, // Removed
  },
  props: {
    speakerData: {
      type: Object,
      required: true,
    },
    sessionDetails: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    /**
     * Finds the first session associated with this speaker.
     */
    speakerSession() {
      if (
        !this.speakerData.sessionId ||
        this.speakerData.sessionId.length === 0 ||
        this.sessionDetails.length === 0
      ) {
        return null;
      }
      // Find the session that matches the speaker's first session ID
      return this.sessionDetails.find(
        (s) => s.id === this.speakerData.sessionId[0]
      );
    },
    truncatedBio() {
      const bio = this.speakerData.bio;
      if (!bio) return ''; // Handle case where bio is null or empty

      const words = bio.split(' ');
      if (words.length > 8) {
        // Slice the first 10 words, join them back with a space, and add '...'
        return words.slice(0, 8).join(' ') + '...';
      }

      return bio; // Return the full bio if it's 10 words or less
    }
  },
  methods: {
    getChipColor(track) {
      switch (track) {
        case "WEB":
          return "red";
        case "Cloud":
          return "green";
        case "ML":
          return "yellow";
        default:
          return "primary";
      }
    },
    getImgUrl(imagePath) {
      if (!imagePath) return "";
      // Uses the path 'src/assets/img/speakers/'
      return new URL(
        `../../assets/img/speakers/${imagePath}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<style scoped>
.card-activator {
  cursor: pointer;
  background: white;
  border-radius: 16px;
  transition: all 0.3s ease;
  padding: 10px;
  /* Added height to ensure consistency */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-activator:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
.height {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; /* Added gap */
}
.heightabove {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Changed to center */
  align-items: center;
}
.max-width-chip {
  max-width: 50%;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}

/* Style for the large avatar inside the dialog */
.speaker-dialog-avatar {
  border: 4px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>