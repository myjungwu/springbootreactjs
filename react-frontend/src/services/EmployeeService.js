//import axios from 'axios';
import axios from './axios/axios.js';

class EmployeeService {

    getEmployees(){
        //return axios.get(`${EMPLOYEE_API_BASE_URL}`);
        return axios.get('/api/employees/')
    }

    createEmployee(employee){
        //return axios.post(`${EMPLOYEE_API_BASE_URL}`, employee);
        return axios.post('/api/employees/', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(`api/employees/${employeeId}`);
    }

    updateEmployee(employee, employeeId){
        return axios.put(`api/employees/${employeeId}`, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(`api/employees/${employeeId}`);
    }
}

export default new EmployeeService()