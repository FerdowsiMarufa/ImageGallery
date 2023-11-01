 
import './App.css';
import ImageGallery from "./Component/ImageGallery";
function App() {

  const images = [
 
    "./image/image-1.webp",
    "./image/image-3.webp",
    "./image/image-4.webp",
    "./image/image-5.webp",
    "./image/image-6.webp",
    "./image/image-7.webp",
    "/image/image-8.webp",
    "/image/image-9.webp",
    "/image/image-10.webp",
    "/image/image-11.webp",
 
 

    // Add more image paths as needed
  ];
  return (
    <div className="App">
      <ImageGallery images={images} />   
    </div>
  );
}

export default App;
