
import {render} from '@testing-library/react';
import { title } from 'process';
import PostItem from './postItem';


it("should render single post", () => {
    const {container} = render(<PostItem post={ {
        id: 1,
        body: 'my body',
        title: 'my title',
        userId: 1
    } }/>);

    expect(container.hasAttribute('data-postid')).toBeTruthy();

    const titleHeader = container.getElementsByTagName('h3')[0];
    expect(titleHeader.hasAttribute('data-posttitle')).toBeTruthy();

    const postBody = container.getElementsByTagName('span')[0];
    expect(postBody.hasAttribute('data-postbody')).toBeTruthy();

});