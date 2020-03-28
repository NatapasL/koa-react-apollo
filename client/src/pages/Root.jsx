import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PagesPostsIndex from './Posts/Index'
import PagesPostsForm from './Posts/Form'

const ROUTES = [
  {
    path: '/',
    component: PagesPostsIndex,
  },
  {
    path: '/products',
    component: PagesPostsIndex,
  },
  {
    path: '/products/new',
    component: PagesPostsForm,
  },
  {
    path: '/products/:id/edit',
    component: PagesPostsForm,
  },
]

const PagesRoot = () => (
  <div>
    <Router>
      <Switch>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
      </Switch>
    </Router>
  </div>
)

export default PagesRoot
