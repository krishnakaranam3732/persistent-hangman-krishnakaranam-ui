import React from 'react'
import axios from 'axios'

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            game : this.props.value
        }
        this.show = "";
        this.handleChange = this.handleChange.bind(this);
        this.update_game = this.update_game.bind(this);
    }

    handleChange(event) {
        if(event.target.value !== ""){
            axios.get("https://persistent-hangman.herokuapp.com/games/"+this.state.game.game_id+"/guess/"+event.target.value)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(
                this.update_game()
            );
            
        }
    }

    update_game(){
        axios.get("https://persistent-hangman.herokuapp.com/games/"+this.state.game.game_id)
            .then(res => {
                this.setState({
                    game: res.data
                  });
            }
            );
    }

    render() {
        
        const isNewGame = this.state.game.status !== "Won";
        let input;

        if (isNewGame) {
            input = <input maxLength="1" onChange={this.handleChange} type="text" 
                            placeholder="guess letter" className="form-control-less"/>
        } else {
            input = <span><br></br></span>;
        }

        return (
            <div className="col-sm-6">
                <div className="feature-item feature-item-color">
                    <h2>{this.state.game.game_id}</h2>
                    <h3>{this.state.game.status}</h3>
                    <p className="text-muted">Guessed: {this.state.game.guessed}</p>
                    <p className="text-muted">Correct: {this.state.game.correct}</p>
                    {input}
                </div>
            </div>
        )
    }
}

export default Game