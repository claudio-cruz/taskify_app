import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpFrom';
import './api/axiosDefaults';


function App() {
  
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/tasks" component={() => <h1>Tasks</h1>} />
          <Route exact path="/events" render={() => <h1>Events</h1>} />
          <Route exact path="/habits" render={() => <h1>Habits</h1>} />
          <Route exact path="/notes" render={() => <h1>Notes</h1>} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;