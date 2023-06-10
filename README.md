# Taskify


[Visit the website here](https://taskify-app-2023.herokuapp.com/)


![screen views](/src/assets/screenViews.png)


Welcome to Taskify, the ultimate task management app designed to help you stay organized and in control of your professional and personal life. With Taskify, you can create, delete, edit, and view tasks and notes effortlessly, ensuring that you never miss out on anything important again.


Our goal is simple: to provide a comprehensive and intuitive platform that streamlines your daily tasks and enhances your productivity. We understand the challenges of modern life, where commitments and responsibilities can easily pile up, leading to stress and missed opportunities. Taskify aims to be your trusted companion, helping you navigate through the chaos and maintain a clear focus on what matters most.


Our vision for Taskify is to empower individuals like you to lead more balanced, fulfilling lives by seamlessly managing tasks and notes. By harnessing the power of technology, we aim to simplify your day-to-day routines, freeing up your time and mental energy for the things that truly matter to you.


Whether you're a busy professional, a student with a hectic schedule, or someone who simply wants to stay organized, Taskify is designed to adapt to your unique needs. From setting reminders and deadlines to categorizing tasks and collaborating with others, our app offers a robust set of features that will revolutionize the way you approach productivity.


All the Agile processes, the user stories and the sprints can be found in the project section on GitHub. (It's set to public).


[See user stories](https://github.com/users/claudio-cruz/projects/10/views/1)


[See sprints](https://github.com/claudio-cruz/taskify_app/milestones)




This website is made up of the following sections:
1. Home Page: contains the goals of the app and a link to sign in and sign up if the user is logged out, or a link to the task list and note list if the user is logged in.
2. Sign-in page: where users can log in
2. Sign-up page: where users can create an account
3. Task list: contains the user's task list.
4. Task creation form: where users can create tasks
5. Task edit form: where users can edit tasks
6. Note list: contains the user's note list.
7. Note Create Form: where users can create notes
8. Note edit form: where users can edit notes
9. Profile page: display the user's information.
10. Profile edit form: where users can edit their profiles




The user goals of this website are:
1. Enable users to efficiently create, organize, and prioritize tasks, ensuring a clear overview of their responsibilities.
2. Allow users to collaborate and share tasks and notes with colleagues, teammates, or family members to foster effective teamwork and coordination.
3. Provide features such as reminders, deadlines, and notifications to help users stay on track and manage their time effectively.
4. Enable users to create and attach notes, documents, images, or links to tasks, facilitating comprehensive information gathering and easy reference.
5. Ensure that the app is accessible across multiple devices and platforms, allowing users to seamlessly sync their tasks and notes.
6. Integrate with popular calendar and email platforms to sync tasks, deadlines, and reminders, creating a holistic view of commitments.
7. Implement robust search and filtering capabilities, enabling users to quickly find specific tasks or notes based on keywords, tags, or dates.
8. Design an intuitive and visually appealing interface that is easy to navigate, ensuring a positive user experience and encouraging regular app usage.




The business goals for this website are:
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


This app is still in development, and it has a lot to improve and grow.


### **Scope**




To achieve the desired user and business goals, the upcoming release will include the following features:
* Responsive Component Navbar: A customized navbar will be implemented to cater to both logged-in and logged-out users. It will provide all the necessary navigation links for a seamless user experience.
* Task List: Users will have access to a comprehensive task list with various functionalities. They will be able to edit, create, and delete tasks. Additionally, task filtering, search, and a complete toggle option will be available to efficiently manage and mark tasks as complete or incomplete.
* Note List: A user-friendly note list will be introduced to ensure easy access to all user notes. It will support note creation, editing, and deletion. Similar to the task list, note filtering and search options will be provided for convenient organization and retrieval of notes.
* Interactive Profile: A personalized and interactive profile page will be developed. It will offer users informative details and options to edit their profile information. This feature aims to enhance user engagement and provide a tailored experience.


#### **Website scheme**
![Wireframe](/src/assets/sitescheme.png)


#### **Database schema**
![DataBase](/src/assets/database.png)


### **Structure**


This app is composed of:
* Home page
* Task list
* Task edit form
* Task create form
* Note list
* Note create form
* Note edit form
* Log in form
* Log out form
* Sign up form
* Profile page
* Profile edit


---
## **Features**


### *Navbar*


1. Home: This link takes users to the home page, allowing them to explore and access key information about our platform.
2. Task List: For logged-in users, the navbar includes a link to the task list, providing easy access to manage and track their tasks efficiently.
3. Note List: Similar to the task list, the navbar presents a link to the note list for logged-in users, enabling them to conveniently access and organize their notes.
4. Log In/Log Out: When a user is logged in, the navbar displays a "LogOut" link, allowing them to securely log out of their account. For logged-out users, the navbar presents a "LogIn" link, directing them to the login page.
5. Sign Up: For users who are not logged in, the navbar provides a "Sign Up" link, leading them to the registration page where they can create a new account.
6. Profile: The navbar offers a link to the user's profile page, providing personalized information and settings related to their account.


Additionally, our responsive navbar ensures optimal usability on small screen views. When the screen size is reduced, a hamburger menu (hamburger icon) appears, indicating the presence of a hidden navigation menu. Clicking on the hamburger menu expands a drop-down menu displaying all the available links and functionalities.
To enhance user convenience, regardless of their logged-in status, they can simply click on the logo within the navbar, which will always redirect them to the home page.
With our fully responsive navbar, users can effortlessly navigate through various sections of our website, access essential features, and seamlessly manage their tasks and notes.


![NavBarsm](/src/assets/NavBarsm.png)




![NavBarsm](/src/assets/NavBarlglogin.png)




![NavBarsm](/src/assets/NavBarlg.png)




### *Home Page*




For logged-in users, the Home Page extends a warm welcome and offers easy access to two essential features: the Task List and Note List. These powerful tools allow you to stay organized, track your tasks, and manage your notes effortlessly. With just a click, you can dive into your tasks and notes, ensuring productivity and efficiency.


In the case of logged-out users, our Home Page presents two enticing links: "Sign In" and "Sign Up." By clicking on "Sign In," you'll be directed to our login page, where you can access your existing account and resume your journey with us. If you're new to our platform, "Sign Up" will guide you to our registration page, enabling you to create an account and unlock a world of possibilities.




![Home page log in](/src/assets/homepagelogin.png)




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




### *Edit tasks, notes and profile*




Taskidy, our innovative app, offers users a range of convenient editing and deletion options for tasks, notes, and personal profiles. With just a few clicks, you can easily modify or remove your data. Here's how it works:
1. Task Editing: To edit a task, simply navigate to the task section and locate the task you wish to modify. Click on the dropdown menu associated with the task, and you'll find an "Edit" option. Selecting this option will allow you to update the task's title, description, due date, priority, or any other relevant details. Once you've made the desired changes, save your edits, and your task will be updated accordingly.
2. Note Editing: Similarly, editing notes follows a similar process. In the note section, find the note you want to modify and click on the dropdown menu. From the options available, select "Edit" to access the note editing interface. Here, you can make changes to the note's title, content, or any other relevant information. Save your edits, and the note will be updated with your modifications.
3. Profile Editing: Your personal profile is an essential aspect of Taskidy. To modify your profile information, click on the dropdown menu associated with your profile. From the menu options, select "Edit Profile." This will allow you to update details such as your name, email address, profile picture, or any other customizable fields. Once you've made the desired changes, save your edits to update your profile information.
4. Task and Note Deletion: If you no longer need a task or a note, Taskidy provides a simple way to delete them. Just locate the task or note in the respective section, access the dropdown menu, and select the "Delete" option. Confirm your choice, and the task or note will be permanently removed from your list.
Taskidy's intuitive interface and user-friendly dropdown menu options ensure that you have complete control over your tasks, notes, and profile information. Whether you need to make edits or delete items, Taskidy empowers you to manage your data with ease, allowing for a personalized and efficient user experience.


![delete dropdown](/src/assets/dropdownDelete.png)


![Edit tasks](/src/assets/editTask.png)


![Edit notes](/src/assets/editNote.png)


![Edit profile](/src/assets/editProfile.png)




### *Create tasks and notes*




Taskidy is designed to accommodate your organizational needs without any limitations on the number of tasks or notes you can create. We understand that productivity knows no bounds, so we've implemented features that ensure a seamless user experience:


1. Unlimited Tasks and Notes: With Taskidy, you can create as many tasks and notes as you need. There are no restrictions or predefined limits, allowing you to capture all your important tasks and jot down unlimited ideas and notes.


2. Infinite Scroll: To ensure fast loading times and optimal performance, Taskidy utilizes an infinite scroll mechanism. Instead of loading the entire list of tasks or notes at once, the app dynamically fetches and displays a portion of the list as you scroll down. This approach enhances the loading speed and prevents any lag or delay, even when dealing with a large number of tasks or notes.


3. Seamless User Experience: The combination of unlimited tasks/notes and infinite scroll provides a seamless user experience. You can effortlessly navigate through your extensive task and note collection without worrying about slow loading times or performance issues. The app ensures a fluid and responsive interface, allowing you to focus on your productivity without any distractions.


With Taskidy's unlimited task and note creation, coupled with the efficient infinite scroll, you have the freedom to capture and organize your thoughts, tasks, and ideas without constraints. Embrace the power of productivity and creativity with Taskidy, where your organizational capabilities are limitless and the app responds swiftly to your needs.


![Add task or note](/src/assets/addNote.png)


![Create task](/src/assets/createTask.png)


![Create note](/src/assets/createNote.png)




---
## Technologies Used


The main technologies used are the following:
* GitHub
* HTML
* CSS
* JavaScript
* Python
* React
* Bootstrap




---
## Testing


### *Manual testing*


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


