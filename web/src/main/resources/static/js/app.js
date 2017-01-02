'use strict';
import ShareBlog from './article';
import OriginalBlog from './original';
class SunApp extends React.Component {

    render() {
        return (
            <div>
                <div id="articles">
                    <ShareBlog />
                </div>
                <div id="original">
                    <OriginalBlog />
                </div>
            </div>
        );
    }

}


ReactDOM.render(<SunApp />, document.getElementById("sunapp"));
