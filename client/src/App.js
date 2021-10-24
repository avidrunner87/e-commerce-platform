import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import store from './utils/store';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';

const httpLink = createHttpLink({
    uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div>
                    <Provider store={store}>
                        <Nav />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/signup">
                                <Signup />
                            </Route>
                            <Route exact path="/success">
                                <Success />
                            </Route>
                            <Route exact path="/orderHistory">
                                <OrderHistory />
                            </Route>
                            <Route path="/products/:id">
                                <Detail />
                            </Route>
                            <Route>
                                <NoMatch />
                            </Route>
                        </Switch>
                    </Provider>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
