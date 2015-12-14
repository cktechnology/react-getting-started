// Components for the star game example
var StarsFrame = React.createClass({
    render:function(){
        var numberOfStars = Math.floor(Math.random()*9) + 1;
        var stars = [];
        for(var i=0; i<numberOfStars; i++){
            stars.push(
                <span className="glyphicon glyphicon-star"></span>
            )
        }
        return(
            <div id="star-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        );
    }
});

var ButtonFrame = React.createClass({
    render:function(){
        return(
            <div id="button-frame">
                <button className="btn btn-primary btn-lg">=</button>
            </div>
        );
    }
});

var AnswerFrame = React.createClass({
    render:function(){
        return(
            <div id="answer-frame">
                <div className="well">
                    {this.props.selectedNumbers}
                </div>
            </div>
        );
    }
});

var NumbersFrame = React.createClass({
    render:function(){
        var maxNumbersToChooseFrom = 9;
        var allNumberChoices = [],
            className,
            clickNumber = this.props.clickNumber,
            selectedNumbers = this.props.selectedNumbers;

        for(var i=1; i <= maxNumbersToChooseFrom; i++){
            className = "number selected-" + (selectedNumbers.indexOf(i)>=0);
            allNumberChoices.push(
                <div className={className} onClick={clickNumber.bind(null,i)}>{i}</div>
            );
        }
        return(
            <div id="numbers-frame">
                <div className="well">
                    {allNumberChoices}
                </div>
            </div>
        );
    }
});

var Game = React.createClass({
    getInitialState:function(){
        return{selectedNumbers:[]};
    },
    clickNumber:function(clickedNumber){
        if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
            this.setState({selectedNumbers: this.state.selectedNumbers.concat(clickedNumber)});
        }
    },
    render:function(){
        return(
          <div id="game">
              <h2>Play Star 9</h2>
              <hr/>
              <div class="clearfix">
                  <StarsFrame />
                  <ButtonFrame />
                  <AnswerFrame selectedNumbers={this.state.selectedNumbers}/>
              </div>

              <NumbersFrame selectedNumbers={this.state.selectedNumbers} clickNumber={this.clickNumber}/>

          </div>
        );
    }
});

React.render(<Game />, document.getElementById('starGame'));