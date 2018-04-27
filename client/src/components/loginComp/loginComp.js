//
//
import React, { Component } from 'react';
import { withRouter } from 'react-router';


class LoginComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: ' '  //for login attempts
        }
    }
    handleClick = (event) => {
        event.preventDefault();
        let apiBaseUrl;
        if (process.env.NODE_ENV === 'production') {
            apiBaseUrl = "";    
          } else {
            apiBaseUrl = "http://localhost:3001/";
          };
                  
        let payload = {
            "username": this.state.username,
            "password": this.state.password
        }
        let sendJSON;
        sendJSON = JSON.stringify(payload);

        fetch( apiBaseUrl + 'login', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: sendJSON
        })
            .then( response =>  { return response.json() } )
            .then( data => {
                console.log("code = " + data.errCode);
                if (data.errCode === 200) {
                    //password matched for an administrator
                    this.props.history.push('/physics-engine');
                }
                else if (data.errCode === 210) {
                    //password matched for a user
                    this.props.history.push('/gamestart');
                }
                else  {
                    //there is no match in either the admin or user files
                    //so just put the error message on the screen and stay put
                    this.setState({ errorMessage: data.errrMsg })
                };

                return data.errCode;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div style={{ padding: '5px 5px 5px 10px' }}>
                <div className='row' style={{ padding: '5px 5px 5px 5px', margin: '5px 5px 5px 5px' }}  >
                    <br />
                    <h5> {this.state.errorMessage} </h5>
                    <form role="search">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                <input type="text" className="form-control input_field" placeholder="user name" onChange={(event) => this.setState({ username: event.target.value }) } />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                <input type="password" className="form-control input_field" placeholder="password" onChange={(event) => this.setState({ password: event.target.value })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-xs-6">
                                <button type="submit" className="btn btn-default" onClick={(event) => this.handleClick(event)}  >Login Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}


export default withRouter(LoginComp);