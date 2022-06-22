function ImagePopup (props) {

    return (
        <div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}>
            <div className="popup__container-image">
                <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                <img className="popup__image" src={`${props.card ? props.card : ''}`} />
                <p className="popup__paragraph-image" type="text" name="title"></p>
            </div>
        </div>
    )
}

export default ImagePopup;