import axios from 'axios';
const instance = axios.create({
baseURL: 'https://react-rails-api-demo.herokuapp.com/api/v1',
header:{
	"Content-Type":"application/json;"
}
});
export default instance;
