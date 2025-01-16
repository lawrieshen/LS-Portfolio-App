import React, { Component } from 'react'

function About() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>While technology holds immense potential to enhance organizational effectiveness and efficiency, 
                        many organizations struggle to fully unlock its benefits. Often, these challenges arise from poor 
                        change management or ineffective technology integration, limiting the 
                        transformative power technology can offer.</p>
                    <p>As a dedicated penultimate Software Engineering and Project Management student at 
                        the University of Sydney, I am driven by a strong desire to make a meaningful difference in the
                         world through technology. My passion lies in applying innovative solutions to the health tech 
                         sector, where I believe technology can have the greatest positive impact. I aim to help 
                         organizations adopt sustainable, ethical technologies that not only optimize efficiency but 
                         also improve the well-being of individuals and communities. By facilitating intelligent process 
                         automation and exploring emerging technologies, I hope to contribute to creating a healthier, 
                         more equitable world.
                         </p>
                    <p>
                        With a unique blend of versatile technical and managerial skillsets, 
                        I am actively seeking opportunities to dedicate myself to the realm of technology.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Project Management Office</h3>
                    <p>I have experience in project management consultancy. I provide Project Management insights to organisation and assist them to implement tailored Project Management Governance Framework. I also project manage small IT projects at times.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Software Development</h3>
                    <p>Coming from a Software Engineering background, I am proficient in Full-tack Software Development. I have particpated in website development projects using React and iOS development projects using Swift.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-cloud3" />
                </span>
                <div className="desc">
                    <h3>Digital Transofrmation</h3>
                    <p>Equiping with Analytical and Complex Problem Solving Skills, I am passionate with Digital Transformation. I analyze business models, elicit requiements, and onboarding organizations with emerging technologies.</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
}

export default About;
