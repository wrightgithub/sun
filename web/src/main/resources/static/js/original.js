'use strict';
import {Blog,copyarr,TempBlog} from './article';


export default class OriginalBlog extends React.Component {

    render() {

        return (
            <div>
                <TempBlog temp={{
                 head: 'Blog',
                 info: 'Original Blog ',
                 ajaxurl:'/original',
                }}/>
            </div>
        );
    }
}


