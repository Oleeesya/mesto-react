import { useState, useEffect } from 'react';
import api from "../utils/API";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { currentUserContext } from '../contexts/CurrentUserContext';
import { cardsContext } from '../contexts/CardsContext';


function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

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

  const handleUpdateUser = (userInfo) => {
    api.editUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      }, [])
  }

  const handleUpdateAvatar = (userAvatar) => {
    api.editAvatarUser(userAvatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      }, [])
  }

  //добавление новой карточки
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(() => {
        setCards(cards.filter(c => c._id != card._id))
      })
  }

  const handleAddPlace = (descriptionCard) => {
    api.postCards(descriptionCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      }, [])
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />

          <Main onEditAvatar={handleClickAvatar} onEditProfile={handleClickProfile} onAddPlace={handleClickPlace}
            onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />

          <Footer />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}></EditProfilePopup>

          <cardsContext.Provider value={cards}>
            <AddPlacePopup onAddPlace={handleAddPlace} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} ></AddPlacePopup>
          </cardsContext.Provider>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <PopupWithForm name="remove-card" title="Вы уверены?"></PopupWithForm>

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}></EditAvatarPopup>

        </div>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
