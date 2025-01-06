export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "/blank-document.svg" 
    },
    { 
        id: "software-proposal", 
        label: "Software Development Proposal", 
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <h2>Project Overview</h2>
            <p>Briefly describe the project and the client's needs.</p>

            <h2>Scope of Work</h2>
            <p>Detailed description of the work to be done.</p>

            <h2>Timeline</h2>
            <p>Estimated timeline for the project.</p>

            <h2>Budget</h2>
            <p>Cost breakdown for the project.</p>
        `
    },
    { 
        id: "project-proposal", 
        label: "Project Proposal", 
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <h2>Project Overview</h2>
            <p>Briefly describe the project and the client's needs.</p>

            <h2>Scope of Work</h2>
            <p>Detailed description of the work to be done.</p>

            <h2>Timeline</h2>
            <p>Estimated timeline for the project.</p>

            <h2>Budget</h2>
            <p>Cost breakdown for the project.</p>
        `
    },
    { 
        id: "business-letter", 
        label: "Business Letter", 
        imageUrl: "/business-letter.svg",
        initialContent: `
            <h1>Business Letter</h1>
            <p>Dear [Recipient's Name],</p>

            <p>Body of the letter.</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    { 
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>Resume</h1>
            <h2>Summary</h2>
            <p>Brief summary of your background and experience.</p>

            <h2>Experience</h2>
            <p>Details of your work experience.</p>

            <h2>Education</h2>
            <p>Details of your education and qualifications.</p>

            <h2>Skills</h2>
            <p>List of your skills and abilities.</p>
        `
    },
    { 
        id: "cover-letter", 
        label: "Cover Letter", 
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <h1>Cover Letter</h1>
            <p>Dear Hiring Manager,</p>

            <p>Body of the cover letter.</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
        ` 
    },
    { 
        id: "letter", 
        label: "Letter", 
        imageUrl: "/letter.svg",
        initialContent: `
            <h1>Letter</h1>
            <p>Dear [Recipient's Name],</p>

            <p>Body of the letter.</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
]