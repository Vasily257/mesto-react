import '../../index.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page index-page">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_type_edit"
            method="post"
            name="edit"
            noValidate
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
            noValidate
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
            noValidate
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
