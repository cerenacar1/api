import './App.css';
import SearchHeader from './SearchHeader.js';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList.js';

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) =>{
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceholder={images}/>

    </div>
  );
}

export default App;
