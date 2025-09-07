import React from 'react';
import slider1 from '../../../assets/slide1.png'
import slider2 from '../../../assets/slider2.png'
import slider3 from '../../../assets/slider3.png'
import slider4 from '../../../assets/slider4.png'

const Slider = () => {
    return (
        <div className='bg-[#3f3434] p-12'>
            <div className='w-fit md:w-fit lg:w-7xl mx-auto'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={slider4} className='w-full' />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="text-center text-white px-4 max-w-2xl">
                                <h1 className="text-2xl md:text-5xl font-bold">
                                    We plan. You party
                                </h1>
                                <p className="mt-3 text-sm md:text-lg leading-relaxed">
                                    We do the work. You have the fun. <br />
                                    We do events. You do you. Dream fulfillment.
                                </p>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={slider2} />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="text-center text-white px-4 max-w-2xl">
                                <h1 className="text-2xl md:text-5xl font-bold">
                                    We plan. You party
                                </h1>
                                <p className="mt-3 text-sm md:text-lg leading-relaxed">
                                    We do the work. You have the fun. <br />
                                    We do events. You do you. Dream fulfillment.
                                </p>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={slider3} />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="text-center text-white px-4 max-w-2xl">
                                <h1 className="text-2xl md:text-5xl font-bold">
                                    We plan. You party
                                </h1>
                                <p className="mt-3 text-sm md:text-lg leading-relaxed">
                                    We do the work. You have the fun. <br />
                                    We do events. You do you. Dream fulfillment.
                                </p>
                            </div>
                        </div>


                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={slider1} />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="text-center text-white px-4 max-w-2xl">
                                <h1 className="text-2xl md:text-5xl font-bold">
                                    We plan. You party
                                </h1>
                                <p className="mt-3 text-sm md:text-lg leading-relaxed">
                                    We do the work. You have the fun. <br />
                                    We do events. You do you. Dream fulfillment.
                                </p>
                            </div>
                        </div>


                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;