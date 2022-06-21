function PopupWithForm (props) {
    return (
        <div className={`popup popup_type_${props.name} popup_background ${props.isOpen ? 'popup_opened' : '' }`}>
                <div className="popup__container">
                    <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                    <form className="popup__content popup__content_name_edit" name={props.name}>
                        <h2 className="popup__heading">{props.title}</h2>
                        {props.children}
                        <button type="submit" className="popup__submit">Сохранить</button>
                    </form>
                </div>
        </div>
    )
}

export default PopupWithForm;