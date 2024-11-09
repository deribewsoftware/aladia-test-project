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
  const courses = ref<Course[]>([
    {
      image: '../public/courseOne.png',
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
      image: '/../../public/courseTwo.jpg',
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
      image: '../../public/CourseThree.png',
      title: '100 Days Of Code - 2024 Web Development Bootcamp',
      hours: '79.5 total hours',
      updated: '11/2024',
      rating: 4.6,
      students: 42940,
      price: '$13.99',
      oldPrice: '$74.99'
    },
    {
      image: '../../public/js.jpg',
      title: 'Full Stack Web Development With MERN STACK & GenAI 2024',
      hours: '93 total hours',
      updated: '11/2024',
      rating: 4.3,
      students: 20992,
      price: '$13.99',
      oldPrice: '$74.99'
    },
    {
      image: '../../public/courseOne.png',
      title: 'The Ultimate 2024 Fullstack Web Development Bootcamp',
      hours: '85 total hours',
      updated: '9/2024',
      rating: 4.6,
      students: 35888,
      price: '$13.99',
      oldPrice: '$79.99'
    },
    {
      image: '../../public/courseTwo.jpg',
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
      image: '../../public/js.jpg',
      title: 'Advanced CSS & SASS for 2024',
      hours: '27.5 total hours',
      updated: '9/2024',
      rating: 4.5,
      students: 52000,
      price: '$13.99',
      oldPrice: '$49.99'
    },
    {
      image: '../../public/courseOne.png',
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
      image: '../../public/CourseThree.png',
      title: 'React - The Complete Guide 2024',
      hours: '70 total hours',
      updated: '11/2024',
      rating: 4.7,
      students: 78000,
      price: '$13.99',
      oldPrice: '$89.99'
    },
    {
      image: '../../public/courseTwo.jpg',
      title: 'Mastering Node.js & Express - 2024 Edition',
      hours: '50 total hours',
      updated: '10/2024',
      rating: 4.6,
      students: 54000,
      price: '$13.99',
      oldPrice: '$69.99'
    }
  ])

  return { courses }
}
