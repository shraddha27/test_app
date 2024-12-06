import React, { useEffect, useState } from 'react';
import api from '../api';

const Profile = ({ token, userId }) => {
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        const fetchRecentlyViewed = async () => {
            try {
                const response = await api.get(`/users/${userId}/recentlyViewed`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setRecentlyViewed(response.data);
            } catch (err) {
                console.error('Failed to fetch recently viewed products:', err.response.data.error);
            }
        };
        fetchRecentlyViewed();
    }, [token, userId]);

    return (
        <div>
            <h2>Recently Viewed Products</h2>
            <ul>
                {recentlyViewed.map((product) => (
                    <li key={product.product_id}>
                        Product ID: {product.product_id} | Viewed At: {product.viewed_at}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
