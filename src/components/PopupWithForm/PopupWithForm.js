export default function PopupWithForm({ name, title, children }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{`${title}`}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={`${name}`}
          noValidate
        >
          {children}
        </form>
        <button
          className="button popup__close-button"
          type="button"
          aria-label="Закрыть форму"
        ></button>
      </div>
    </div>
  );
}
