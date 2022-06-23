import {useEffect, useState} from 'react';
import Card from "./Card";
import api from "../utils/API";

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescriprion, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);


    useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
              setUserName(userData.name);
              setUserDescription(userData.about);
              setUserAvatar(userData.avatar);
            })
            .catch(err => {
                console.log(err);
            })
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
        </>
    );
}

export default Main;