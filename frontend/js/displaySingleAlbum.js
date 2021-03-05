import {displaySingleSong} from './displaySingleSong.js'
import {clearChildren} from "./app.js"
import {getMainElementFromJSON} from "./app.js"
let form = '';
let albumToPassToController = '';
let newSongTitleTextBox = '';
let newSongVideoLinkTextBox = '';
let newSongDurationTextBox = '';
let newSongRatingTextBox = '';
let songToDeletesID = '';

const displaySingleAlbum = function displaySingleAlbum(album) {
    albumToPassToController = album;
    const main = document.querySelector('main');
    clearChildren(main);
    const albumDetailsWrapper = document.createElement('div');
    albumDetailsWrapper.setAttribute('id', 'albumDetailsWrapper');
    main.appendChild(albumDetailsWrapper);
    main.setAttribute('id', 'div--SingleAlbum');
    const imgAlbumArt = document.createElement('img');
    imgAlbumArt.setAttribute('src', `${album.imageUrl}`);
    main.prepend(imgAlbumArt);
    const titleDiv = document.createElement('div');
    titleDiv.innerText = `Album: ${album.title}`;
    titleDiv.setAttribute('id', 'titleDiv');
    titleDiv.style.width = '400px';
    albumDetailsWrapper.appendChild(titleDiv);
    const artistName = document.createElement('div');
    artistName.innerText = `Artist: ${album.artistName}`;
    artistName.setAttribute('id', 'artistName');
    artistName.style.width = '400px';
    albumDetailsWrapper.appendChild(artistName);
    const recordLabel = document.createElement('div');
    recordLabel.innerText = `Record Label: ${album.recordLabel}`;
    recordLabel.setAttribute('id', 'recordLabel');
    recordLabel.style.width = '400px';
    albumDetailsWrapper.appendChild(recordLabel);
    albumDetailsWrapper.appendChild(document.createElement('br'));
    const description = document.createElement('div');
    description.innerText = `Description: ${album.description}`;
    description.setAttribute('id', 'description');
    description.style.width = '400px';
    albumDetailsWrapper.appendChild(description);
    albumDetailsWrapper.appendChild(document.createElement('br'));
    let trackNumber = 1;
    album.songs.forEach((song) => {
        const trackDiv = document.createElement('div');
        trackDiv.classList.add('trackDiv');
        trackDiv.innerText = `Track ${trackNumber}: ${song.title} (id #: ${song.id})`;
        trackDiv.addEventListener('click', () => displaySingleSong(song));
        albumDetailsWrapper.appendChild(trackDiv);
        trackNumber++;
    });
    albumDetailsWrapper.appendChild(document.createElement('br'));
    let commentNumber = 1;
    const comments = document.createElement('div');
    comments.setAttribute('id', 'comments');
    comments.style.width = '400px';
    album.comments.forEach((comment) => {
        const commentWrapper = document.createElement('div');
        commentWrapper.innerText = `Comment${commentNumber}: ${comment.body}, by ${comment.author}`;
        commentNumber++;
        comments.appendChild(commentWrapper);
    });
    albumDetailsWrapper.appendChild(comments);
  
    const formToAddSong = document.createElement('form');
    formToAddSong.append('Add Song');
    formToAddSong.classList.add('inputForm');
    formToAddSong.setAttribute('name', 'formToAddSong');
    newSongTitleTextBox = document.createElement('input');
    newSongVideoLinkTextBox = document.createElement('input');
    newSongDurationTextBox = document.createElement('input');
    newSongRatingTextBox = document.createElement('input');
    const newSongIDHiddenInput = document.createElement('input');
    const submitButton = document.createElement('button');
    newSongTitleTextBox.type = 'text';
    newSongVideoLinkTextBox.type = 'text';
    newSongDurationTextBox.type = 'text';
    newSongRatingTextBox.type = 'text';
    newSongIDHiddenInput.type = 'hidden';
    submitButton.type = 'submit';
    submitButton.innerText = 'Submit';
    newSongTitleTextBox.setAttribute('placeholder', 'Title');
    newSongVideoLinkTextBox.setAttribute('placeholder', 'Video Link');
    newSongDurationTextBox.setAttribute('placeholder', 'Duration');
    newSongRatingTextBox.setAttribute('placeholder', 'Rating');
    newSongIDHiddenInput.setAttribute('value', `${album.id}`);
    newSongIDHiddenInput.value = `${album.id}`;
    formToAddSong.appendChild(newSongTitleTextBox);
    formToAddSong.appendChild(newSongDurationTextBox);
    formToAddSong.appendChild(newSongVideoLinkTextBox);
    formToAddSong.appendChild(newSongRatingTextBox);
    formToAddSong.appendChild(newSongIDHiddenInput);
    formToAddSong.appendChild(submitButton);
    submitButton.addEventListener('click', (e) => addSong);
    main.appendChild(formToAddSong);
    form = formToAddSong;
    form.addEventListener('submit', addSong);
    const delForm = document.createElement('div');
    delForm.setAttribute('id', 'delForm');
    delForm.append('Delete a Song');
    delForm.classList.add('inputForm');
  
    songToDeletesID = document.createElement('input');
    songToDeletesID.type = 'text';
    songToDeletesID.setAttribute('id', 'songToDeletesID');
    songToDeletesID.setAttribute('placeholder', 'ID');
    const delBtn = document.createElement('button');
  
    delBtn.innerText = "delete";
    // delForm.action = deleteAlbum();
    delBtn.addEventListener('click', deleteSong);
    delForm.appendChild(songToDeletesID);
    delForm.appendChild(delBtn);
    main.appendChild(delForm);
    // deleteSongIDHiddenInput = document.createElement('input');
    // deleteSongIDHiddenInput.type = 'hidden';
    // deleteSongIDHiddenInput.setAttribute('value', `${album.id}`);
    // deleteSongIDHiddenInput.value = `${album.id}`;
    // delForm.appendChild(deleteSongIDHiddenInput);
    return main;
}
//Song(String title, String duration, int rating, Album album, String videoLink)
const addSong = (e) => {
  e.preventDefault();
   console.log(form);
   console.log(albumToPassToController);
  const newSongBody = {
    title: newSongTitleTextBox.value,
    duration: newSongDurationTextBox.value,
    rating: newSongRatingTextBox.value,
    videoLink: newSongVideoLinkTextBox.value
  }
  console.log('json: '+newSongBody);
    fetch('http://localhost:8080/api/albums/'+ newSongIDHiddenInput.value + '/songs', {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newSongBody)
    })
            .then((response) => response.json())
            .then(() => getMainElementFromJSON(albumToPassToController))
            .catch((error) => console.log(error));
};

let deleteSong = (e) => {
  e.preventDefault();
  console.log('http://localhost:8080/api/songs/' + songToDeletesID.value);
    fetch('http://localhost:8080/api/songs/' + songToDeletesID.value, {
      method: 'DELETE',
    })
          .then(() => getMainElementFromJSON())
          .catch((error) => console.log(error));
    // getMainElementFromJSON();
}
export {displaySingleAlbum}