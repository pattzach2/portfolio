function Projects() {
    return (
        <div className="my-5">
            <div className="text-center mb-4">
                <h1 className="display-3">Projects</h1>
            </div>

            <div className="mb-5">
                <h2>Library Management System</h2>
                <p><strong>Technologies:</strong> Java, MySQL, JDBC</p>
                <p>
                <strong>Problem Solved:</strong> A system to manage books in a library, keeping track of available books, issued books, and overdue items. 
                    The system allows librarians to add, remove, and search for books efficiently.
                </p>
                <p>
                <strong>My Role:</strong> I developed the backend system using Java and MySQL for database management. I used JDBC (Java Database Connectivity) to interact with the MySQL database. 
                    I implemented features like adding books, searching by title/author, and managing users (librarians and borrowers). 
                    I also worked on the system’s user interface to provide a simple, intuitive experience for library staff.
                </p>
            </div>

            <div className="mb-5">
                <h2>Python Trading Bot</h2>
                <p><strong>Technologies:</strong> Python, Alpaca Framework</p>
                <p>
                <strong>Problem Solved:</strong> A fully automated trading bot that interacts with financial markets, performs technical analysis, and executes trades based on predefined strategies.
                </p>
                <p>
                    <strong>My Role:</strong> I developed the bot using Python and the Alpaca API, which provides commission-free trading. I wrote algorithms to analyze market trends, implement technical indicators, and make real-time buy/sell decisions. 
                    I also built an automated system to send notifications and reports regarding trades made by the bot. 
                </p>
            </div>

            <div className="mb-5">
                <h2>AMI Cleaner</h2>
                <p><strong>Technologies:</strong> Python, AWS Lambda</p>
                <p>
                    <strong>Problem Solved:</strong> A tool to automatically clean up unused Amazon Machine Images (AMIs) and snapshots within AWS. This helps prevent unnecessary costs from unused resources.
                </p>
                <p>
                    <strong>My Role:</strong> I developed this tool using AWS Lambda and Python to scan and identify unused AMIs and snapshots. 
                    I set this up on a CRON schedule to run the Lambda function at specific intervals. 
                    When unused resources were identified, the Lambda function would safely delete them to reduce costs, ensuring no critical AMIs were accidentally removed.
                </p>
            </div>
        </div>
    );
}

export default Projects;
