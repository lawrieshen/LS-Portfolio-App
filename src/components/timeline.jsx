import React, { Component } from 'react'
import { Unity, useUnityContext } from "react-unity-webgl"

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
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner" style={{width:'100%'}}>
                      <div className="timeline-icon color-7">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <div className='title-box' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h2>Unity Essentials Project</h2> <span>2025/01</span>
                        </div>
                        {/* Embed Unity WebGL */}
                        {/* <img src='images/unity.png' className='image-responsive'/>                
                        <ul>
                         <li>Developed a Unity-based project to demonstrate proficiency in Unity and C# programming</li>
                         <li><a href="https://play.unity.com/en/games/ad48aa21-9ca4-41a3-be53-355d0eb206c5/unity-essentials-demo" target="_blank">Link to Unity Play</a></li>
                        </ul>
                      </div>
                    </div>
                  </article> */}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <div className='title-box' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h2>iOS Software Developer at Mii</h2> <span>2024/06-2024/11</span>
                        </div>
                        <img src='images/mii_app.png' className='image-responsive'/>
                        <p><a href='https://www.miistartup.com/'>Mii</a> is the health passport, allowing doctors to access your past and current patient information in our EHR system. Electronic Health Records systems face two main issues: poor interoperability between healthcare providers and inadequate safety of patient records. Think of Mii as your healthcare passport. Mii allows doctors to access all past and current medical information in our EHR system and offers patients a consolidated view of their medical data.</p>
                        <ul>
                         <li>Developing Mii iOS application using Swift</li>
                         <li>Handled User Authentication and Datamangement with Firebase, allowing users to manage their medical information.</li> 
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <div className='title-box' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h2>Student Software Developer at Jacaranda Flame Consulting (University of Sydney)</h2> <span>2024/06-2024/07</span>
                        </div>
                        <img src="images/jfc.jpeg" className='img-responsive' />
                        <p>During my consultancy with Jacaranda Flame Consulting and Ampol, I helped develop an AI-driven ETL software to automate data processing for Ampol, enhancing operational efficiency. This experience highlighted the transformative potential of AI in enterprise workflows.</p>
                        <ul>
                          <li>Collaborated with a talented team to design and develop an AI-driven Extract, Load, Transform (ETL) software solution for Ampol.</li>
                          <li>Successfully automated data processing pipelines, significantly enhancing operational efficiency.</li>
                          <li>Gained hands-on experience in AI technologies and their impact on enterprise workflows, contributing to effective problem-solving and process optimization.</li>
                          <a href="https://www.linkedin.com/posts/lawrence-shen-9b23791a4_reflecting-on-my-journey-as-a-consulting-activity-7222569085845266433-pVo-?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer"> For more details, visit my LinkedIn post.</a>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <div className='title-box' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h2>Junior Portfolio Project Analyst at Hummingbird Solutions</h2> <span>2023/01-2023/05</span>
                        </div>
                        <img src="images/hummingbird.jpg" className='img-responsive' />
                        <p>Hummingbird Solutions is a pioneer startup combining IT services and project management consultancy. As a part of the managed service team, my role is responsible for facilitating clients onboarding project management software and providing high-level PMO insights.</p>
                        <ul>
                         <li>Providing high-level administrative support by coordinating correspondence, preparing statistical reports, handling information requests, and performing PMO work.</li> 
                         <li>Monitoring project costs, and progress against schedule from the Project Management System.</li>
                         <li>Anayzed requirements for cleint's new Learning Management System.</li>
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
                        <div className='title-box'>
                          <h2>Finalist at PwC Inter-Uni Case Competition 2022</h2><span>2022/09-2022/10</span>
                        </div>
                        
                        <a href="https://www.canva.com/design/DAFMGMXkrU4/QDtIONvFEBjbnsLh_oheFA/view?utm_content=DAFMGMXkrU4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="blog-img" target="_blank" style={{justifyContent: "center"}}>
                          <img src="images/pwccasecomp.jpg" className='img-responsive'/>
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
                        <div className='title-box'>
                          <h2>US Market E-Commerce Intern at BenQ Corporation</h2><span>2020/11-2021/09</span>
                        </div>
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
