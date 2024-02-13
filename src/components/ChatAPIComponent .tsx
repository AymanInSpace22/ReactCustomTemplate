// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// interface APIResponse {
//     data: string; // Adjust this type according to your actual API response structure
// }

// const ChatAPIComponent: React.FC = () => {
//     const [prompt, setPrompt] = useState<string>('');
//     const [response, setResponse] = useState<string>('');
//     const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

//     const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
//         event.preventDefault(); // Prevent the default form submission
//         setResponse(''); // Clear previous response
//         setIsLoading(true); // Start loading

//         try {
//             const result = await axios.post<APIResponse>('http://127.0.0.1:5000/ask', {
//                 prompt: prompt
//             }, {
//                 headers: {
//                     'accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             });
//             setResponse(result.data.response); // Adjust according to your API response
//         } catch (error) {
//             console.error('Error fetching the API', error);
//             setResponse('Error fetching the API. Please check the console for more details.');
//         } finally {
//             setIsLoading(false); // Stop loading regardless of the outcome
//         }
//     };

//     return (
//         <Container className="mt-5">
//             <h1 className="text-center">Chat with AI</h1>
//             <Card className="p-4 mt-4">
//                 <Form>
//                     <Form.Group controlId="prompt">
//                         <Form.Label>Enter your prompt:</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter your prompt here"
//                             value={prompt}
//                             onChange={(e) => setPrompt(e.target.value)}
//                             disabled={isLoading} // Disable input when loading
//                         />
//                     </Form.Group>
//                     <br />
//                     <Button variant="primary" onClick={handleSubmit} disabled={isLoading}>
//                         {isLoading ? 'Loading…' : 'Submit'}
//                     </Button>
//                 </Form>
//             </Card>

//             {isLoading && (
//                 <div className="text-center mt-4">
//                     <Spinner animation="border" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </Spinner>
//                 </div>
//             )}

//             {response && (
//                 <Card className="mt-4">
//                     <Card.Body>
//                         <Card.Text>
//                             {response}
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             )}
//         </Container>
//     );
// };

// export default ChatAPIComponent;




import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CustomSpinner.css';


interface APIResponse {
    data: string; // Adjust this type according to your actual API response structure
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
            const result = await axios.post<APIResponse>('http://127.0.0.1:5000/ask', {
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
            <h1 className="text-center">Chat with AI</h1>
            <Card className="p-4 mt-4">
                <Form>
                    <Form.Group controlId="prompt">
                        <Form.Label>Enter your question:</Form.Label>
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
                    <div className="loader"></div> {/* Custom spinner */}
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

