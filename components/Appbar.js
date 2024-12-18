"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const router = useRouter();
    const session = useSession();
    return (
        <header className="bg-gray-800 text-white shadow-md">
            {JSON.stringify(session)}
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold hover:text-blue-400">
                    Hotel
                </a>

                {/* Nav Links */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#" className="text-lg hover:text-blue-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:text-blue-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:text-blue-400">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:text-blue-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="flex space-x-4">
                    {
                        (!session || session.status === "loading" || session.status === "unauthenticated") ? <>  <button onClick={() => {
                            signIn();
                        }} className="bg-transparent text-white border-2 border-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
                            Login
                        </button></> :
                            <> <button onClick={() => {
                                signOut();
                            }} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 transition duration-300">
                                Sign Out
                            </button> </>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;
