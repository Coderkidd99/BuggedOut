import React,{useEffect} from "react"
import axios from "axios"


const data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('https://burimi-issuetracker-api.azurewebsites.net/api/Api/getusers');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);
}

export default data; 

