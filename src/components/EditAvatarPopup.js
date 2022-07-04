import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value/* Значение инпута, полученное с помощью рефа */,
        });
    }

    return (
        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={props.isOpen}
            onClose={props.onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
            <label className="popup__label">
                <input ref={avatarRef} className="popup__input popup__input_avatar_paragraph" id="url-input-avatar" type="url" name="url"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__input-error url-input-avatar-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;