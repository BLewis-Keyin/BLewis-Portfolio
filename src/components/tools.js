import React, { useState } from 'react';

function Tools() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('https://rvtool.blcode.net/process_video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });
            if (response.ok) {
                // Assuming the server returns the processed video as an attachment
                const blob = await response.blob();
                const videoUrl = URL.createObjectURL(blob);
                setResponse({ videoUrl });
            } else {
                setResponse({ error: 'Video processing failed' });
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse({ error: 'An error occurred while processing your request.' });
        }
        setIsLoading(false);
    };

    return (
        <div className="Tools">
            <h1>Tools</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter the Reddit Post URL"
                />
                <button type="submit" disabled={isLoading}>
                    Submit
                </button>
            </form>
            {response && response.videoUrl && (
                <video width="750" height="500" controls>
                    <source src={response.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            {response && response.error && <div>{response.error}</div>}
        </div>
    );
}

export default Tools;