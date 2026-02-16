import { Modal } from "@/components/misc/Modal/Modal"
import styles from './_.module.scss';
import { Rating } from "@/components/misc/Rating/Rating";
import { useState } from "react";
import { Button } from "@/components/misc/Button/Button";
import type { Book } from "@/models/Book";

type Props = {
  book: Book,
  isOpen: boolean,
  onClose: () => void
}

export const BookDetailsModal = ({book, isOpen, onClose}: Props) => {

  const [userRating, setUserRating] = useState(0);

  return (
    <Modal isOpen={isOpen} beforeClose={onClose}>
      <div className={styles['details-modal']}>
        <section className={styles['book-feature-section']}>
          <img src={`/images/${book.cover_url}`} alt="" />
          <div>
            <h2>{book.title}</h2>
            <Rating currentRating={3} readonly size={16}/>
            <p></p>
            <p>{book.genre}</p>
            <p>{book.author}</p>

            <p>{book.year}</p>
          </div>
        </section>
        <section className={styles['book-description-section']}>
          <h3>Descrição</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem optio praesentium aliquam harum. Maxime accusantium expedita nihil ex dignissimos fugit praesentium corporis nostrum assumenda, quaerat adipisci deleniti et illum totam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus adipisci itaque sed exercitationem aliquid aut sit possimus, nesciunt aperiam ullam, voluptates doloremque architecto nobis laudantium. Soluta aperiam magnam voluptas. Nobis!
          </p>

        </section>
        <section className={styles['comment-section']}>
          <h3>Comentários (3)</h3>

          <div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <label htmlFor="comment-box">Deixe seu comentário: </label>
              <textarea id="comment-box" className={styles['comment-box']}/>
            </div>
            <div className={styles['comment-actions']}>
              <Rating currentRating={userRating} setCurrentRating={setUserRating} />
              <Button kind="primary" onClick={() => {alert('salvo')}}>Comentar</Button>
            </div>
          </div>

          <div className={styles['comment']}>
            <p style={{fontSize: '14px', marginBottom: '8px'}}>Postado por fulano em 01/01/2020: </p>
            <p>
              Eu conheci george oswell, era um rapaz gente fina
            </p>
          </div>
          <div className={styles['comment']}>
            <p style={{fontSize: '14px', marginBottom: '8px'}}>Postado por fulano em 01/01/2020: </p>
            <p>
              1984 é um livro muito bom, eu mesmo nunca li mas vou ler
            </p>
          </div>
          <div className={styles['comment']}>
            <p style={{fontSize: '14px', marginBottom: '8px'}}>Postado por fulano em 01/01/2020: </p>
            <p>
              Li esse livro em uma hora, achei que tinha algo a ver com o big brother mesmo, mas é outra coisa
            </p>
          </div>
        </section>

      </div>
    </Modal>
  )
}