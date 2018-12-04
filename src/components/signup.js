import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '',
                      player_id_label: '',
                      player_id: '',
                      redirectTo: false};
        this.player_id = '';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleChange(event) {
        this.setState({username: event.target.value});
    }
    
    handleSubmit(event) {
        axios.post('https://persistent-hangman.herokuapp.com/players', {
            username: this.state.username
        })
        .then(response => 
            this.setState({player_id: response.data.player_id,
                           player_id_label: "Player id: "}));
        event.preventDefault();
    }
    
    handleClick () {
        this.setState({redirectTo: true });
    }

    render() {
        let { redirectTo } = this.state;
        if (redirectTo) return <Redirect to={'/'} />;

        return (
            <div className="container move">
                <div className="login-form">
                        <div className="panel">
                            <h2>Player Sign up</h2>
                            <p>Please enter your username</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="inputId" placeholder="username"/>
                            </div>
                            <p>
                                <br></br>
                            </p>
                            <button type="submit" className="btn btn-primary move-btn">signup</button>
                        </form>
                        <br></br>
                            <button onClick={this.handleClick} className="btn btn-primary move-btn">Log-in</button>
                            <p>
                            {this.state.player_id_label} {this.state.player_id}
                            </p>
                </div>
            </div>
        )
    }
}

export default Home