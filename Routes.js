import React from 'react'

const Routes = () => {
  <Switch>
  <Route exact path="/about">
    <AboutView />
  </Route>
  <Route exact path="/clinics">
    <ClinicsView />
  </Route>
  <Route exact path="/states-policies">
    <StatePoliciesView />
  </Route>
  <Route exact path="/">
    <HomeView />
  </Route>
  <Route path="/*">
    <Error />
  </Route>
</Switch>
}

export default Routes