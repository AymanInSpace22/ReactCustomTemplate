import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CustomSpinner.css';
import '../styles/TextHeader.css';
import NewSpinner from './NewSpinner';


interface APIResponse {
    response: string;
    time: string;
}


const ChatAPIComponent: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault(); // Prevent the default form submission
        setResponse(''); // Clear previous response
        setIsLoading(true); // Start loading

        try {
            // const result = await axios.post<APIResponse>('http://127.0.0.1:5000/ask', { -- Python Backend
            const result = await axios.post<APIResponse>('https://localhost:7282/ChatGpt/ChatWithAI', { // .NET Backend

                prompt: prompt
            }, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            setResponse(result.data.response); // Adjust according to your API response
        } catch (error) {
            console.error('Error fetching the API', error);
            setResponse('Error fetching the API. Please check the console for more details.');
        } finally {
            setIsLoading(false); // Stop loading regardless of the outcome
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center headerText" >Chat with AI</h1>
            <Card className="p-4 mt-4" id="chatContainer">
                <Form >
                    <Form.Group controlId="prompt">
                        <Form.Label className='subHeaderText'>Enter your question:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your question"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={isLoading} // Disable input when loading
                            
                        />
                    </Form.Group>
                    <br />
                    <button className='button' onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? 'Loading…' : 'Submit'}
                    </button>
                </Form>
            </Card>

            {isLoading && (
                <div className="text-center mt-4">
                    {/* <div className="loader"></div>  */}
                    <NewSpinner />
                </div>
            )}

            {response && (
                <Card className="mt-4">
                    <Card.Body>
                        <Card.Text>
                            {response}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default ChatAPIComponent;





