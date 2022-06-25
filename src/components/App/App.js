import '../../index.css';

import { useState, useEffect } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';

import { api } from '../../utils/api';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Загрузка...',
    about: 'Загрузка...',
    avatar: 'https://pp.userapi.com/c5442/u17339201/-6/z_90119408.jpg',
  });

  const [cards, setCards] = useState([]);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((prevState) =>
        prevState.map((prevCard) => {
          return prevCard._id === card._id
            ? { ...newCard, key: card._id }
            : { ...prevCard, key: prevCard._id };
        })
      );
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((prevState) => {
        return prevState.filter((prevCard) => prevCard._id !== card._id);
      });
    });
  }

  function handleUpdateUser(userInfo) {
    api
      .editUserInfo(userInfo)
      .then((resWithUserInfo) => {
        setCurrentUser(resWithUserInfo);
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(closeAllPopups());
  }

  function handleUpdateAvatar(avatar) {
    api
      .updateAvatar(avatar)
      .then((resWithAvatar) => {
        setCurrentUser(resWithAvatar);
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(closeAllPopups());
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);

    setSelectedCard(null);
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));

    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(
          initialCards.map((item) => ({
            key: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
            owner: item.owner,
            _id: item._id,
          }))
        );
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <div className="page index-page">
      <Header />

      <CurrentUserContext.Provider value={currentUser}>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
      </CurrentUserContext.Provider>

      <Footer />

      <CurrentUserContext.Provider value={currentUser}>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
      </CurrentUserContext.Provider>

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

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <PopupWithForm name="submit" title="Вы уверены?" submitButtonText="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
