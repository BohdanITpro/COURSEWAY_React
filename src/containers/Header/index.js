import React from "react";
  
class App extends React.Component {
  state={
    isActive: false,
  };
  
  render() {
    const isActive = this.state.isActive;
    return (
      <header>
      <div className="container">
         <div className="nav-wrap">
           <a href="/" className="logo">courseway</a>
           <div className={isActive ? "header__burger active" : 'header__burger'} onClick={ () => this.setState({ isActive : !isActive}) } >
               <span />
           </div>
           <nav className={isActive ? 'active' : ''}>
             <ul>
               <li><a href="#">головна</a></li>
              <li><a href="#">курси</a></li>
               <li><a href="#">блог</a></li>
               <li><a href="#">про проект</a></li>
               <li><a href="#">реєстрація</a></li>
             </ul>
           </nav>
         </div>
         <h1>безкоштовні онлайн-курси</h1>
         <h2>від викладачів провідних університетів світу</h2>
         <div className="form-wrap">
           <form className="start-form" action="">
             <input className="input" type="email" placeholder="Email:" required />
               <input className="input" type="password" placeholder="Password:" required />
                 <button className="btn-large btn-bgc-red">розпочати!</button>
           </form>
         </div>
       </div>
     </header>
    );
  }
}
  
export default App;