import { render } from "@testing-library/react";

import UserProfile from './userProfile';

import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import AppContextProvider from './../../store/AppContext';

jest.mock('./../../http.ts');

it("should render profile page", () => {

    const history = createMemoryHistory();

    const routerProps = {
        history: history,
        location: {pathname: '/user/1', state: {}, key: 'user', hash: '', search: ''}
    };

    const {container} = render(
       <Router {...routerProps}>
        <AppContextProvider>
            <UserProfile></UserProfile>
        </AppContextProvider>
      </Router>
    )



    
    
    expect(container).toBeTruthy();
    expect(container.getElementsByTagName('h3')[0]).toBeTruthy();


    
});