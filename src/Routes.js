import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Form_maker from './Page/Form_maker';
import QuestionConfirmPage from './Page/QuestionConfirmPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Form_maker}/>
          <Route exact path="/QuestionConfirmPage" component={QuestionConfirmPage}/>
        </Switch>
      </Router>
    )
  }
}
export default Routes;