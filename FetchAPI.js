// API URL
const api_url = 'https://jsonplaceholder.typicode.com/posts';
const posts_per_page = 10; // Number of posts to display per page
let currentPage = 1; // Current page number
let currentData = []; // Array to store current data
let currentSortOrder = 'asc'; // Current sort order

// Function to get data from API
async function getData() {
    // Fetch data from API
    const response = await fetch(api_url);
    // Convert response to JSON
    currentData = await response.json();
    // Display data for current page
    displayData(currentData.slice((currentPage - 1) * posts_per_page, currentPage * posts_per_page));

    // Calculate total pages
    const totalPages = Math.ceil(currentData.length / posts_per_page);
    // Display pagination
    displayPagination(totalPages);
}

// Function to display data
function displayData(data) {
    const root = document.getElementById('root'); // Get root element
    root.innerHTML = ""; // We clear the root div

    // Loop through data
    data.forEach(post => {
        const div = document.createElement('div'); // Create div for each post

        // Event listener for click on post
        div.addEventListener('click', function() {
            displayPostDetails(post); // Display post details when clicked
        });

        const h2 = document.createElement('h2'); // Create h2 element for title
        h2.textContent = post.title; // Set title
        div.appendChild(h2); // Add title to div

        const p = document.createElement('p'); // Create p element for body
        p.textContent = post.body; // Set body
        div.appendChild(p); // Add body to div

        root.appendChild(div); // Add post div to root
    });
}

// Function to display pagination
function displayPagination(totalPages) {
    const pagination = document.getElementById('pagination'); // Get pagination element
    pagination.innerHTML = ""; // We clear the pagination div

    // Loop through total pages
    for(let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button'); // Create button for each page
        button.textContent = i; // Set button text to page number

        // Event listener for click on page button
        button.addEventListener('click', function() {
            currentPage = i; // Set current page to clicked page number
            getData(); // Fetch and display data for current page
        });

        pagination.appendChild(button); // Add page button to pagination
    }
}

// Function to display post details
function displayPostDetails(post) {
    const details = document.getElementById('details'); // Get details element
    details.innerHTML = ""; // We clear the details div

    const h2 = document.createElement('h2'); // Create h2 element for title
    h2.textContent = post.title; // Set title
    details.appendChild(h2); // Add title to details

    const p = document.createElement('p'); // Create p element for body
    p.textContent = post.body; // Set body
    details.appendChild(p); // Add body to details
}

// Function to search posts
function searchPosts(searchTerm) {
    // Filter current data based on search term
    const filteredData = currentData.filter(post => post.title.includes(searchTerm));
    // Display filtered data for current page
    displayData(filteredData.slice((currentPage - 1) * posts_per_page, currentPage * posts_per_page));
}

// Function to sort posts
function sortPosts(by, order) {
    // Toggle sort order
    currentSortOrder = (currentSortOrder === 'asc') ? 'desc' : 'asc';
    // Sort current data based on 'by' and 'order'
    const sortedData = currentData.sort((a, b) => (a[by] > b[by]) ? 1 : -1);
    if (order === 'desc') sortedData.reverse(); // Reverse sorted data if order is 'desc'
    // Display sorted data for current page
    displayData(sortedData.slice((currentPage - 1) * posts_per_page, currentPage * posts_per_page));
}

// Get search input element
const searchInput = document.getElementById('search');
// Event listener for keyup on search input
searchInput.addEventListener('keyup', function() {
    searchPosts(this.value); // Search posts when typing in search input
});

// Get all sort button elements
const sortButtons = document.querySelectorAll('.sort');
// Loop through sort buttons
sortButtons.forEach(button => {
    // Event listener for click on sort button
    button.addEventListener('click', function() {
        // Sort posts when clicking on sort button
        sortPosts(this.dataset.sortBy, currentSortOrder);
    });
});

// Fetch and display data when page loads
getData();