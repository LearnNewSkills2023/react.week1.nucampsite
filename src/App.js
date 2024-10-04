// App.js
import React from 'react';
import CampsiteCard from './features/campsites/CampsiteCard.js';
import { CAMPSITES } from './app/shared/CAMPSITES';
// import CAMPSITES from './app/shared/CAMPSITES.js';
import Header from './components/Header';
import CampsitesList from './features/campsites/CampsitesList';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            {/* Replace this line */}
            <CampsiteCard campsite={CAMPSITES[0]} />
            <CampsitesList />
            <Footer />
        </div>
    );
}

export default App;
