import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductList() {

    const menuItems = [
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

    return (
        <header className="bg-primary text-white p-3">
            <Row>
                {
                    menuItems.map((i) => {
                        <Col md={4}>
                            <ProductCard image={i.image} name={i.name} 
                            price={i.price} status={i.status}
                            quantity = {i.quantity}/>
                        </Col>
                    })
                }
            </Row>
        </header>
    );
};

export default ProductList;