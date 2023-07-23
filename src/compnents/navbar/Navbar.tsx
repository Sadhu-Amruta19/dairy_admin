import "./navbar.scss"


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>dairy</span>
        </div>
        <div className="icons">
          <img src="/search.svg" alt="" className="icon" />
          <img src="/app.svg" alt="" className="icon" />
          <img src="/expand.svg" alt="" className="icon" />
          <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
          </div>
          <div className="user">
            <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" />
            Jane
          </div>
          <img src="/settings.svg" alt="" className="icon"/>
        </div>
      </div>
    )
  }
  
  export default Navbar
