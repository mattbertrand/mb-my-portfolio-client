import React, { Component } from 'react'

class AboutMe extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="about-left">
                        <img alt="Matthieu Bertrand Picture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-9/10151929_10152644591337360_4797206138322020122_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=Do0fBFeRArYAX8Fapcj&_nc_ht=scontent-sjc3-1.xx&oh=bcc94f190988caef03dd908a47d8d7dc&oe=609686A4"/> 
                        <div className="social">
                            <h2>Matthieu Bertrand</h2>
                            <p>Novato, CA</p>
                            <h3><a target="_blank" rel="noreferrer" href="https://github.com/mattbertrand">Github</a> | <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthieu-bertrand-226537a3/">Linkedin</a></h3>
                        </div>
                    </div>
                    <div className="about-right ">
                        <h2>Biography</h2>
                        <p>A little bit about myself... I grew up in France and fell in love with the restaurant industry from a young age. I studied management of restaurant in France and decided to travel after I graduated. I worked in France, Australia, Qatar, Florida and I now live in California.
                            I am almost a graduate of Flatiron School's software engineering school. The technologies I use are Ruby on Rails, React/Redux, Html, Css, Javascript.
                        </p>
                        <p>
                            I am excited to start a career in a new industry with all the challenges that it implies. I am taking this as a new trip in my travel log!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe
