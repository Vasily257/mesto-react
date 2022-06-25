import { useRef } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      submitButtonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <p className="popup__field">
        <label className="visually-hidden" htmlFor="avatar-link-input">
          Ссылка
        </label>
        <input
          className="popup__input popup__input_place_up"
          id="avatar-link-input"
          type="url"
          name="avatar-link"
          placeholder="Ссылка на новый аватар"
          ref={avatarRef}
          required
        />
        <span className="avatar-link-input-error popup__error"></span>
      </p>
    </PopupWithForm>
  );
}
