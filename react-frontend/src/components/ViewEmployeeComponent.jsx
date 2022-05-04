import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    state = {
        id: this.props.match.params.id,
        employee: {}
    }
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         id: this.props.match.params.id,
    //         employee: {}
    //     }
    // }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
        .catch(error => {
            console.log("===> viewEmployee Error Occurred ");
            console.log(JSON.stringify(error));
        });
    }

    render() {
        const { firstName, lastName, emailId} = this.state.employee;

        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
