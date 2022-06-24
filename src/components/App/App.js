import '../../index.css';

import { useState, useEffect } from 'react';

import { InitialDataContext } from '../../contexts/InitialDataContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';

import { api } from '../../utils/api';

function App() {
  const [initialData, setInitialData] = useState(
    {
      name: 'Загрузка...',
      about: 'Загрузка...',
      avatar: 'https://pp.userapi.com/c5442/u17339201/-6/z_90119408.jpg',
    },
    []
  );

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
    api
      .getInitialData()
      .then((resWithData) => {
        setInitialData(resWithData);
        const [{ name, about, avatar }, initialCardsData] = resWithData;
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <div className="page index-page">
      <Header />

      <InitialDataContext.Provider value={initialData}>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
      </InitialDataContext.Provider>

      <Footer />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        submitButtonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        submitButtonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
      </PopupWithForm>

      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        submitButtonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
            required
          />
          <span className="avatar-link-input-error popup__error"></span>
        </p>
      </PopupWithForm>

      <PopupWithForm name="submit" title="Вы уверены?" submitButtonText="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
