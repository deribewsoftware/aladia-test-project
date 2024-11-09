export const useUserReviews = () => {
  const reviews=ref([
    {
      "name": "Rod",
      "rate": 3.0,
      "date": "2 weeks ago",
      "description": "Heard to understand"
    },
    {
      "name": "Cesar V.",
      "rate": 4.5,
      "date": "a month ago",
      "description": "Me fue de gran ayuda para aprender y presentar mi examen"
    },
    {
      "name": "Vijayakumar A.",
      "rate": 4.5,
      "date": "2 months ago",
      "description": "Good. I have easily learned the GCP cloud functionality. Is valid session for learner side. Thanks"
    },
    {
      "name": "Svetozar K.",
      "rate": 3.0,
      "date": "3 months ago",
      "description": "A lot of the demos are very basic. A lot of theory, the practice examples are much less."
    }
  ]
  )

  return {reviews}
}
