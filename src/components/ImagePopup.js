function ImagePopup () {
    return (
        <div className="popup popup_type_image">
            <div className="popup__container-image">
                <button className="popup__close-button" type="button"></button>
                <img className="popup__image" />
                <p className="popup__paragraph-image" type="text" name="title"></p>
            </div>
        </div>
    )
}

export default ImagePopup;