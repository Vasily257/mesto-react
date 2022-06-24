import { useContext } from 'react';
import { InitialDataContext } from '../../contexts/InitialDataContext';

export default function Card({ owner, name, link, likes, onCardClick }) {
  const initialData = useContext(InitialDataContext);
  const currentUserId = initialData[0]._id;

  const isOwn = owner._id === currentUserId;
  const cardDeleteButtonClassName = `button place__delete-button 
  ${isOwn ? 'place__delete-button_hidden' : 'place__delete-button_visible'}`;

  const isLiked = likes.some((like) => like._id === currentUserId);
  const cardLikeButtonClassName = `button place__like-button 
  ${isLiked && 'place__like-button_active'}`;

  return (
    <li className="places__item place">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить элемент"
      ></button>
      <div className="place__image-container">
        <button
          className="button place__enlarge-button"
          type="button"
          aria-label="Увеличить изображение"
          onClick={() => {
            onCardClick({ name, link });
          }}
        >
          <img
            className="place__image"
            src={link}
            alt={`Фотография: ${name}`}
          />
        </button>
      </div>
      <div className="place__panel">
        <p className="place__title">{name}</p>
        <div className="place__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Поставить отметку «Мне нравится»"
          ></button>
          <p className="place__like-counter">{likes.length}</p>
        </div>
      </div>
    </li>
  );
}
