import React, { Component } from 'react'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            isMobile : false,
            notifications : 0,
            user : '',
        }
    }

    componentDidMount() {
    }

    render() {
        const { isMobile, notifications, user } = this.state;
        return (
            <div className="header">
                <span>logo</span>
                {isMobile && 
                    <button onClick={this.pause} className="icon menu-icon"></button>
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