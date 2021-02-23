import React, { Component } from 'react'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            notifications : 0,
            user : '',
        }
    }

    render() {
        const { isMobile, toggleMenuMobile } = this.props;
        const { notifications, user } = this.state;
        return (
            <div className="header">
                {isMobile ?
                    <button onClick={toggleMenuMobile} className="icon menu-icon"></button>
                :
                    <button onClick={this.pause}>logo</button>
                }
                <button onClick={this.pause} className="icon search"></button>
                {notifications ? 
                    <button onClick={this.pause} className="icon notification-yes"></button>
                :
                    <button onClick={this.pause} className="icon notification"></button>
                }
                {user ? 
                    <button onClick={this.pause} className="icon user-loged"></button>
                :
                    <button onClick={this.pause} className="icon user"></button>
                }
            </div>
        )
    }
}

export default Header;