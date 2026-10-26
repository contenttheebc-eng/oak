export const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const images = {
  // Oakss photos
  workshopConversation: "/cloudinary/1.jpg",
  workshopAudience: "/cloudinary/4.jpg",
  experiencedProfessional: "/cloudinary/5.jpg",
  workshopSpeaker: "/cloudinary/11.jpg",
  workshopTeam: "/cloudinary/20.jpg",
  businessLeaders: "/cloudinary/22.jpg",
  workshopGroup: "/cloudinary/23.jpg",
  // Stock photos
  laptopColleagues: unsplash("1573164713988-8665fc963095"),
  laptopMeeting: unsplash("1517245386807-bb43f82c33c4"),
  confidentProfessional: unsplash("1590650153855-d9e808231d41"),
  processPlanning: unsplash("1552664730-d307ca884978"),
  teamWhiteboard: unsplash("1557804506-669a67965ba0"),
  teamCelebration: unsplash("1600880292203-757bb62b4baf"),
  teamwork: unsplash("1600880292089-90a7e086ee0c"),
  businessMeeting: unsplash("1556761175-b413da4baf72"),
};
