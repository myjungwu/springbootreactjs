import axios from 'axios';

const EMPLOYEE_API_BASE_URL = process.env.REACT_APP_APIURL;
//"http://localhost:8080/api/v1/employees";

const instance = axios.create({baseURL: EMPLOYEE_API_BASE_URL});
export default instance