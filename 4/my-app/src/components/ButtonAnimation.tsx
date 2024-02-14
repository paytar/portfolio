import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ButtonAnimationProps {
  isVisible: boolean;
}

const ButtonAnimation: React.FC<ButtonAnimationProps> = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isVisible) {
      interval = setInterval(() => {
        if (progress < 440) {
          setProgress(prev => prev + 1);
        }
      }, 10);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isVisible, progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ width: 0 }}
          animate={{ width: progress }}
          transition={{ duration: 0.5 }}
          className='text-white font-mono text-3xl font-extrabold'
        >
          {progress}<span className='text-red-600'>K</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ButtonAnimation;
