import React from 'react'
import AccountBox from 'material-react-icons/AccountBox'

class Player extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            player: {}
          };

    }

    componentDidMount() {
        fetch('https://persistent-hangman.herokuapp.com/players/'+this.props.value)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                player: { "username" : result.username,
                          "player_id" : result.player_id}
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
        const { error, isLoaded, player } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
        return (
            <div className="player">
                <div className="feature-item">
                    <div className="row">
                        <div className="col-sm-6 profile text-muted" >
                            <AccountBox size={64} />
                        </div>
                        <div className="col-sm-6">
                            <h2>  {player.username}, <span className="text-muted"> Id: </span>{player.player_id}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
    }
}

export default Player