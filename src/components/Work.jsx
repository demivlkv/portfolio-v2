import { motion } from 'framer-motion';
import WorkItem from './WorkItem';

import FastForward from './Icons/FastForward';

const icon = <FastForward className="inline-flex justify-center items-center pb-1 text-slate-400" size={15} />;

const data = [
  {
    year: 2022,
    title: 'Full-Stack Developer',
    company: 'Company',
    duration: 'Feb 2022 - Present',
    details: () => (
      <ul>
        <li>{icon} Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>{icon} Cumque perspiciatis, iste ipsa aliquid sequi magnam iusto quos sed a exercitationem earum.</li>
        <li>{icon} Tenetur itaque officiis molestiae eveniet, dicta eos vel cumque.</li>
      </ul>
    )
  },
  {
    year: 2015,
    title: 'Frontend Developer',
    company: 'Company',
    duration: 'Mar 2015 - Present',
    details: () => (
      <ul>
        <li>{icon} Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>{icon} Cumque perspiciatis, iste ipsa aliquid sequi magnam iusto quos sed a exercitationem earum.</li>
        <li>{icon} Tenetur itaque officiis molestiae eveniet, dicta eos vel cumque.</li>
      </ul>
    )
  }
];

const Work = () => {
  return (
    <div id="work" className="max-w-screen-md m-auto md:pl-20 px-8 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      {data.map((item, i) => (
        <WorkItem
          key={i}
          year={item.year}
          title={item.title}
          company={item.company}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;