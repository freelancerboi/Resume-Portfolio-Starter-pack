import React from "react";
import im1 from "../wedding/im1.png"

const GalleryWedding = () => {
    return (
        <>
            <div className="mx-auto bg-gray-700">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 mt-0 mx-auto">
                        <div className="w-full flex justify-between">
                            <button className="lg:w-auto text-3xl p-1 hover:bg-gray-700 hover:underline font-sans w-full leading-relaxed text-gray-200">
                                <a href="/" className=" text-3xl p-1 hover:text-blue-300 hover:underline font-sans w-full leading-relaxed text-gray-200" > Home </a>
                            </button>
                            <button className="lg:w-auto text-3xl p-1 hover:bg-gray-700 hover:underline font-sans w-full leading-relaxed text-gray-200">
                                <a href="/#contact" className=" text-3xl p-1 hover:text-blue-300 hover:text-gray-50 hover:underline font-sans w-full leading-relaxed text-gray-200" > Contact Me</a>
                            </button>
                        </div>
                        <div className="flex flex-wrap w-full flex-col mt-6 items-center text-center">
                            <h1 className="sm:text-7xl text-5xl font-medium italic title-font mt-2 mb-2 text-gray-50">Wedding Collections</h1>
                            <h3 className="lg:w-auto text-3xl font-sans w-full leading-relaxed text-gray-200">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</h3><br />
                        </div>
                    </div>
                </section>
                {/* transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg */}
                <div className="grid-cols-3 p-5 space-y-2 bg-gray-700 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src={im1} alt="" />
                    </div>
                    <div className="w-full col-span-2 row-span-2 rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src={im1} alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                </div>

                <div className="grid-cols-3 p-5 -mt-5 space-y-2 bg-gray-700 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                    <div className="w-full col-span-2 row-span-2 rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                    <div className="w-full rounded transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryWedding
