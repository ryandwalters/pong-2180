import React, { Component } from 'react';
import axios from 'axios';

class LoginComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    handleClick = (event) => {
        var apiBaseUrl = "http://localhost:3001/";
        console.log("user name = " + this.state.username);
        console.log("password = " + this.state.password);
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        axios.post(apiBaseUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code === 200) {
                    console.log("Login successfull");
                    // var uploadScreen = [];
                    // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
                    // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
                }
                else if (response.data.errCode === 100) {
                    console.log("Blank user name");
                    alert("User name is blank")
                }
                else if (response.data.code === 105) {
                    console.log("password is blank");
                    alert("Password is blank");
                }
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
                    <form role="search">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                <input type="text" className="form-control input_field" placeholder="user name" onChange={(event) => this.setState({ username: event.target.value })} />
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


export default LoginComp;