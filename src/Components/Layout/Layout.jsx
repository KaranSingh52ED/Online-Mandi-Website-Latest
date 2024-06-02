import React from 'react'
import Navbar from '../Navigation/Navbar'
import Footer from '../Footer/Footer'



function Layout({ children }) {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout