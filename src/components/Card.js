function Card(props) {

    function handleClick() {
        props.onCardClick(props.link);
    }

    return(
        <article className="elements__element">
            <button className="elements__trash" type="button"></button>
            <img className="elements__image" src={props.link} onClick={handleClick} />
            <div className="elements__description">
                <h2 className="elements__title">{props.name}</h2>
                <div className="elements__likes">
                    <button className="elements__like" type="button"></button>
                    <span className="elements__amount">{props.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;