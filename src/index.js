import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { AuthProviderToken } from "./Context/authToken"
import { ProgressProvider } from './Context/circularProvider';

import { ImgProvider } from './Context/imgProvider';


ReactDOM.render(
    <AuthProviderToken>
        <ImgProvider>
            <ProgressProvider>
                <App />
            </ProgressProvider>
        </ImgProvider>
    </AuthProviderToken>,

    document.querySelector('.root'));

