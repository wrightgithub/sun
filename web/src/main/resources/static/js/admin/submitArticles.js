'use strict';
class SubmitArticles extends React.Component {


    handleSubmit(e) {
        e.preventDefault();
        console.log(this.refs);
        var submitData = {
            "title": this.refs.title.value,
            "type": this.refs.type.value,
            "imgsrc": this.refs.imgsrc.value,
            "link": this.refs.link.value,
            "date": this.refs.date.value,
            "digest": this.refs.digest.value,
        }
        // $.post("/insert",
        //     JSON.stringify(submitData),
        //     function (data, status) {
        //         console.log("数据：" + data + "\n状态：" + status);
        //     }.bind(this));


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
                <h1>分享好文章</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-2">
                            <select placeholder="Select One" ref="type">
                                <option value="0">分享</option>
                                <option value="1">原创</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <input type="text" placeholder="article title" ref="title"/>
                        </div>
                        <div className="col-2">
                            <input type="text" ref="imgsrc" placeholder="图片链接"/>
                        </div>
                        <div className="col-2">
                            <input type="text" ref="link" placeholder="文章链接"/>
                        </div>
                        <div className="col-2">
                            <input type="text" ref="date" placeholder="时间"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <textarea ref="digest" type="text" placeholder="摘要" maxLength="50"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<SubmitArticles />, document.getElementById("submitArticles"));
