import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We Are Sorry, Page Not Found</h2>
                    <p>The page that you are looking for is either removed or does not exist</p>
                    <NavLink to="/">Back to home page</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error
