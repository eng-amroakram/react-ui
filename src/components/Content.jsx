import React from "react";
import Button from "./buttons/one";
import Box from "./box";
import Food from "./food";


class Content extends React.Component {

    render() {
        return (
            <div className="animatedGif">
                <section className="about-section" id="AboutUs">

                    <div className="container md">
                        <div className="left">
                            <header className="sec-header left">
                                <h1 className="sec-title __className_eda02b ">About Us</h1>
                                <h2 className="sec-desc">Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</h2>
                            </header>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>

                            <Button />
                        </div>

                        <div className="right">
                            <img alt="" loading="lazy" width="378" height="407" src={process.env.PUBLIC_URL + '/images/about.svg'} />
                        </div>

                    </div>
                </section>

                <section className="special-section" id="Special">

                    <header className="sec-header center">
                        <h1 className="sec-title __className_eda02b ">Special</h1>
                        <h2 className="sec-desc">What makes us special</h2>
                    </header>

                    <div className="privilges-boxes">
                        <div className="container lg">
                            <div className="boxes-container">
                                <Box title="Fresh food" image={process.env.PUBLIC_URL + '/images/food.svg'} />
                                <Box title="Skilled Chef" image={process.env.PUBLIC_URL + '/images/chef.svg'} />
                                <Box title="Exotic Dishes" image={process.env.PUBLIC_URL + '/images/restaurant.svg'} />

                            </div>
                        </div>
                    </div>
                </section>

                <section className="sfkitchen-section" id="Menu" >
                    <div className="container md">
                        <header className="sec-header center">
                            <h1 className="sec-title __className_eda02b ">Straight From Kitchen</h1>
                            <h2 className="sec-desc">Our Menu</h2>
                        </header>

                        <div className="Foods">
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                        </div>
                    </div>

                </section>

                <section className="dinner-bid-sec">
                    <div className="container md">
                        <div className="content-container">
                            <img alt="" loading="lazy" width="519" height="422" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/tag.svg'} />
                            <div className="content">
                                <p className="__className_eda02b">Come join us for a lunch this weekend and enjoy</p>
                                <h1>FLAT 10% OFF</h1>
                                <div className="sec-btn">
                                    <a href="#e">Book Table</a>
                                </div>
                            </div>
                            <img alt="" loading="lazy" width="519" height="422" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/tag.svg'} />
                        </div>
                    </div>
                </section>

                <section className="cooking-ingredients">
                    <div className="container md">
                        <div className="inner-container">
                            <div className="content">
                                <header className="sec-header undefined">
                                    <h1 className="sec-title __className_eda02b ">Cooking ingredients</h1>
                                    <h2 className="sec-desc">What goes in</h2>
                                </header>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.</p><div className="sec-btn">
                                    <a href="#ee">Read more</a>
                                </div>
                            </div>
                            <div className="img">
                                <img alt="" loading="lazy" width="441" height="390" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/newone.svg'} />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="stats-sec">
                    <div className="container sm">
                        <div className="stats-inner">
                            <div className="stats-element">
                                <div className="img">
                                    <img alt="" loading="lazy" width="85.66" height="79.012" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/dish.svg'} />
                                </div>
                                <div className="stats-info">
                                    <span className="stats-number">250+</span>
                                    <span className="stats-name">Delicacy</span>
                                </div>
                            </div>
                            <div className="stats-element">
                                <div className="img">
                                    <img alt="" loading="lazy" width="85.66" height="79.012" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/dish.svg'} />
                                </div><div className="stats-info">
                                    <span className="stats-number">10+</span>
                                    <span className="stats-name">renowed chefs</span>
                                </div>
                            </div>
                            <div className="stats-element">
                                <div className="img">
                                    <img alt="" loading="lazy" width="85.66" height="79.012" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/dish.svg'} />
                                </div><div className="stats-info"><span className="stats-number">30+</span>
                                    <span className="stats-name">Members</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="reviews-sec">
                    <header className="sec-header center"><h1 className="sec-title __className_eda02b ">Reviews</h1><h2 className="sec-desc">words from our food lovers</h2></header>
                    <div className="reviews-cards">

                        <div className="review-card right">
                            <div className="card-header">
                                <img alt="Alex andrina" loading="lazy" width="104" height="98.327" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/person.svg'} />
                                <div className="right">
                                    <h3>Alex andrina</h3>
                                    <ul className="rank">
                                        <li>
                                            <svg width="12px" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="card-description">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “</p>
                        </div>

                        <div className="review-card active">
                            <div className="card-header">
                                <img alt="Alex andrina" loading="lazy" width="104" height="98.327" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/person.svg'} />
                                <div className="right">
                                    <h3>Alex andrina</h3>
                                    <ul className="rank">
                                        <li>
                                            <svg width="12px" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="card-description">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “</p>
                        </div>

                        <div className="review-card left">
                            <div className="card-header">
                                <img alt="Alex andrina" loading="lazy" width="104" height="98.327" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/person.svg'} />
                                <div className="right">
                                    <h3>Alex andrina</h3>
                                    <ul className="rank">
                                        <li>
                                            <svg width="12px" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z"></path></g>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                        <li>
                                            <svg width="12px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.349 8.515L12.5 5L10.651 8.515C10.5204 8.77186 10.3313 8.99449 10.099 9.165C9.86556 9.33638 9.59543 9.45107 9.31 9.5L5.5 10.247L8.16 13.428C8.52377 13.8267 8.69542 14.3643 8.63 14.9L8.124 19L11.632 17.3C11.9026 17.1689 12.1993 17.1006 12.5 17.1C12.7821 17.1009 13.0599 17.1694 13.31 17.3L16.9 18.895L16.394 14.844C16.33 14.3095 16.502 13.7736 16.865 13.376L19.5 10.247L15.69 9.5C15.4042 9.45122 15.1337 9.33652 14.9 9.165C14.6681 8.99438 14.4793 8.77175 14.349 8.515Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="card-description">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “</p>
                        </div>


                    </div>
                </section>

                <footer className="main-footer">
                    <section className="contact-us">
                        <div className="container md">
                            <div className="contact-inner">

                                <div className="left-item">
                                    <div class="brand">
                                        <img alt="Golden View Dine " loading="lazy" width="79" height="76" decoding="async" data-nimg="1" />
                                        <h1>Golden View Dine </h1>
                                    </div>
                                    <div class="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin</p>
                                        <ul class="social-links"><li>
                                            <a href="https://www.instagram.com/se_bayan_elian/">
                                                <img alt="Instagram" title="Instagram" loading="lazy" width="17" height="17" decoding="async" data-nimg="1" />
                                            </a>
                                        </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/bayan-elian-20b160248">
                                                    <img alt="LinkedIn" title="LinkedIn" loading="lazy" width="17" height="17" decoding="async" data-nimg="1" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://wa.link/e6nwd5">
                                                    <img alt="Whatapp" title="Whatapp" loading="lazy" width="17" height="17" decoding="async" data-nimg="1" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="mid-item"><h1>Other Links</h1><ul class="hyper-links"><li><a href="#!">Privacy Policy</a></li><li><a href="#!">Terms &amp; conditions</a></li><li><a href="#!">Blogs</a></li><li><a href="#!">our team</a></li><li><a href="#!">Our kitchen</a></li></ul></div>
                                <div class="right-item"><h1>Other Links</h1><ul class="hyper-links"><li><a href="#!">Privacy Policy</a></li><li><a href="#!">Terms &amp; conditions</a></li><li><a href="#!">Blogs</a></li><li><a href="#!">our team</a></li><li><a href="#!">Our kitchen</a></li></ul></div>
                            </div>
                        </div>
                    </section>
                </footer>


            </div>
        );
    }
}

export default Content;