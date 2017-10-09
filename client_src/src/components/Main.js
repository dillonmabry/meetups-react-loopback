import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import MeetupDetails from './MeetupDetails';
import About from './About';
import MeetupAdd from './MeetupAdd';
import MeetupEdit from './MeetupEdit';

const Main = () => (
  <main>
    <Switch>
      <Route exact path ='/' component={Meetups} />
      <Route exact path ='/about' component={About} />
      <Route exact path='/meetups/add' component={MeetupAdd} />
      <Route exact path='/meetups/edit/:id' component={MeetupEdit} />
      <Route exact path='/meetups/:id' component={MeetupDetails} />
    </Switch>
  </main>
)

export default Main;
