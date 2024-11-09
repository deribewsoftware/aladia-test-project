export const useInstructorsDetail= () => {
  const instructors=ref([
    {
      name: 'Google Cloud Experts Cloud Architect',
      title: 'GCP Certified Architect-DevOps-Engineer-Developer-Data Eng.',
      rating: 4.3,
      reviews: 11816,
      students: 318574,
      courses: 3,
      imageUrl: 'https://img-c.udemycdn.com/user/200_H/19291720_28e9_7.jpg', // Replace with actual image link
      description: 'Have 20 Years of IT Experience and working knowledge...',
      fullDescription: `
        Have 20 Years of IT Experience and working knowledge of creating, and presenting transformation solutions to IT stakeholders. 
        Worked with architects, Analysts, Product Managers, Business (Marketing, front office, back office), and CXO organizations.
        Persistent practical approach in providing solutions to large enterprises for Cloud migration/adoption strategy, Application Modernization & Data Migration.
      `,
    },
    {
      name: 'Google Cloud Platform Gurus !',
      title: 'No 1 for Google Cloud Training with 400,000+ Subscriptions',
      rating: 4.3,
      reviews: 11816,
      students: 318646,
      courses: 3,
      imageUrl: 'https://img-c.udemycdn.com/user/200_H/30283340_5175_3.jpg', // Replace with actual image link
      description: 'Team Certified Google Cloud Architect, AWS Solutions Architect...',
      fullDescription: `
        Team Certified Google Cloud Architect, AWS Solutions Architect, TOGAF - Enterprise Architect, Big Data Architects.
        400,000+ Subscriptions & 270,000+ Unique Students on Udemy only for Google Cloud Platform courses.
        We only Teach "Google Cloud Platform Certifications "! More importantly, we are focused on Google Cloud Platform as the only subject to provide training.
      `,
    },
  ]);
  return {instructors}
}
