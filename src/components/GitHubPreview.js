import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function GitHubPreview() {
    const [repositories, setRepositories] = useState([]);
    const [profile, setProfile] = useState({});
    

    useEffect(() => {
        async function fetchProfile() {
            try {
                const profileResponse = await axios.get('https://api.github.com/users/Blewis-Keyin', {
                    headers: {
                        Authorization: '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',
                    },
                });
                setProfile(profileResponse.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        }
        
        async function fetchRepositories() {
            try {
            const response = await axios.get('https://api.github.com/users/Blewis-Keyin/repos', {
                headers: {
                    Authorization: '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',
                },
            });
            setRepositories(response.data);
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
        }
    fetchProfile();
    fetchRepositories();
}, []);

    return (
        
        <section className="github-section">
            <h2>GitHub</h2>
            <div className='github-repositories'>
            <div className="profile-info">
                <img src={profile.avatar_url} alt={`${profile.login}'s Profile`} className="profile-image" />
                <h3>{profile.name}</h3>
                <p>{profile.bio}</p>
            </div>
            <div className="repository-list">
                {repositories.map(repo => (
                    <div key={repo.id} className="repository">
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default GitHubPreview;