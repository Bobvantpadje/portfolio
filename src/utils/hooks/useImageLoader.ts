import { useState, useEffect } from 'react';

export const useImageLoader = (images: string[]) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promiseImages = () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          // @ts-expect-error
          image.onload = resolve();
          // @ts-expect-error
          image.onerror = reject();
          image.src = src;
        });
      });
      return promises;
    };

    const loadImages = async () => {
      await Promise.all(promiseImages());
      setIsLoading(false);
    };

    loadImages();
  }, []);

  return { isLoading };
};
