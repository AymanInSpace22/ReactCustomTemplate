import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/CustomSpinner.css';
import '../styles/TextHeader.css';

import NewSpinner from './NewSpinner';


const ShortStoryGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [voice, setVoice] = useState<string>('');
    const [downloadUrl, setDownloadUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setDownloadUrl(''); // Clear previous download URL
        setIsLoading(true);

        try {
            const response = await axios.post('https://localhost:7282/api/AudioGeneration/ShortStoryGenerator', {
                prompt: prompt,
                voice: voice
            }, {
                responseType: 'blob', // Important for handling binary data
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                }
            });

            // Create a URL for the blob
            const blob = new Blob([response.data], { type: 'audio/mp3' });
            const url = window.URL.createObjectURL(blob);
            setDownloadUrl(url);
        } catch (error) {
            console.error('Error fetching the API', error);
            alert('Error fetching the API. Please check the console for more details.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container className="mt-3">
            <h1 className="text-center headerText">Generate a Story</h1>
            <Card className="p-4 mt-4" id="chatContainer">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="prompt">
                        <Form.Label className='subHeaderText'>Imagine your idea:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter a few words about the story you want to generate"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={isLoading}
                        />

                        <Form.Label className='mt-3 subHeaderText'>Voice Type:</Form.Label>
                        <Form.Select
                         onChange={(e) => setVoice(e.target.value)}
                         aria-label="Default select example">
                            <Form.Label>Imagine your idea:</Form.Label>
                            <option value="0">--</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </Form.Select>


                    </Form.Group>
                    <button disabled={isLoading} className="mt-3 button">
                        {isLoading ? 'Generating…' : 'Generate Story'}
                    </button>
                </Form>
            </Card>

            {isLoading && (
                <div className="text-center mt-4">
                    {/* <div className="loader"></div>  */}
                    <NewSpinner /> {/* Custom spinner */}
                </div>
            )}

            {downloadUrl && (
                <Card className="mt-3">
                    <Card.Body>
                        <Card.Text>
                            Your story awaits! <a href={downloadUrl} download="poem.mp3">Click here to download.</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default ShortStoryGenerator;