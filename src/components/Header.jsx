import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            notifications : 0,
            points : 0,
        }
    }

    render() {
        const { isMobile, toggleMenuMobile, user, setUser } = this.props;
        const { notifications, points } = this.state;
        return (
            <div className="header">
                <div className="header-left">
                    {user && isMobile ?
                        <button onClick={toggleMenuMobile} className="icon menu-icon"></button>
                    :
                        <Link to="/" >
                            <div className="logo"></div>
                        </Link>
                    }
                    
                    <div onClick={this.pause} className="center">
                        <p>
                            Puntos: 
                            {points}
                        </p>
                    </div>
                </div>
                <div></div>
                <div>
                    {user ?
                    <div>
                        {notifications ? 
                            <button onClick={this.pause} className="icon notification-yes"></button>
                        :
                            <button onClick={this.pause} className="icon notification"></button>
                        }
                        <button onClick={() => setUser('')} className="icon user-loged"></button>
                    </div>
                    :
                    <div>
                        <button onClick={this.pause} className="icon question"></button>
                        <Link to="/login" >
                            <button className="icon user"></button>

                        </Link>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Header;