import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
    const [users, setUsers] = useState([]);

    // Function to fetch users from your backend API
    const fetchUsers = async () => {
        try {
            const response = await axios.get('/http://127.0.0.1:8080/api/users'); 
            setUsers(response.data);
        } catch (error) {
            console.error('There was an error fetching the user data:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="admin-page">
            <h1>Admin Dashboard</h1>
            <h2>User Management</h2>
            <div className="user-list">
                {users.length > 0 ? (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.username} - {user.role}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </div>
    );
}

export default Admin;