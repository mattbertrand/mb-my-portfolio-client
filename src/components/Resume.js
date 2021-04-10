import resume2021 from './pdf/resume2021.pdf'

const Resume = () => {
        return (
            <div className="resume">
                <h1>My Resume</h1>
                <em>Click on the resume to download...</em>
                <a href={resume2021} download>
                    <img alt="My Resume" src="https://i.ibb.co/swwzSgT/resume2021.jpg"/>
                </a>
            </div>
        )
    }

export default Resume
