import './App.css'
import Navbar from './components/Navbar'
import './components/Navbar.css'
import Hero from './components/Hero'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact />
                    </Switch>
                    <Hero />
                    <Cards />
                    <Footer />
                </div>
            </Router>
        </>
    )
}

export default App
