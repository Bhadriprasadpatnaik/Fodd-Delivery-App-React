import React from 'react'
import UserLeftBlock from './UserLeftBlock';
import UserRightBlock from './UserRightBlock';
import "./userBlock.css";
import { Route, Switch, useRouteMatch } from 'react-router';

const UserHome = () => {
  let { path } = useRouteMatch();
  return (
    <section id="userBlock">
      <article>
        <UserLeftBlock />
        {/* dynamic routing */}
        <Switch>
          <Route exact path={path}>
            <h3>Please select topic</h3>
          </Route>
          <Route path={`${path}/:id`}>
            <UserRightBlock />
          </Route>
        </Switch>
      </article>
    </section>
  );
}

export default UserHome
