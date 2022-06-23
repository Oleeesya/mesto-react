import {useState} from 'react';
import Header  from './Header';
import Main  from './Main';
import Footer  from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectCard] = useState(null);

  const handleClickAvatar = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleClickProfile = () => {
    setEditProfilePopupOpen(true);
  }

  const handleClickPlace = () => {
    setAddPlacePopupOpen(true);
  }

  const handleCardClick = (link) => {
    setSelectCard(link);
  }

  const closeAllPopups = () => {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectCard(null);
  }

  return (
    <div className="App">
        <div className="page">
            <Header />
            <Main onEditAvatar = {handleClickAvatar} onEditProfile = {handleClickProfile} onAddPlace = {handleClickPlace} 
            onCardClick = {handleCardClick} />
            <Footer />

            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
            buttonText="Сохранить">
                <label className="popup__label">
                    <input className="popup__input popup__input_edit_header" id="title-input" type="text" name="name"
                        required maxLength="40" minLength="2" placeholder="Имя"/>
                    <span className="popup__input-error title-input-error"></span>
                </label>
                <label className="popup__label">
                    <input className="popup__input popup__input_edit_paragraph" id="subtitle-input" type="text" name="about"
                        required maxLength="200" minLength="2" placeholder="Занятие"/>
                    <span className="popup__input-error subtitle-input-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm name="create" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
            buttonText="Создать">     
                <label className="popup__label">
                    <input className="popup__input popup__input_edit_header" id="title-input" type="text" name="name"
                        required maxLength="40" minLength="2" placeholder="Название" />
                    <span className="popup__input-error title-input-error"></span>
                    </label>
                    <label className="popup__label">
                    <input className="popup__input popup__input_edit_paragraph" id="subtitle-input" type="text" name="about"
                        required maxLength="200" minLength="2" placeholder="Ссылка на картинку"/>
                    <span className="popup__input-error subtitle-input-error"></span>
                </label>
            </PopupWithForm>

            <ImagePopup card = {selectedCard} onClose={closeAllPopups}/>

            <PopupWithForm name="remove-card" title="Вы уверены?">     
            </PopupWithForm>

            <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
            buttonText="Сохранить">
                <label className="popup__label">
                    <input className="popup__input popup__input_avatar_paragraph" id="url-input-avatar" type="url" name="url"
                        placeholder="Ссылка на картинку" required />
                        <span className="popup__input-error url-input-avatar-error"></span>
                    </label>
            </PopupWithForm>
            
        </div>
    </div>
  );
}

export default App;
