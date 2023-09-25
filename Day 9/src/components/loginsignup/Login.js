import React, { useEffect, useState } from 'react';
import { UseSelector,useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {validate} from "./validate"; 
import {notify} from "./toast";
import styles from "./SignUp.module.css"
import { login } from '../../features/User';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [data , setData] = useState({
        email:"",
        password:"",
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});

    useEffect(()=>{
        setErrors(validate(data,"login")) 
    },[data,touched])

    const changeHandler = event => {
            setData({...data ,[event.target.name] :event.target.value })
    }

    const focusHandler = event =>{
        setTouched({ ...touched,[event.target.name]: true})
    }

    const submitHandler =event =>{
        dispatch(login({name:data.email}));
        history.push('/home');
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify ("Your loged up  Successfully","success")
        } else{
            notify("Invalid Data" , "error")
            setTouched({
                email:true,
                password:true,
            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h1 className={styles.header}>Login</h1>

                <div className={styles.formField} >
                    <label>Email</label>
                    <input style={{color:'black'}}
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type='text'  
                        name='email' 
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>

                <div className={styles.formField} >
                    <label>Password</label>
                    <input style={{color:'black'}}
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type='password'  
                        name='password' 
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className={styles.formButtons}>
                    <Link to="/signup">Sign Up</Link>
                <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;