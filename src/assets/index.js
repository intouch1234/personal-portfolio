// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import WechatLineIcon from 'remixicon-react/WechatLineIcon'
import YoutubeLineIcon from 'remixicon-react/WhatsappLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import ReactPlayer from 'react-player';
/* eslint-disable react/jsx-key */
export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <WechatLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
/*   {
    title: 'Github Repos',
    amount: 3,
    icon: <GithubFillIcon />,
  }, */
  {
    title: 'Successful Projects',
    amount: 5,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Business Insight',
    amount: 2,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Udemy Cerificates',
    amount: 18,
    icon: <AwardFillIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText = 'Hi, I’m Dutch, a logistics and IT specialist with expertise in software development, ERP integration, and business analytics. Skilled in optimizing supply chain operations using Microsoft Dynamics, SAP B1, and IoT-based solutions. Proficient in web development with React, Laravel, and .NET, alongside designing enterprise applications and dashboards. Experienced in retail and eCommerce, integrating POS, CRM, and automation tools. Combines technical expertise with strategic leadership to drive digital transformation and operational efficiency.'// end of me

// Experience
export const experienceData = [
  {
    year: 1,
    title: 'Starting in Tech & Logistics',
    education:
      'Learned JavaScript algorithms and full-stack web development (HTML, CSS, JavaScript, Bootstrap 4).',
    experience: [
      'Joined a logistics company as a Management Trainee, optimizing shipment planning using Dijkstra’s and Genetic Algorithms.',
    ],
  },
  {
    year: 2,
    title: 'Advancing in IT & Business Management',
    education:
      'Studied IT infrastructure (Linux, Cisco, FortiGate, Windows Server, VMware) and began a master’s in Engineering Business Management.',
    experience: [
      'Promoted to IT Manager, implementing FortiGate Firewall, Windows Server, and corporate email migration',
    ],
  },
  {
    year: 3,
    title: 'Software Development & Automation',
    education: 'Learned VBA, PHP, Python, Power Platform, and business concepts like AI and cognitive bias.',
    experience: [
      'Developed enterprise applications in MS Access (VBA), automated data imports, and built an inventory management system using Laravel 9.',    ],
  },
  {
    year: 4,
    title: 'Entrepreneurship & ERP Integration',
    education: 'Studied MS Dynamics, Adobe Creative Suite, and retail operations. Master’s dissertation focused on Microsoft Dynamics ERP integration for logistics.',
    experience: [
      'Managed intermodal transport, launched business campaigns, and started my own company, handling FDA documentation and designing retail displays.',
    ],
  },
  {
    year: 5,
    title: 'Data-Driven Decision-Making',
    education: 'Learned React, Next.js, Node.js, C#, .NET Core 7, Azure Databricks, and Data Factory.',
    experience: [
      'Led SAP B1 implementation, integrated POS and CRM systems with API connections, and built a predictive model for logistics efficiency using Azure Databricks and AWS AutoML.',
    ],
  },
  {
    year: 6,
    title: 'Expanding into IoT & Blockchain',
    education:
      'Studying Arduino, Raspberry Pi 4, and advanced React.',
    experience: [
      'Planning IoT solutions for real-time logistics tracking and preparing for a master’s in advanced databases, distributed systems, computer graphics, and blockchain (Kafka, Hyperledger Fabric 2, OpenGL, Kubernetes).',
    ],
  },
]

// Skills
export const skillsData = [
  {
    name: 'Figma',
    icon: '/skills/figma.png',
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.png',
  },
  {
    name: 'Illustrator',
    icon: '/skills/ai.png',
  },
  {
    name: 'After Effect',
    icon: '/skills/aftereffect.jpg',
  },
  {
    name: 'Davinci',
    icon: '/skills/davinci.jpg',
  },
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'C++',
    icon: '/skills/C++.png',
  },
  {
    name: 'C#',
    icon: '/skills/C.png',
  },
  {
    name: 'Python',
    icon: '/skills/python.png',
  },
  {
    name: 'PHP',
    icon: '/skills/php.jpg',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'ThreeJS',
    icon: '/skills/threejs.png',
  },
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'NodeJS',
    icon: '/skills/nodejs.png',
  },
  {
    name: 'Arduino IDE',
    icon: '/skills/arduino.png',
  },
  {
    name: 'Power Platform',
    icon: '/skills/powerplatoform.png',
  },
  {
    name: 'MS Dynamics',
    icon: '/skills/dynamisc.jpg',
  },
  {
    name: 'MS Azure',
    icon: '/skills/azure.png',
  },
  {
    name: 'Github',
    icon: '/skills/github.png',
  },
]

// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    image: '/reviews/client-4.png',
    name: 'Mark T., Freelance Graphic Designer',
    comment:
      "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-2.png',
    name: 'Sarah B., E-commerce Store Owner',
    comment:
      "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-3.png',
    name: 'Emily R., CEO of Tech Startup',
    comment:
      "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-1.png',
    name: 'Bob W., Lifestyle Blogger',
    comment:
      "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-5.png',
    name: 'David H., Director of Non-Profit Organization',
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1],
  },
]

