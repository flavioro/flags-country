import axios from 'axios'

const API = async () => {
  try {
    const resp = await axios.get(String(process.env.API_URL))
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
}

export default axios(String(process.env.API_URL));