// import React components
import React, { Routes, Route, Navigate } from 'react-router-dom';

// Import projet components
import Home from '../../pages/Home/index.tsx';
import About from '../../pages/About/index.tsx';
import Overview from '../../pages/Overview/index.tsx';
import Error404 from '../../pages/404/index.tsx';

// define projet React routes
function KasaRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location/:idLocation" element={<Overview />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}

export default KasaRouter;