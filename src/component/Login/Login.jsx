import React ,{useState} from 'react';
import "./login.css"
import PropTypes from 'prop-types';
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
  return(
  // <div className='body'>
  // <div className="login-wrapper">
  //   <h1>Please Log In</h1>
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       <p>Username</p>
  //       <input type="text" onChange={e => setUserName(e.target.value)}/>
  //     </label>
  //     <label>
  //       <p>Password</p>
  //       <input type="password" onChange={e => setPassword(e.target.value)}/>
  //     </label>
  //     <div>
  //       <button type="submit">Submit</button>
  //     </div>
  //   </form>
  //   </div>
  //   </div> 
  <div className='body-1'>
<div class="container-1">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={handleSubmit} >
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email" onChange={e => setUserName(e.target.value)}/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" onChange={e => setPassword(e.target.value)} />
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
  )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
  