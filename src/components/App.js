// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header  from './Header';
import Main  from './Main';
import Footer  from './Footer';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const handleClickAvatar = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleClickProfile = () => {
    setEditProfilePopupOpen(true);
  }

  const handleClickPlace = () => {
    setAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="App">
        <div className="page">
            <Header />
            <Main onEditAvatar = {handleClickAvatar} onEditProfile = {handleClickProfile} onAddPlace = {handleClickPlace} 
            editProfilePopupOpen = {isEditProfilePopupOpen} editAvatarPopupOpen = {isEditAvatarPopupOpen}
            addPlacePopupOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}/>
            <Footer />
        </div>
    </div>
  );
}

export default App;
