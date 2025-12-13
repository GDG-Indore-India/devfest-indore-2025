import konfhub from "@/assets/sponsor/Konfhub.png";
import googlefordevelopers from "@/assets/sponsor/googlefordevelopers.png";
import iist from "@/assets/sponsor/IIST.png";

// Platinum Sponsor (2025)
const platinumSponsor = {
  name: "IIST",
  img: iist,
  link: "https://indoreinstitute.com/"
};

// Current Year Sponsors (2025)
const currentYearSponsors =  [
  {
    name: "Title-sponsor",
    img: googlefordevelopers,
    link: "https://developers.google.com/"
  },
  {
    name: "Ticketing Partner",
    img: konfhub,
    link: "https://www.konfhub.com/"
  },
];

// Previous Year Sponsors (2024)
const previousYearSponsors = [
  {
    name: "Title-sponsor",
    img: googlefordevelopers,
    link: "https://developers.google.com/"
  },
  {
    name: "Ticketing Partner",
    img: konfhub,
    link: "https://www.konfhub.com/"
  },
];

export default {
  platinumSponsor,
  currentYearSponsors,
  previousYearSponsors
};