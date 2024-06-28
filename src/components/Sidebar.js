import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Sidebar() {
    const rooms = ["primera sala", "segunda sala", "tercera sala"]
    return ( 
        <>
            <h2>Salas Disponibles</h2>
            <ListGroup>
                {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx}>{room}</ListGroup.Item>
                ))}
            </ListGroup>
            <h2>Miembros</h2>
        </>
    );
}

export default Sidebar