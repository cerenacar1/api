import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID xBDMYy2Duhb5mHqpJUqtC-jsUbfRNTmMyqXRt0V7kT8',
      },
      params:{
        query: term,
      },
    })
    debugger;
    return response.data.results;

  }

  export default searchImages;