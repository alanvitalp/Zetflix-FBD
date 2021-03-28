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
            <input type="text" />
            </label>
          </div>

          <div className={styles.passwordContainer}>
            <label>
              Senha
            <input type="text" />
            </label>
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