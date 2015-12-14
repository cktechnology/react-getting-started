// Components for the star game example
var StarsFrame = React.createClass({
    render:function(){
        var stars = [];
        for(var i=0; i < this.props.numberOfStars; i++){
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
        var props = this.props;
        var selectedNumbers  = props.selectedNumbers.map(function(i){
            return(
                <span onClick={props.unselectNumber.bind(null,i)}>
                    {i}
                </span>
            );
        });
        return(
            <div id="answer-frame">
                <div className="well">
                    {selectedNumbers}
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
            selectNumber = this.props.selectNumber,
            selectedNumbers = this.props.selectedNumbers;

        for(var i=1; i <= maxNumbersToChooseFrom; i++){
            className = "number selected-" + (selectedNumbers.indexOf(i)>=0);
            allNumberChoices.push(
                <div className={className} onClick={selectNumber.bind(null,i)}>{i}</div>
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
        return{ numberOfStars:Math.floor(Math.random()*9) + 1,
                selectedNumbers:[]};
    },
    selectNumber:function(clickedNumber){
        if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
            this.setState({selectedNumbers: this.state.selectedNumbers.concat(clickedNumber)});
        }
    },
    unselectNumber:function(clickedNumber){
        var selectedNumbers = this.state.selectedNumbers;
        var indexOfNumberToUnselect = selectedNumbers.indexOf(clickedNumber);

        // remove the number from the list of selectedNumbers if the user unselects it
        selectedNumbers.splice(indexOfNumberToUnselect, 1);

        this.setState({selectedNumbers : selectedNumbers});
    },
    render:function(){
        var selectedNumbers = this.state.selectedNumbers;
        var numberOfStars = this.state.numberOfStars;
        
        return(
          <div id="game">
              <h2>Play Star 9</h2>
              <hr/>
              <div class="clearfix">
                  <StarsFrame numberOfStars={numberOfStars}/>
                  <ButtonFrame />
                  <AnswerFrame selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
              </div>

              <NumbersFrame selectedNumbers={selectedNumbers} selectNumber={this.selectNumber}/>

          </div>
        );
    }
});

React.render(<Game />, document.getElementById('starGame'));