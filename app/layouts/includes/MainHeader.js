"use client"

import Link from "next/link"
import { AiOutlineSearch } from 'react-icons/ai'
import { BiLoaderCircle } from 'react-icons/bi'


export default function MainHeader() {
    return (
        <>
            <div id="MainHeader" className="border-b">
                <div className="flex items-center justify-between h-full w-full mx-auto max-w-[1200px]">
                    <div className="flex items-center w-full bg-white">
                        <div className="flex lg:justify-start justify-between gap-10 h-full w-full px-3 py-4 mx-auto ">
                            <Link href="/">
                                <img width={130} className="min-h-12 min-w-28" src="/images/logo.svg"/>
                            </Link>

                            <div className="w-full">
                                <div className="relative">
                                    <div className="flex items-center">
                                        <div className="relative flex items-center border-2 border-gray-900 w-full p-2 rounded-3xl">
                                            <button className="flex items-center">
                                                <AiOutlineSearch size={22}/>
                                            </button>
                                            <input
                                                className="
                                                    w-full
                                                    placeholder-gray-400
                                                    text-sm
                                                    pl-3
                                                    focus:outline-none
                                                    "
                                                    placeholder="Search for anything"
                                                    type="text"
                                            />
                                        </div>
                                        <button className="flex items-center bg-blue-600 hover:bg-blue-800 duration-200 ease-in-out text-sm font-semibold text-white p-[11px] ml-2 px-14 rounded-3xl">
                                            Search
                                        </button>
                                        <div className="text-[#555] text-xs px-2 hover:text-blue-700 cursor-pointer hidden lg:block">Advanced</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}