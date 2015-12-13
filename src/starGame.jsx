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
        var allNumberChoices = [];
        for(var i=1; i <= maxNumbersToChooseFrom; i++){
            allNumberChoices.push(
                <div className="number">{i}</div>
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
        return{selectedNumbers:[3,6]};
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

              <NumbersFrame />

          </div>
        );
    }
});

React.render(<Game />, document.getElementById('starGame'));