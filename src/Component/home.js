import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
 
import 'font-awesome/css/font-awesome.min.css';
import {Droppable , DragDropContext, Draggable} from 'react-beautiful-dnd'

 
import './home.css';

const Home = () => {
  const [images, setImages] = useState(
    JSON.parse(localStorage.getItem('Images'))||
    [
    { imagePath: './image/image-1.webp', Id: 1 },
    { imagePath: './image/image-2.webp', Id: 2 },
    { imagePath: './image/image-3.webp', Id: 3 },
    { imagePath: './image/image-4.webp', Id: 4 },
    { imagePath: './image/image-5.webp', Id: 5 },
    { imagePath: './image/image-6.webp', Id: 6 },
    { imagePath: './image/image-7.webp', Id: 7 },
    { imagePath: './image/image-9.webp', Id: 8 },
    { imagePath: './image/image-10.jpeg', Id: 9 },
    { imagePath: './image/image-11.jpeg', Id: 10 },
    { imagePath: './image/image-4.webp', Id: 11},
    { imagePath: './image/image-5.webp', Id: 12 },
    { imagePath: './image/image-6.webp', Id: 16 },
    { imagePath: './image/image-7.webp', Id: 17 },
    { imagePath: './image/image-9.webp', Id: 18 },
    { imagePath: './image/image-10.jpeg', Id: 19 },
    { imagePath: './image/image-11.jpeg', Id: 20 },
    // Add more image paths as needed
  ]);


  // Create a state to keep track of selected images
  const [selectedImages, setSelectedImages] = useState(
    
    []);

  // Function to handle image deletion
  const deleteImage = () => {
    const updatedImages = images.filter((image) => !selectedImages.includes(image.Id));
    setImages(updatedImages);
    setSelectedImages([]); // Clear selected images
     
  };
  const addImage = () => {

  };

  // Function to toggle image selection
  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };
 

  useEffect(() => {
    // Update localStorage when selectedImages changes
    localStorage.setItem('Images', JSON.stringify(images));
  }, [images]);

  
  function onDragEnd(result) {
    console.log("khg", result);
    const newimages= [...images];
    const [removed] = newimages.splice(result.source.index, 1);
    // setImages(removed);
    newimages.splice(result.destination.index, 0, removed);
    setImages(newimages);
   
}

   function onDragStart(result){
    console.log(" onDragStart", result)
    // const newimages= [...images];
    // const [removed] = newimages.splice(result.source.index, 1);
    // console.log(" onDragStart removed", removed) 
    // newimages.splice(result.destination.index, 0, removed);
    // setImages(newimages);
    // setImages(removed);
   }

  return (
    <div className="container home">
      <div className="header">
        <div className="selectedDiv">
          <input type="checkbox" id="checkbox" name="checkbox" />
          <span>{selectedImages.length} items selected</span>
        </div>
        <div className="DeleteDiv">
          <span onClick={deleteImage}>Delete items</span>
        </div>
      </div>
      <hr />

      {/* Wrap the Draggable components in a Droppable component and pass the DragDropContext component */}
      <DragDropContext  onDragEnd={onDragEnd}  onDragStart={onDragStart}>
        <div className="container">
          <Droppable droppableId="hhh"  direction="horizontal" >
            {(provided) => (
              <div className="row" {...provided.droppableProps} ref={provided.innerRef}>
                {/* Make sure that the draggableId and droppableId props are unique */}
                {images.map((image, index) => (
                  <Draggable draggableId={image.Id.toString()} index={index} key={image.Id.toString()}  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                     
                        className="col-6 col-md-4 col-lg-2 single-image p-0"
                      >
                        <div className="gallery-item">
                          <div className="checkbox-overlay">
                            <input
                              type="checkbox"
                              className="image-checkbox"
                              checked={selectedImages.includes(image.Id)}
                              onChange={() => toggleImageSelection(image.Id)}
                            />
                          </div>
                          <img src={image.imagePath} alt={`Image ${index + 1}`} className="img-fluid image" />
                        </div>
                        
                      </div>
                      
                    )}
                  </Draggable>
                ))}
                <div className="col-6 col-md-4 col-lg-2  add-image p-0">
                  <i className="fa fa-image"></i>
                  <span onClick={addImage}>Add Images</span>
                </div>
                {provided.placeholder}
              </div>
            )}


          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
  

 
   
 
};

export default Home;
