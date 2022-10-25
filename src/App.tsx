import { StrictMode } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

export default () => (
  <StrictMode>
    <Header />
    <main>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
    <Footer />
  </StrictMode>
);
