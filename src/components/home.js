import React from 'react'
import { Redirect } from 'react-router-dom'


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', redirectTo: false, redirectToSign: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({redirectTo: true });
    }

    handleClick () {
        this.setState({redirectToSign: true });
    }

    render() {
        let { redirectTo, redirectToSign } = this.state;
        if (redirectTo) return <Redirect to={'/player/'+this.state.value} />;
        if (redirectToSign) return <Redirect to={'/signup'} />;

        return (
            <div className="container move">
                <div className="login-form">
                        <div className="panel">
                            <h2>Player Login</h2>
                            <p>Please enter your player id</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input value={this.state.value} onChange={this.handleChange} type="text" className="form-control" id="inputId" placeholder="Player id"/>
                            </div>
                            <p>
                                <br></br>
                            </p>
                            <button type="submit" className="btn btn-primary move-btn">Log-in</button>
                            <p>
                            </p>
                            <button onClick={this.handleClick} className="btn btn-primary move-btn">signup</button>
                            
                        </form>
                </div>
            </div>
        )
    }
}

export default Home