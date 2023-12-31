 







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

 

   return (

  <div className="container home ">
    <div className="header">
      < div className=' header-component'>
        {selectedImages.length == 0 && (
        <h3 >Gallery</h3>
        )}
        {selectedImages.length > 0 && (
         <div className="selectedDiv">
           <input type="checkbox" id="checkbox"  checked={selectedImages.length >0} name="checkbox" 
            onChange={() => {
             if (selectedImages.length === images.length) {
                setSelectedImages([]);}
             else {
                const allImageIds = images.map((image) => image.Id);
                setSelectedImages(allImageIds);
                }
             }}/>
           <span> {selectedImages.length} {selectedImages.length === 1 ? 'item' : 'items'} selected</span>
         </div>
        )}
       {selectedImages.length > 0 && (
         <div className="DeleteDiv">
           <span onClick={deleteImage}>Delete {selectedImages.length === 1 ? 'item' : 'items'}</span>
        </div>
        )}
    
      </div>

    </div>

     {/* Image gallery */}

      <DragDropContext  onDragEnd={onDragEnd}  >
        <div className="container image-Container ">
          <Droppable droppableId="hhh"  >
            {(provided) => (
              <div className="gallery" {...provided.droppableProps} ref={provided.innerRef}>
                 {images.map((image, index) => (
                 <Draggable draggableId={image.Id.toString()}  index={index} key={image.Id.toString()} >
                   {(provided) => (
                     <div ref={provided.innerRef}  {...provided.draggableProps}  {...provided.dragHandleProps}
                       className={`image-card ${selectedImages.includes(image.Id) ? 'checked' : ''} ${index === 0 ? 'large' : ''}`} >
                        <div className="image-overlay">
                          <input type="checkbox" className="image-checkbox" onChange={() => toggleImageSelection(image.Id)}/>
                       </div>
                       <img src={image.imagePath} alt={`Image ${image.Id}`} />
                     </div>
                   )}
                 </Draggable>
               ))}
               <div className="image-card add-image">
                <div >
                  <i className="fa fa-image"></i>
                   <p onClick={addImage}>Add Images</p>
                </div>
                  
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
