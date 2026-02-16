import { useMemo, type Dispatch, type SetStateAction } from 'react';
import { Button } from '../Button/Button';
import { StarIcon } from '../StarIcon';
import { FilledStarIcon } from '../FilledStarIcon';
import styles from './_.module.scss';

type Props = {
  currentRating: number;
  setCurrentRating?: Dispatch<SetStateAction<number>>;
  readonly?: boolean;
  size?: number;
};

export const Rating = ({
  currentRating,
  setCurrentRating=(()=>{}),
  readonly = false,
  size = 24,
}: Props) => {
  const stars = useMemo(
    () => [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
    ],
    [],
  );

  return (
    <div>
      {stars.map((star, i) => (
        <Button
          key={star.id}
          kind='ghost'
          onClick={() => {
            setCurrentRating(currentRating === i + 1 ? i : i + 1);
          }}
          disabled={readonly}
          className={`
            ${styles['button']}
            ${readonly ? styles['disabled'] : ''}
          `}
        >
          {i < currentRating ? (
            <FilledStarIcon className={styles['rating-star']} size={size} />
          ) : (
            <StarIcon className={styles['rating-star']} size={size} />
          )}
        </Button>
      ))}
    </div>
  );
};
