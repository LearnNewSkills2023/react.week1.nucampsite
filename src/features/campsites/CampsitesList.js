// CampsitesList.js
// import React from 'react';
// import { CAMPSITES } from '../../app/shared/CAMPSITES';
// import { Col, Row } from 'reactstrap';
// import CampsiteCard from './CampsiteCard';

// const CampsitesList = () => {
//     return (
//         <Row className='ms-auto'>
//             {CAMPSITES.map((campsite) => {
//                 return (
//                     <Col md='5' className='m-4' key={campsite.id}>
//                         <CampsiteCard campsite={campsite} />
//                     </Col>
//                 );
//             })}
//         </Row>
//     );
// };

// export default CampsitesList;

import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { CAMPSITES } from '../../app/shared/CAMPSITES'; // Adjust the path as necessary

const CampsitesList = (props) => {
    return (
        <div>
            {CAMPSITES.map((campsite) => (
                <Card key={campsite.id}>
                    <CardImg 
                        width='100%' 
                        src={campsite.image} 
                        alt={campsite.name} 
                    />
                    <CardBody>
                        <CardTitle tag='h5'>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default CampsitesList;
