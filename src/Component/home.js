 import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./home.css";
import ImageGallery from './ImageGallery';
const Home = () => {
    const [images, setImage] = ([
        {imagePath :  "./image/image-1.webp" , Id:1},
        {imagePath :  "./image/image-2.webp"  , Id:2},
        {imagePath :  "./image/image-3.webp"  , Id:3},
        {imagePath :  "./image/image-4.webp" , Id:4},
        {imagePath :  "./image/image-5.webp" , Id:5},
        {imagePath :  "./image/image-6.webp" , Id:6},
        {imagePath :  "./image/image-7.webp" , Id:7},
        {imagePath :  "./image/image-9.webp" , Id:8},
        {imagePath :  "./image/image-10.jpeg" , Id:9},
        {imagePath :  "./image/image-11.jpeg" , Id:10},
 
     
     
    
        // Add more image paths as needed
      ]);
    return ( 
        <div class ="container home">
            <div class="header">
                
              <div class="selectedDiv">
                <input type="checkbox" id="checkbox" name="checkbox"/>
                <span>3 item selected</span>
              </div>

              <div class="DeleteDiv">
                
                <span> Delete items</span>
              </div>
            </div>
            <hr/>
             <ImageGallery  images={images}></ImageGallery>
        </div>
     );
}
 
export default Home;