

function createHeader(){
    const header = document.createElement('div');
    header.setAttribute('id', 'pageHeading');
    header.innerText = `Jukebox Manager`;

    return header
}


export {createHeader};