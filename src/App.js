import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpFrom';
import SignInForm from './pages/auth/SignInForm';
import './api/axiosDefaults';
import UserProfile from './pages/UserProfile';
import TaskList from './pages/tasks/Tasks';


function App() {
  
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/tasks" component={() => <TaskList/>} />
          <Route exact path="/events" render={() => <h1>Events</h1>} />
          <Route exact path="/habits" render={() => <h1>Habits</h1>} />
          <Route exact path="/notes" render={() => <h1>Notes</h1>} />
          <Route exact path="/profiles/:userId" render={() => <UserProfile/>} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;