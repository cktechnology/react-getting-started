// Create a React component
var Button = React.createClass({
    localHandleClick: function() {
        this.props.localHandleClick(this.props.increment);
    },
    render: function(){
        return(
            <button onClick={this.localHandleClick}>+{this.props.increment}</button>
        )
    }
})

// New component to just show the value of the counter
var Result = React.createClass({
    render: function(){
        return(
            <div>{this.props.localCounter}</div>
        )
    }
})

// Single Main component to include all the other components
var Main = React.createClass({
    getInitialState : function() {
        return {counter: 0};
    },
    handleClick : function(anIncrement){
        this.setState({ counter: this.state.counter + anIncrement });
    },
    render: function(){
        return(
            <div>
                <Button localHandleClick={this.handleClick} increment={1}/>
                <Button localHandleClick={this.handleClick} increment={5}/>
                <Button localHandleClick={this.handleClick} increment={10}/>
                <Button localHandleClick={this.handleClick} increment={50}/>
                <Button localHandleClick={this.handleClick} increment={100}/>
                <Result localCounter={this.state.counter}/>
            </div>
        )
    }
})

React.render(<Main />, document.getElementById("root"))