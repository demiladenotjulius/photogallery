import React, { useRef } from 'react';

function Camera() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const imagesContainerRef = useRef(null);

    const handleCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const handleSnap = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set canvas dimensions to match video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw the current frame from the video onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Create a data URL from the canvas image
        const image = canvas.toDataURL('image/png');

        // // Create a link element
        // const link = document.createElement('a');
        // link.href = image;
        // link.download = 'snapshot.png';

        // Programmatically click the link to trigger the download
        // link.click();
        const img = document.createElement('img');
        img.src = image;
        img.style.width = '40%'; // Adjust as needed
        img.style.margin = '10px'; // Add some margin for spacing

        // Append the img element to the getimage div
        imagesContainerRef.current.appendChild(img);
    };


    return (
        <div style={{width: '100%'}} className="mycontainer">
            <button style={{marginBottom: '30px'}} onClick={handleCamera}>Start Camera </button>
            <button onClick={handleSnap}>Snap Picture</button>
            <div style={{height: '70%'}} className='vidDiv'>

                <video ref={videoRef} autoPlay playsInline style={{ width: '50vh', transform: 'scaleX(-1)', borderRadius: '10px', marginLeft: '-60px' }} />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>

            <div className="getimage flex" ref={imagesContainerRef}>
     
            </div>
        </div>


    );
}

export default Camera;

