import React, { Component } from 'react';
import { Resizable } from 'react-resizable';

export default class Sidebar extends Component {
  state = {
    width: 350, // Initial width of the sidebar
  };

  onResize = (event, { size }) => {
    this.setState({ width: size.width });
    this.props.onSidebarResize(size.width);
  };

  render() {
    const { width } = this.state;

    return (
        <Resizable
            width={width}
            height={Infinity}
            handle={<div style={{ width: '10px', height: '100%', cursor: 'col-resize' }} />}
            onResize={this.onResize}
        >
          <div style={{ width: `${width}px`, overflow: 'auto' }}>
            <div>
              <nav
                  href="#navbar"
                  className="js-colorlib-nav-toggle colorlib-nav-toggle"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
              >
                <i />
              </nav>
              <aside id="colorlib-aside" className="border js-fullheight">
                <div className="text-center">
                  <div
                      className="author-img"
                      style={{ backgroundImage: 'url(images/image-profile.jpg)' }}
                  />
                  <h1 id="colorlib-logo">
                    <a href="index.html">Lawrence Shen</a>
                  </h1>
                  <span className="email">
                  <i className="icon-mail" />
                  lawrenceshen1213@gmail.com
                </span>
                </div>
                <nav
                    id="colorlib-main-menu"
                    role="navigation"
                    className="navbar"
                >
                  <div id="navbar" className="collapse">
                    <ul>
                      <li className="active">
                        <a href="#home" data-nav-section="home">
                          Introduction
                        </a>
                      </li>
                      <li>
                        <a href="#about" data-nav-section="about">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#timeline" data-nav-section="timeline">
                          Experience
                        </a>
                      </li>
                      <li>
                        <a href="#blog" data-nav-section="blog">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <nav id="colorlib-main-menu">
                  <ul>
                    <li>
                      <a
                          href="https://www.linkedin.com/in/lawrence-shen-9b23791a4/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <i className="icon-linkedin2" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="https://github.com/lawrieshen"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <i className="icon-github" />
                      </a>
                    </li>
                    <li>
                      <a
                          href="https://medium.com/@lawrenceshen1213"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <i className="icon-blogger2" />
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="colorlib-footer">
                  <p>
                    <small>
                      Thanks{' '}
                      <a
                          href="https://colorlib.com"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        Colorlib
                      </a>{' '}
                      for inspiration
                    </small>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </Resizable>
    );
  }
}