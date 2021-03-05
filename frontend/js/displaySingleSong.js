import {clearChildren} from "./app.js"

function displaySingleSong(song){
    clearChildren(albumDetailsWrapper);

    const titleDiv = document.createElement('div');
    titleDiv.innerText = `Title: ${song.title}`;
    titleDiv.setAttribute('id', 'titleDiv');
    titleDiv.style.width = '400px';
    albumDetailsWrapper.appendChild(titleDiv);

    const songDurtationDiv = document.createElement('div');
    songDurtationDiv.innerText = `Duration: ${song.duration}`;
    songDurtationDiv.style.width = '400px';
    albumDetailsWrapper.appendChild(songDurtationDiv);

    const songRatingDiv = document.createElement('div');
    songRatingDiv.innerText = `Rating: ${song.rating}`;
    songRatingDiv.style.width = '400px';
    albumDetailsWrapper.appendChild(songRatingDiv);

    let songVideoLinkDiv = document.createElement('a');
    songVideoLinkDiv.setAttribute('href',`${song.videoLink}`);
    songVideoLinkDiv.setAttribute('id',"link");
    songVideoLinkDiv.style.width = '400px';
    songVideoLinkDiv.innerHTML = `Video Link: ${song.videoLink}`;
    albumDetailsWrapper.appendChild(songVideoLinkDiv);

    albumDetailsWrapper.appendChild(document.createElement('br'));

    let commentNumber = 1;
    const comments = document.createElement('div');
    comments.setAttribute('id', 'comments');
    comments.style.width = '400px';
    if(song.comments === undefined || song.comments.length == 0){
        comments.innerText = 'Comments: ';
    } else {
        song.comments.forEach((comment) => {
            const commentWrapper = document.createElement('div');
            commentWrapper.innerText = `Comment${commentNumber}: ${comment.body}, by ${comment.author}`;
            commentNumber++;
            comments.appendChild(commentWrapper);
        });
    }
    albumDetailsWrapper.appendChild(comments);

    const buttonToEditSong = document.createElement('button');
    buttonToEditSong.classList.add('formButton');
    buttonToEditSong.innerText = 'Edit';
    buttonToEditSong.addEventListener('click', () => displayFormToEditSong());  
    albumDetailsWrapper.appendChild(buttonToEditSong);
}



let displayFormToEditSong = function displayFormToEditSong() {
    const editSongForm = document.createElement('form');
    editSongForm.style.display = 'block';
    editSongForm.setAttribute('id', 'addAlbumToHomeViewForm');
    editSongForm.classList.add('inputForm');
    editSongForm.append('Add Song');
    
    editSongForm.appendChild(document.createElement('br'));

    const songTitleTextBox = document.createElement('input');
    songTitleTextBox.type = 'text';
    songTitleTextBox.setAttribute('id', 'songTitle');
    songTitleTextBox.setAttribute('placeholder', 'Title');
    editSongForm.appendChild(songTitleTextBox);

    const songVideoLinkTextBox = document.createElement('input');
    songVideoLinkTextBox.type = 'text';
    songVideoLinkTextBox.setAttribute('id', 'songLink');
    songVideoLinkTextBox.setAttribute('placeholder', 'Video Link');
    editSongForm.appendChild(songVideoLinkTextBox);

    const songDurationTextBox = document.createElement('input');
    songDurationTextBox.type = 'text';
    songDurationTextBox.setAttribute('id', 'songDuration');
    songDurationTextBox.setAttribute('placeholder', 'Duration');
    editSongForm.appendChild(songDurationTextBox);

    const updateSongsInfoButton = document.createElement('button');
    updateSongsInfoButton.innerText = 'Submit';
    updateSongsInfoButton.type = 'submit';
    updateSongsInfoButton.addEventListener('click', () => updateSongsInfo());  
    editSongForm.appendChild(updateSongsInfoButton);

    let main = document.querySelector('main');
    main.appendChild(editSongForm);
}

export {displaySingleSong}