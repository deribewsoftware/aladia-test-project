import { ref } from 'vue'

export interface Course {
  image: string
  title: string
  tag?: string
  hours: string
  updated: string
  rating: number
  students: number
  price: string
  oldPrice: string
}

export function useCourses() {
  const commonCourses=ref([
    {
      image:"https://miro.medium.com/v2/resize:fit:1200/1*JW6wS9AoAxm7bToO5ZBOYg.png",
      title:"Ultimate Google Cloud Certifications: All in one...",
      description:"Google Cloud Experts Cloud Architect...",
      rate:4.4,
      totalReviews:3495,
      hours:67,
      lectures:649,
      level:"All Levels",
      price:"$74.99"
    },

    {
      image:"https://th.bing.com/th/id/OIP.jE3xu-o3PQItsptij9zfhQHaD5?rs=1&pid=ImgDetMain",
      title:"GCP- Google Cloud Platform Concepts 2023",
      description:"Google Cloud Experts Cloud Architect...",
      rate:4.1,
      totalReviews:3201,
      hours:2,
      lectures:12,
      level:"Beginner",
      price:"Free"
    }
  ])
  const courses = ref<Course[]>([
    {
      image: 'https://res.cloudinary.com/acloud-guru/image/fetch/c_fill,f_auto,h_600,w_600/https://acloudguru-content-assets-production.s3-accelerate.amazonaws.com/1596675793227-Course%2520Artwork__ForWeb.png',
      title: 'The Complete 2024 Web Development Bootcamp',
      tag: 'Bestseller',
      hours: '61.5 total hours',
      updated: '8/2024',
      rating: 4.7,
      students: 1364466,
      price: '$13.99',
      oldPrice: '$74.99'
    },
    {
      image: 'https://www.whizlabs.com/blog/wp-content/uploads/2018/09/Google-Cloud-Certifcations-Infographics-922x1024.png',
      title: 'Complete web development course',
      tag: 'Hot & New',
      hours: '68 total hours',
      updated: '10/2024',
      rating: 4.7,
      students: 13235,
      price: '$13.99',
      oldPrice: '$54.99'
    },
    {
      image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/141903359/original/0e6a496d71af1c2801cae3077ac1d40e3cc6b024/setup-and-configure-aws-resources.png',
      title: '100 Days Of Code - 2024 Web Development Bootcamp',
      hours: '79.5 total hours',
      updated: '11/2024',
      rating: 4.6,
      students: 42940,
      price: '$13.99',
      oldPrice: '$74.99'
    },
    {
      image: 'https://i.pinimg.com/originals/6d/04/40/6d0440b1bd2ba07c2edd542bb44ce672.jpg',
      title: 'Full Stack Web Development With MERN STACK & GenAI 2024',
      hours: '93 total hours',
      updated: '11/2024',
      rating: 4.3,
      students: 20992,
      price: '$13.99',
      oldPrice: '$74.99'
    },
    {
      image: 'https://studybullet.com/wp-content/uploads/2022/07/Google-Professional-Cloud-DevOps-Engineer-Exam-Actual-2022.jpg',
      title: 'The Ultimate 2024 Fullstack Web Development Bootcamp',
      hours: '85 total hours',
      updated: '9/2024',
      rating: 4.6,
      students: 35888,
      price: '$13.99',
      oldPrice: '$79.99'
    },
    {
      image: 'https://cdn.dribbble.com/userupload/12659427/file/original-229fe799186b85cacff98affb7dc082d.png?resize=1010x1010',
      title: 'JavaScript Essentials for Beginners - 2024',
      tag: 'Bestseller',
      hours: '45 total hours',
      updated: '8/2024',
      rating: 4.8,
      students: 128000,
      price: '$13.99',
      oldPrice: '$39.99'
    },
    {
      image: 'https://cdn.dribbble.com/users/1175433/screenshots/6508372/bn_shot_illustration02_4x.png?compress=1&resize=840x630&vertical=top',
      title: 'Advanced CSS & SASS for 2024',
      hours: '27.5 total hours',
      updated: '9/2024',
      rating: 4.5,
      students: 52000,
      price: '$13.99',
      oldPrice: '$49.99'
    },
    {
      image: 'https://pattemdigital.com/production/wp-content/uploads/2024/02/thumb-10.webp',
      title: 'Python for Data Science & Machine Learning Bootcamp 2024',
      tag: 'Top Rated',
      hours: '120 total hours',
      updated: '10/2024',
      rating: 4.9,
      students: 450000,
      price: '$13.99',
      oldPrice: '$99.99'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.-lcAvbwrl0odFElvl4QpnwHaE8?rs=1&pid=ImgDetMain',
      title: 'React - The Complete Guide 2024',
      hours: '70 total hours',
      updated: '11/2024',
      rating: 4.7,
      students: 78000,
      price: '$13.99',
      oldPrice: '$89.99'
    },
    {
      image: 'https://seeklogo.net/wp-content/uploads/2020/11/google-drive-logo.png',
      title: 'Mastering Node.js & Express - 2024 Edition',
      hours: '50 total hours',
      updated: '10/2024',
      rating: 4.6,
      students: 54000,
      price: '$13.99',
      oldPrice: '$69.99'
    }
  ])

  return { courses,commonCourses }
}
