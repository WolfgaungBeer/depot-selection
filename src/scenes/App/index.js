import React from 'react';
import SideBar from './components/SideBar';
import Main from './components/Main';

const App = () => (
    <div>
        <SideBar />
        <Main />
        <style jsx>{`
            div {
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
            }
        `}</style>
    </div>
);

export default App;
