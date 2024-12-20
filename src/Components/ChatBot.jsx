import React, { useState } from 'react';
import axios from 'axios';

function Chatbot({ onClose }) {
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleUserMessage = (e) => {
        setUserMessage(e.target.value);
    };

    const sendMessageToBot = async () => {
        // Add user message to the messages array
        const newMessages = [...messages, { text: userMessage, sender: 'user' }];
        setMessages(newMessages);

        try {
            const response = await axios.post('http://127.0.0.1:8000/chatbot/', {
                message: userMessage
            });
            const botMessage = response.data.body.bot_response;

            // Add bot response to the messages array
            setMessages([...newMessages, { text: botMessage, sender: 'bot' }]);
        } catch (error) {
            console.error("Error sending message to bot:", error);
            setMessages([ 
                ...newMessages,
                { text: "Sorry, something went wrong.", sender: 'bot' }
            ]);
        }
        setUserMessage(''); // Reset input field
    };

    return (
        <div className="sticky bottom-10 left-10 bg-white rounded-lg shadow-lg p-6 w-80 z-50">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Chatbot</h2>
                {/* Close Button */}
                <button onClick={onClose} className="text-red-500 text-lg right-0">X</button>
            </div>
            <div className="mb-4 space-y-4 h-72 overflow-y-auto">
                {/* Display messages */}
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs p-3 rounded-lg ${
                                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                        >
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <input
                    type="text"
                    value={userMessage}
                    onChange={handleUserMessage}
                    placeholder="Type a message..."
                    className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                onClick={sendMessageToBot}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
            >
                Send
            </button>
        </div>
    );
}

export default Chatbot;
