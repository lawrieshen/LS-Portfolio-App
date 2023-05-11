import React, { Component } from 'react'

function Timeline() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Junior Portfolio Project Analyst at Hummingbird Solutions <span>2023/01-present</span></h2>
                        <img src="images/hummingbird.jpg" style={{width: "90%", height: "auto", paddingBottom: "22.5px", margin: "auto", display: "block"}}/>
                        <p>Hummingbird Solutions is a pioneer startup combining IT services and project management consultancy. As a part of the managed service team, my role is responsible for facilitating clients onboarding project management software and providing high-level PMO insights.</p>
                        <ul>
                         <li>Providing high-level administrative support by coordinating correspondence, preparing statistical reports, handling information requests, and performing PMO work.</li> 
                         <li>Monitoring project costs, and progress against schedule from the Project Management System.</li>
                         <li>Developing system training materials and supporting the training of Hummingbird clients.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Finalist at PwC Inter-Uni Case Competition 2022<span>2022/09-2022/10</span></h2>
                        <a href="https://www.canva.com/design/DAFMGMXkrU4/QDtIONvFEBjbnsLh_oheFA/view?utm_content=DAFMGMXkrU4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="blog-img" target="_blank">
                          <img src="images/pwccasecomp.jpg" className="img-rounded" />
                        </a>
                        <p>PwC aims to create sustainable infrastructure for Smart Cities through technology solutions like a smart payment system. Our team proposed JigglePay, a digital wallet with integrated government payment gateway, asset info, and carbon footprint calculator. We also suggested a BI solution for zero-carbon cities using SAP HANA Cloud, hybrid physical-cloud server architecture, and AccessibleJiggle for seniors and disabilities. We plan to partner with Australia's Be Connected Program and use Low-Earth-Orbit Satellite Network for better accessibility. Our solution was presented to PwC’s professional consultants and awarded the finalist.</p>
                        <ul>
                         <li>Proposed a Smart City Payment System solution to support the zero-carbon mission and sustainable transportation.</li> 
                         <li>Designed User Experience and User Interface with Figma</li>
                         <li>Designed a server architecture for the proposed solution.</li>
                        </ul>
                        <p style={{margin: "0px"}}><a className="btn btn-primary btn-learn" href="https://www.canva.com/design/DAFMGMXkrU4/QDtIONvFEBjbnsLh_oheFA/view?utm_content=DAFMGMXkrU4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer" >View Presentation</a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>US Market E-Commerce Intern at BenQ Corporation <span>2020/11-2021/09</span></h2>
                        <p>BenQ Corporation is a prestigious, multinational consumer electronics company. They have been striving to transform their existing brick-and-mortar business model into an E-commerce business model since 2019. My role in the team is to increase their loyal customers’ adoption to the new E-Commerce website.</p>
                        <ul>
                         <li>Performed inbound marketing with Hubspot, contacting over 50 customers per day with 95% of customer satisfaction rate.</li> 
                         <li>Maintained over 1000+ marketing data entries per day in Excel.</li>
                         <li>Generated executive summary wit customer behavioral insights with Salesforce Service Cloud.</li>
                         <li>Operated BenQ E-Commerce Website with Magento</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}
export default Timeline;
