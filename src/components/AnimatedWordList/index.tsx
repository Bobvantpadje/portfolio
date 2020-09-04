import { useState, useEffect } from "react";
import { AnimatedHeader } from "styles/StyledComponents/Animated/AnimatedHeader";

interface IAnimatedWordListProps {
  words: string[];
  initialDelay?: number;
}

export const AnimatedWordList: React.FC<IAnimatedWordListProps> = ({ words = [], initialDelay = 0 }) => {
  const [indexToShow, setIndexToShow] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, initialDelay);
  }, [initialDelay]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexToShow((index) => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!showComponent) return null;

  return (
    <>
      {words.map((word, index) => {
        if (index !== indexToShow % words.length) return null;
        return <AnimatedHeader key={word} text={word} />;
      })}
    </>
  );
};
