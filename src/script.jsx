var Card =  React.createClass({
    render:function(){
        return (
            <div>
                <img src="https://avatars.githubusercontent.com/u/239742?v=3" width="200"/>
                <h3>Pete Hunt</h3>
                <hr/>
            </div>
        );
    }
})

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <Card />
            </div>
        )
    }
});

React.render(<Main />, document.getElementById("root"))


//API URL with JSON data: https://api.github.com/users/petehunt