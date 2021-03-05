import {displaySingleAlbum} from "./displaySingleAlbum.js"
import {clearChildren} from "./app.js"
import {getMainElementFromJSON} from "./app.js"
const main = document.createElement('main');
let form = '';

function createMainElement(albums){
    clearChildren(main);
    main.setAttribute('id', 'main--grid-wrapper');
    let countOfAlbums = 1;
    albums.forEach((album) => {
        const divAlbum = document.createElement('div');
        divAlbum.classList.add('div--album');
        divAlbum.setAttribute('id', `div--album${countOfAlbums}`);

        const imgAlbumArt = document.createElement('img');
        imgAlbumArt.setAttribute('src', `${album.imageUrl}`);
        divAlbum.appendChild(imgAlbumArt);

        const whiteSpacer = document.createElement('div');
        whiteSpacer.classList.add('div--white_spacer');
        divAlbum.appendChild(whiteSpacer);

        const titleDiv = document.createElement('div');
        titleDiv.innerText = `${album.title}`;
        titleDiv.setAttribute('id', 'titleDiv');
        divAlbum.appendChild(titleDiv);

        const artistDiv = document.createElement('div');
        artistDiv.innerText = `${album.artistName}`;
        artistDiv.classList.add('artistName');
        artistDiv.setAttribute('id', 'artistName');
        divAlbum.appendChild(artistDiv);

        divAlbum.addEventListener('click', () => displaySingleAlbum(album));
        main.appendChild(divAlbum);
        countOfAlbums++;
    });
    const formToAddAlbum = document.createElement('form');
    formToAddAlbum.append('Add an Album');
    formToAddAlbum.classList.add('inputForm');
    formToAddAlbum.setAttribute('name', 'formToAddAlbum');
    const newAlbumTitleTextBox = document.createElement('input');
    const newAlbumArtistNameTextBox = document.createElement('input');
    const newAlbumRecordLabelTextBox = document.createElement('input');
    const newAlbumDescriptionTextBox = document.createElement('input');
    const newAlbumImageUrlTextBox = document.createElement('input');
    const submitButton = document.createElement('button');
    newAlbumTitleTextBox.type = 'text';
    newAlbumArtistNameTextBox.type = 'text';
    newAlbumRecordLabelTextBox.type = 'text';
    newAlbumDescriptionTextBox.type = 'text';
    newAlbumImageUrlTextBox.type = 'text';
    submitButton.type = 'submit';
    submitButton.innerText = 'Submit';
    newAlbumTitleTextBox.setAttribute('placeholder', 'Album Title');
    newAlbumArtistNameTextBox.setAttribute('placeholder', 'Artist\'s Name');
    newAlbumRecordLabelTextBox.setAttribute('placeholder', 'Record Label');
    newAlbumDescriptionTextBox.setAttribute('placeholder', 'Description');
    newAlbumImageUrlTextBox.setAttribute('placeholder', 'Image URL');
    newAlbumTitleTextBox.setAttribute('name', 'title');
    newAlbumArtistNameTextBox.setAttribute('name', 'artistName');
    newAlbumRecordLabelTextBox.setAttribute('name', 'recordLabel');
    newAlbumDescriptionTextBox.setAttribute('name', 'description');
    newAlbumImageUrlTextBox.setAttribute('name', 'imageUrl');
    formToAddAlbum.appendChild(newAlbumTitleTextBox);
    formToAddAlbum.appendChild(newAlbumArtistNameTextBox);
    formToAddAlbum.appendChild(newAlbumRecordLabelTextBox);
    formToAddAlbum.appendChild(newAlbumDescriptionTextBox);
    formToAddAlbum.appendChild(newAlbumImageUrlTextBox);
    formToAddAlbum.appendChild(submitButton);
    submitButton.addEventListener('click', () => addAlbum);
    main.appendChild(formToAddAlbum);

    form = formToAddAlbum;
    form.addEventListener('submit', addAlbum);

    return main;
}




const addAlbum = (e) => {
  e.preventDefault();
   console.log(form);
  const newAlbumBody = JSON.stringify(
    Object.fromEntries(
      new FormData(e.target)
    )
  )
  console.log(newAlbumBody);
    fetch('http://localhost:8080/api/albums', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: newAlbumBody
    })
            .then((response) => response.json())
            .then(() => getMainElementFromJSON())
            .catch((error) => console.log(error));
};






export {createMainElement};