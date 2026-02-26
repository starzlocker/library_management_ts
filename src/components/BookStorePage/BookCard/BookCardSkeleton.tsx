import style from './BookCard.module.scss'

export const BookCardSkeleton = () => {
  const cards = Array.from({length: 15});

  return cards.map(() => (
  <div className={`${style['card']}`} key={crypto.randomUUID()}>
      <div
        style={{
          position: 'relative',
          width: '100%'
        }}
        className={`${style['blur-div']} ${style['skeleton']}`}
      />
      <div className={`${style['book-title']} ${style['skeleton']}`} style={{height: '40px', width: '90%'}}/>
      <div className={`${style['book-author']} ${style['skeleton']}`} style={{ width: '50%'}}/>

      <div className={`${style['book-actions']}`} style={{height: '30px', gap: '1rem'}}>
        <div className={`${style['skeleton']}`} style={{height: '30px', width: '100%'}}/>
        <div className={`${style['skeleton']}`} style={{height: '30px', width: '100%'}}/>

      </div>
    
  </div>
))
}