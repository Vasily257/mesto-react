import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [place, setplace] = useState('');
  const [link, setLink] = useState('');

  function handleChangePlace(event) {
    setplace(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({ name: place, link });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      submitButtonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <p className="popup__field">
        <label className="visually-hidden" htmlFor="place-input">
          Название места
        </label>
        <input
          className="popup__input popup__input_place_up"
          id="place-input"
          type="text"
          name="place"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          onChange={handleChangePlace}
          required
        />
        <span className="place-input-error popup__error"></span>
      </p>
      <p className="popup__field">
        <label className="visually-hidden" htmlFor="link-input">
          Ссылка
        </label>
        <input
          className="popup__input popup__input_place_down"
          id="link-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          onChange={handleChangeLink}
          required
        />
        <span className="link-input-error popup__error"></span>
      </p>
    </PopupWithForm>
  );
}
