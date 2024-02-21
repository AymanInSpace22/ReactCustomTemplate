// import React, { useState } from 'react';
// import { Container, Button, Form, Card } from 'react-bootstrap';
// import '../styles/CustomSpinner.css';


// function ImageGeneration() {
//   const [prompt, setPrompt] = useState('');
//   const [generatedImage, setGeneratedImage] = useState('');
//   const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

//   const handleGenerateImage = async () => {
//     // Assuming your Flask endpoint is hosted at localhost:5000/generate-image
//     // Adjust the URL based on your actual Flask app's host and port.
//     const endpoint = "http://localhost:5000/generate-image";
//     const requestData = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ prompt: prompt }),
//     };

//     try {
//       const response = await fetch(endpoint, requestData);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       // Assuming the Flask endpoint returns a JSON object with an 'image' field containing the Base64 string.
//       setGeneratedImage(`data:image/png;base64,${data.image}`);
//     } catch (error) {
//       console.error('Error fetching image:', error);
//       setGeneratedImage('');
//     }
//   };

//   // Adjusted custom styles for the generated image
//   const imageStyle = {
//     maxWidth: '100%', // Ensures the image's maximum width does not exceed the container's width
//     maxHeight: '1000px', // Controls the maximum height of the image to keep it uniform and not too large
//     // objectFit: 'contain', // Ensures the image is scaled properly to fit within the dimensions without being cut off
//     display: 'block', // Ensures the image is a block-level element to take up the full width of its container
//     margin: 'auto' // Centers the image within its container
//   };

//   return (
//     <Container className="mt-5">
//       <h1 className="text-center">Image Generation</h1>
//       <Card className="p-4 mt-4">
//         <Form>
//           <Form.Group controlId="prompt">
//             <Form.Label>Enter a Prompt:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your prompt here"
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//             />
//           </Form.Group>
//           <br />
//           <Button variant="primary" onClick={handleGenerateImage}>
//             Generate Image
//           </Button>
//         </Form>
//       </Card>

//       {generatedImage && (
//         <Card className="mt-4" style={{ textAlign: 'center' }}> {/* Added style to center the image */}
//           <Card.Img variant="top" src={generatedImage} alt="Generated Image" style={imageStyle} />
//         </Card>
//       )}
//     </Container>
//   );
// }

// export default ImageGeneration;







import React, { useState } from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CustomSpinner.css'; // Make sure the path matches your project structure

interface ImageAPIResponse {
    image: string; // Adjust this type according to your actual API response structure
}

const ImageGeneration: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [generatedImage, setGeneratedImage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state for image generation

    const handleGenerateImage = async () => {
        setIsLoading(true); // Start loading
        setGeneratedImage(''); // Clear previous image

        try {
            const response = await axios.post<ImageAPIResponse>('http://localhost:5000/generate-image', {
                prompt: prompt
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Assuming the API returns a JSON with an 'image' field containing the Base64 encoded image
            setGeneratedImage(`data:image/png;base64,${response.data.image}`);
        } catch (error) {
            console.error('Error generating image:', error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

  // Adjusted custom styles for the generated image
  const imageStyle = {
    maxWidth: '100%', // Ensures the image's maximum width does not exceed the container's width
    maxHeight: '1000px', // Controls the maximum height of the image to keep it uniform and not too large
    // objectFit: 'contain', // Ensures the image is scaled properly to fit within the dimensions without being cut off
    display: 'block', // Ensures the image is a block-level element to take up the full width of its container
    margin: 'auto' // Centers the image within its container
  };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Image Generation</h1>
            <Card className="p-4 mt-4" id="chatContainer">
                <Form>
                    <Form.Group controlId="prompt">
                        <Form.Label>Enter a Prompt:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your prompt here"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={isLoading} // Disable input when loading
                        />
                    </Form.Group>
                    <br />
                    <button className='button' onClick={handleGenerateImage} disabled={isLoading}>
                        {isLoading ? 'Generating…' : 'Generate Image'}
                    </button>
                </Form>
            </Card>

            {isLoading && (
                <div className="text-center mt-4">
                    <div className="loader"></div> {/* Custom spinner */}
                </div>
            )}

            {generatedImage && !isLoading && ( // Ensure spinner is not shown when loading is false and image is available
                <Card className="mt-4" style={{ textAlign: 'center' }}>
                    <Card.Img variant="top" src={generatedImage} alt="Generated Image" style={imageStyle} />
                </Card>
            )}
        </Container>
    );
};

export default ImageGeneration;




