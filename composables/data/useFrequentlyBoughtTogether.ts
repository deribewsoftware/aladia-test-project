export const useUseFrequentlyBoughtTogether = () => {
  const items=ref([
    {
      title: 'Ultimate Google Certified Professional Cloud Architect 2024',
      price: 19.99,
      rating: 4.3,
      ratingCount: 5121,
      imageUrl: 'https://ipspecialist.net/wp-content/uploads/2019/10/Google-Certified-Professional-Cloud-Architect.jpg',
      description: 'Google Cloud Experts Cloud Architect, Google Cloud Platform...',
    },
    {
      title: 'Ultimate Google Cloud Certifications: All in one Bundle',
      price: 74.99,
      rating: 4.4,
      ratingCount: 3495,
      imageUrl: 'https://k21academy.com/wp-content/uploads/2021/07/SideBarFC_GCPProGIF.gif',
      description: 'Google Cloud Experts Cloud Architect, Google Cloud Platform...',
    },
    {
      title: 'Google Cloud Associate Cloud Engineer: Get Certified 2024',
      price: 79.99,
      rating: 4.4,
      ratingCount: 10881,
      imageUrl: 'https://res.cloudinary.com/acloud-guru/image/fetch/c_fill,f_auto,h_600,w_600/https://acloudguru-content-assets-production.s3-accelerate.amazonaws.com/1596675793227-Course%2520Artwork__ForWeb.png',
      description: 'Dan Sullivan',
    },
  ]
  );
  const total = items.value.reduce((acc, item) => acc + item.price, 0);
  return {items,total}
}
