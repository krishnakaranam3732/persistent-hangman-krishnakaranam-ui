import React from 'react'
import Game from './game'
import Player from './player'
import axios from 'axios'

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          games: []
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        axios.get("https://persistent-hangman.herokuapp.com/players/" + this.props.match.params.id + "/games/start")
          .then(response => 
                this.fetchData())
      }

    componentDidMount() {
        this.fetchData();
      }

    fetchData = () => {
        fetch("https://persistent-hangman.herokuapp.com/players/" + this.props.match.params.id + "/games")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                games: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }
    
    render() {
        const { error, isLoaded, games } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container">
                    <Player value={this.props.match.params.id} />
                    <div className="move">
                        <button className='btn' onClick={this.handleClick}>
                        New Game
                    </button>
                    </div>
                    <div className="move">
                        <div className="row">
                            {games.map(game => (
                                <Game key={game.game_id} value={game}/>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default Page