import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductList({ onAddToCartSuccess }) {

    const initialMenuItems = [
        {
            id: 1,
            name: 'Ao',
            price: '100000',
            image: '/Images/nam1.jpg',
            status: 'Hết hàng',
            quantity: 0,
        },
        {
            id: 2,
            name: 'Ao',
            price: '100000',
            image: '/Images/nam2.jpg',
            status: 'Còn hàng',
            quantity: 3,
        },
        {
            id: 3,
            name: 'Ao',
            price: '100000',
            image: '/Images/nam3.jpg',
            status: 'Còn hàng',
            quantity: 2,
        },
        {
            id: 4,
            name: 'Ao',
            price: '100000',
            image: '/Images/nu1.jpg',
            status: 'Hết hàng',
            quantity: 0,
        },
        {
            id: 5,
            name: 'Ao',
            price: '100000',
            image: '/Images/nu2.jpg',
            status: 'Còn hàng',
            quantity: 5,
        },
        {
            id: 6,
            name: 'Ao',
            price: '100000',
            image: '/Images/nu3.jpg',
            status: 'Còn hàng',
            quantity: 4,
        },
    ];

    const [menuItems, setMenuItems] = useState(initialMenuItems);

    const handleAddToCart = (id) => {
        const itemToUpdate = menuItems.find((item) => item.id === id);
        if (itemToUpdate && itemToUpdate.quantity > 0) {
            setMenuItems((prevItems) =>
                prevItems.map((item) => {
                    if (item.id === id) {
                        const newQuantity = item.quantity - 1;
                        return {
                            ...item,
                            quantity: newQuantity,
                            status: newQuantity === 0 ? 'Hết hàng' : item.status,
                        };
                    }
                    return item;
                })
            );
            onAddToCartSuccess?.();
        }
    };

    return (
        <header className="text-white p-3">
            <Row>
                {
                    menuItems.map((i) => (
                        <Col md={4} key={i.id} className="mb-4">
                            <ProductCard 
                                image={i.image} 
                                name={i.name}
                                price={i.price} 
                                status={i.status}
                                quantity={i.quantity}
                                onAddToCart={() => handleAddToCart(i.id)} 
                            />
                        </Col>
                    ))
                }
            </Row>
        </header>
    );
};

export default ProductList;