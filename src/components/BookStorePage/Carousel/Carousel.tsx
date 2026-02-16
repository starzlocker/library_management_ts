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
      image: '/promo/promo.png',
    },
    {
      image: '/promo/promo2.png',
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
      ref.current?.classList.remove(styles['sliding-in'])
      ref.current.classList.add(styles['sliding-out'])
    } 
    setTimeout(() => {
      if (motion === 'next') {
        moveToNextSlide();
      } else {
        moveToPreviousSlide();
      }
      ref.current?.classList.remove(styles['sliding-out'])
      ref.current?.classList.add(styles['sliding-in'])
      setMotion(null)
    }, 200)
  }, [motion, moveToNextSlide, moveToPreviousSlide])


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
