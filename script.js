document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        searchJobs(searchTerm);
    }
});

function searchJobs(searchTerm) {
    // Fetch job listings from a backend server or use hardcoded data
    const jobListings = [
        { title: 'Software Engineer', location: 'New York', type: 'full-time' },
        { title: 'Product Designer', location: 'San Francisco', type: 'part-time' },
    ];

    // Filter job listings based on search term, location, and job type
    const filteredJobListings = jobListings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (document.getElementById('location').value === '' || job.location === document.getElementById('location').value) &&
        (document.getElementById('job-type').value === '' || job.type === document.getElementById('job-type').value)
    );
}
const jobListings = [
    { title: 'Software Engineer', location: 'New York', type: 'full-time', description: 'Build and maintain our web applications.' },
    { title: 'Product Designer', location: 'San Francisco', type: 'part-time', description: 'Design and implement user interfaces for our products.' },
    { title: 'Data Analyst', location: 'New York', type: 'full-time', description: 'Analyze and interpret data for our business decisions.' },
    { title: 'Marketing Coordinator', location: 'San Francisco', type: 'full-time', description: 'Coordinate and execute marketing campaigns for our products.' }
];

function searchJobs(searchTerm) {
    // Filter job listings based on search term, location, and job type
    const filteredJobListings = jobListings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (document.getElementById('location').value === '' || job.location === document.getElementById('location').value) &&
        (document.getElementById('job-type').value === '' || job.type === document.getElementById('job-type').value)
    );

    // Display filtered job listings
    const jobListingsSection = document.getElementById('job-listings');
    jobListingsSection.innerHTML = '';
    for (const job of filteredJobListings) {
        const jobListing = document.createElement('div');
        jobListing.classList.add('job-listing');
        jobListing.innerHTML = `
            <h2>${job.title}</h2>
            <p>${job.location}</p>
            <p>${job.type}</p>
            <p>${job.description}</p>
        `;
        jobListingsSection.appendChild(jobListing);
    }
}

    
    
       