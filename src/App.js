import RegistrationPage from "./components/pages/RegistrationPage";
import { Route,Switch } from 'react-router-dom'
import LoginPage from "./components/pages/LoginPage";
import TodoPage from "./components/pages/TodoPage";
import ProtectedPage from "./components/pages/ProtectedPage";
import AccountInfo from './components/pages/AccountInfo'

export default function App(){
  return (
      <Switch>
      <Route exact path='/' component={RegistrationPage}/>
      <Route path='/login'component={LoginPage}/>
      <ProtectedPage path='/todo/me' component={TodoPage}/>
      <Route path='/info' component={AccountInfo}/>
        </Switch>
  )
}
