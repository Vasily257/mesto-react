export default function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector('.popup_type_update-avatar')
      .classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document
      .querySelector('.popup_form_type_edit')
      .classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document
      .querySelector('.popup_form_type_add')
      .classList.add('popup_opened');
  }

  return (
    <main className="index-page__section content">
      <section className="profile" aria-label="Описание профиля">
        <button
          className="button profile__update-button"
          type="button"
          aria-label="Обновить фото профиля"
          onClick={handleEditAvatarClick}
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
          onClick={handleEditProfileClick}
        ></button>
        <button
          className="button profile__add-button"
          type="button"
          aria-label="Добавить место"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="content__places places" aria-label="Посещенные места">
        <ul className="places__list"></ul>
      </section>
    </main>
  );
}
