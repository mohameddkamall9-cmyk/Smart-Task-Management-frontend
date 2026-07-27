
import background from '../assets/background.avif'
const  Mainlanding = () => { 
    return (
        <section className="main-landing  ">
            <div className= "tittle-text relative">
            <div className="text-container absolute top-20 z-10 ">
                <h1 className= "text-4xl font-extrabold leading-tight  max-w-2xl pl-4 text-slate-100"> daily tasks</h1>
                <p className="text-lg text-slate-100 mt-4 font-extrabold max-w-xl pl-4 leading-relaxed  top-25% shadow-lg webkit-text-stroke-1 webkit-text-stroke-black-">Manage your daily tasks with ease and efficiency.</p>
            </div>
                <img className="p mask-b-from-50% mask-b-to-90% w-full flow-hidden" src={background} alt="hero" /> 
                
            
            </div>
        
            <div className="action-buttons flex flex-row gap-4 mt-4 justify-center">
                <button className="b1  bg-green-200  rounded-2xl p-4 hover:bg-green-300 cursor-pointer trans font-semibold shadow-md transition-all"> get started for Free</button>
                <button className="b2 bg-green-200  rounded-2xl p-4 hover:bg-green-300 cursor-pointer trans font-semibold shadow-md  transition-all"> our features</button>

            </div>
        </section>


    );
}

export default Mainlanding;