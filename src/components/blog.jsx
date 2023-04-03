import React, { Component } from 'react'

function Blog() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/@lawrenceshen1213/to-agile-or-not-to-agile-2d955a185d13" className="blog-img" target="_blank"><img src="images/blog-1.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"/></a>
						<div className="desc">
							<span><small>December 19, 2022 </small> | <small> Agile Project Management </small></span>
							<h3><a href="https://medium.com/@lawrenceshen1213/to-agile-or-not-to-agile-2d955a185d13" target="_blank">“To Agile or not to Agile? That’s the question.” How to pick between Agile and Traditional Project Management?</a></h3>
							<p>“To be, or not to be, that is the question.” Same questions might also emerge when a new project just got initiated.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://medium.com/@lawrenceshen1213/being-agile-scrum-master-v-s-project-manager-f90e960f4578" className="blog-img" target="_blank"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>July 10, 2022 </small> | <small> Agile Project Management </small></span>
							<h3><a href="https://medium.com/@lawrenceshen1213/being-agile-scrum-master-v-s-project-manager-f90e960f4578" target="_blank">Being Agile: Scrum Master v.s. Project Manager</a></h3>
							<p>Scrum with its ability to deal with complex adaptive attract project leaders’ eyes.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/@lawrenceshen1213/what-flavor-of-agile-is-the-best-scrum-v-s-extreme-programming-xp-29ee44f1dd99" className="blog-img" target="_blank"><img src="images/blog-3.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>June 27, 2022 </small> | <small> Agile Project Management </small></span>
							<h3><a href="https://medium.com/@lawrenceshen1213/what-flavor-of-agile-is-the-best-scrum-v-s-extreme-programming-xp-29ee44f1dd99" target="_blank">What “flavor” of Agile is the best? Scrum v.s. eXtreme Programming (XP)</a></h3>
							<p>Scrum and Extreme Programming (XP) are the most frequently used Agile methods in the industry and both of them share similar core values. Thus, people sometimes may struggle with the selection between the two methods.</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="https://medium.com/@lawrenceshen1213" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
}
export default Blog;