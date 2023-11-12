import { useState} from 'react';
import validation from './validation';
import  style  from './Form.module.css';


const Form = ({onLogin}) => {
     //const {loginWithRedirect} = useAuth0();
    //const {isAuthenticated} = useAuth0();
    //console.log(isAuthenticated)
    const [userData, setUserData] = useState({
        email:"",
        password:"",
      });

      const [errors, setErrors] = useState({});

      const handleChange = (e) => {
        setErrors(validation({...userData, [e.target.name]: e.target.value}))
        setUserData({...userData, [e.target.name]: e.target.value});

      };


      const handleLogin = (e) => {
        e.preventDefault();
        console.log("HANDLELOG")
        onLogin(userData.email, userData.password);
    };

  return (
    <div className={style.Container}>
        <form>
            <div>
                <label htmlFor="">Email</label>
                <input 
                name='email' 
                type="text" 
                value={userData.email} 
                onChange={handleChange}/>

                {
                    errors.e1 ? (
                    <p>{errors.e1}</p>
                    ) : errors.e2 ? (
                        <p>{errors.e2}</p>
                    ) : ( 
                        <p>{errors.e3}</p>
                    )
                }
                
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input 
                name= 'password' 
                type="password" 
                value={userData.password}
                onChange={handleChange} />
                {
                    errors.p1 ? (
                    <p>{errors.p1}</p>
                    ) : ( 
                        <p>{errors.p2}</p>
                    ) 
                }
            </div>
            {/* <button onClick={loginWithRedirect} className={style.btnsearch}>Login</button> */}
            <button className={style.btnsearch} onClick={handleLogin}>Login</button>
        </form>
        
    </div>
  )
}

export default Form