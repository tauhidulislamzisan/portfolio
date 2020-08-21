import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'TAUHID | Developer ', // e.g: 'Name | Developer'
  lang: 'en,bn', // e.g: en, es, fr, jp
  description: 'Welcome to my first portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hello, I'm`,
  name: 'ZISAN Jr.',
  subtitle: `I'm a Full Stack Web Developer!`,
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a full stack web developer`,
  paragraphTwo: 'Having experience with HTML5,CSS3,PHP,JAVASCRIPT(ES6~10),Node.js,NPM,GIT etc',
  paragraphThree: 'Feel free to contact me via email at any time',
  resume: 'https://drive.google.com/file/d/17ZyAnMT7S9H9BVZUjdJYOshWEX8tqRmb/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.JPG',
    title: 'Quote Generator',
    info: `A Simple Qoute Generator. That's generate quotes randomly.`,
    info2:`With a tweet button after clicking tweet button it automatatically twwet this in you twitter.`,
    url: 'https://aazisanmjr.github.io/quotegenerator/',
    repo: 'https://github.com/aazisanmjr/quotegenerator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.JPG',
    title: 'Robofriends',
    info: 'A simple react app with dynamic search system',
    info2: 'This  projects is generate with API',
    url: 'https://aazisanmjr.github.io/robofriends/',
    repo: 'https://aazisanmjr.github.io/robofriends/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you want to work with me?',
  btn: `Let's Build Together`,
  email: 'zisan13407@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/zisan13407',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/tauhidulislam.zisan',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ti-zisan',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aazisanmjr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
