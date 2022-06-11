import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import Card from '../Card/Card';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('Загрузка...');
  const [userAvatar, setUserAvatar] = useState(
    'https://pp.userapi.com/c5442/u17339201/-6/z_90119408.jpg'
  );

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialData()
      .then((initialData) => {
        const [{ name, about, avatar }, initialCardsData] = initialData;

        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);

        setCards(initialCardsData);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <main className="index-page__section content">
      <section className="profile" aria-label="Описание профиля">
        <button
          className="button profile__update-button"
          type="button"
          aria-label="Обновить фото профиля"
          onClick={onEditAvatar}
        >
          <img className="profile__photo" src={userAvatar} alt="Фото профиля" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="button profile__edit-button"
          type="button"
          aria-label="Редактировать профиль"
          onClick={onEditProfile}
        ></button>
        <button
          className="button profile__add-button"
          type="button"
          aria-label="Добавить место"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="content__places places" aria-label="Посещенные места">
        <ul className="places__list">
          {cards.map((cardElement) => (
            <Card
              {...cardElement}
              key={cardElement._id}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