// Projects
export const projectsData = [
  {
    name: '',
    desc: 'A logistics website',
    url: '/projects/image-11.png',
    tech: ['Website', 'Photoshop',],
  },
  {
    name: '',
    desc: 'Popcorn Website Shop',
    url: '/projects/image-13.png',
    tech: ['Website', 'Photoshop',],
  },
  {
    name: '',
    desc: 'Inventory Management',
    url: '/projects/image-17.png',
    tech: ['Website', 'Laravel',],
  },
  {
    name: '',
    desc: 'Trucking Booking System',
    url: '/projects/image-14.png',
    tech: ['MSAccess'],
  },
  {
    name: '',
    desc: 'Prototype of the Server and Firewall',
    url: '/projects/image-16.png',
    tech: ['EVE-NG'],
  },
  {
    name: '',
    desc: 'Portfolio',
    url: '/projects/image-15.png',
    tech: ['React', 'Website',],
  },
  {
    name: '',
    desc: 'Auto Machine to estimate the data in the next 30 days',
    url: '/projects/image-18.jpg',
    tech: ['Python',],
  },
  {
    name: '',
    desc: 'Temperature Monitoring',
    url: '/projects/image-19.jpg',
    tech: ['TempControl',],
  },


]

export const projectsButton = [
  'All',
  'Website',
  /* 'Photoshop', */
  'EVE-NG',
  'TempControl',
  /* 'PowerPlatform', */
  'Python',
  'MSAccess',
  /* 'MSAzure', */
  'Laravel',
  'React',
  /* 'AfterEffect', */
]

// Pricing Plans 
export const pricingPlans = [
  {
    title: 'Mechanical Engineering',
    pricing: 'KMUTNB',
    features: [
      'MATHEMATICS I, II, III',
      'COMPUTER PROGRAMMING',
      'NUMER METHOD',
      'SIGNAL AND SYSTEM',
      'MECHANICS OF MACHINERY',
      'MECHANICAL VIBRATION',
      'SYSTEMATIC ENGR DESIGN',
      'AUTOMATIC CONTROL',
    ],
    recommended: 'Small businesses, personal websites, bloggers',
  },
  {
    title: 'Engineering Business Development',
    pricing: 'WARW',
    features: [
      'STRATEGY & STRATEGIC MANAGEMENT',
      'PROJECT PLANNING MANAGMENT & CONTROL',
      'FINANCIAL ANALYSIS & CONTROL SYSTEM',
      'LOGISTICS & OPERATIONS MANAGEMENT',
      'STRATEGIC MARKETING',
      'ENTERPRISE INFORMATION SYSTEMS',
      'ORGANIZATIONS, PEOPLE AND PERFORMANCE',
      'SERVICE DESIGN & DELIVERY',
      'TRANSPORT TECHNIQUE AND MANAGEMENT',
      'SERVICE SUPPORT TECHNOLOGIES',
    ],
    recommended: 'Medium-sized businesses, online stores, service providers',
  },
  {
    title: 'Engineering Management',
    pricing: 'CUSE',
    features: [
      'STRATEGY & STRATEGIC MANAGEMENT',
      'PROJECT PLANNING MANAGMENT & CONTROL',
      'FINANCIAL ANALYSIS & CONTROL SYSTEM',
      'LOGISTICS & OPERATIONS MANAGEMENT',
      'STRATEGIC MARKETING',
      'ENTERPRISE INFORMATION SYSTEMS',
      'ORGANIZATIONS, PEOPLE AND PERFORMANCE',
    ],
    recommended: 'Large businesses, complex e-commerce sites, custom web applications',
  },
]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
  {
    question: 'What is your educational background?',
    answer:
    "- Master of Science in Engineering Business Management (University of Warwick)\n "  +
    "- Master of Engineering in Engineering Management (Chulalongkorn University)\n" +
    "- Bachelor’s Degree in Mechanical Engineering (King Mongkut’s University of Technology North Bangkok)",  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'I specialize in IT services, logistics supply chain, and software development, with experience in retail business and cross-border logistics.',
  },
  {
    question: 'What programming languages and frameworks are you proficient in?',
    answer:
      'I have expertise in HTML, CSS, SQL, JavaScript, VBA, PHP and Python. I also work with Scikit-learn, PyTorch, React, Next.js, and Laravel.',
  },
  {
    question: 'What experience do you have in IT infrastructure and networking?',
    answer:
      'I have managed EVE-NG testing for MS Server and FortiGate Firewall, migrated email systems from Google Workspace to Microsoft Azure, and implemented warehouse server relocation.',
  },
  {
    question: 'How do you leverage data-driven decision-making in your work?',
    answer:
      'I use Azure Databricks for driver behavior analysis, AWS AutoML for sales forecasting, and business analytics to optimize logistics efficiency. I have also applied Dijkstra’s and Genetic Algorithms for logistics planning.',
  },
{
  question: ' What software tools do you use for design and media production?',
  answer:
    'I use DaVinci Resolve, Adobe Photoshop, Illustrator, After Effects, SolidWorks, AutoCAD, and Canva for media content creation and marketing design.',
},
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/LightbulbFlashLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
/*   {
    id: 'reviews',
    name: 'Reviews',
    icon: <UserStarLineIcon />,
  }, */
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'education',
    name: 'education',
    icon: <PriceTag3LineIcon />,
  },
/*   {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  }, */
  {
    id: 'questions',
    name: 'Questions',
    icon: <QuestionAnswerLineIcon />,
  },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
