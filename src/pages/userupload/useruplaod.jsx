import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userupload.css'

export default function UploadUser() {
    const [file, setFile] = useState(null);
    const [images, setImages] = useState([]);
    const [captions, setCaptions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file);
        formData.append('caption', captions);

        try {
            const response = await axios.post('http://localhost:3700/upload', formData);
            console.log(response.data); 

            if (response.status === 201) {
                console.log('Upload successful');
                fetchUploadedImages();
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const fetchUploadedImages = async () => {
        try {
            const response = await axios.get('http://localhost:3700/uploads');
            const imagesData = response.data;
            setImages(imagesData.map(item => item.Image)); 

            // Extract captions and store them in the captions object
            const captionsObj = {};
            imagesData.forEach(item => {
                captionsObj[item.Image] = item.Caption;
            });
            setCaptions(captionsObj);
        } catch (error) {
            console.error('Error fetching uploaded images:', error);
        }
    };

    useEffect(() => {
        fetchUploadedImages(); 
    }, []);

    return (
        <div>
            <div>
                <input type="file" name="image" onChange={e => setFile(e.target.files[0])} />
                <input
                    type="text"
                    name="caption"
                    placeholder="Enter caption"
                    value={typeof captions === 'object' ? '' : captions} // Check if captions is an object, if so, set it to an empty string
                    onChange={e => setCaptions(e.target.value)}
                />
                <button onClick={handleSubmit}>Share</button>
            </div>
           
            <div>
                <h2>All Uploaded Images:</h2>
                {images.map((image, index) => (
                    <div key={index}>
                        <img id='images' src={`http://localhost:3700/uploads/${image}`} alt={`Uploaded ${index}`} />
                        <p>{captions[image]}</p> {/* Access caption using the image filename */}
                    </div>
                ))}
            </div>
        </div>
    );
}
