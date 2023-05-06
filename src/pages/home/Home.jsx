import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Dashboard from '../../components/dashboard/Dashboard';

const Home = () => {
    return (
        <div className='grid grid-cols-8 gap-2'>
            <Sidebar/>
            <Dashboard/>
        </div>
    );
};

export default Home;