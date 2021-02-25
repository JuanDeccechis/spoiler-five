import React, { Component } from 'react'
import { Tabs, Header, Menu } from "../components";
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInSongs: true,
            conditionForSign: false
        };
        this.handleChangeGlobalSearch = this.handleChangeGlobalSearch.bind(this);
        this.handleClickSignIn = this.handleClickSignIn.bind(this);
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

    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser } = this.props;
        const { conditionForSign } = this.state;

        return (
            <div>
                <Header isMobile={isMobile} toggleMenuMobile={toggleMenuMobile} user={user} setUser={setUser}></Header>
                <div className="page-content">
                    <Menu isMobile={isMobile} showMenuMobile={showMenuMobile} user={user} setUser={setUser}></Menu>

                    <div className="page">
                        <div className="search">
                            <input placeholder="Buscar" ref="inputSearch" onChange={this.handleChangeGlobalSearch} />
                        </div>
                        {search &&
                            <Tabs></Tabs>
                        }

                        <form action="" method="post">
                            <div>
                                <label htmlFor="username">Usuario</label>
                                <input id="username" ref="username" required/>

                            </div>
                            <div>
                                <label htmlFor="password">Contraseña</label>
                                <input id="password" ref="password" required/>

                            </div>
                            <div>
                                <Link to="/" ref="linkToHome" onClick={this.handleClickSignIn}>
                                <button type="button">Iniciar</button>
                                </Link>
                                <Link to="/" >
                                <button type="button" onClick={this.handleClickSignIn}>Registrarse</button>
                                </Link>
                            </div>
                            <button>obtener plan</button>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;