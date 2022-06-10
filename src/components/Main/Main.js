import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('Загрузка...');
  const [userAvatar, setUserAvatar] = useState(
    'https://pp.userapi.com/c5442/u17339201/-6/z_90119408.jpg'
  );

  const [cards, setCards] = useState([]);

  useEffect(() => {
    document.querySelector('.profile__name').textContent = userName;
    document.querySelector('.profile__about').textContent = userDescription;
    document.querySelector('.profile__photo').src = userAvatar;

    api
      .getUserInfo()
      .then(({ name, about, avatar }) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));

    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, [userName, userDescription, userAvatar, cards]);

  return (
    <main className="index-page__section content">
      <section className="profile" aria-label="Описание профиля">
        <button
          className="button profile__update-button"
          type="button"
          aria-label="Обновить фото профиля"
          onClick={() => {
            onEditAvatar();
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
            onEditProfile();
          }}
        ></button>
        <button
          className="button profile__add-button"
          type="button"
          aria-label="Добавить место"
          onClick={() => {
            onAddPlace();
          }}
        ></button>
      </section>
      <section className="content__places places" aria-label="Посещенные места">
        <ul className="places__list">
          {cards.map(({ _id, name, link, likes }) => {
            return (
              <li className="places__item place" key={_id}>
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
                  >
                    <img
                      className="place__image"
                      src={link}
                      alt="Фотография места"
                    />
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
          })}
        </ul>
      </section>
    </main>
  );
}
