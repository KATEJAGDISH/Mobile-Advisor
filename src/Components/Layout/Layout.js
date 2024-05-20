import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../../Footer'

function Layout({ children }) {
    return (
        <div>
            <NavBar />
            <div className='content'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
