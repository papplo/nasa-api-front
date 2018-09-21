import React from 'react';
import { default as NavBar } from '../navbar/NavBar';

export default (props) => {

  let classes = ['hero', 'is-bold'];
  classes.push(
    props.full
    ? 'is-fullheight'
    : 'is-large'
  );
  classes.push(
    props.light
    ? 'is-light'
    : 'is-dark is-main-background'
  );

  const style = {
    backgroundImage: `url(${props.bg})`,
    backgroundSize: 'cover'
  }

  return (
    <section className={classes.join(' ')} style={style}>
      <NavBar
        title="Look into space"
        />
      <div className="hero-body"  >
        <canvas id="stars-bg"></canvas>

        <div className="container">
          <h1 className="title">
          {props.title}
          </h1>
          <h2 className="subtitle">
          {props.subtitle ||''}
          </h2>
          {props.children}
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">

          </div>
        </nav>
      </div>
    </section>
  )
}
