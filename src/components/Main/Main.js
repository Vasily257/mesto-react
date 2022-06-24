import { useContext } from 'react';
import { InitialDataContext } from '../../contexts/InitialDataContext';
import Card from '../Card/Card';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const initialData = useContext(InitialDataContext);

  const [{ name, about, avatar }, initialCardsData] = initialData;

  const cards = initialCardsData.map((item) => ({
    key: item._id,
    name: item.name,
    link: item.link,
    likes: item.likes,
    owner: item.owner,
  }));

  return (
    <main className="index-page__section content">
      <section className="profile" aria-label="Описание профиля">
        <button
          className="button profile__update-button"
          type="button"
          aria-label="Обновить фото профиля"
          onClick={onEditAvatar}
        >
          <img className="profile__photo" src={avatar} alt="Фото профиля" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <p className="profile__about">{about}</p>
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
            <Card {...cardElement} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
