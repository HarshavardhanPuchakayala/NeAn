import  { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ from, to, duration, suffix = '' }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let current = from;
    const totalFrames = duration / 16;
    const increment = (to - from) / totalFrames;

    const interval = setInterval(() => {
      current += increment;
      if (current >= to) {
        current = to;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(interval);
  }, [from, to, duration]);

  return <h2>{count}{suffix}</h2>;
};

const CountDown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isInView) setStart(true);
  }, [isInView]);

  return (
    <section className="CountDownSection">
    <div className="CountDown" ref={ref}>
      <div className="CountDown1">
        <h1>Year<br/> Established</h1>
        {start && <Counter from={2000} to={2007} duration={800} />}
      </div>

      <div className="CountDown2">
        <h1>Expert<br/> Team</h1>
        {start && <Counter from={0} to={56} duration={1000} />}
      </div>

      <div className="CountDown3">
        <h1>Completed<br/> Projects</h1>
        {start && <Counter from={600} to={1000} duration={1200} suffix="+" />}
      </div>
    </div>
    </section>
  );
};

export default CountDown;
