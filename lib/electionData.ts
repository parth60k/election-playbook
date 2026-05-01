export const electionPhases = [
    {
        id: 1,
        title: "Voter Registration",
        description: "Citizens register to vote or update their details. Ongoing process that pauses right before elections.",
        actors: "Citizens, Election Commission",
        timeline: "Ongoing (Ends before polls)"
    },
    {
        id: 2,
        title: "Election Notification",
        description: "Official announcement of the election schedule and enforcement of the Model Code of Conduct.",
        actors: "Election Commission",
        timeline: "1 Day"
    },
    {
        id: 3,
        title: "Nominations",
        description: "Candidates file nomination papers, followed by scrutiny and a brief withdrawal period.",
        actors: "Candidates, Returning Officers",
        timeline: "1-2 Weeks"
    },
    {
        id: 4,
        title: "Campaigning",
        description: "Parties hold rallies, distribute manifestos, and debate. Ends strictly 48 hours before polling begins.",
        actors: "Political Parties, Public, Media",
        timeline: "2-4 Weeks"
    },
    {
        id: 5,
        title: "Polling Day",
        description: "Registered voters cast their ballots securely at designated booths.",
        actors: "Voters, Polling Officers",
        timeline: "1 Day per phase"
    },
    {
        id: 6,
        title: "Counting & Results",
        description: "EVMs are opened, votes are tallied under strict supervision, and winners are declared.",
        actors: "Counting Staff, Candidates",
        timeline: "1 Day"
    }
];