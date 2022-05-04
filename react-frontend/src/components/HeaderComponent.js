import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Employee Mgt App({process.env.REACT_APP_ENV})</a></div>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;
