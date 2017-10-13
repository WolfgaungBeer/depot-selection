import React from 'react';
import SideBar from './components/SideBar';
import Main from './components/Main';
import SideBarHeader from './components/SideBarHeader';

const App = () => (
    <div>
        <SideBar>
            <SideBarHeader title="Depot Selection" />
        </SideBar>
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
