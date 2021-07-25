import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { Receipe } from './pages/Receipe';


function App() {
    return (
        <>
            <Router>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/category/:name' component={Category} />
                        <Route path='/receipe/:id' component={Receipe} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
