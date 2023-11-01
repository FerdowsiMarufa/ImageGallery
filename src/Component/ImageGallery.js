import "./ImageGallery.css";
import 'bootstrap/dist/css/bootstrap.css';


function ImageGallery({ images }) {
  console.log(" image", images);
 
    return (


    //   <div className="image-gallery">
    //   {images.map((image, index) => (
    //     <div
    //       key={index}
    //       className={`image-container ${index === 0 ? 'featured-image' : ''}`}
    //     >
    //       <img src={image} alt={`Image ${index + 1}`} />
    //     </div>
    //   ))}
    // </div>
      <div className="container">
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2 single-image p-0">
              <div className="gallery-item">
                <img src={image} alt={`Image ${index + 1}`} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    


    // <div className=" container image-Container">
    //   <div className="image-gallery ">
    //     <div className="gallery ">
    //       {images.map((image, index) => (
    //         <div key={index} className={`image ${index === 0 ? "large" : ""}`}>
    //           <img src={image} alt={`Image ${index}`} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default ImageGallery;
