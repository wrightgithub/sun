'use strict';
import ShareBlog from './article';
class SunApp extends React.Component {

    render() {
        return (
            <ShareBlog />
        );
    }

}


ReactDOM.render(<SunApp />, document.getElementById("articles"));
