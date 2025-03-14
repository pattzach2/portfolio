function About() {
    return (
        <div className="my-5">
            <div className="text-center mb-4">
                <h1 className="display-3">About Me</h1>
            </div>

            <div className="mb-5">
            <h2 className="mb-3">Education</h2>
            <p>
                I am pursuing my Bachelor's of Computer Science at Dalhousie Universty. During my studies, I have developed a strong foundation in a variety software engineering and website development.
            </p>
            </div>

            <div className="mb-5">
            <h2 className="mb-3">Experience</h2>
            <p>
                Currently, I work as a DevOps Engineer at Thomson Reuters.
            </p>
            </div>

            <div className="mb-5">
            <h2 className="mb-3">Skills</h2>
            <ul className="list-group">
                <li className="list-group-item"><strong>Programming Languages:</strong> Python, Java, JavaScript, C++, C#</li>
                <li className="list-group-item"><strong>DevOps Tools:</strong> Docker, Kubernetes, CloudFormation</li>
                <li className="list-group-item"><strong>Cloud Platforms:</strong> AWS, Azure, GCP</li>
                <li className="list-group-item"><strong>Version Control:</strong> Git, GitHub, GitLab</li>
            </ul>
            </div>
        </div>
    );
}

export default About;