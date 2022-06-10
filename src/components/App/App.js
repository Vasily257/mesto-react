import '../../index.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import { useState, useEffect } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(currentCard) {
    setSelectedCard(currentCard);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);

    setSelectedCard(null);
  }

  useEffect(() => {
    isEditProfilePopupOpen &&
      document.querySelector('.popup_type_edit').classList.add('popup_opened');

    isAddPlacePopupOpen &&
      document.querySelector('.popup_type_add').classList.add('popup_opened');

    isEditAvatarPopupOpen &&
      document
        .querySelector('.popup_type_update-avatar')
        .classList.add('popup_opened');

    selectedCard &&
      document
        .querySelector('.popup_type_enlarge')
        .classList.add('popup_opened');

    return () => {
      document.querySelectorAll('.popup').forEach((popup) => {
        popup.classList.remove('popup_opened');
      });
    };
  });

  return (
    <div className="page index-page">
      <Header />
      <Main
        onEditProfile={() => {
          handleEditProfileClick();
        }}
        onAddPlace={() => {
          handleAddPlaceClick();
        }}
        onEditAvatar={() => {
          handleEditAvatarClick();
        }}
        onCardClick={(currentCard) => {
          handleCardClick(currentCard);
        }}
      />
      <Footer />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        submitButtonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <p className="popup__field">
              <label className="visually-hidden" htmlFor="name-input">
                Имя
              </label>
              <input
                className="popup__input popup__input_place_up"
                id="name-input"
                type="text"
                name="name"
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
                minLength="2"
                maxLength="200"
                required
              />
              <span className="about-input-error popup__error"></span>
            </p>
          </>
        }
      />

      <PopupWithForm
        name="add"
        title="Новое место"
        submitButtonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
                required
              />
              <span className="link-input-error popup__error"></span>
            </p>
          </>
        }
      />

      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        submitButtonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
                required
              />
              <span className="avatar-link-input-error popup__error"></span>
            </p>
          </>
        }
      />

      <PopupWithForm
        name="submit"
        title="Вы уверены?"
        submitButtonText="Да"
        children={<></>}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
