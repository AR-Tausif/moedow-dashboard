
import { FaImage } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className='bg-black h-screen'>
            <div className="h-4/12">
                <img src="https://i.ibb.co/nR93F4t/Group-10021.png" alt="" />
                <span className='text-5xl'>LOGO HERE</span></div>
            <div className="flex flex-col items-center h-full text-white">
                <div className="">
                    <ul>
                        <li className='border-2 border-gray-100 hover:bg-purple-500 w-52 hover:text-white py-3 rounded-lg text-center font-bold mt-3'>
                            <div className="flex justify-center items-center gap-3">
                                <FaImage className='text-2xl text-red-500' />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li className='border-2 border-gray-100 hover:bg-purple-500 w-52 hover:text-white py-3 rounded-lg text-center font-bold mt-3'>
                            <div className="flex justify-center items-center gap-3">
                                <FaImage className='text-2xl text-red-500' />
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li className='border-2 border-gray-100 hover:bg-purple-500 w-52 hover:text-white py-3 rounded-lg text-center font-bold mt-3'>
                            <div className="flex justify-center items-center gap-3">
                                <FaImage className='text-2xl text-red-500' />
                                <h3>Home</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="justify-end bg-red-700">log out</div>
            </div>
        </div>
    );
};

export default Sidebar;