export default function PopupWithImage() {
  return (
    <div className="popup popup_darker popup_type_enlarge">
      <figure className="popup__image-container">
        <button
          className="button popup__close-button"
          type="button"
          aria-label="Закрыть форму"
        ></button>
        <img
          className="popup__image"
          src="https://placekitten.com/200/300"
          alt="Фотография места"
        />
        <figcaption className="popup__image-caption"></figcaption>
      </figure>
    </div>
  );
}
