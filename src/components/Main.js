import React from 'react';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import api from "../utils/API";

function Main(props) {
    const[userName, setUserName] = React.useState();
    const[userDescriprion, setUserDescription] = React.useState();
    const[userAvatar, setUserAvatar] = React.useState();
    const[cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
              setUserName(userData.name);
              setUserDescription(userData.about);
              setUserAvatar(userData.avatar);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
              setCards(cardsData); 
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img className="profile__img" src={userAvatar} alt="Жак-Ив Кусто" />
                    </div>
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__subtitle">{userDescriprion}</p>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>
                    </button>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => {
                    return (
                        <Card key={card._id} link={card.link} name={card.name} likes={card.likes} onCardClick = {props.onCardClick}
                        card = {props.selectCard} />
                    )
                    })
                }
            </section>

            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={props.editProfilePopupOpen} onClose={props.onClose}>
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

            <PopupWithForm name="create" title="Новое место" isOpen={props.addPlacePopupOpen} onClose={props.onClose}>     
                <label className="popup__label">
                    <input className="popup__input popup__input_edit_header" id="title-input" type="text" name="name"
                        required maxLength="40" minLength="2" />
                    <span className="popup__input-error title-input-error"></span>
                    </label>
                    <label className="popup__label">
                    <input className="popup__input popup__input_edit_paragraph" id="subtitle-input" type="text" name="about"
                        required maxLength="200" minLength="2" />
                    <span className="popup__input-error subtitle-input-error"></span>
                </label>
            </PopupWithForm>

            <ImagePopup card = {props.selectCard} onClose={props.onClose} link={props.link}/>
            
            <PopupWithForm name="remove-card" title="Вы уверены?">     
            </PopupWithForm>

            <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={props.editAvatarPopupOpen} onClose={props.onClose}>
                <label className="popup__label">
                    <input className="popup__input popup__input_avatar_paragraph" id="url-input-avatar" type="url" name="url"
                        placeholder="Ссылка на картинку" required />
                        <span className="popup__input-error url-input-avatar-error"></span>
                    </label>
            </PopupWithForm>
            <ImagePopup />
        </>
    );
}

export default Main;