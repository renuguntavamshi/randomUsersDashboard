>The very first thing when the application is loaded we will see a list of dynamic users which come from api "https://dummyjson.com/user"
>Then when we click on a refresh button ,a list of random users list is going to be displayed
>Then If a user wants to read all the details about a particular user,then he click click on username and then navigate to dynamic route and read all the details 
>Now when the project starts ,the entire control is on app.js which consists of all the routes
>Here I have used NewDashboard.js for Nested route, so that dashboard is common for all routes, and inside here all the routes get displayed here actually
>Then App.js fetches and sends the data to UserTable.js
>When Refreshbutton is clicked from NewDashboard, it is then directly passed to app.js,becuase Refresh button function is present over in App.js
>It updates displayed Users and sends to UsersTable,i.e is how on every click we get a list of Random Users#   M y   P r o j e c t  
 