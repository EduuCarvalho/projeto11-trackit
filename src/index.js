import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { AuthProviderToken } from "./Context/authToken"
import { ImgProvider } from './Context/imgProvider';


ReactDOM.render(
    <AuthProviderToken>
        <ImgProvider>
            <App />
        </ImgProvider>
    </AuthProviderToken>,

    document.querySelector('.root'));

