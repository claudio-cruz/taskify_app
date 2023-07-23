import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpFrom';
import SignInForm from './pages/auth/SignInForm';
import './api/axiosDefaults';
import UserProfile from './pages/profiles/UserProfile';
import TaskList from './pages/tasks/Tasks';
import TaskCreateForm from './pages/tasks/TaskCreateForm';
import TaskEditForm from './pages/tasks/TaskEditForm';
import NoteList from './pages/notes/Notes'
import NoteCreateForm from './pages/notes/NoteCreateForm'
import NoteEditForm from './pages/notes/NoteEditForm';
import ProfileEditForm from './pages/profiles/ProfileEditForm'
import HomePage from './pages/HomePage.js';
import HabitList from './pages/habits/Habits';
import HabitCreateForm from './pages/habits/HabitCreateForm';
import HabitEditForm from './pages/habits/HabitEditForm';
import EventList from './pages/events/Events.js';
import EventCreateForm from './pages/events/EventCreateForm';
import EventEditForm from './pages/events/EventEditForm';

function App() {
  
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage/>} />
          <Route exact path="/tasks" render={() => <TaskList/>} />
          <Route exact path="/tasks/create" render={() => <TaskCreateForm/>} />
          <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
          <Route exact path="/events" render={() => <EventList/>} />
          <Route exact path="/events/create" render={() => <EventCreateForm/>}/>
          <Route exact path="/events/:id/edit" render={() => <EventEditForm/>}/>
          <Route exact path="/habits" render={() => <HabitList/>} />
          <Route exact path="/habits/create" render={() => <HabitCreateForm/>}/>
          <Route exact path="/habits/:id/edit" render={() => <HabitEditForm/>}/>
          <Route exact path="/notes" render={() => <NoteList/>} />
          <Route exact path="/notes/create" render={() => <NoteCreateForm/>}/>
          <Route exact path="/notes/:id/edit" render={() => <NoteEditForm/>}/>
          <Route exact path="/profiles/:id" render={() => <UserProfile/>} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;