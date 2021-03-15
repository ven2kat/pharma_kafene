
import classess from './Login.module.css';

const Login = (props) => {
    const loginFormSubmit = (e) => {
        e.preventDefault();
        var data = { "username":e.target.username.value,
                    "password":e.target.password.value,
                }
       if((data.username === "test-admin")&&(data.password === "test-admin")){
           window.alert('Login Successful !!!')
           window.localStorage.setItem('userType','storemanager')
           props.history.push('/products')
       }else if((data.username === "test-sales")&&(data.password === "test-sales")){
        window.alert('Login Successful !!!')
        window.localStorage.setItem('userType','salesexecutive')
        props.history.push('/orders')

       }else{
        window.alert("Please Enter Valid Credential !!!")
       }
    }
    return (
        <>
            <div className={classess.formWrapper}>
            <form onSubmit={loginFormSubmit}>
                <div className={classess.formInnerWrapper}>
                    <img alt='login-icon' src='https://www.seekpng.com/png/detail/138-1387775_login-to-do-whatever-you-want-login-icon.png' width="100px"></img>

                    <h1>LOGIN CREDENTIALS</h1>
                    <input type="text" name="username" placeholder="username"></input>
                    <input type="password" name="password" placeholder="password"></input>
                    <input id={classess.submitButton} type="submit" value="Log In"></input>                                 
                </div>
                </form>   
            </div>
        </>
     );
}
 
export default Login;