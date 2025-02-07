import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import { useNavigate } from 'react-router';
function GoogleAuth(props){
    const navigate=useNavigate()
    useGoogleOneTapLogin({
        onError: (error) => {
            console.log(error)
            console.log('error');
        },
        onSuccess: (response) => {
            console.log(response)
            console.log(response.email);
            console.log(response.name);
            props.setName(response.name)
            props.setEmail(response.email)
            props.setLogin(true)
            navigate('/')
        },
        googleAccountConfigs: {
          client_id: "817887773698-p3f89bon73jjmqtjdfqebt0ldellpn3r.apps.googleusercontent.com"
        },
      });
      return (
        <>
        </>
      )
}
export default GoogleAuth