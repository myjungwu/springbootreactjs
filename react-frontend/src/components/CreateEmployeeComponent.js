import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    state = {
        // step 2
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        emailId: ''
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         // step 2
    //         id: this.props.match.params.id,
    //         firstName: '',
    //         lastName: '',
    //         emailId: ''
    //     }
    //     this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    //     this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    //     this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    // }

    // step 3
    componentDidMount(){
        console.log("등록 or 수정 " +  this.state.id);
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id)
            .then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        const {firstName, lastName, emailId } = this.state;

        e.preventDefault();
        //let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        let employee = {firstName, lastName, emailId};
        console.log('employee => ' + JSON.stringify(employee));

        // 등록
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.log("===> createEmployee Error Occurred ");
                console.log(JSON.stringify(error));
            });
        //수정    
        }else{
            EmployeeService.updateEmployee(employee, this.state.id)
            .then( res => {
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.log("===> updateEmployee Error Occurred ");
                //console.log(JSON.stringify(error));
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            });
        }
    }
    
    changeEmployeeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // changeFirstNameHandler= (event) => {
    //     this.setState({firstName: event.target.value});
    // }
    // changeLastNameHandler= (event) => {
    //     this.setState({lastName: event.target.value});
    // }
    // changeEmailHandler= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    cancel = () => {
        this.props.history.push('/employees');
    }

    getTitle = () =>{
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        const {firstName, lastName, emailId} = this.state;
        const {changeEmployeeHandler, getTitle, cancel, saveOrUpdateEmployee } = this;

        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={firstName} onChange={changeEmployeeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={lastName} onChange={changeEmployeeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={emailId} onChange={changeEmployeeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
