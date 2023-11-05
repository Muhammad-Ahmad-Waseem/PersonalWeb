import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/Building Sprawl.jpg';
import porfolioImage2 from '../images/portfolio/Pop Density.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/Footprints Extraction.png';
import porfolioImage5 from '../images/portfolio/Cooling Effect.png';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/Custom Architectues.png';
import porfolioImage8 from '../images/portfolio/Landuse Change Detection.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  PublicationItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Know Muhammad',
  description: "Personal Website for Muhammad Ahmad Waseem!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Muhammad Ahmad!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Deep Learning Engineer</strong>, with a focus on
        <strong className="text-stone-100"> Computer Vision</strong> currently working at <strong
        className="text-stone-100">CITY, LUMS</strong> helping develop deep learning based soluti
        ons for the problems faced by our cities.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I love coding and troubleshooting, you'll often find me sitting in front of my desktop, 
        <strong className="text-stone-100"> Debugging the Code</strong> with so much focus that
        sometimes I even forget to <strong className="text-stone-100">Have a Lunch..!. </strong>
        Just Kidding :D
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/u/0/uc?id=10hwfNRDDiLKc98Ao6Z9kNMzeQvsX_iem&export=download',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I've always been passionate about exploring Artificial Intelligence and it's applications. With the start I got 
  from my undergrad thesis, I never looked back. It has now been three years that I have been doing professional research in computer
  vision with plenty of python coding using pytorch and keras.`,
  aboutItems: [
    {label: 'Location', text: 'Lahore, Pakistan', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Pakistani', Icon: FlagIcon},
    {label: 'Interests', text: 'CV, DL, Optimization', Icon: SparklesIcon},
    {label: 'Study', text: 'MSEE, ITU', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'CITY at LUMS', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Urdu',
        level: 10,
      },
      {
        name: 'Punjabi',
        level: 6,
      },
    ],
  },
  {
    name: 'Python Deep Leaning',
    skills: [
      {
        name: 'Pytorch',
        level: 9,
      },
      {
        name: 'Keras',
        level: 9,
      },
      {
        name: 'Tensorflow',
        level: 7,
      },
    ],
  },
  {
    name: 'Computer Vision',
    skills: [
      {
        name: 'Image Segmentation',
        level: 9,
      },
      {
        name: 'Object Detection',
        level: 9,
      },
      {
        name: 'Image Classification',
        level: 6,
      },
    ],
  },
  {
    name: 'Deep Learning Theory',
    skills: [
      {
        name: 'Convolutional Neural Networks',
        level: 9,
      },
      {
        name: 'Graph Neural Networks',
        level: 7,
      },
      {
        name: 'Transformers',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Predict Urban Sprawl',
    description: 'Use Computer Vision to estimate growth in urban areas',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Estimating Population Desnity',
    description: 'Using Deep Leaning models, try to dissagregate population into different spatial regions',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Building Footprints Extrction',
    description: 'Extract Buildings from Satellite Imagery using Deep Learning and Computer Vision.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Determing Cooling Efficiency',
    description: 'The Urban green spaces cool down the environment, but how much? Determined this cooling efficacy and uncovered the potential reasons behind this.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Design Deep Learning Architectures',
    description: 'Design Custom deep learning architectures considering the requirements of the problems!',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'LandUse Change Detection',
    description: 'Detect changes in landuse using AI and satellite Data.',
    url: '',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2023',
    location: 'Information Technology University, Lahore',
    title: 'Masters in Electrical Engineering',
        content: <p>CGPA: 3.79/4. Graduated as top 5 from the university.
            Main courses include: Adv. Digital Systems Design, Adv. Digital Signal Processing, Deep Learning, 
            and Analysis of Stochastic Systems</p>,
  },
  {
    date: 'July 2020',
    location: 'University of Engineering and Technology (UET), Lahore',
    title: 'Bachelors in Electrical Engineering',
      content: <p>CGPA: 3.53/4.
          Main courses include: Communication Systems, Machine Learning, Digital Signal Processing and
          Applied Probability & Random Processes</p>,
  },
];

export const Publications: PublicationItem[] = [
    {
        title: 'TFNet: Tuning Fork Network with Neighborhood Pixel Aggregation for Improved Building Footprint Extraction',
        mainauthor: 'Muhammad Ahmad Waseem',
        coauthorsa: '',
        coauthorsb: ', Muhammad Tahir, Zubair Khalid, and Momin Uppal',
        venue: 'IEEE Transactions on Geo-Science and Remote Sensing(Under Review)',
        paperlink:'',
    },
    {
        title: 'Estimating Spatio-Temporal Urban Development using AI',
        mainauthor: 'Muhammad Ahmad Waseem',
        coauthorsa: '',
        coauthorsb: ', Muhammad Basheer, Momin Uppal, Muhammad Tahir',
        venue: 'SDSC 2022, In Proceedings of 7th International Conference on Smart Data and Smart Cities',
        paperlink: 'https://isprs-archives.copernicus.org/articles/XLVIII-4-W5-2022/197/2022/isprs-archives-XLVIII-4-W5-2022-197-2022.pdf',
    },
    {
        title: 'PD-SEG: Population Disaggregation Using Deep Segmentation Networks For Improved Built Settlement Mask',
        mainauthor: ', Muhammad Ahmad Waseem',
        coauthorsa: 'Muhammad Rahman',
        coauthorsb: ', Muhammad Tahir, Momin Uppal, et al.',
        venue: 'IGARSS 2023, IEEE International Symposium on Geoscience and Remote Sensing',
        paperlink: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10281745',
    },
    {
        title: 'Improved Flood Mapping for Efficient Policy Design by Fusion of Sentinel-1, Sentinel-2, and Landsat- 9 Imagery to Identify Population and Infrastructure Exposed to Floods',
        mainauthor: ', Muhammad Ahmad Waseem',
        coauthorsa: 'Usman Nazir',
        coauthorsb: ', Momin Uppal, Zubair Khalid, et al.',
        venue: 'IGARSS 2023, IEEE International Symposium on Geoscience and Remote Sensing',
        paperlink: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10282530',
    },
    {
        title: 'Spatiotemporal Analysis of Urban Growth and Land Surface Temperature: A Case Study of Lahore, Pakistan”',
        mainauthor: ', Muhammad Ahmad Waseem',
        coauthorsa: 'Muhammad Basheer',
        coauthorsb: '',
        venue: 'SDSC 2022, In Proceedings of 7th International Conference on Smart Data and Smart Cities',
        paperlink: 'https://isprs-archives.copernicus.org/articles/XLVIII-4-W5-2022/25/2022/isprs-archives-XLVIII-4-W5-2022-25-2022.pdf',
    },
    {
        title: 'Unsupervised Landmark Discovery Using Consistency Guided Bottleneck”',
        mainauthor: ', Muhammad Ahmad Waseem',
        coauthorsa: 'Mamona Awan, Muhammad Khan, Sanoojan Baliah',
        coauthorsb: ', et al.',
        venue: 'BMVC 2023, In Proceedings of the 34th British Machine Vision Conference',
        paperlink: 'https://arxiv.org/pdf/2309.10518.pdf',
    },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2021 - Present',
    location: 'CITY at LUMS',
    title: 'Team Lead - Tech Side',
    content: (
      <p>
            Developed multiple AI based project including building footprint extraction, vehicle detection and
        classification, parking slot identification, and optimal route planning.
      </p>
    ),
  },
  {
    date: 'September 2020 - July 2021',
    location: 'Information Technology University',
    title: 'Graduate Fellow Student',
    content: (
      <p>
            Explored applications of Computer vision and deep leanring for 3D reconstruction of scenes. Developed solution
        for camera relocalization in a scene.
      </p>
    ),
    },
    {
    date: 'March 2020 - August 2020',
    location: 'MikroStarTech Pvt. Ltd.',
    title: 'Embedded Systems Engineer',
    content: (
        <p>
            Developed embedded systems solutions for the company to communicate multiple devices via bluetooth.
        </p>
    ),
    },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dr. Momin Ayub Uppal',
      text: 'I have been really proud of having you on board in our team - CITY at LUMS. You bring a lot of experience to our team and your presence allow other team members to grow as well.',
      image: 'https://media.licdn.com/dms/image/C4D03AQEzlgswNvYIYA/profile-displayphoto-shrink_800_800/0/1650623362181?e=1703721600&v=beta&t=D6E4Q9VORXZ6oNlGfuUdFR-YQw2jPYirgthhPzlmQQY',
    },
    {
      name: 'Dr. Muhammad Tahir',
      text: 'Your exceptional skills in computer vision give us a lot of confidence on picking new projects. The way you have handled many problems even at a notice of few days show your dedication and I really hope you continue this attitude in your life.',
      image: 'https://media.licdn.com/dms/image/C5603AQGEUEo242Tuww/profile-displayphoto-shrink_800_800/0/1641785435494?e=2147483647&v=beta&t=dTomejNtnog_rJPpYKZBygfdV1bdmnpfulBWJgKEwVo',
    },
    {
      name: 'Dr. Arif Mehmood',
      text: 'Waseem (my surname :D), it has been a wonderful experience of supervising you on your Master`s Thesis. You have been a very hard working student and your Never Giveup attitude is not found in many people.',
      image: 'https://media.licdn.com/dms/image/C5103AQEb1aFNZDQZ_g/profile-displayphoto-shrink_800_800/0/1517543636860?e=1703721600&v=beta&t=GyjBNK3D9P7hpGeevLK4wgr6Gue8j_dXWYLHv8hyuxc',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'ahmadwaseem648@gmail.com',
      href: 'mailto:ahmadwaseem648@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lahore, Punjab, Pakistan',
        href: 'https://maps.app.goo.gl/VamiMY5wfaTVaguo8',
    },
    {
      type: ContactType.Facebook,
      text: 'محمد احمد وسیم',
      href: 'https://www.facebook.com/Ahmadwaseem.712.648',
    },
    {
      type: ContactType.Github,
      text: 'Muhammad-Ahmad-Waseem',
      href: 'https://github.com/Muhammad-Ahmad-Waseem',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Muhammad-Ahmad-Waseem'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/22785121/ahmad-waseem'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/engr-muhammad-ahmad-waseem/' },
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/Ahmadwaseem.712.648/' },
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/muhammad_ahmad_waseem/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ahmadwaseem648'},
];
