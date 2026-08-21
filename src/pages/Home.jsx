import Navbar from '../components/Navbar'
import Mainlanding from '../components/Mainlanding'
import TaskList from '../components/TaskList'
import Footer from '../components/Footer'
const Home = (HomeObj) => {
    return (
        <>
        <Navbar/>
        <Mainlanding/>
        <TaskList TaskObj={HomeObj}/>
        <Footer/>

        </>

    )
}

export default Home;