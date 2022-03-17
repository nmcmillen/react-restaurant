import axios from "axios";

export async function getData() {
    let response = await axios.get('https://sheltered-refuge-85246.herokuapp.com/api/json')
    console.log(response.data)
    return response.data;
}