import '../../index.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  return (
    <div className="page index-page">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
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
            <button className="button popup__submit-button" type="submit">
              Сохранить
            </button>
          </>
        }
      ></PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
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
            <button className="button popup__submit-button" type="submit">
              Создать
            </button>
          </>
        }
      ></PopupWithForm>

      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
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
            <button className="button popup__submit-button" type="submit">
              Сохранить
            </button>
          </>
        }
      ></PopupWithForm>

      <PopupWithForm
        name="submit"
        title="Вы уверены?"
        children={
          <>
            <button className="button popup__submit-button" type="submit">
              Да
            </button>
          </>
        }
      ></PopupWithForm>

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
