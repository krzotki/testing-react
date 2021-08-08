
import {render, waitFor} from '@testing-library/react';
import { title } from 'process';
import PostItem from './postItem';

jest.mock('./../../http.ts');

it("should render single post", async() => {

    await waitFor(() => {
        const {container} = render(<PostItem post={ {
            id: 1,
            body: 'my body',
            title: 'my title',
            userId: 1
        } }/>);
    
        const titleHeader = container.getElementsByTagName('h3')[0];
        expect(titleHeader.hasAttribute('data-posttitle')).toBeTruthy();
    
        const postBody = container.getElementsByTagName('span')[0];
        expect(postBody.hasAttribute('data-postbody')).toBeTruthy();
    });

});