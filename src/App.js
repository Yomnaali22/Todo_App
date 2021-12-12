import RegistrationPage from "./components/pages/RegistrationPage";
import { Route,Switch } from 'react-router-dom'
import LoginPage from "./components/pages/LoginPage";
import '../src/style/app.scss'
import TodoPage from "./components/pages/TodoPage";
//creating a new component and passing the todopage component as a prop to render it in the protected route component
import ProtectedPage from "./components/pages/ProtectedPage";
import AccountInfo from './components/pages/AccountInfo'
import Stopwatch from "./components/timer/Stopwatch";
import Timer from "./components/timer/Timer";
import Watch from "./components/timer/watch";
import TimerV2 from "./components/timer/TimerV2";

//className="bg"

function App() {
  ///this not a dom but a javascript object
  const element = (
    <div>
      <Switch>
      <Route exact path='/' component={RegistrationPage}/>
      <Route path='/login'component={LoginPage}/>
      <ProtectedPage path='/todo/me' component={TodoPage}/>
      <Route path='/info' component={AccountInfo}/>
      <Route path='/stopwatch' component={TimerV2}/>
        </Switch>
    </div>
  );
  console.log(element)
  return element
}

export default App;
