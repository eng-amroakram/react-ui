import React from "react";

class Header extends React.Component {

    render() {
        return (
            <header className="main-header">
                <div className="overlay">
                    <div className="Navbar">
                        <nav className="">
                            <div className="nav-header">
                                <div className="logo">
                                    <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" title="logo" />
                                </div>
                                <div className="navbar-toggle">
                                    <button>
                                        <svg viewBox="-2.24 -2.24 20.48 20.48" xmlns="http://www.w3.org/2000/svg" fill="#A08040" stroke="#A08040" stroke-width="0.00016" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.544"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"></path></g></svg>
                                    </button>
                                </div>

                            </div>
                            <div className="collapse false">
                                <ul>
                                    <li>
                                        <a href="/" target="_self">Home</a>
                                    </li>

                                    <li>
                                        <a href="#AboutUs" target="_self">About Us</a>
                                    </li>

                                    <li>
                                        <a href="#Special" target="_self">Special</a>
                                    </li>

                                    <li>
                                        <a href="#Menu" target="_self">Menu</a>
                                    </li>

                                    <li>
                                        <a href="#Blogs" target="_self">Blogs</a>
                                    </li>

                                    <li>
                                        <button>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="#A08040" stroke-width="2" stroke-linecap="round"></path></svg>
                                        </button>
                                    </li>
                                </ul>

                            </div>

                            <div className="book-btn false">
                                <a href="/reserve">Book Now</a>
                            </div>
                        </nav>
                    </div>

                    <div className="header-content">
                        <div className="headerhe">
                            <h1>Welcome To Golden View Dine</h1>
                        </div>
                        <p>Explore the authentic vegan dishes with your friends and family</p>
                        <div className="sec-btn">
                            <a href="/">Read more</a>
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header;
