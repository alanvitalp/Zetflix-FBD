import React from 'react'
import styles from '../styles/Nav.module.css';

const Header = () => {
  return (
    <div className={styles.navContainer}>
      <nav className="navbar navbar-expand-md py-4 navbar-dark bg-dark">
        <a className="navbar-brand " href="/"><h2>Zetflix</h2></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/films">Films <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/series">Series</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/season">Season</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/episode">Episode</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/actor">Actors</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/director">Directors</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/producer">Producers</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/category">Categorys</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/star_f">Stars_F</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/star_e">Stars_E</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/watch_f">Rating Films</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/watch_s">Rating Series</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/users">Users</a>
            </li>
          </ul>
        </div>
      </nav >
    </div >
  )
}

export default Header
