            import Navbar from '../components/Navbar'
            const Features = () => {
                return (
                    <>
                        <Navbar />
                        <div className="features-container">
                            <div className="feature-header flex items-center justify-center p-3">
                                <h1 className="text-4xl font-extrabold"> Features</h1>

                            </div>
                            <div className="feature-body flex flex-row gap-4 justify-center items-center p-4 w-max h-max ml-8">
                                <div className="feature-item1 bg-gray-300 h-130 w-80 m-3 rounded-md flex flex-col items-center">
                                    <div className="feature-innerHeader font-extrabold">Free</div>
                                        <ul className="feature-list text-lg font-semibold pt-30 ">
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                        </ul>

                                </div>
                           
                                
                                <div className="feature-item1 bg-gray-300 h-130 w-80 m-3 rounded-md flex flex-col items-center">
                                    <div className="feature-innerHeader font-extrabold">Pro</div>
                                    <ul className="feature-list text-lg font-semibold pt-30 ">
                                        <li className='pb-7'>Feature 1</li>
                                        <li className='pb-7'>Feature 2</li>
                                        <li className='pb-7'>Feature 3</li>
                                    </ul>
                                </div>
s

                            </div>
                        </div>
                    </>
                )
            }

            export default Features