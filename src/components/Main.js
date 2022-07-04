import React from 'react';
import { useState, useEffect } from 'react';
import Card from "./Card";
import api from "../utils/API";
import { currentUserContext } from '../contexts/CurrentUserContext';
// import { cardsContext } from '../contexts/CardsContext';


function Main(props) {
    const currentUser = React.useContext(currentUserContext);

    // const [cards, setCards] = useState([]);

    // useEffect(() => {
    //     api.getInitialCards()
    //         .then((cardsData) => {
    //             setCards(cardsData);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])

    // function handleCardLike(card) {
    //     const isLiked = card.likes.some(i => i._id === currentUser._id);

    //     api.changeLikeCardStatus(card, !isLiked)
    //         .then((newCard) => {
    //             setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //         })
    // }

    // function handleCardDelete(card) {
    //     api.deleteCard(card)
    //         .then(() => {
    //             setCards(cards.filter( c => c._id!=card._id))
    //         })
    // }

    return (
        <>
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img className="profile__img" src={currentUser.avatar} alt="Жак-Ив Кусто" />
                    </div>
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <p className="profile__subtitle">{currentUser.about}</p>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>
                    </button>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {/* <cardsContext.Provider value={props.cards}> */}

                    {props.cards.map((card) => {

                        return (
                            <Card key={card._id} link={card.link} name={card.name} likes={card.likes} onCardClick={props.onCardClick}
                                onCardDelete={ props.onCardDelete } currentCard={card} id={card._id} onCardLike={props.onCardLike} />

                        )
                    })

                    }
                {/* </cardsContext.Provider> */}

            </section>
        </>
    );
}

export default Main;