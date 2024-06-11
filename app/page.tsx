import Image from 'next/image';
import { colors, experiences } from './lib/constants';
import { styles } from './lib/styles';
import ContentX from './components/content';
import Avatar from './components/avatar';

export default function Home() {
  return (
    <div className="bg-white">
      <main
        className="flex min-h-screen flex-col items-center flex-wrap"
        style={{ marginTop: '-80px', backgroundImage: "url('')" }}
      >
        <div className="flex items-center mt-40">
          <img src="stormIcon.png" className="ml-10" />
        </div>
        <div className="text-5xl font-extrabold mt-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Creative & Intelligence
          </span>
        </div>
        <div className="mt-60 flex flex-col flex-wrap ">
          <div
            className="shadow-2xl pt-10 pb-10 pl-14 pr-14 max-w-screen-lg"
            style={{
              backgroundColor: 'white',
              color: 'white',
              borderRadius: '10px',
            }}
          >
            <p className="font-bold text-2xl text-black m-0">
              <span className="text-black font-dark">Why I Became a</span>
              &nbsp; Developer?
            </p>
            <p className="text-black text-md mt-4">
              My journey to becoming a developer is rooted in a deep-seated
              curiosity and a passion for problem-solving. From a young age, I
              was fascinated by how things worked, which naturally extended to
              the digital world. The first time I wrote a simple script and saw
              it execute perfectly, I was hooked. Programming, to me, is the
              perfect blend of logical precision and creative freedom. The
              thrill of turning complex problems into elegant solutions drives
              me daily. As a developer, I have the privilege of building tools
              and systems that can make a tangible difference in people's lives.
              This profession not only challenges me to continuously learn and
              adapt but also offers the opportunity to contribute to innovative
              projects that shape the future. In essence, becoming a developer
              was a natural progression of my interests and skills, allowing me
              to merge my love for technology with my desire to create impactful
              solutions.
            </p>
          </div>
        </div>
      </main>
      <div className="container pl-72 pr-72 pt-24 flex flex-wrap">
        <div className="float-left w-full">
          <div className="flex items-center">
            <p className="font-bold text-4xl text-black mr-4">About ME</p>
            <div className="display-inline">
              <Avatar src="my.jpg" alt="User Avatar" size={50} />
            </div>
          </div>
          <p className="text-1xl">
            Hello, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-800 font-bold">
              Storm Runner
            </span>
            , a passionate Web developer with a keen eye for MERN Stack . With a
            background in IT, I strive to create impactful and visually stunning
            Software solutions that leave a lasting impression.
          </p>
          <div className="container pt-8">
            <div
              className="shadow-sm"
              style={{
                ...styles.customBadge,
                ...{ backgroundColor: colors.primary },
              }}
            >
              Experiences
            </div>
            <div className="flex flex-wrap">
              {experiences.map((item: any, _index) => {
                item.index = _index + 1;
                return <ContentX data={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
