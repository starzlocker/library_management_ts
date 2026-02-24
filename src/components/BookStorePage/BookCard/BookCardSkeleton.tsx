import style from './BookCard.module.scss'

export const BookCardSkeleton = () => {
  const cards = Array.from({length: 15});

  return cards.map(() => (<div className={`${style['card']} ${style['skeleton']}`} key={crypto.randomUUID()}/>))
}