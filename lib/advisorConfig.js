export const advisors = [
  {
    slug: "brijesh-mehra",
    name: "Brijesh Mehra",
    designation: "Senior Advisor",
    image: "/team/brijesh_mehraHD.jpg",
    profileImage: "/team/brijesh_mehraHD.jpg",
    wpAuthorName: "Brijesh Mehra",
    bio: [
      "Mr. Mehra brings with him a distinguished career in banking, having held senior roles including Country Executive - India and Southeast Asia/India Cluster Head at RBS. Most recently, he led the Wholesale Banking division at RBL Bank, where he was instrumental in shaping strategic lending initiatives across sectors. His experience spans strategic lending, governance and risk oversight, and deep exposure to Asian markets.",
      "An alumnus of Delhi University and the Indian Institute of Management Ahmedabad, Mr. Mehra combines strong domain expertise with a sharp strategic lens.",
    ],
  },
];

export function getAdvisor(slug) {
  return advisors.find((a) => a.slug === slug) || null;
}
