var Card =  React.createClass({
    getInitialState:function(){
        return{};
    },
    render:function(){
        return (
            <div>
                <img src="" width="200"/>
                <h3></h3>
                <hr/>
            </div>
        );
    }
})

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <Card login="petehunt"/>
            </div>
        )
    }
});

React.render(<Main />, document.getElementById("root"))


//API URL with JSON data: https://api.github.com/users/petehunt