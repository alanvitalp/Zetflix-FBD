import styles from '../styles/Login.module.css';

// import PropTypes from 'prop-types';

import Button from './Button';


export default function Register() {

  const prevent = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className={styles.loginContainer} style={{
        minHeight: "400px"
      }}>
        <h1>Crie sua conta</h1>
        <form>
          <div className={styles.userContainer}>
            <label>
              Usuário
            <input type="text" placeholder="Digite seu usuário" />
            </label>
          </div>

          <div className={styles.passwordContainer}>
            <label>
              E-mail
            <input type="text" placeholder="Digite seu e-mail" />
            </label>
          </div>

          <div className={styles.checkContainer}>
            <input type="radio" value="user" name="userType" />
            <label>user</label>
          </div>

          <div className={styles.checkContainer}>
            <input type="radio" value="admin" name="userType" />
            <label>admin</label>
          </div>

          <a href="/">Entrar na sua conta</a>

          <div>
            <Button text="Criar conta" onClick={prevent} />
          </div>
        </form>
      </div >
    </div>
  )
}