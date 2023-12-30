// App.js
import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Timeline from './components/timeline';
import Blog from './components/blog';
import Cursor from './components/cursor';

class App extends Component {

    render() {
        return (
            <div id="colorlib-page">
                <Cursor/>   
                <div id="container-wrap js-fullheight">
                    <Sidebar />
                    <div id="colorlib-main">
                        <Introduction />
                        <About />
                        <Timeline />
                        <Blog />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
