<template>
  <section class="faq-section">
    <div class="faq-header">
      <h1>Frequently asked questions</h1>
      <p>Need Answers? Everything you need to know</p>
      <hr />
    </div>

    <div class="faq-container">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
      >
        <!-- button ensures large tappable area on mobile -->
        <button
          type="button"
          class="faq-question"
          @click="toggle(index)"
          @touchstart.prevent="toggle(index)"
          :aria-expanded="openIndex === index"
        >
          <span class="q-text">{{ faq.question }}</span>
          <span class="arrow" :class="{ open: openIndex === index }" aria-hidden="true">⌄</span>
        </button>

        <!-- keep in DOM with v-show for reliable mobile behavior -->
        <div
          class="faq-answer"
          :class="{ open: openIndex === index }"
          v-show="openIndex === index"
          role="region"
        >
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQView",
  data() {
    return {
      openIndex: null,
      faqs: [
        { question: "What is DevFest?", answer: "DevFests are community-led developer events hosted by Google Developers Groups around the globe." },
        { question: "What are GDGs?", answer: "GDGs (Google Developer Groups) are local tech communities that organize meetups, talks, and hackathons." },
        { question: "Who can register for DevFest?", answer: "Anyone passionate about technology, coding, or community learning can register and attend DevFest." },
        { question: "Is it mandatory to register to participate in the event?", answer: "Yes, registration is required to get entry passes and receive updates about sessions and activities." },
        { question: "I’m a beginner in programming. Can I still register?", answer: "Absolutely — DevFest welcomes beginners, students and professionals." },
        { question: "What will attendees get by participating in the event?", answer: "Participants get learning, networking, hands-on sessions and community perks." },
        { question: "How can I become a member of GDG?", answer: "Join your nearest GDG chapter from the GDG website or attend a local meetup." },
        { question: "How can I communicate my queries?", answer: "Use the contact form on the website, email, or our social channels." }
      ]
    };
  },
  methods: {
    toggle(index) {
      // toggles the index (open/close). Works for click and touchstart
      this.openIndex = this.openIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
/* ---------------- Base ---------------- */
* { box-sizing: border-box; }
.faq-section {
  background: #fff;
  padding: 60px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(80vh - 60px);
}

/* Header */
.faq-header {
  width: 100%;
  max-width: 960px;
  text-align: left;
  margin-bottom: 18px;
}
.faq-header h1 { font-size: 2rem; margin: 0 0 8px; font-weight: 700; color: #202124; line-height: 1.15; }
.faq-header p { margin: 0 0 12px; color: #5f6368; }
.faq-header hr { height: 2px; background: #e0e0e0; border: none; border-radius: 2px; }

/* Container (single unified card) */
.faq-container {
  width: 100%;
  max-width: 960px;
  background: #f5f5f5;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

/* Item separator */
.faq-item { border-bottom: 1px solid #ddd; }
.faq-item:last-child { border-bottom: none; }

/* Question (button) */
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  padding: 18px 22px;
  cursor: pointer;
  text-align: left;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.faq-question:active,
.faq-question:focus { outline: none; background: #ececec; }
.q-text { flex: 1; font-size: 1rem; font-weight: 600; color: #202124; }

/* Arrow */
.arrow { font-size: 1.4rem; color: #5f6368; transition: transform .24s ease, color .24s ease; margin-left: 12px; }
.arrow.open { transform: rotate(180deg); color: #f6b500; }

/* Answer panel - v-show + CSS open class for transition */
.faq-answer {
  background: #fff;
  padding: 0 22px;             /* collapsed has zero vertical padding */
  overflow: hidden;
  max-height: 0;               /* collapsed */
  transition: max-height 0.33s ease, padding 0.28s ease, opacity 0.28s ease;
  opacity: 0;
}
.faq-answer.open {
  padding: 16px 22px;          /* vertical padding when open */
  max-height: 600px;           /* large enough for typical answers */
  opacity: 1;
}
.faq-answer p { margin: 0; font-size: 0.96rem; line-height: 1.6; color: #333; }

/* ---------------- Responsive tweaks ---------------- */
@media (max-width: 900px) {
  .faq-section { padding: 48px 14px; }
  .faq-header h1 { font-size: 1.8rem; }
  .faq-question { padding: 16px 18px; }
  .faq-answer.open { max-height: 700px; }
}

@media (max-width: 600px) {
  .faq-section { padding: 36px 12px; }
  .faq-header h1 { font-size: 1.6rem; }
  .q-text { font-size: 0.98rem; }
  .arrow { font-size: 1.2rem; }
  .faq-question { padding: 14px 14px; }
  .faq-answer.open { padding: 12px 14px; }
}

@media (max-width: 420px) {
  .faq-header h1 { font-size: 1.4rem; }
  .q-text { font-size: 0.95rem; }
  .faq-answer p { font-size: 0.92rem; }
  .faq-answer.open { max-height: 900px; } /* allow taller answers on small screens */
}
</style>
