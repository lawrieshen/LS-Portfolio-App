// App.js
import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Timeline from './components/timeline';
import Blog from './components/blog';

class App extends Component {
    state = {
        sidebarWidth: 200, // Initial width of the sidebar
    };

    handleSidebarResize = (width) => {
        this.setState({ sidebarWidth: width });
    };

    render() {
        const { sidebarWidth } = this.state;

        return (
            <div id="colorlib-page">
                <div id="container-wrap js-fullheight">
                    <Sidebar onSidebarResize={this.handleSidebarResize} />
                    <div id="colorlib-main" style={{ marginLeft: `${sidebarWidth}px` }}>
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
