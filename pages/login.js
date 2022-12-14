import Head from "next/head";
import styles from '../styles/Login.module.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { magic } from '../lib/magic-client'


const Login = () => {
    
const [email,setEmail] = useState ("");
    const [userMsg, setUserMsg] = useState("");
const router = useRouter();

useEffect(() => {
const handleComplete = () => {
    setIsLoading(false)
};

router.events.on("routeChangeComplete", handleComplete);
router.events.on("routeChangeError", handleComplete);
 
return () => {
    router.events.off("routeChangeComplete", handleComplete);
    router.events.off("routeChangeError", handleComplete);
};

}, [router])

const [isLoading, setIsLoading] = useState (false);

    const handleOnChangeEmail = (e) => { 
        setUserMsg("")
        console.log('event' , e);
        const email = e.target.value;
        setEmail(email);
    };

const handleLoginWithEmail = async (e) => {
e.preventDefault();

if (email) {

if (email === "flavius_flaviu93@yahoo.com" ) {

    try {
setIsLoading(true);

     const didToken = await magic.auth.loginWithEmailOTP({ email, });
     if (didToken) {
        router.push('/')
     }

console.log({ didToken });     
      } catch(error) {
        console.error('Something went wrong logging in', error);
        setIsLoading(false);


      }
    }
    
           else {
        setIsLoading(false);
        setUserMsg("Something went wrong logging in");
        
           }

            }    else {
                setIsLoading(false);
                setUserMsg ('Enter a valid email address');
            
            
        }
};

return (
<div className={styles.container}>

    <Head>
    <title>Netflix SignIn</title> 
    </Head>
<header className={styles.header}>

    <div className={styles.headerWrapper}>
    <a className={styles.logoLink} href="/">
        <div className={styles.logoWrapper}>
     <Image src= {'/static/netflix.svg'} alt="Netflix logo"
     width="128px" height="34px"/> 


    </div>
    </a>
    </div>
    </header>

    <main className={styles.main}>
        <div className={styles.mainWrapper}>
        <h1 className= { styles.signinHeader }>Sign In</h1>
        <input type= "text" placeholder="E-mail address" 
         className={styles.emailInput}
          onChange={handleOnChangeEmail}
          />
   


        <p className={styles.UserMsg}>{userMsg}</p>
            <button onClick={handleLoginWithEmail}
            className= {styles.loginBtn}> 
            { isLoading ? "Loading..." : "Sign In"} </button>
            </div>
    </main>
   
    </div>

);

};


export default Login;