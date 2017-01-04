'use strict';
import MarkdownEditor, {getContent} from "./markdown";
// import React from 'react';
// import ReactDOM from 'react-dom';
class WriteBlog extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        var submitData = {
            "title": this.refs.title.value,
            "type": this.refs.type.value,
            "imgsrc": this.refs.imgsrc.value,
            "digest": this.refs.digest.value,
            "content": getContent(),
        };

        console.log(submitData);
        $.ajax({
            url: "/insert",
            type: "POST",
            headers: {
                // "Accept": "text/plain; charset=utf-8",
                "Content-Type": "application/json;charset=UTF-8"
            },
            /*
             beforeSend: function(jqXHR, settings) {
             jqXHR.setRequestHeader('Accept', 'text/plain; charset=utf-8');
             jqXHR.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
             },
             */
            data: JSON.stringify(submitData),
            success: function (data, textStatus, jqXHR) {
                alert("数据：" + data + "\n状态：" + textStatus);
                console.log("数据：" + data + "\n状态：" + textStatus);
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-2">
                            <select placeholder="Select One" ref="type">
                                <option value="1">原创</option>
                                <option value="0">分享</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <input type="text" placeholder="article title" ref="title"/>
                        </div>
                        <div className="col-2">
                            <input type="text" ref="imgsrc" placeholder="图片链接"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <textarea ref="digest" type="text" placeholder="摘要或简评" maxLength="100"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit"/>
                    <MarkdownEditor />


                </form>

            </div>
        );

    }
}


ReactDOM.render(<WriteBlog/>, document.getElementById("writeBlog"));
