import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from './shared/Layout';
import './main.global.css';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { UserContextProvider } from './shared/context/userContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useToken } from './hooks/useToken';
import { Post } from './shared/Post';
import { StoreProvider } from 'easy-peasy';
import { easyPeasyStore } from './easy-peasy-store/store';

const TokenContainer = ({ children }: { children?: React.ReactElement }): React.ReactElement | null => {
    useToken();

    return (children || null);
}

export function AppComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Provider store={store}>
            <StoreProvider store={easyPeasyStore}>
            {
                mounted && (
                    <BrowserRouter>
                        <TokenContainer>
                            <UserContextProvider>
                                <Layout>
                                    <Header />
                                    <Content>
                                        <Switch>
                                            <Route exact path='/'>
                                                <Redirect
                                                    to={{
                                                        pathname: '/posts',
                                                    }}
                                                />
                                            </Route>
                                            <Route path='/auth'>
                                                <Redirect
                                                    to={{
                                                        pathname: '/posts',
                                                    }}
                                                />
                                            </Route>
                                            <Route path='/posts'>
                                                <CardsList />
                                            </Route>
                                            <Route path="*">
                                                <div style={{padding: 50}}>
                                                    404 — страница не найдена
                                                </div>
                                            </Route>
                                        </Switch>
                                        <Route path='/posts/:id'>
                                            <Post />
                                        </Route>
                                    </Content>
                                </Layout>
                            </UserContextProvider>
                        </TokenContainer>
                    </BrowserRouter>
                )
            }
            </StoreProvider>
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);
