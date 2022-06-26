import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeAbout(event) {
    setAbout(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({ name, about });
  }

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      submitButtonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <p className="popup__field">
        <label className="visually-hidden" htmlFor="name-input">
          Имя
        </label>
        <input
          className="popup__input popup__input_place_up"
          id="name-input"
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error popup__error"></span>
      </p>
      <p className="popup__field">
        <label className="visually-hidden" htmlFor="about-input">
          Вид деятельности
        </label>
        <input
          className="popup__input popup__input_place_down"
          id="about-input"
          type="text"
          name="about"
          value={about}
          onChange={handleChangeAbout}
          minLength="2"
          maxLength="200"
          required
        />
        <span className="about-input-error popup__error"></span>
      </p>
    </PopupWithForm>
  );
}
