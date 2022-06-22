import React from 'react';
import Header  from './Header';
import Main  from './Main';
import Footer  from './Footer';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectCard] = React.useState(false);

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
    setSelectCard(false);
  }

  return (
    <div className="App">
        <div className="page">
            <Header />
            <Main onEditAvatar = {handleClickAvatar} onEditProfile = {handleClickProfile} onAddPlace = {handleClickPlace} 
            editProfilePopupOpen = {isEditProfilePopupOpen} editAvatarPopupOpen = {isEditAvatarPopupOpen}
            addPlacePopupOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups} selectCard = {selectedCard}
            onCardClick = {handleCardClick} />
            <Footer />
        </div>
    </div>
  );
}

export default App;
