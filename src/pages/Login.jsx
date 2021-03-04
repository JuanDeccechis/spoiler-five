import React, { Component } from 'react'
import { Tabs, Header, Menu } from "../components";
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInSongs: true,
            conditionForSign: false,
            show: false,
        };
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.handleClickSignIn = this.handleClickSignIn.bind(this);
        this.toggleSelectedTab = this.toggleSelectedTab.bind(this);
        this.showIcons = this.showIcons.bind(this);
    }

    componentDidMount() {
    }

    handleChangeGlobalSearch() {
        const { handleChangeGlobalSearch } = this.props;
        const { inputSearch } = this.refs;
        handleChangeGlobalSearch(inputSearch.value);
    }

    handleClickSignIn(event) {
        const { username, password } = this.refs;
        const { setUser } = this.props;
        if (username.value && password.value){
            setUser(username.value);
            this.setState({ conditionForSign: true });
        } else {
            this.setState({ conditionForSign: false });
            event.preventDefault();
            event.stopPropagation();
        }
    }

    toggleSelectedTab(value) {
        let previo = document.querySelector(".tab-selected");
        if (previo) {
            previo.classList.remove("tab-selected");
        }
        document.querySelectorAll(".tab-li-item")[value].classList.add("tab-selected");
        let tabContent = document.querySelectorAll(".tab-item")[value].innerHTML;
        console.log(tabContent);
        this.setState({ selectedTab: tabContent });
    }

    showIcons() {
        const { show } = this.state;
        this.setState({ show: !show });
    }

    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser } = this.props;
        const { conditionForSign, show } = this.state;

        return (
            <div>
                <Header isMobile={isMobile} toggleMenuMobile={toggleMenuMobile} user={user} setUser={setUser}></Header>
                <div className="page-content">
                    <Menu isMobile={isMobile} showMenuMobile={showMenuMobile} user={user} setUser={setUser}></Menu>

                    <div className="page">

                        <form action="" method="post">
                            <div className="login-input">
                                <label htmlFor="username">Usuario</label>
                                <input id="username" ref="username" required/>

                            </div>
                            <div className="login-input">
                                <label htmlFor="password">Contraseña</label>
                                <input id="password" ref="password" required/>

                            </div>
                            <div>
                                <Link to="/" ref="linkToHome" onClick={this.handleClickSignIn}>
                                <button type="button">Iniciar sesion</button>
                                </Link>
                            </div>
                            <div>
                                <span className="register-invitation">Tambien podes registrarte</span>
                                <Link to="/" >
                                <button type="button" className="primary-button" onClick={this.handleClickSignIn}>Registrarse</button>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;