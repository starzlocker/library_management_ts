import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './_.module.scss';
import { Button } from '@/components/misc/Button/Button';
import { ChevronRight } from '@/components/misc/ChevronRight';
import { ChevronLeft } from '@/components/misc/ChevronLeft';

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [motion, setMotion] = useState<'next' | 'previous' | null>(null)
  const ref = useRef<HTMLImageElement>(null);

  const featured = useMemo(() => [
    {
      image: '/promo/promo.jpeg',
    },
    {
      image: '/promo/promo2.jpeg',
    },
  ], [])

  const moveToPreviousSlide = useCallback(() => {
    setCurrentSlide(currentSlide === 0 ? featured.length - 1 : currentSlide - 1)
  }, [featured, currentSlide])

  const moveToNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % featured.length)
  }, [featured])

  useEffect(() => {
    if (!motion) return;
    if(ref.current) {
      const opposite = motion === 'next' ? 'previous' : 'next';
      ref.current?.classList.remove(styles[opposite], styles['sliding-in'])
      ref.current.classList.add(styles[motion], styles['sliding-out'])
    }

    const motionTimeout = setTimeout(() => {
      if (motion === 'next') {
        moveToNextSlide();
      } else {
        moveToPreviousSlide();
      }
      ref.current?.classList.remove(styles['sliding-out'])
      ref.current?.classList.add(styles['sliding-in'])
      setMotion(null)
    }, 200)

    return () => {
      clearTimeout(motionTimeout);
    };
  }, [motion, moveToNextSlide, moveToPreviousSlide])

  useEffect(() => {
    const nextTimeout = setTimeout(() => {
      setMotion('next');
    }, 5000)

    return () => clearTimeout(nextTimeout)
  }, [motion])


  return (
    <section className={styles['carousel-container']}>
      <div className={styles['slide']}>
        <div className={styles['slide-content']}>
          <Button
            kind='ghost'
            onClick={() => {
              setMotion('previous')
            }}
            className={styles['previous-button']}
          >
            <ChevronLeft />
          </Button>
          <Button
            kind='ghost'
            onClick={() => {
              setMotion('next')
            }}
            className={styles['next-button']}
          >
            <ChevronRight />
          </Button>
          <img
            ref={ref}
            src={featured[currentSlide].image}
            alt='Banner de promoção'
            className={styles['slide-banner']}
          />
        </div>
      </div>
    </section>
  );
};
