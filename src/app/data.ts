type NavLink = {
  id: number;
  title: string;
  link: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  type: string;
  info_context: string;
  info_client?: string;
  info_myrole: string;
  client_link?: string;
  client_name?: string;
};

export const navLinks: NavLink[] = [
  { id: 1, title: "GitHub", link: "https://github.com/denislav-d" },
  { id: 2, title: "LinkedIn", link: "https://www.linkedin.com/in/denislavd" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Spotlight",
    description:
      "Spotlight is a progressive web application which provides you with event recommendations based on your music taste.",
    type: "Next.js",
    info_context:
      "Spotlight started as an initial idea of Citric Labs, which me and my team further developed and realised. The application allows you to login with your Spotify account and provides you with recommendations of events which you might like based on your music taste. It also lets you chose the playlists to get recommendations on, since you might be sharing the account with someone else or are just in a specific mood. :)",
    info_client:
      " is a startup company working on solutions to improve community interaction and understanding inside Creative Industries.",
    info_myrole:
      "My role for this project was assigned as the lead front-end developer and my responsibility was to create a consistent user interface and layout while implementing the elements from the designer-provided wireframes. By closely referencing these wireframes, I worked collaboratively with the designer to translate our stakeholder's vision into a functional and intuitive interface, ensuring alignment with the project's objectives and user expectations.",
    client_link: "https://citriclabs.xyz/",
    client_name: "Citric Labs",
  },
  {
    id: 2,
    title: "Vetemòre",
    description:
      "Vetemòre offers a divergence from typical high-fashion shopping websites by prioritizing design and delivering comprehensive information.",
    type: "Next.js",
    info_context:
      "Vetemòre started as a response to my frustration as a fashion enthusiast. When browsing online fashion stores I often noticed the prioritization of profit from these websites, which is pretty understandable, but I have always felt the need of knowing more before I buy something. This curiousity always led me to an infinite search for more information about a certain piece, which I was interested about and considered buying. The outcome most of the times was barely any information or many suspicious websites, filled with untrustworthy content. This is why I came up with the idea of Vetemòre - 'vêtements' in french means 'clothes' and '-more' - the website focusing on more details about the clothes. The goal of Vetemòre is to provide enthusiasts and people who care about what they buy with more information about the designer, designer character and way of thinking, brand, design process and goal, sustainability, inspiration and etc.",
    info_myrole:
      "I developed a responsive user interface tailored for an online fashion store, with a primary focus on improving the accessibility of product and designer information. This involved creating a Python web scraper to extract existing product data, which was then saved in a .csv file, fetched and rendered onto the user interface. Additionally, I implemented sorting and filtering functionalities for products spanning various categories, enhancing the overall user experience by enabling smoother navigation and selection processes.",
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
