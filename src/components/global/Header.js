import React from 'react'

const Header = () => {
    return (
        <div className="header_body" >
            <div className="header_top-links">
                <div className="link-container">
                    <div className="header_links">my account</div>
                    <div className="header_links">my wishlist</div>
                    <div className="header_links">log in</div>
                </div>
            </div>
            <div className="header_main">
                <div className="header_main-middle">
                    <div className="header_main-middle-left">
                        <div>logo</div>
                        <div>search bar</div>
                    </div>
                    <div className="header_main-middle-right">
                        <div>number</div>
                        <div>contact us</div>
                        <div>cart</div>
                    </div>
                </div>
                <div className="header_main-bottom"></div>
            </div>
            <div className="header_mobile">
                <div className="header_mobile-left"></div>
                <div className="header_mobile-right"></div>
            </div>
        </div>
    )
}

export default Header