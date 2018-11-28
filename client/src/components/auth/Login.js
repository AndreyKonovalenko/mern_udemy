import React, { Component } from 'react';

class Loading extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitHundler = event => {
    event.preventDefault();
    const userLogged = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userLogged);
  };
  
  render() {
    return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your DevConnector account</p>
            <form onSubmit={this.onSubmitHundler}>
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Email Address" 
                  name="email" 
                  value={this.state.name}
                  onChange={this.onChangeHandler}/>
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Password" 
                  name="password" 
                  value={this.state.name}
                  onChange={this.onChangeHandler}/>
              </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Loading;
