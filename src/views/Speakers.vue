<template>
  <v-container fluid class="mt-4 pt-0">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">

        <p class="gdg-heading mb-2" style="font-size: 1.7rem; font-weight: 600;">Speakers</p>

        <p
  class="text-body-1 my-4 w-100"
  style="width: 100%; text-align: justify;"
>
  Our speakers are influential leaders and allies actively involved in various communities within their organizations, cities, countries, and beyond, making a significant impact through their contributions and support.
</p>

        <h2 class="gdg-subheading text-h5 my-6" style="font-weight: 600;">This year speakers</h2>

        <v-container fluid class="px-0">
          <v-row justify="start" class="fill-height">
            <v-col
              md="4"
              lg="3"
              xl="2"
              sm="2"
              cols="6"
              style="max-width: none !important;"
              class="shadows"
              v-for="(item, index) in SpeakersData"
              :key="index"
            >
              <SpeakerCard :speakerData="item" :sessionDetails="SessionDetails" />
            </v-col>
          </v-row>
        </v-container>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SpeakersData from "@/assets/data/speakers.json";
import SessionDetails from "@/assets/data/sessions.json";
import SpeakerCard from "@/components/speakers/SpeakerDialog.vue";

export default {
  name: "SpeakersView",
  components: {
    SpeakerCard,
  },
  data: () => ({
    SpeakersData: [],
    SessionDetails: [],
  }),
  methods: {
    sortByName(data) {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  mounted() {
    this.SpeakersData = this.sortByName(SpeakersData);
    this.SessionDetails = SessionDetails.sort((a, b) => (a.id > b.id ? 1 : -1));
  },
  created() {
    document.title = "Speakers | Devfest Indore 2023";
  },
};
</script>

<style>
.shadows {
  /* Removing shadows from the container, as they should be on the card */
  /* box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.07), 0 2px 2px 0 rgba(0, 0, 0, 0.15); */
  padding: 8px; /* Added padding for spacing */
}
/* .shadows:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
} 
*/
.margin {
  margin-top: 10vh; /* Reduced margin-top for a closer look */
  margin-bottom: 2rem;
}

/* Using Vuetify's typography classes is preferred, but you can style headings like this */
.gdg-heading {
  font-family: 'Google Sans', sans-serif;
  color: #202124;
}

.text-h5 {
  font-family: 'Google Sans', sans-serif;
  color: #202124;
}

.text-body-1 {
  font-family: 'Roboto', sans-serif;
  color: #5f6368;
  font-size: 1rem;
  line-height: 1.5;
}
</style>