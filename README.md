# Taskify


[Visit the website here](https://taskify-app-2023.herokuapp.com/)


![screen views](/src/assets/screenViews.png)


Welcome to Taskify, the ultimate task management app designed to help you stay organized and in control of your professional and personal life. With Taskify, you can create, delete, edit, and view tasks, events, habits and notes effortlessly, ensuring that you never miss out on anything important again.


Our goal is simple: to provide a comprehensive and intuitive platform that streamlines your daily tasks and enhances your productivity. We understand the challenges of modern life, where commitments and responsibilities can easily pile up, leading to stress and missed opportunities. Taskify aims to be your trusted companion, helping you navigate through the chaos and maintain a clear focus on what matters most.


Our vision for Taskify is to empower individuals like you to lead more balanced, fulfilling lives by seamlessly managing tasks, events, habits and notes. By harnessing the power of technology, we aim to simplify your day-to-day routines, freeing up your time and mental energy for the things that truly matter to you.


All the Agile processes, the user stories and the sprints can be found in the project section on GitHub. (It's set to public).


[See user stories](https://github.com/users/claudio-cruz/projects/10/views/1)


[See sprints](https://github.com/claudio-cruz/taskify_app/milestones)




#### This website is made up of the following sections:
1. Home Page: contains the goals of the app and a link to sign in and sign up if the user is logged out, or a link to the task list and note list if the user is logged in.
2. Sign-in page: where users can log in.
3. Sign-up page: where users can create an account.
4. Task list: contains the user's task list.
5. Task create form: where users can create tasks.
6. Task edit form: where users can edit tasks.
7. Note list: contains the user's note list.
8. Note Create Form: where users can create notes.
9. Note edit form: where users can edit notes.
10. Profile page: display the user's information.
11. Profile edit form: where users can edit their profiles.
12. Event list: contains the user's event list.
13. Event create form: where users can create events.
14. Event edit form: where users can edit events.
15. Habit list: contains the user's habit list.
16. Habit create form: where users can create habits.
17. Habit edit form: where users can edit habits.


#### User goals:
1. Task Management:
* Add, edit, and delete tasks with due dates and priorities.
* Organize tasks into categories or projects for better clarity.
* Mark tasks as completed and track progress.
* Filter tasks by categories or search tasks by key words.

2. Event Planning:
* Create, edit, and delete events with date, time, and description.
* Filter events by categories or search events by key words.

3. Habit Tracking:
* Define daily or recurring habits to cultivate positive routines.
* Track the completion of habits and build streaks for motivation.
* Customize habit parameters based on individual preferences.
* Filter habits by categories or search habits by key words.

4. Note Taking:
* Create, edit, delete and organize notes for various purposes, such as ideas, thoughts, or references.
* Add tags or labels to notes for easy searching and filtering.
* Filter notes by categories or search notes by key words.


#### Business goals:
1. Our objective is to develop a top-notch app that effectively attracts a wide range of task app users by providing exceptional service.
2. We aim to generate revenue through various channels such as premium subscriptions, in-app purchases, or targeted advertisements, ensuring the app's sustainability and future growth.


---
## UX


### **Strategy**


With the UX in mind, I started to think about who the target users would be and how this website would help them reach their goals.


DevBooks target users are:
* Aged 12-70
* Professionals such as project managers, freelancers, entrepreneurs, and corporate employees, who need to stay organized and manage their tasks efficiently.
* Students at different education levels can benefit from a task app to keep track of assignments, deadlines, and study schedules.
* Home and Family Managers: Individuals responsible for managing household tasks, family schedules, and personal commitments can use the app to stay organized and ensure nothing falls through the cracks.


What these users would be looking for:
* Track assignments, deadlines, and study schedules. Reminders, note attachments, subject categorization, and calendar integration.
* Efficiently manage workload, prioritize tasks, set reminders, and track progress.
* Collaboration tools and customizable categories are important.
* Handle household chores, family schedules, and personal commitments.


This website is still in development, and it has a lot to improve and grow.


### **Scope**


To achieve the desired user and business goals, the upcoming release will include the following features:
* Responsive Component Navbar: A customized navbar will be implemented to cater to both logged-in and logged-out users. It will provide all the necessary navigation links for a seamless user experience.
* Task List: Users will have access to a comprehensive task list with various functionalities. They will be able to edit, create, and delete tasks. Additionally, task filtering, search, and a complete toggle option will be available to efficiently manage and mark tasks as complete or incomplete.
* Note List: A user-friendly note list will be introduced to ensure easy access to all user notes. It will support note creation, editing, and deletion. Similar to the task list, note filtering and search options will be provided for convenient organization and retrieval of notes.
* Habit List: Users will have access to a comprehensive habit list with various functionalities. They will be able to edit, create, and delete habits. Furthermore, the application includes habit filtering and a search function, along with an input option to specify the frequency of the habit on a weekly basis.
* Event List: Users will have access to a comprehensive event list with various functionalities. They will be able to edit, create, and delete events. Furthermore, the application includes event filtering and a search function, along with an input option to specify the repetition of the event on a yearly basis.
* Interactive Profile: A personalized and interactive profile page will be developed. It will offer users informative details and options to edit their profile information. This feature aims to enhance user engagement and provide a tailored experience.
* Sing in form: for user to sign in.
* Sign up form: for users to sign up.



### **Structure**


Taskify has been designed to be user-friendly for individuals of all ages and backgrounds, ensuring simplicity and intuitiveness. Initially, the website was planned to feature a calendar and navigation bar on the sides. However, I eventually chose to omit these features to enhance the website's straightforwardness and ease of use.

Taskify consists of a Home Page with a consistent navbar throughout the website. The links in the navbar change based on the users' authentication status, whether they are logged in or logged out. The Home Page provides a brief explanation of the website's purpose and objectives.

To cater to user needs, I added links at the bottom of the explanation. For unauthenticated users, these links lead to the sign-in and sign-up pages. On the other hand, authenticated users are provided with links to access the Task, Note, Habit, and Event lists.

For enhanced usability, each of these lists follows the same structure, ensuring an intuitive experience for users.


### Skeleton

#### **Website scheme**
![Scheme](/src/assets/sitescheme.png)

#### **Website wireframe**
![Wireframe](/src/assets/UxWireframes.png)

#### **Database schema**
![DataBase](/src/assets/database.png)


### Surface

I utilized a blend of soft, light hues such as light blue, light yellow, and white, employing a favorable contrast to create a smooth and easily readable user experience for the app. To avoid confusion among users, I deliberately incorporated only a limited number of options and designed the website navigation to be intuitive and straightforward. For the main website font, I opted for Lora due to its simplicity and readability.

#### **Website Colours and Fonts**
![Colours and Fonts](/src/assets/colours.png)


### Components

I have created a set of reusable components and hooks for managing the current user state and authentication in a React application. The central piece is the CurrentUserProvider, which acts as a React context provider. It allows me to access the current user state across the entire application. To interact with the CurrentUserProvider, I also have two custom hooks: useCurrentUser and useSetCurrentUser.

Another component I have developed is the Avatar component. It is a versatile React component that displays an avatar image along with an optional text label. I can use this component in various parts of my application to represent user avatars or profile pictures.

In addition to that, I have implemented a useful custom React hook called useRedirect. This hook takes care of handling redirects based on the user's authentication status. It efficiently uses React Router's useHistory hook and Axios to perform the necessary redirections. By incorporating this hook, I can easily manage navigation and authentication-related redirects in different parts of my application without the need to duplicate code.

Overall, with these components and hooks, I have streamlined the process of managing the current user state, displaying avatars, and handling redirects in my React application. It enhances the code reusability and makes the development process more efficient.


---
## **Features**


### *Navbar*


1. Home: This link directs users to the homepage, providing them with an opportunity to explore and access essential information about our platform.
2. Task List: For users who have logged in, the navbar contains a link to the task list, offering easy access to efficiently manage and track their tasks.
3. Note List: Similar to the task list, the navbar includes a link to the note list for logged-in users, enabling them to conveniently access and organize their notes.
4. Habit List: The navbar displays a link to the habit list for logged-in users, allowing them to conveniently access and manage their habits.
5. Event List: The navbar features a link to the event list for logged-in users, facilitating convenient access and organization of their events.
6. Log In/Log Out: When a user is logged in, the navbar displays a "LogOut" link, enabling them to securely log out of their account. For logged-out users, the navbar presents a "LogIn" link, directing them to the login page.
7. Sign Up: For users who are not logged in, the navbar provides a "Sign Up" link, leading them to the registration page where they can create a new account.
8. Profile: The navbar offers a link to the user's profile page, providing personalized information and settings related to their account.


Additionally, our responsive navbar ensures optimal usability on small screen views. When the screen size is reduced, a hamburger menu (hamburger icon) appears, indicating the presence of a hidden navigation menu. Clicking on the hamburger menu expands a drop-down menu displaying all the available links and functionalities.
To enhance user convenience, regardless of their logged-in status, they can simply click on the logo within the navbar, which will always redirect them to the home page.
With our fully responsive navbar, users can effortlessly navigate through various sections of our website, access essential features, and seamlessly manage their tasks, notes, habits, and events.


![NavBarsm](/src/assets/NavBarsm.png)

![NavBarsm](/src/assets/NavBarlglogin.png)

![NavBarsm](/src/assets/NavBarlg.png)


### *Home Page*


For logged-in users, the Home Page extends a warm welcome and offers easy access to the main features: the Task List, Note List, Habit List, and Event List. These powerful tools allow you to stay organized, track your tasks, events, habits, and manage your notes effortlessly. With just a click, you can dive into your tasks, notes, habits, and events, ensuring productivity and efficiency.

In the case of logged-out users, our Home Page presents two enticing links: "Sign In" and "Sign Up." By clicking on "Sign In," you'll be directed to our login page, where you can access your existing account and resume your journey with us. If you're new to our platform, "Sign Up" will guide you to our registration page, enabling you to create an account and unlock a world of possibilities.


![Home page log in](/src/assets/homePageLogin.png)

![Home page log out](/src/assets/homepagelogout.png)


### *Task list*


Our Task List feature is designed to empower you in managing your tasks efficiently. With a range of functionalities, it ensures that you stay organized and on top of your priorities. Here's what you can expect from our Task List:

1. Comprehensive Task Display: The Task List showcases all your tasks in a clear and organized manner. Each task is presented with its title, description, due date, priority, and category, providing a holistic view of your tasks at a glance.
2. Powerful Search Bar: Need to find a specific task? Our search bar allows you to search for tasks based on keywords, priority levels, dates, or categories. Simply enter your search query, and the Task List will filter and display the relevant tasks, making it effortless to find what you're looking for.
3. Flexible Filtering Options: Take control of your task view with our versatile filtering options. You can filter tasks based on their completion status, separating the "done" tasks from the "undone" ones. Additionally, you can filter tasks by priority, enabling you to focus on high-priority tasks or review tasks of a specific priority level.
4. Task Creation: Creating a new task is a breeze. With just a few clicks, you can add a new task to your list. Specify the task title, description, due date, priority level, and category, ensuring that all essential details are captured accurately.
5. Task Deletion: Need to remove a task? Our Task List allows you to easily delete tasks that are no longer relevant or necessary. Simply select the task and choose the delete option, and the task will be removed from your list.
6. Task Status Updates: Stay in control of task completion with the ability to mark tasks as "done" or "undone." This feature allows you to track your progress, ensuring that you stay on top of your commitments.
7. Task Editing: Should the need arise to modify a task, our Task List provides the functionality to make changes effortlessly. Edit the task title, description, due date, priority, or category as necessary, ensuring that your task details remain up to date.

![Task list](/src/assets/taskList.png)

### *Note list*


Our Note List feature provides a seamless way to organize and capture your ideas, inspirations, and important information. Similar to the Task List, it offers a range of functionalities to enhance your note-taking experience. Here's what you can expect from our Note List:
1. Comprehensive Note Display: The Note List presents all your notes in a clean and structured format. Each note is showcased with its title, content (with a larger text limit), creation date, and category, allowing you to quickly browse and locate the information you need.
2. Powerful Search Bar: Need to find a specific note? Our search bar enables you to search notes based on keywords, categories, or creation dates. Enter your search query, and the Note List will filter and display the relevant notes, ensuring you can easily locate the desired information.
3. Flexible Filtering Options: Take control of your note view with versatile filtering options. You can filter notes based on categories or creation dates, helping you focus on specific topics or review recent notes.
4. Note Creation: Creating a new note is effortless. Simply click on the "Create Note" button, and you can enter the note title and content. With a generous text limit, you can capture detailed information, ideas, or even longer passages.
5. Note Deletion: Should you no longer need a particular note, our Note List allows you to delete it with ease. Select the note and choose the delete option, and the note will be removed from your list.
6. Note Editing: Need to make changes to a note? Our Note List provides an intuitive editing feature. You can modify the note's title, content, or category, ensuring your notes are always up to date and reflective of your evolving thoughts.

![Note list](/src/assets/noteList.png)

### *Habit list*


Our Habit List feature is designed to help you cultivate positive habits, manage your tasks efficiently, and improve your overall productivity. Just like the Note List, it offers a wide array of functionalities to enhance your habit-building experience. Here's what you can achieve with our Habit List:
1. Personalized Habit Tracking: The Habit List presents your habits in a clear and structured format. Each habit is accompanied by its title, description, frequency on a weekly basis, priority, and category. This comprehensive display enables you to easily keep track of your habits and understand their significance in achieving your goals.
2. Seamless Search Function: Looking for a specific habit? Our search bar makes it effortless to find habits based on keywords, categories, or creation dates. Enter your search query, and the Habit List will filter and display the relevant habits, ensuring you stay on top of your habit-building journey.
3. Effective Filtering Options: Take control of your habit view with flexible filtering options. You can filter habits based on categories, priority levels, or creation dates. This empowers you to focus on specific habit categories or review your recently adopted habits.
4. Habit Creation: Creating a new habit is a breeze. Simply click on the "Create Habit" button, and you can provide the habit's title, description, frequency on a weekly basis, priority, and category. With this information, you can tailor each habit to suit your unique lifestyle and aspirations.
5. Habit Deletion: Should you decide to change your habit list, our Habit List allows you to delete habits with ease. Select the habit you wish to remove, and with a simple click, it will be deleted from your list.
6. Habit Editing: Need to modify a habit to better suit your needs? Our Habit List provides an intuitive editing feature. You can update the habit's title, description, frequency on a weekly basis, priority, or category, ensuring your habits are always aligned with your evolving goals.

In summary, our Habit List is your go-to tool for fostering positive routines and enhancing your productivity. With its user-friendly interface and powerful functionalities, you can stay organized, motivated, and on track to achieve your aspirations. Start building your productive habits today!

![Habit list](/src/assets/habitList.png)

### *Event list*


Our Event List feature offers a seamless solution to organize and keep track of all your upcoming events, appointments, and important occasions. With a range of functionalities designed to enhance your scheduling experience, the Event List empowers you to stay on top of your busy life. Here's what you can expect from our Event List:
1. Comprehensive Event Display: The Event List presents all your scheduled events in a clean and structured format. Each event is showcased with its title, description, start time, repeat on a yearly basis option, priority, and category. This comprehensive display allows you to have a clear overview of your schedule and easily plan your time.
2. Effortless Event Creation: Creating a new event is a breeze. Click on the "Add Event" button, and you can enter the event's title, description, start time, choose whether to repeat it on a yearly basis, set its priority level, and assign a relevant category. This ensures that you can keep all your events organized and never miss an important occasion.
3. Powerful Search Function: Need to find a specific event? Our search bar enables you to quickly locate events based on keywords, categories, or start times. Simply enter your search query, and the Event List will filter and display the relevant events, ensuring you can stay organized even in the busiest of schedules.
4. Flexible Repeating Options: For events that occur annually, the "Repeat on a yearly basis" feature simplifies scheduling repetitive occasions. You can set up events like birthdays, anniversaries, or annual meetings to recur automatically, saving you time and effort in rescheduling each year.
5. Priority-based Organization: Assign priority levels to your events, ensuring you can prioritize and focus on the most important tasks. The Event List allows you to mark events as high, medium, or low priority, helping you manage your time efficiently and achieve your goals.
6. Customizable Categorization: Categorize your events based on their nature, such as work-related, personal, social, or academic. This customizable categorization allows you to filter and view events based on specific categories, making it easier to focus on different aspects of your life.
7. Event Editing and Deletion: Need to make changes to an event or remove it from your schedule? Our Event List provides an intuitive editing and deletion feature. You can easily modify event details or delete outdated entries, ensuring your schedule remains up to date and organized.

In conclusion, our Event List is your ultimate tool for effective time management and scheduling. With its user-friendly interface and powerful functionalities, you can effortlessly stay organized, never miss important events, and achieve a well-balanced and fulfilling life. Start managing your schedule with ease today!

![Event list](/src/assets/eventList.png)

### *Sign up, out and in*


At our website, we prioritize the security and integrity of your data. To ensure the utmost protection, we have implemented user authentication that restricts unauthorized access to our API endpoints and data manipulation. Here's how it works:
1. Access Control: Without proper authentication, users are unable to create or manipulate data through our API. This means that sensitive operations, such as creating tasks, editing notes, or updating user profiles, can only be performed by authenticated users who have successfully logged in.
2. Sign-Up Requirement: To gain access to the full functionality of our platform, users must sign up and create an account. During the sign-up process, we enforce the requirement for a unique email address, ensuring that each user has a distinct identifier within our system.
3. Sign-In Verification: Once registered, users can securely sign in using their credentials, such as their email address and password. This authentication process verifies the user's identity and grants access to the protected areas of our website.
4. API Interaction: When authenticated, users can interact with our API endpoints to create, read, update, and delete data, such as tasks, notes, and profile information. These operations are performed securely, ensuring that only authorized users can modify the data associated with their account.
By implementing robust user authentication, we establish a secure environment where your data remains protected from unauthorized access. This adds an additional layer of confidence and trust in the privacy and security of your information. Rest assured that your interactions with our API are safeguarded, allowing you to focus on effectively managing your tasks, notes, and personal profile within our platform.

![Sign out](/src/assets/signout.png)

![Sign in](/src/assets/signin.png)

![Sign up](/src/assets/signup.png)

### *Edit tasks, notes, habits, events, and profile*


Taskidy, our innovative app, offers users a range of convenient editing and deletion options for tasks, notes, and personal profiles. With just a few clicks, you can easily modify or remove your data. Here's how it works:
1. Task Editing: To edit a task, simply navigate to the task section and locate the task you wish to modify. Click on the dropdown menu associated with the task, and you'll find an "Edit" option. Selecting this option will allow you to update the task's title, description, due date, priority, or any other relevant details. Once you've made the desired changes, save your edits, and your task will be updated accordingly.
2. Note Editing: Similarly, editing notes follows a similar process. In the note section, find the note you want to modify and click on the dropdown menu. From the options available, select "Edit" to access the note editing interface. Here, you can make changes to the note's title, content, or any other relevant information. Save your edits, and the note will be updated with your modifications.
3. Habit Editing: Taskidy also allows you to edit your habits for better tracking and organization. In the habit section, find the habit you want to modify and click on the dropdown menu next to it. Choose the "Edit" option, and you'll be able to make changes to the habit's name, frequency, start date, or any other relevant details. After making the necessary adjustments, save your edits to update the habit accordingly.
4. Event Editing: Taskidy makes event management a breeze. To edit an event, go to the event section and locate the specific event you wish to modify. Click on the dropdown menu associated with the event, and select "Edit" from the available options. In the event editing interface, you can change the event title, date, time, location, or any other relevant information. Save your edits, and the event will be updated with your changes.
5. Profile Editing: Your personal profile is an essential aspect of Taskidy. To modify your profile information, click on the dropdown menu associated with your profile. From the menu options, select "Edit Profile." This will allow you to update details such as your name, email address, profile picture, or any other customizable fields. Once you've made the desired changes, save your edits to update your profile information.
6. Task, Note, Habit, and Event Deletion: If you no longer need a task, a note, a habit or a event, Taskidy provides a simple way to delete them. Just locate the task, note, habit or event in the respective section, access the dropdown menu on the specific task, note, habit or event, and select the "Delete" option. Confirm your choice, and the task, note, habit or event will be permanently removed from your list.
Taskidy's intuitive interface and user-friendly dropdown menu options ensure that you have complete control over your tasks, notes, habits, events and profile information. Whether you need to make edits or delete items, Taskidy empowers you to manage your data with ease, allowing for a personalized and efficient user experience.

![delete dropdown](/src/assets/dropdownDelete.png)

![Edit tasks](/src/assets/editTask.png)

![Edit notes](/src/assets/editNote.png)

![Edit habits](/src/assets/editHabit.png)

![Edit events](/src/assets/editEvent.png)

![Edit profile](/src/assets/editProfile.png)

### *Create tasks, notes, habits or events*


Taskidy is designed to accommodate your organizational needs without any limitations on the number of tasks or notes you can create. We understand that productivity knows no bounds, so we've implemented features that ensure a seamless user experience:


1. Unlimited task, note, habit or event: With Taskidy, you can create as many tasks, notes, habits or events as you need. There are no restrictions or predefined limits, allowing you to capture all your important tasks and jot down unlimited ideas and notes.


2. Infinite Scroll: To ensure fast loading times and optimal performance, Taskidy utilizes an infinite scroll mechanism. Instead of loading the entire list of tasks, notes, habits or events at once, the app dynamically fetches and displays a portion of the list as you scroll down. This approach enhances the loading speed and prevents any lag or delay, even when dealing with a large number of tasks, notes, habits or events.


3. Seamless User Experience: The combination of unlimited tasks,notes, habits, events and infinite scroll provides a seamless user experience. You can effortlessly navigate through your extensive task, note, habit or event collection without worrying about slow loading times or performance issues. The app ensures a fluid and responsive interface, allowing you to focus on your productivity without any distractions.


With Taskidy's unlimited task, note, habit or event creation, coupled with the efficient infinite scroll, you have the freedom to capture and organize your thoughts, tasks, and ideas without constraints. Embrace the power of productivity and creativity with Taskidy, where your organizational capabilities are limitless and the app responds swiftly to your needs.


![Add task](/src/assets/addTask.png)
![Add note](/src/assets/addNote.png)
![Add habit](/src/assets/addHabit.png)
![Add event](/src/assets/addEvent.png)

![Create task](/src/assets/createTask.png)
![Create note](/src/assets/createNote.png)
![Create habit](/src/assets/createHabit.png)
![Create event](/src/assets/createEvent.png)

---
## Technologies Used


The main technologies used are the following:
1. GitHub: I rely on GitHub for version control. It's essential for managing code, facilitating future collaborations, and tracking changes in our project with the use of clear commits.
2. HTML: As a developer, I use HTML, the standard markup language, to create the structure and content of our web pages.
3. CSS: To enhance the visual presentation of our web pages, I use CSS to style and format HTML elements. The aplications has very litle CSS and more bootstrap.
4. JavaScript: With JavaScript, I bring interactivity and dynamic elements to our web pages, adding functionality and improving the user experience. Used to build the Front End.
5. Python: I find Python to be a versatile and easy-to-read programming language. It was used to build the Back End.
6. Django REST framework: To build robust and secure APIs, I rely on Django REST framework, which integrates seamlessly with Django, making it easier to develop RESTful web services and APIs for our applications.
7. React: In building user interfaces, I prefer using React, a powerful JavaScript library that allows me to create dynamic, reusable, and responsive web applications efficiently.
8. Bootstrap: For a responsive and consistent layout and design, I turn to Bootstrap, reducing the CSS code and unnecessary extra css files.


---
## Testing


### *Front-End manual testing*

1. Navbar:
- [x] The Logo link redirects to the home page.
- [x] The Home link redirects to the home page.
- [x] The sign-in link redirects to the sign-in form.
- [x] The sign-up link redirects to the sign-up form.
- [x] If the user is authenticated, display the tasks, the notes, the sign-out, and the profile links.
- [x] The sign-out link redirects to the sign-out form.
- [x] The task and note list links redirect correctly to the task and note pages.
- [x] The profile link shows correctly, with the user name and the user image displayed.
- [x] The navbar is responsive to all screen devices and displays a drop-down menu with all links.


2. Home Page:
- [x] The home page displays correctly.
- [x] When the user is authenticated, display two links, one to the task list and the other to the note list. Both links work.
- [x] When the user is first authenticated, two links to sign in or sign up appear. Both links work correctly.
- [x] The home page is responsive to all screen views.


3. Tasks:
- [x] The task list displays all the tasks correctly on all screen sizes.
- [x] The search bar works.
- [x] The task filter works but has a little problem: a task that the user toggles to complete stays on the undone filter list until the page refreshes.
- [x] Task displays all the information correctly.
- [x] The dropdown menu with the links to delete, create, and edit tasks works.
- [x] The spinner works.
- [x] The modal delete confirmation works.
- [x] The task list is fully responsive to all screen sizes


4. Task edit and create forms:
- [x] The alerts for empty inputs work.
- [x] The successful alert for creating and editing the task works.
- [x] The input options work.
- [x] The tasks are created and edited correctly.
- [x] The cancel button returns the user to the previous page correctly.
- [x] The forms are fully responsive to all screen sizes.


5. Notes:
- [x] The note list displays all the notes correctly at all screen sizes.
- [x] The search bar works.
- [x] The note filter works correctly.
- [x] Notes display all the information correctly.
- [x] The dropdown menu with the links to delete, create, and edit notes works.
- [x] The spinner works.
- [x] The modal delete confirmation works.
- [x] The note list is fully responsive to all screen sizes.


5. Note edit and create forms:
- [x] The alerts for empty inputs work.
- [x] The successful alert for creating and editing the notes works.
- [x] The input options work.
- [x] The notes are created and edited correctly.
- [x] The cancel button returns the user to the previous page correctly.
- [x] The forms are fully responsive to all screen sizes.


6. Sign in form:
- [x] The alerts if the inputs are incorrect are displayed correctly.
- [x] When the user successfully logs in, the alert message works, and the sign-in submission works.
- [x] The link to sign up works.
- [x] The forms are fully responsive to all screen sizes.


7. Sign up form:
- [x] The alerts if the inputs are incorrect are displayed correctly.
- [x] When the user successfully signs up, the alert message works, and the sign-up submission works.
- [x] The link to sign in works.
- [x] The form are fully responsive to all screen sizes.


8. Log out:
- [x] The log out works correctly


9. Profile page and edit form
- [ ] The user image, name, and email display correctly, but the bio only displays correctly after being edited.
- [x] The edit link redirects correctly to the profile edit form.
- [x] The current user information is displayed correctly in the edit form.
- [ ] All the inputs can be correctly updated, apart from the user name.
- [x] The submission works correctly.
- [x] The cancel button correctly redirects the user back to the profile page.
- [x] The form are fully responsive to all screen sizes.


### *Lighthouse*


The lighthouse results are all above 90 percent percent.


![LightHouse](/src/assets/lightHouse.jpg)




### *HTML, CSS, and JavaScript Validation*


* The "W3C HTML Validator" found some errors in my HTML files, but only related to the Django tags.
* The "W3C CSS Validator (Jigsaw)" found no errors in the CSS file.
* The "JSHint JavaScript Validator" found no major errors in the JavaScript file.


### *Bugs and fixes*


I encountered several issues during the project, which I was able to address with the help of the tutors:
1. Heroku Deployment: Initially, the project could not be deployed to Heroku due to outdated versions.
2. Error Handling: I needed to add specific error codes (401 and 404) for unauthorized access and not found errors.
3. Version Compatibility: There were incompatibilities between React, Bootstrap, and Node.js versions, requiring multiple restarts of the project.
4. FindDOMNode Error: The usage of React.StrictMode caused a FindDOMNode error, which needed to be resolved.
The tutors played a crucial role in resolving these issues and providing guidance throughout the development process. Their assistance was instrumental in overcoming these challenges and ensuring the successful completion of the project.


## Credits


I used code from the following resources:
* Walk through project


I used media from:
* Took the Profile images from unsplash [Pictures site](https://unsplash.com/)
* Took the icon from [Icons](https://fontawesome.com/)


