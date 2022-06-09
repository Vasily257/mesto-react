import { useEffect, useState } from 'react';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  useEffect(() => {
    isEditProfilePopupOpen && onEditProfile();
    isAddPlacePopupOpen && onAddPlace();
    isEditAvatarPopupOpen && onEditAvatar();
  });

  return (
    <main className="index-page__section content">
      <section className="profile" aria-label="Описание профиля">
        <button
          className="button profile__update-button"
          type="button"
          aria-label="Обновить фото профиля"
          onClick={() => {
            setEditAvatarPopupOpen(true);
          }}
        >
          <img
            className="profile__photo"
            src="https://dummyimage.com/120"
            alt="Фото профиля"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Загрузка...</h1>
          <p className="profile__about">Загрузка...</p>
        </div>
        <button
          className="button profile__edit-button"
          type="button"
          aria-label="Редактировать профиль"
          onClick={() => {
            setEditProfilePopupOpen(true);
          }}
        ></button>
        <button
          className="button profile__add-button"
          type="button"
          aria-label="Добавить место"
          onClick={() => {
            setAddPlacePopupOpen(true);
          }}
        ></button>
      </section>
      <section className="content__places places" aria-label="Посещенные места">
        <ul className="places__list"></ul>
      </section>
    </main>
  );
}
