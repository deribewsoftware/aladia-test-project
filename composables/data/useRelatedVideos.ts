export const useUseRelatedVideos = () => {
  const videos=ref([
    {
      "title": "The Web Developer Bootcamp 2024",
      "duration": "02:33"
    },
    {
      "title": "Welcome To The Course!",
      "duration": "03:47"
    },
    {
      "title": "Curriculum Walkthrough",
      "duration": "04:12"
    },
    {
      "title": "When Was The Course Last Updated?",
      "duration": "02:17"
    },
    {
      "title": "Will I Get A Job?",
      "duration": "05:45"
    },
    {
      "title": "Accessing Course Code & Slides",
      "duration": "02:23"
    }
  ]
  )
  return {videos}
}
