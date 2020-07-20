import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import TactIcon from './components/tactIcons';

class BreezeTact extends React.Component{

  state={
    phone: true,
    mail: true,
    chat: true
  }

  render(){
    return(
      <>
        <div className={styles.CoverSpace}></div>
        <div className={styles.BreezeTactContainer}>
          {this.state.phone && <TactIcon classname='fa-phone' />}
          {this.state.mail && <TactIcon classname='fa-envelope' />}
          {this.state.chat && <TactIcon classname='fa-comment' />}
        </div>
      </>
    );
  }
}



ReactDOM.render(
  <React.StrictMode>
    <BreezeTact />
  </React.StrictMode>,
  document.getElementById('root')
);

