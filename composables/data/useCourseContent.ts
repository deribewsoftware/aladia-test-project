export const useUseCourseContent = () => {
  const courses = ref([
    {
      section: "Course Orientation",
      duration: "31min",
      lectures: [
        { title: "Welcome To The Course!", duration: "03:47", isPreview: true },
        { title: "Joining The Community Chat & Groups", duration: "00:27", isPreview: true },
        { title: "Curriculum Walkthrough", duration: "04:12", isPreview: true },
        { title: "When Was The Course Last Updated?", duration: "02:17", isPreview: false },
        { title: "Course Change Log", duration: "00:18", isPreview: false },
        { title: "Will I Get A Job?", duration: "05:45", isPreview: false },
        { title: "Accessing Course Code & Slides", duration: "02:23", isPreview: false },
        { title: "Tips On The Interactive Coding Exercises", duration: "03:25", isPreview: false },
        { title: "Course Coding Exercise Solutions", duration: "00:16", isPreview: false },
        { title: "Migrating From The Old Version Of This Course", duration: "08:07", isPreview: false }
      ]
    },
    {
      section: "An Introduction to Web Development",
      duration: "40min",
      lectures: [
        { title: "Introduction to HTML", duration: "05:15", isPreview: true },
        { title: "Introduction to CSS", duration: "06:35", isPreview: true },
        { title: "Introduction to JavaScript", duration: "07:45", isPreview: true },
        { title: "How Websites Work", duration: "04:23", isPreview: false },
        { title: "Basic Web Development Tools", duration: "03:54", isPreview: false },
        { title: "Creating Your First Web Page", duration: "08:45", isPreview: false },
        { title: "Project Setup", duration: "02:35", isPreview: false },
        { title: "Recap & Next Steps", duration: "03:22", isPreview: false }
      ]
    },
    {
      section: "HTML: The Essentials",
      duration: "59min",
      lectures: [
        { title: "HTML Basics", duration: "07:03", isPreview: true },
        { title: "Headings & Paragraphs", duration: "05:42", isPreview: true },
        { title: "Links & Images", duration: "06:25", isPreview: true },
        { title: "Lists & Navigation", duration: "05:45", isPreview: false },
        { title: "HTML Structure", duration: "06:30", isPreview: false },
        { title: "Using Meta Tags", duration: "04:12", isPreview: false },
        { title: "HTML Best Practices", duration: "05:30", isPreview: false },
        { title: "Creating Simple Forms", duration: "08:00", isPreview: false },
        { title: "Debugging HTML", duration: "04:15", isPreview: false },
        { title: "Recap & Practice", duration: "03:45", isPreview: false },
        { title: "Quiz: HTML Basics", duration: "02:15", isPreview: false },
        { title: "HTML Cheat Sheet", duration: "02:50", isPreview: false },
        { title: "Conclusion", duration: "01:45", isPreview: false }
      ]
    },
    {
      section: "HTML: Next Steps & Semantics",
      duration: "46min",
      lectures: [
        { title: "Semantic HTML Elements", duration: "06:10", isPreview: true },
        { title: "Using Header, Main, & Footer", duration: "04:50", isPreview: true },
        { title: "Article & Section Elements", duration: "05:20", isPreview: true },
        { title: "Aside & Nav Elements", duration: "04:40", isPreview: false },
        { title: "HTML5 Structural Elements", duration: "07:00", isPreview: false },
        { title: "ARIA Roles", duration: "05:35", isPreview: false },
        { title: "Accessibility Basics", duration: "06:55", isPreview: false },
        { title: "Web Standards", duration: "03:50", isPreview: false },
        { title: "Conclusion", duration: "02:30", isPreview: false }
      ]
    },
    {
      section: "HTML: Forms & Tables",
      duration: "88min",
      lectures: [
        { title: "Introduction to Forms", duration: "05:10", isPreview: true },
        { title: "Form Input Types", duration: "07:40", isPreview: true },
        { title: "Checkboxes & Radio Buttons", duration: "04:30", isPreview: true },
        { title: "Select Menus & Options", duration: "05:50", isPreview: true },
        { title: "Form Validation", duration: "06:45", isPreview: false },
        { title: "Form Accessibility", duration: "05:20", isPreview: false },
        { title: "Basic Table Structure", duration: "06:15", isPreview: false },
        { title: "Table Headers & Captions", duration: "04:25", isPreview: false },
        { title: "Table Accessibility", duration: "05:35", isPreview: false },
        { title: "Styling Forms", duration: "07:25", isPreview: false },
        { title: "Responsive Forms", duration: "06:10", isPreview: false },
        { title: "Creating a Form with Validation", duration: "08:05", isPreview: false },
        { title: "Building a Registration Form", duration: "07:15", isPreview: false },
        { title: "Form Best Practices", duration: "04:40", isPreview: false },
        { title: "Debugging Forms", duration: "05:55", isPreview: false },
        { title: "Conclusion", duration: "03:35", isPreview: false }
      ]
    },
    {
      section: "CSS: The Very Basics",
      duration: "55min",
      lectures: [
        { title: "Introduction to CSS", duration: "05:20", isPreview: true },
        { title: "CSS Syntax & Selectors", duration: "04:55", isPreview: true },
        { title: "CSS Colors & Backgrounds", duration: "06:30", isPreview: true },
        { title: "CSS Units & Sizes", duration: "07:45", isPreview: false },
        { title: "Box Model Basics", duration: "05:10", isPreview: false },
        { title: "CSS Display Properties", duration: "06:25", isPreview: false },
        { title: "Margin & Padding", duration: "05:50", isPreview: false },
        { title: "Borders & Outlines", duration: "04:20", isPreview: false },
        { title: "CSS Text Styling", duration: "05:35", isPreview: false },
        { title: "CSS Typography Basics", duration: "06:15", isPreview: false },
        { title: "Conclusion", duration: "03:05", isPreview: false }
      ]
    },
    {
      section: "The World of CSS Selectors",
      duration: "56min",
      lectures: [
        { title: "Basic Selectors", duration: "04:50", isPreview: true },
        { title: "Attribute Selectors", duration: "05:40", isPreview: true },
        { title: "Pseudo-Class Selectors", duration: "06:30", isPreview: true },
        { title: "Pseudo-Element Selectors", duration: "05:20", isPreview: false },
        { title: "Combining Selectors", duration: "07:15", isPreview: false },
        { title: "Selector Priority", duration: "04:25", isPreview: false },
        { title: "Specificity & Inheritance", duration: "05:30", isPreview: false },
        { title: "Advanced Selectors", duration: "06:10", isPreview: false },
        { title: "Descendant & Child Selectors", duration: "04:50", isPreview: false },
        { title: "Universal Selector", duration: "02:55", isPreview: false },
        { title: "Grouping Selectors", duration: "03:40", isPreview: false },
        { title: "Conclusion", duration: "03:15", isPreview: false }
      ]
    },
    {
      section: "The CSS Box Model",
      duration: "50min",
      lectures: [
        { title: "Introduction to the Box Model", duration: "05:20", isPreview: true },
        { title: "Understanding Width & Height", duration: "06:10", isPreview: true },
        { title: "Margin & Padding in Depth", duration: "05:45", isPreview: true },
        { title: "Border Styles", duration: "06:00", isPreview: false },
        { title: "Content Box vs. Border Box", duration: "07:25", isPreview: false },
        { title: "CSS Overflow", duration: "05:15", isPreview: false },
        { title: "Box-Sizing Property", duration: "06:35", isPreview: false },
        { title: "Debugging the Box Model", duration: "05:40", isPreview: false },
        { title: "Conclusion", duration: "03:25", isPreview: false }
      ]
    },
    {
      section: "Responsive CSS & Flexbox",
      duration: "55min",
      lectures: [
        { title: "Introduction to Responsive Design", duration: "05:50", isPreview: true },
        { title: "Viewport & Media Queries", duration: "07:15", isPreview: true },
        { title: "Flexbox Basics", duration: "06:30", isPreview: true },
        { title: "Flexbox Alignment & Justification", duration: "05:55", isPreview: false },
        { title: "Responsive Flexbox Layouts", duration: "06:20", isPreview: false },
        { title: "Building a Responsive Navbar", duration: "08:10", isPreview: false },
        { title: "CSS Grid Introduction", duration: "07:45", isPreview: false },
        { title: "Combining Flexbox & Grid", duration: "06:05", isPreview: false },
        { title: "Conclusion", duration: "03:45", isPreview: false }
      ]
    }
  ]);

  const activeSection = ref<number | null>(null);

  const toggleSection = (index: number) => {
    activeSection.value = activeSection.value === index ? null : index;
  };

  return {
    courses,
    activeSection,
    toggleSection
  };
};
