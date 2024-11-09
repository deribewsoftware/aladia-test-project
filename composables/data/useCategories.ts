export const useUseCategories = () => {
interface SubSubCategory {
  name: string;
}

interface Subcategory {
  name: string;
  subcategories: SubSubCategory[];
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

  const categories=ref<Category[]>([
      {
        "name": "Development",
        "subcategories": [
          {
            "name": "Web Development",
            "subcategories": [
              { "name": "Frontend Development" },
              { "name": "Backend Development" },
              { "name": "Full Stack Development" }
            ]
          },
          {
            "name": "Mobile Development",
            "subcategories": [
              { "name": "iOS Development" },
              { "name": "Android Development" },
              { "name": "Cross-Platform Development" }
            ]
          },
          {
            "name": "Game Development",
            "subcategories": [
              { "name": "Unity Development" },
              { "name": "Unreal Engine Development" },
              { "name": "Game Design" }
            ]
          }
        ]
      },
      {
        "name": "Business",
        "subcategories": [
          {
            "name": "Entrepreneurship",
            "subcategories": [
              { "name": "Business Planning" },
              { "name": "Startups" },
              { "name": "Funding and Investment" }
            ]
          },
          {
            "name": "Management",
            "subcategories": [
              { "name": "Project Management" },
              { "name": "Team Management" },
              { "name": "Operations Management" }
            ]
          },
          {
            "name": "Sales & Marketing",
            "subcategories": [
              { "name": "Digital Marketing" },
              { "name": "Social Media Marketing" },
              { "name": "Sales Strategies" }
            ]
          }
        ]
      },
      {
        "name": "Finance & Accounting",
        "subcategories": [
          {
            "name": "Accounting Principles",
            "subcategories": [
              { "name": "Financial Accounting" },
              { "name": "Managerial Accounting" },
              { "name": "Tax Accounting" }
            ]
          },
          {
            "name": "Investment & Trading",
            "subcategories": [
              { "name": "Stock Market" },
              { "name": "Cryptocurrency" },
              { "name": "Real Estate Investment" }
            ]
          },
          {
            "name": "Personal Finance",
            "subcategories": [
              { "name": "Budgeting" },
              { "name": "Saving & Investing" },
              { "name": "Retirement Planning" }
            ]
          }
        ]
      },
      {
        "name": "IT & Software",
        "subcategories": [
          {
            "name": "Popular Issuers",
            "subcategories": [
              { "name": "Amazon Web Services (AWS) Certifications" },
              { "name": "Microsoft Certifications" },
              { "name": "Cisco Certifications" },
              { "name": "CompTIA Certifications" },
              { "name": "Project Management Institute (PMI) Certifications" },
              { "name": "Google Cloud Certifications" },
              { "name": "Six Sigma Certifications" },
              { "name": "Oracle Certifications" }
            ]
          },
          {
            "name": "Popular Subjects",
            "subcategories": [
              { "name": "Cloud Certification" },
              { "name": "Networking Certification" },
              { "name": "Cybersecurity Certification" },
              { "name": "Project Management Certification" }
            ]
          }
        ]
      },
      {
        "name": "Office Productivity",
        "subcategories": [
          {
            "name": "Office Suites",
            "subcategories": [
              { "name": "Microsoft Office" },
              { "name": "Google Workspace" },
              { "name": "LibreOffice" }
            ]
          },
          {
            "name": "Collaboration Tools",
            "subcategories": [
              { "name": "Slack" },
              { "name": "Microsoft Teams" },
              { "name": "Zoom" }
            ]
          },
          {
            "name": "Time Management",
            "subcategories": [
              { "name": "Task Management" },
              { "name": "Project Tracking" },
              { "name": "Time Blocking" }
            ]
          }
        ]
      },
      {
        "name": "Personal Development",
        "subcategories": [
          {
            "name": "Self-Improvement",
            "subcategories": [
              { "name": "Mindfulness" },
              { "name": "Time Management" },
              { "name": "Motivation" }
            ]
          },
          {
            "name": "Mental Health",
            "subcategories": [
              { "name": "Stress Management" },
              { "name": "Therapy Techniques" },
              { "name": "Self-Care" }
            ]
          },
          {
            "name": "Productivity",
            "subcategories": [
              { "name": "Goal Setting" },
              { "name": "Habit Formation" },
              { "name": "Focus & Concentration" }
            ]
          }
        ]
      },
      {
        "name": "Design",
        "subcategories": [
          {
            "name": "Graphic Design",
            "subcategories": [
              { "name": "Logo Design" },
              { "name": "Illustration" },
              { "name": "Branding" }
            ]
          },
          {
            "name": "UI/UX Design",
            "subcategories": [
              { "name": "User Research" },
              { "name": "Wireframing" },
              { "name": "Prototyping" }
            ]
          },
          {
            "name": "Web Design",
            "subcategories": [
              { "name": "Responsive Design" },
              { "name": "Web Accessibility" },
              { "name": "HTML/CSS" }
            ]
          }
        ]
      },
      {
        "name": "Marketing",
        "subcategories": [
          {
            "name": "Digital Marketing",
            "subcategories": [
              { "name": "SEO" },
              { "name": "Content Marketing" },
              { "name": "Email Marketing" }
            ]
          },
          {
            "name": "Social Media Marketing",
            "subcategories": [
              { "name": "Facebook Marketing" },
              { "name": "Instagram Marketing" },
              { "name": "LinkedIn Marketing" }
            ]
          },
          {
            "name": "Affiliate Marketing",
            "subcategories": [
              { "name": "Influencer Marketing" },
              { "name": "Referral Programs" },
              { "name": "Sponsored Content" }
            ]
          }
        ]
      },
      {
        "name": "Lifestyle",
        "subcategories": [
          {
            "name": "Health & Wellness",
            "subcategories": [
              { "name": "Nutrition" },
              { "name": "Exercise" },
              { "name": "Mental Health" }
            ]
          },
          {
            "name": "Hobbies",
            "subcategories": [
              { "name": "Cooking" },
              { "name": "Gardening" },
              { "name": "DIY Projects" }
            ]
          },
          {
            "name": "Travel",
            "subcategories": [
              { "name": "Budget Travel" },
              { "name": "Luxury Travel" },
              { "name": "Travel Hacks" }
            ]
          }
        ]
      },
      {
        "name": "Photography & Video",
        "subcategories": [
          {
            "name": "Photography Techniques",
            "subcategories": [
              { "name": "Portrait Photography" },
              { "name": "Landscape Photography" },
              { "name": "Product Photography" }
            ]
          },
          {
            "name": "Video Production",
            "subcategories": [
              { "name": "Filming" },
              { "name": "Editing" },
              { "name": "Lighting" }
            ]
          },
          {
            "name": "Post-Production",
            "subcategories": [
              { "name": "Color Grading" },
              { "name": "Sound Design" },
              { "name": "Visual Effects" }
            ]
          }
        ]
      },
      {
        "name": "Health & Fitness",
        "subcategories": [
          {
            "name": "Exercise & Fitness",
            "subcategories": [
              { "name": "Strength Training" },
              { "name": "Cardio" },
              { "name": "Yoga" }
            ]
          },
          {
            "name": "Diet & Nutrition",
            "subcategories": [
              { "name": "Meal Planning" },
              { "name": "Healthy Eating" },
              { "name": "Supplements" }
            ]
          },
          {
            "name": "Mental Health",
            "subcategories": [
              { "name": "Mindfulness" },
              { "name": "Meditation" },
              { "name": "Stress Management" }
            ]
          }
        ]
      },
      {
        "name": "Music",
        "subcategories": [
          {
            "name": "Music Theory",
            "subcategories": [
              { "name": "Scales & Chords" },
              { "name": "Rhythm" },
              { "name": "Harmony" }
            ]
          },
          {
            "name": "Instrument Learning",
            "subcategories": [
              { "name": "Guitar" },
              { "name": "Piano" },
              { "name": "Drums" }
            ]
          },
          {
            "name": "Music Production",
            "subcategories": [
              { "name": "Sound Design" },
              { "name": "Mixing" },
              { "name": "Mastering" }
            ]
          }
        ]
      },
      {
        "name": "Teaching & Academics",
        "subcategories": [
          {
            "name": "Education Methods",
            "subcategories": [
              { "name": "Active Learning" },
              { "name": "Flipped Classroom" },
              { "name": "Project-Based Learning" }
            ]
          },
          {
            "name": "Subjects",
            "subcategories": [
              { "name": "Mathematics" },
              { "name": "Science" },
              { "name": "Literature" }
            ]
          },
          {
            "name": "Teaching Technology",
            "subcategories": [
              { "name": "EdTech Tools" },
              { "name": "Online Teaching" },
              { "name": "Classroom Management" }
            ]
          }
        ]
      }
    ]
  
  )
  return {
    categories
  }
}
