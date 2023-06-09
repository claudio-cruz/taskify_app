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
import ProfileEditForm from './pages/profiles/ProfileEditForm'
import HomePage from './pages/HomePage.js';


function App() {
  
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage/>} />
          <Route exact path="/tasks" render={() => <TaskList/>}/>
          <Route exact path="/tasks/create" render={() => <TaskCreateForm/>}/>
          <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
          <Route exact path="/events" render={() => <h1>Events</h1>} />
          <Route exact path="/habits" render={() => <h1>Habits</h1>} />
          <Route exact path="/notes" render={() => <h1>Notes</h1>} />
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