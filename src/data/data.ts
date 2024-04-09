export interface ProjectType {
  id: number;
  title: string;
  link: string;
  link_client?: string;
  link_before?: string;
  subheading: string;
  description: string;
  context_description: string;
  myrole_description: string;
}

export const animationFrameVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 0.15,
      duration: 0.3,
      type: "spring",
      damping: 14,
    },
  },
};

export const animationItemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.3,
    },
  },
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "spotlight",
    link: "spotlight",
    link_client: "https://citriclabs.xyz/",
    link_before: "citric labs",
    subheading: "personalized events, just a click away!",
    description:
      "a progressive web application providing you with event recommendations based on your music taste.",
    context_description:
      "'s initial idea set the foundation for the project, which me and my team further developed and realised. The application allows you to login with your Spotify account and provides you with recommendations of events which you might like based on your music taste. It also lets you choose the playlists to get recommendations on, since you might be sharing the account with someone else or are just in a specific mood. :)",
    myrole_description:
      "my role for this project was assigned as the lead front-end developer. My responsibility was to create a consistent user interface and layout while implementing the elements from the designer-provided wireframes. By closely referencing these wireframes, I worked collaboratively with the designer to translate our stakeholder's vision into a functional and intuitive interface, ensuring alignment with the project's objectives and user expectations.",
  },
  {
    id: 2,
    title: "vetemòre",
    link: "vetemore",
    subheading: "a response to my frustration as a fashion enthusiast...",
    description:
      "a divergence from typical high-fashion online stores, prioritizing design and delivering comprehensive information.",
    context_description:
      "when shopping on online fashion stores, I often notice their focus on profit, which obviously makes sense. However, I always want to know more before buying a garment. This curiosity leads me to an endless search for information on specific items, usually ending up with little to no reliable information. This is why I came up with the idea of Vetemòre - 'vêtements' in french means 'clothes' and '-more' - the website focusing on more details about the clothes. The aim is to offer fashion enthusiasts detailed insights about the designer's background and mindset, the brand, the design process and objectives, sustainability, inspiration, and more.",
    myrole_description:
      "my role was to develop a responsive user interface, tailored for an online fashion store, with a primary focus on improving the accessibility of product and designer information. This involved creating a Python web scraper to extract existing product data, which was then saved in a .csv file, fetched and rendered onto the user interface. Additionally, I implemented sorting and filtering functionalities for products spanning various categories, enhancing the overall user experience by enabling smoother navigation and selection processes.",
  },
  // {
  //   id: 3,
  //   title: "Website Project",
  //   description:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta doloribus sit assumenda hic facere.",
  //   type: "Next.js",
  // },
  // {
  //   id: 4,
  //   title: "Website Project",
  //   date: "May 31, 2023",
  //   description:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta doloribus sit assumenda hic facere.",
  //   type: "React",
  // },
];
