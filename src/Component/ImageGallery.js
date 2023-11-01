import "./ImageGallery.css";

function ImageGallery({ images }) {
  console.log(" image", images);
  return (
    // <div className=" container image-Container">
      <div className="image-gallery">
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className={`image ${index === 0 ? "large" : ""}`}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}

export default ImageGallery;
