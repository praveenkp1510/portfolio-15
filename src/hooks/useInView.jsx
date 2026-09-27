import { useInView as useInViewOriginal } from 'react-intersection-observer';

export const useInView = (options = {}) => {
  const defaultOptions = {
    triggerOnce: true,
    threshold: 0.1,
    ...options
  };

  return useInViewOriginal(defaultOptions);
};
