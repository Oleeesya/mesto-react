function ImagePopup (props) {
    return (
        <div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}>
            <div className="popup__container-image">
                <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                <img className="popup__image" src={`${props.card ? props.card.link : ''}`} alt={`${props.card ? props.card.name : ''}`} />
                <p className="popup__paragraph-image" type="text" name="title"> {`${props.card ? props.card.name : ''}`} </p>
            </div>
        </div>
    )
}

export default ImagePopup;