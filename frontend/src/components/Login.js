import styles from '../styles/Login.module.css';

// import PropTypes from 'prop-types';

import Button from './Button';


export default function Login() {

  const prevent = (e) => {
    e.preventDefault();
  }


  return (
    <div className="container">
      <div className={styles.loginContainer}>
        <h1>Bem-vindo ao Zetflix</h1>

        <h2>Faça login</h2>
        <form>
          <div className={styles.userContainer}>
            <label>
              Usuário
            <input type="text" placeholder="Digite seu e-mail" />
            </label>
          </div>

          <div className={styles.passwordContainer}>
            <label>
              Senha
            <input type="text" placeholder="Digite sua senha" />
            </label>
          </div>

          <a href="/register">Criar a sua conta</a>

          <div>
            <Button text="Entrar" onClick={prevent} />
          </div>
        </form>
      </div>
    </div>

  )
}