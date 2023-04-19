import React from 'react';
import {Navbar} from "./components/navbar/Navbar";
import {PropertyList} from "./components/main-page/PropertyList";
import {Footer} from "./components/footer/Footer";
function App() {
    return (
        <>
            <Navbar/>
            <PropertyList/>
            <Footer/>
        </>
    )
}

export default App;
