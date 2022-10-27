import { Router, Switch, Route } from 'wouter';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './App.css';
import Blog from './pages/Blog';
import Edit from './pages/Edit';
import Write from './pages/Write';
import Home from './pages/Home';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route exact path="/blog/:id">
                        {(params) => <Blog id={params.id} />}
                    </Route>
                    <Route exact path="/edit/:id">
                        {(params) => <Edit id={params.id} />}
                    </Route>
                    <Route exact path="/write" component={Write}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
