"use client"

import TopMenu from "./includes/TopMenu"
import MainHeader from "./includes/MainHeader"
import SubMenu from "./includes/SubMenu"
import Footer from "./includes/Footer"

export default function MainLayout({ children }) {
    return (
        <>
            <div id="Mainlayout" className="min-w-[320px] mx-auto">
                <div>
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />

                    {children}

                    <Footer />
                </div>
            </div>
        </>
    )
}