export default function Card({ name, link, likes, onCardClick }) {
  return (
    <li className="places__item place">
      <button
        className="button place__delete-button"
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
          <img className="place__image" src={link} alt="Фотография места" />
        </button>
      </div>
      <div className="place__panel">
        <p className="place__title">{name}</p>
        <div className="place__like-container">
          <button
            className="button place__like-button"
            type="button"
            aria-label="Поставить отметку «Мне нравится»"
          ></button>
          <p className="place__like-counter">{likes.length}</p>
        </div>
      </div>
    </li>
  );
}
