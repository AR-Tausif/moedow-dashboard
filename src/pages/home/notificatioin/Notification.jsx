import React from 'react';
import { FaRegBell, FaUser, FaUserCircle } from 'react-icons/fa';

const Notification = () => {
    return (
        <div className='h-auto overflow-y-auto'>
            <div className="flex justify-between items-center mt-4 bg-slate-200 rounded-lg p-4">
                <div className="flex gap-5">
                    <FaUserCircle className='text-5xl' />
                    <div className="">
                        <h3 className="font-bold">Ebad Shafiq</h3>
                        <p className=" font-medium">UI/UX Designer</p>
                    </div>
                </div>
                <FaRegBell className='text-4xl' />
            </div>

            <div className="shadow-sm bg-white p-5 mt-10 rounded-lg">
                <div className="flex justify-between items-centers">
                    <div className="">
                        <h3 className='text-3xl font-semibold mb-1'>Stocks</h3>
                        <p>Recent expensive</p>
                    </div>
                    <div className="w-10">
                        <img
                            className='rounded-full'
                            src="https://user-images.githubusercontent.com/120933222/236634219-05bcd29c-20a3-42cb-9b02-53abe537400b.png" alt="" />
                    </div>
                </div>
                <ul className='mt-5'>
                    <li className='flex justify-between  border-b-4 mt-4'>
                        <h3 className='font-medium text-lg'>Car Expense</h3>
                        <h3 className='font-medium text-red-500'>-366.00 $</h3>
                        <h3 className='text-2xl font-extrabold'>...</h3>
                    </li>
                    <li className='flex justify-between  border-b-4 mt-4'>
                        <h3 className='font-medium text-lg'>Car Expense</h3>
                        <h3 className='font-medium text-red-500'>-366.00 $</h3>
                        <h3 className='text-2xl font-extrabold'>...</h3>
                    </li>
                    <li className='flex justify-between  border-b-4 mt-4'>
                        <h3 className='font-medium text-lg'>Car Expense</h3>
                        <h3 className='font-medium text-red-500'>-366.00 $</h3>
                        <h3 className='text-2xl font-extrabold'>...</h3>
                    </li>
                    <li className='flex justify-between  border-b-4 mt-4'>
                        <h3 className='font-medium text-lg'>Car Expense</h3>
                        <h3 className='font-medium text-red-500'>-366.00 $</h3>
                        <h3 className='text-2xl font-extrabold'>...</h3>
                    </li>
                </ul>
            </div>
            <div className="shadow-sm bg-white p-5 mt-10 rounded-lg">
                <div className="flex justify-between items-centers">
                    <div className="">
                        <h3 className='text-3xl font-semibold mb-1'>Stocks</h3>
                        <p>Recent expensive</p>
                    </div>
                    <div className="w-10">
                        <img
                            className='rounded-full'
                            src="https://user-images.githubusercontent.com/120933222/236634219-05bcd29c-20a3-42cb-9b02-53abe537400b.png" alt="" />
                    </div>
                </div>
                <ul className='mt-5'>
                    <li className='flex justify-between  border-b-4 mt-4'>
                        <h3 className='font-medium text-lg'>Car Expense</h3>
                        <h3 className='font-medium text-red-500'>-366.00 $</h3>
                        <h3 className='text-2xl font-extrabold'>...</h3>
                    </li>
                    <li className='flex justify-between  border-b-4 mt-4'>
                        <h3 className='font-medium text-lg'>Car Expense</h3>
                        <h3 className='font-medium text-red-500'>-366.00 $</h3>
                        <h3 className='text-2xl font-extrabold'>...</h3>
                    </li>
                    <li className='flex justify-between  border-b-4 mt-4'>
                        <h3 className='font-medium text-lg'>Car Expense</h3>
                        <h3 className='font-medium text-red-500'>-366.00 $</h3>
                        <h3 className='text-2xl font-extrabold'>...</h3>
                    </li>
                    <li className='flex justify-between  border-b-4 mt-4'>
                        <h3 className='font-medium text-lg'>Car Expense</h3>
                        <h3 className='font-medium text-red-500'>-366.00 $</h3>
                        <h3 className='text-2xl font-extrabold'>...</h3>
                    </li>
                </ul>
            </div>

            <div className="shadow-sm bg-white p-5 mt-10 rounded-lg">
                <h3 className='text-3xl font-semibold mb-1'>Clearance</h3>
                <ul className='mt-8'>
                    <li className='flex justify-between pb-3 border-b-4'>
                        <div className="flex items-center gap-8">
                            <div className="bg-gray-200 p-4"><FaUser className='text-2xl' /></div>
                            <div className="">
                                <h3 className='font-medium'>Car Expense</h3>
                                <p>Cycle 3 Wheeler</p>
                            </div>
                        </div>
                        <div className="">
                            <h3 className='font-medium text-red-500'>-366.00 $</h3>
                            <p>12 Mar 2023</p>
                        </div>
                    </li>
                    <li className='flex justify-between pb-3 border-b-4 pt-6'>
                        <div className="flex items-center gap-8">
                            <div className="bg-gray-200 p-4"><FaUser className='text-2xl' /></div>
                            <div className="">
                                <h3 className='font-medium'>Car Expense</h3>
                                <p>Cycle 3 Wheeler</p>
                            </div>
                        </div>
                        <div className="">
                            <h3 className='font-medium text-red-500'>-366.00 $</h3>
                            <p>12 Mar 2023</p>
                        </div>
                    </li>
                    <li className='flex justify-between pb-3 border-b-4 pt-6'>
                        <div className="flex items-center gap-8">
                            <div className="bg-gray-200 p-4"><FaUser className='text-2xl' /></div>
                            <div className="">
                                <h3 className='font-medium'>Car Expense</h3>
                                <p>Cycle 3 Wheeler</p>
                            </div>
                        </div>
                        <div className="">
                            <h3 className='font-medium text-red-500'>-366.00 $</h3>
                            <p>12 Mar 2023</p>
                        </div>
                    </li>
                    <li className='flex justify-between pb-3 border-b-4 pt-6'>
                        <div className="flex items-center gap-8">
                            <div className="bg-gray-200 p-4"><FaUser className='text-2xl' /></div>
                            <div className="">
                                <h3 className='font-medium'>Car Expense</h3>
                                <p>Cycle 3 Wheeler</p>
                            </div>
                        </div>
                        <div className="">
                            <h3 className='font-medium text-red-500'>-366.00 $</h3>
                            <p>12 Mar 2023</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Notification;