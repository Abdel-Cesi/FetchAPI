# FetchAPI
fetching from a public API in JavaScript


This JavaScript project is an advanced example of fetching and displaying data from a public API. In this case, the API used is the JSON Placeholder API, which provides a series of placeholder posts for testing and development purposes.

The script begins by defining several variables related to the API URL, the number of posts to display per page, the current page number, the current set of data, and the current sorting order.

The getData() function fetches the data from the API and parses it into JSON format. It then slices the current data set into a subset appropriate for the current page, based on the defined number of posts per page. The data for the current page is then displayed using the displayData() function, and the displayPagination() function is used to create pagination buttons based on the total number of pages.

The displayData() function creates a new div for each post within the current data set, sets the title and body of each post, and appends these divs to the root element. Each post div is also equipped with a click event listener, which displays more detailed information about the post when clicked.

The displayPagination() function creates a new button for each page, which, when clicked, sets the current page to the respective page number and fetches the data for that page.

The displayPostDetails() function is used to display more detailed information about a given post. It creates a new div and populates it with the title and body of the post.

The searchPosts() function allows users to search through the current data set by filtering it based on a provided search term. The filtered data is then displayed using the displayData() function.

The sortPosts() function provides a way to sort the current data set based on a specified attribute and order. It also toggles the sort order between ascending and descending each time it's called.

Finally, event listeners are added to the search input field and the sort buttons to call the searchPosts() and sortPosts() functions, respectively, when the appropriate actions occur.

This script provides a comprehensive example of how to fetch, display, and interact with data from an API in a paginated, searchable, and sortable manner. It utilizes various important JavaScript concepts, such as async/await for asynchronous operations, DOM manipulation to dynamically generate HTML, and event listeners to respond to user actions.
