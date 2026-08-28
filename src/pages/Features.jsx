            import Navbar from '../components/Navbar'
            const Features = () => {
                return (
                    <>
                        <Navbar />
                        <div className="features-container">
                            <div className="feature-header flex items-center justify-center p-3">
                                <h1 className="text-4xl font-extrabold"> Features</h1>

                            </div>
                            <div className="feature-body flex flex-row gap-4 justify-center items-center p-4 w-max h-max">
                                <div className="feature-item1 bg-gray-300 h-100 w-80 m-3 rounded-md"></div>
                                <div className="feature-item1 bg-gray-300 h-100 w-80 m-3 rounded-md">
                                   
                                </div>


                            </div>
                        </div>
                    </>
                )
            }

            export default Features