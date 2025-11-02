import { useState, useEffect } from 'react';
import Card from '../components/Common/Card.jsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginData } from '../constants.js';
import '../stylings/login.scss';
import Button from '../components/Common/Button.jsx';
import InputField from '../components/Common/InputField.jsx';


function LoginPage() {
    const [formDetails, setFormDetails] = useState({ id: '', name: '' });
    const navigate = useNavigate();
    const { isAuthenticated, login } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = (e) => {
        // prevent actual form submit refresh
        if (e && e.preventDefault) e.preventDefault();
        if (formDetails.id.length > 0 && formDetails.name.length > 0) {
            // set auth session and persist user details
            login({ id: formDetails.id, name: formDetails.name });
            navigate('/dashboard');
        }
    }

    const getLoginForm = () => {
        return (
                <form onSubmit={handleLogin}>
                    <InputField type="text" placeholder={loginData.loginIdPlaceholder} value={formDetails.id}
                        onChange={(e) => setFormDetails({ ...formDetails, id: e.target.value })} />
                    <InputField type="text" placeholder={loginData.loginNamePlaceholder} value={formDetails.name}
                        onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })} />
                    <Button onClick={handleLogin} label={loginData.title} type="submit" />
                </form>
        )
    }
    return (
        <div className='login-page'>
            <Card
                title={loginData.title}
                className='login-wrapper'
                children={getLoginForm()}
                padding='24px 24px 33px 24px'
            />
        </div>
    )
}

export default LoginPage