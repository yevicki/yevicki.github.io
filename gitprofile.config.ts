// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'yevicki', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repositories', 
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Android Story Generator',
          description:
            'Developed an Android app integrating image capture, custom drawing, automated tagging, and story generation. Implemented an interactive UI of camera and sketch drawing features with save, clear, and find button options. Automated image tagging and creative story generation based on image content with 85% accuracy',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          techStack: 'Java, XML, Google Cloud Vision API, TextCortex API, SQLite',
        },
        {
          title: 'Light Up',
          description:
            'Recreated a GUI of a binary determination logic puzzle, often known as Light Up or Akari. Programmed logic methods to create informative hint tiles, user control tiles, and a library of external puzzles. Programmed responsive application to respond to user behavior in real time',
          imageUrl:
            '/images/light-up.png',
          link: 'https://youtu.be/b2Soz5wTgdc?si=G8iLxqe9-VsNn_QU',
          techStack: 'Java, JavaFX, CSS',
        },
        {
          title: 'NYT Comments Training Model',
          description:
            'Trained sentiment analysis model to determine whether a New York Times comment would be chosen as an ‘Editors’ Choice Comment,’ by identifying relevant text features and using testing data from Kaggle.com. Achieved a realistic accuracy of 78% when trained on two-word pairs and Naive Bayes Classification.',
          imageUrl: '/images/nyt.jpg',
          techStack: 'Predictive Sentiment Analysis, LightSIDE, Excel',
        },
        {
          title: 'Wake Smiles Volunteer Portal',
          description:
            'Maintained and updated the volunteer portal of a non-profit dental clinic. Made mobile friendly and increased brand alignment by through changes to navigation, responsive mobile only hamburger menu, and an organization relevant color scheme.',
          imageUrl:
            'https://ibb.co/k0XD4LR',
          link: 'https://mysmile.vercel.app/',
          techStack: 'JavaScript, TypeScript, ReactJS, Vercel, Supabase',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Vicki Ye',
    description: '',
    imageURL: '/images/logo.png',
  },
  headerImage: {
    imageURL: '/images/header.jpg',
    alt: 'My background image',
    height: '180px',
    display: true,
  },
  social: {
    linkedin: 'yevicki',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'yevicki.github.io',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'C',
    'HTML/CSS',
    'JavaScript/TypeScript',
    'SQL',
    'Flask',
    'Git/GitHub',
    'Bitbucket',
    'Node.js',
  ],
  experiences: [
    {
      company: 'Bank of America',
      position: 'Software Engineer 2',
      from: 'Jan 2026',
      to: 'Present',
      companyLink: 'https://BankOfAmerica.com',
    },    
    {
      company: 'Bank of America',
      position: 'Software Engineer',
      from: 'July 2024',
      to: 'Jan 2026',
      companyLink: 'https://BankOfAmerica.com',
    },
    {
      company: 'Harvard CS50x Introduction to Computer Science',
      position: 'Computer Science Tutor',
      from: 'May 2025',
      to: 'January 2026',
      companyLink: 'https://cs50.harvard.edu/x/',
    },
    {
      company: 'Bank of America',
      position: 'Software Engineer Intern',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://BankOfAmerica.com',
    },
    {
      company: 'Juni Learning',
      position: 'Computer Science Instructor',
      from: 'May 2022',
      to: 'February 2023',
      companyLink: 'https://www.linkedin.com/company/juni-learning/',
    },
    {
      company: 'University of North Carolina at Chapel Hill',
      position: 'Computer Science and Information Science Student',
      from: 'August 2020',
      to: 'May 2024',
      companyLink: 'https://www.unc.edu/',
    }
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  // educations: [
  //   {
  //     institution: 'University of North Carolina at Chapel Hill',
  //     degree: 'Bachelors in Computer Science',
  //     from: '2020',
  //     to: '2024'
  //   },
  //   {
  //     institution: 'School of Information and Library Science, University of North Carolina at Chapel Hill',
  //     degree: 'Bachelors in Information Science',
  //     from: '2022',
  //     to: '2024'
  //   },
  // ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar — only cupcake will be used
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. Restrict to only 'cupcake'.
    themes: ['cupcake'],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/yevicki"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
