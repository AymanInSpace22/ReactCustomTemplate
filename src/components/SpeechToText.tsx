interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
}

interface SpeechRecognitionEventMap {
    "result": SpeechRecognitionEvent;
    "nomatch": SpeechRecognitionEvent;
    "error": SpeechRecognitionErrorEvent;
}

interface SpeechRecognition extends EventTarget {
    start(): void;
    stop(): void;
    onresult: (event: SpeechRecognitionEvent) => void;
    // Add other properties and methods as needed
}

declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
};

interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
    resultIndex: number;
    // Add other properties as needed
}

// If SpeechRecognitionErrorEvent is not recognized, add it similarly:
interface SpeechRecognitionErrorEvent extends Event {
    error: string;
    // Add other properties as needed
}






import React, { useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// Ensure this is somewhere global if not already, or make sure TypeScript includes it
declare global {
    interface Window {
        SpeechRecognition: typeof SpeechRecognition;
        webkitSpeechRecognition: typeof SpeechRecognition;
    }
}

const SpeechToText: React.FC = () => {
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [transcript, setTranscript] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [speechRecognition, setSpeechRecognition] = useState<SpeechRecognition | null>(null);

    useEffect(() => {
        // Using type assertion to tell TypeScript about `SpeechRecognition` on `window`
        const SpeechRecognition: any = (window.SpeechRecognition || (window as any).webkitSpeechRecognition) as typeof SpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event: SpeechRecognitionEvent) => {
                const current = event.resultIndex;
                const transcriptResult = event.results[current][0].transcript;
                setTranscript(transcriptResult);
            };

            setSpeechRecognition(recognition);
        } else {
            console.error('Speech recognition not supported in this browser.');
        }
    }, []);

    const handleStart = () => {
        speechRecognition?.start();
        setIsRecording(true);
    };

    const handleStop = () => {
        speechRecognition?.stop();
        setIsRecording(false);
    };


    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://localhost:7282/api/AudioGeneration/SpeechStuff', {
                prompt: transcript,
                voice: "string", // Adjust these parameters as per your API requirements
                language: "string",
            }, {
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                }
            });

            setResponseMessage(response.data); // Adjust according to the actual response structure
        } catch (error) {
            console.error('Error submitting the transcript', error);
            setResponseMessage('Failed to fetch response. Please check the console for more details.');
        }
    };




    return (
        <Container className="mt-5">
            <h1 className="text-center headerText">Speech to Text</h1>
            <Card className="p-4 mt-4" id="speechToTextContainer">
                <div className="d-grid gap-2">
                    <Button variant="primary" onClick={handleStart} disabled={isRecording}>
                        Start Recording
                    </Button>
                    <Button variant="secondary" onClick={handleStop} disabled={!isRecording}>
                        Stop Recording
                    </Button>
                    <Button variant="success" onClick={handleSubmit} disabled={!transcript}>
                        Submit
                    </Button>
                    
                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title className='subHeaderText'>Transcript:</Card.Title>
                            <p>{transcript}</p>
                        </Card.Body>
                    </Card>
                
                </div>

                {responseMessage && (
                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title className='subHeaderText'>Response:</Card.Title>
                            <p>{responseMessage}</p>
                        </Card.Body>
                    </Card>
                )}
            </Card>
        </Container>
    );
};

export default SpeechToText;
