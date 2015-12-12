var Card =  React.createClass({
    getInitialState:function(){
        return{};
    },
    componentDidMount:function(){
        var component = this;
        $.get("https://api.github.com/users/" + this.props.login, function(data){
            component.setState(data);
        });
    },
    render:function(){
        return (
            <div>
                <img src={this.state.avatar_url} width="200"/>
                <h3>{this.state.name}</h3>
                <hr/>
            </div>
        );
    }
});

var Form = React.createClass({
    handleSubmit:function(e){
        e.preventDefault(); // otherwise the form will submit normally and refresh the page...
        var loginInputByUser = React.findDOMNode(this.refs.githubLoginRef);

        // Add the card here
        this.props.addCard(loginInputByUser.value);
        loginInputByUser.value = ''; // reset the input to blank
    },
    render:function(){
        return (
          <form onSubmit={this.handleSubmit}>
              <input placeholder="github login" ref="githubLoginRef"/>
              <button>Add</button>
          </form>
        );
    }
});

var Main = React.createClass({
    getInitialState:function(){
        return { logins:[] };
    },
    addCard:function(loginToAdd){
        // grab the current states login array and push the new login into it and then set the state to the new array we just pushed an item to
        this.setState({logins: this.state.logins.concat(loginToAdd)});
    },
    render: function(){
        // For the Form component to be able to invoke the addCard function, we need to pass it in as a property
        var cards = this.state.logins.map(function(login){
            return (<Card login={login}/>)
        });
        return (
            <div>
                <Form addCard={this.addCard}/>
                {cards}
            </div>
        )
    }
});

React.render(<Main />, document.getElementById("root"))


//API URL with JSON data: https://api.github.com/users/petehunt

// sample usernames: petehuny, zpao, spicyj