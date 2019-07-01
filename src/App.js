// import React from 'react';
import React,{Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter ,Switch, Route,  Link} from 'react-router-dom'
import './App.css';

function Home() {
    return <h2> Halaman Home </h2>  
}

function ListView() {
    return <h2> Semua Users </h2>
}

function NoMatch() {
    return <h2> Halama Tidak di Temukan </h2>
}

class App extends Component {
  render(){
    return (
        <BrowserRouter> 
          <div>
            <nav>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </nav>

            <main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/users" exact component={ListView} />
                <Route component={NoMatch} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      )
  }
}
export default App;
