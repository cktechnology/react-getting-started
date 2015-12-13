// Components for the star game example
var StarsFrame = React.createClass({
    render:function(){
        var numberOfStars = 5;
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
                    ...
                </div>
            </div>
        );
    }
});

var Game = React.createClass({
    render:function(){
        return(
          <div id="game">
              <h2>Play Star 9</h2>
              <hr/>
              <div class="clearfix">
                  <StarsFrame />
                  <ButtonFrame />
                  <AnswerFrame />
              </div>
          </div>
        );
    }
});

React.render(<Game />, document.getElementById('starGame'));