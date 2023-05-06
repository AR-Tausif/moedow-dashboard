import React from 'react';
import Navbar from '../navbar/Navbar'
import Profile from './profile/Profile';
import Notification from '../../pages/home/notificatioin/Notification';

const Dashboard = () => {
    return (
        <div className='col-span-7 bg-gray-100 h-screen overflow-y-auto'>
            <div className="grid grid-cols-8">
                <div className="col-span-6 overflow-y-auto">
                    <Navbar />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
                <div className="col-span-2">
                    <Notification />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;