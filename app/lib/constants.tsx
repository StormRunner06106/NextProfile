import Slider from 'react-slick';

export const colors = {
  primary: 'rgb(33, 111, 237)',
};

const settings = {
  dots: true,
  infinite: false, // Disable automatic infinite scrolling
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true, // Enable variable width slides
  arrows: false, // Optionally hide navigation arrows
  autoplay: false, // Disable autoplay
  swipeToSlide: true, // Allow swiping to navigate slides
};

export const experiences = [
  {
    role: 'Front-end sennior developer',
    content: (
      <>
        From September 2021 to May 2023, I worked as a Front-End Junior
        Developer, specializing in React and Angular. <br />
        During this period, I played a key role in developing an{' '}
        <b>E-commerce</b> site for mobile shopping. My responsibilities included
        building the authentication system, designing shopping thumbnails,
        developing search engine functionality, and integrating payment
        solutions. This experience highlighted for me the superior capabilities
        of React compared to other frameworks.
      </>
    ),
    mainKey: ['E-commerce'],
    images: [],
  },
  {
    role: 'Mastering React and Angular',
    content: (
      <>
        in Marix company, I had the privilege of working at Matrix Company as a
        Front-End Developer, where I played a crucial role in developing and
        enhancing web applications. During my tenure, I successfully created{' '}
        <b>a comprehensive website for a gas company</b>, which significantly
        improved their online presence and customer engagement.<br></br>
        This project provided me with the opportunity to master both{' '}
        <b>Angular</b> and
        <b> React </b>, allowing me to deliver robust and responsive web
        interfaces. My experience at Matrix Company has equipped me with
        advanced skills in front-end development and a deep understanding of
        modern web.
      </>
    ),
    mainKey: ['Angular', 'React'],
    images: [
      {
        title: 'Our building',
        imageUrl: 'matrix.jfif',
      },
      {
        title: 'Our CEO',
        imageUrl: 'matrix2.jfif',
      },
      {
        title: 'Our stratergy',
        imageUrl: 'matrix3.jfif',
      },
      {
        title: '',
        imageUrl: 'images1.jfif',
      },
      {
        title: '',
        imageUrl: 'images2.jfif',
      },
      {
        title: '',
        imageUrl: 'images4.jfif',
      },
      {
        title: '',
        imageUrl: 'images5.jfif',
      },
      {
        title: '',
        imageUrl: 'images6.jfif',
      },
    ],
  },
  {
    role: 'With Mobile app development',
    content: (
      <>
        As a seasoned <b>Flutter</b> mobile app developer, I successfully
        spearheaded a significant project in 2022 named <b>"Open Table."</b>{' '}
        This innovative application integrates advanced features such as
        location-based booking, robust authentication mechanisms, and an
        intelligent UI/UX design. By leveraging the latest technologies,
        including Flutter's state management solutions, Firebase for backend
        services, and GraphQL for efficient data querying, I ensured a seamless
        and secure user experience. My expertise in adopting cutting-edge
        development practices played a pivotal role in the project's success,
        demonstrating my capability to deliver high-quality, scalable mobile
        applications.
      </>
    ),
    mainKey: ['flutter'],
    images: [
      {
        title: '',
        imageUrl: 'opentable1.webp',
      },
      {
        title: '',
        imageUrl: 'opentable2.webp',
      },
      {
        title: '',
        imageUrl: 'opentable3.webp',
      },
      {
        title: '',
        imageUrl: 'flutter1.webp',
      },
      {
        title: '',
        imageUrl: 'flutter2.webp',
      },
      {
        title: '',
        imageUrl: 'flutter3.webp',
      },
      {
        title: '',
        imageUrl: 'flutter4.webp',
      },
    ],
  },
  {
    role: 'AI Integration',
    content: (
      <>
        As an <b>AI Engineer</b> with a robust background in both backend and
        frontend development, I bring a diverse skill set to the table,
        specializing in
        <b>Django,</b> <b>React,</b> <b>Docker,</b>{' '}
        <b>Google Cloud Platform, </b> and <b>GraphQL.</b> My journey in the
        tech industry has equipped me with the expertise to design, develop, and
        deploy sophisticated AI solutions that are both scalable and efficient.
      </>
    ),
    mainKey: ['AI'],
    images: [],
  },
];

export const educations = [];
