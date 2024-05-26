const apiKey = "28216731-30bd748fb13dcf95cdddced76";
const pixUrl = "https://pixabay.com/api/";
export const fetchPhotos = searchImage => {
    const parameters = new URLSearchParams({
      key: apiKey,
      q: searchImage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    return fetch(`${pixUrl}/?${parameters}`).then(response =>{
        if (!response.ok){
          throw new Error(
            response.statusText
          );
        }
        return response.json();
      });
    }