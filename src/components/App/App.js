import '../../index.css';
import headerLogo from '../../images/header/logo.svg';

function App() {
  return (
    <div className="page index-page">
      <header className="index-page__section header">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Логотип сайта «Место»"
        />
      </header>
      <main className="index-page__section content">
        <section className="profile" aria-label="Описание профиля">
          <button
            className="button profile__update-button"
            type="button"
            aria-label="Обновить фото профиля"
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
          ></button>
          <button
            className="button profile__add-button"
            type="button"
            aria-label="Добавить место"
          ></button>
        </section>
        <section
          className="content__places places"
          aria-label="Посещенные места"
        >
          <ul className="places__list"></ul>
        </section>
      </main>
      <footer className="index-page__section footer">
        <p className="footer__text">&copy; 2022 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_type_edit"
            method="post"
            name="edit"
            novalidate
          >
            <p className="popup__field">
              <label className="visually-hidden" for="name-input">
                Имя
              </label>
              <input
                className="popup__input popup__input_place_up"
                id="name-input"
                type="text"
                name="name"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="name-input-error popup__error"></span>
            </p>
            <p className="popup__field">
              <label className="visually-hidden" for="about-input">
                Вид деятельности
              </label>
              <input
                className="popup__input popup__input_place_down"
                id="about-input"
                type="text"
                name="about"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="about-input-error popup__error"></span>
            </p>
            <button className="button popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
          <button
            className="button popup__close-button"
            type="button"
            aria-label="Закрыть форму"
          ></button>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_type_add"
            method="post"
            name="add"
            novalidate
          >
            <p className="popup__field">
              <label className="visually-hidden" for="place-input">
                Название места
              </label>
              <input
                className="popup__input popup__input_place_up"
                id="place-input"
                type="text"
                name="place"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span className="place-input-error popup__error"></span>
            </p>
            <p className="popup__field">
              <label className="visually-hidden" for="link-input">
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
            <button className="button popup__submit-button" type="submit">
              Создать
            </button>
          </form>
          <button
            className="button popup__close-button"
            type="button"
            aria-label="Закрыть форму"
          ></button>
        </div>
      </div>
      <div className="popup popup_type_update-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form_type_update-avatar"
            method="patch"
            name="update-avatar"
            novalidate
          >
            <p className="popup__field">
              <label className="visually-hidden" for="avatar-link-input">
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
            <button className="button popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
          <button
            className="button popup__close-button"
            type="button"
            aria-label="Закрыть форму"
          ></button>
        </div>
      </div>
      <div className="popup popup_type_submit">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="button popup__submit-button" type="submit">
            Да
          </button>
          <button
            className="button popup__close-button"
            type="button"
            aria-label="Закрыть форму"
          ></button>
        </div>
      </div>
      <div className="popup popup_darker popup_type_enlarge">
        <figure className="popup__image-container">
          <button
            className="button popup__close-button"
            type="button"
            aria-label="Закрыть форму"
          ></button>
          <img
            className="popup__image"
            src="https://placekitten.com/200/300"
            alt="Фотография места"
          />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default App;
