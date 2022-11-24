import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Users from "./components/Users/Users";
import NotFound from "./components/404/NotFound";
import Main from "./components/Main/Main";
import UserId from "./components/UserId/UserId";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {  
    return(   
      <div className="App">

        <Router>
          <Header header={this.props.header} updateData={this.updateData}/>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route exact path='/users' element={<Users users={this.props.users}/>}/>
            <Route path='/users/:userName' element={<UserId users={this.props.users}/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App
