import React, { Component } from 'react'
import { Menu, Tabs, Header, Audio } from "../components";


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistSelected: false,
            isFavorite: false,
            score: 0,
            scoring: false,
            songSelected: 0,
            addedToLists: false,
            addedToFavorites: false,
        };
        this.audio = "";
        this.limpiarAcordion = this.limpiarAcordion.bind(this);
        this.desplegarAcordion = this.desplegarAcordion.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", () => this.limpiarAcordion());
        
    }

    limpiarAcordion() {
        let contenidos = document.querySelectorAll(".animaAccordion");
        for (let index = 0; index < contenidos.length; index++) {
            contenidos[index].classList.remove("animaAccordion");
        }        
    }

    desplegarAcordion(numeroAcordion) {
        console.log(numeroAcordion);
        let contenidos = document.querySelectorAll(".accordion-content");
        
        setTimeout(() => {
            if (numeroAcordion >= 0) {
                contenidos[numeroAcordion].classList.add("animaAccordion");
            }
        }, 1000);
    }
    
    
    

    render() {
        const { isMobile, toggleMenuMobile, showMenuMobile, search, user, setUser, globalState } = this.props;
        const { playlistSelected, isFavorite, score, scoring, songSelected, addedToLists, addedToFavorites } = this.state;
        return (
            <div>
                <Header isMobile={isMobile} toggleMenuMobile={toggleMenuMobile} user={user} setUser={setUser}></Header>
                <div className="page-content">
                <div>
        <h2>Preguntanos</h2>
        <p>Puedes contactarnos al 0800-sp.five, en caso que la siguiente lista no resuelva tu consulta.</p>
        <div className="questions-form">
            <div className="questions-titles">
                <ul>
                    <li>
                        Uso
                    </li>
                </ul>
            </div>
        <ul>
            <li>
                <div class="accordion" onClick={() => this.desplegarAcordion(0)}>
                    <div class="accordion-title"> Como doy de alta el servicio?</div> 
                    <div class="accordion-content">
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deserunt neque possimus voluptate architecto corporis exercitationem laudantium quo blanditiis rem labore et, voluptatibus minus perferendis, expedita delectus beatae sequi sed.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="accordion" onClick={() => this.desplegarAcordion(1)}>
                    <div class="accordion-title"> Cuanto cuesta?</div> 
                    <div class="accordion-content">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam corporis tempore nobis laudantium explicabo velit aspernatur eveniet! Consequuntur sapiente atque natus alias tenetur expedita magni autem eum fugiat error.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="accordion" onClick={() => this.desplegarAcordion(2)}>
                    <div class="accordion-title"> Donde veo mis playlist?</div> 
                    <div class="accordion-content">
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quis. Dignissimos veniam alias similique sint quisquam mollitia praesentium adipisci fugiat atque vitae doloremque consequuntur dolorum, quibusdam sequi, enim doloribus quidem?</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="accordion" onClick={() => this.desplegarAcordion(3)}>
                    <div class="accordion-title"> Como subo un audio</div> 
                    <div class="accordion-content">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eveniet amet tenetur error ullam ea voluptatum enim ut porro quae, minima accusantium sunt assumenda perferendis ad quas beatae aperiam obcaecati?</p>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        <div className="questions-form">
            <div className="questions-titles">
                <ul>
                    <li>
                        Pagos
                    </li>
                </ul>
            </div>
        <ul>
            <li>
                <div class="accordion" onClick={() => this.desplegarAcordion(4)}>
                    <div class="accordion-title"> Como realizo los pagos?</div> 
                    <div class="accordion-content">
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deserunt neque possimus voluptate architecto corporis exercitationem laudantium quo blanditiis rem labore et, voluptatibus minus perferendis, expedita delectus beatae sequi sed.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="accordion" onClick={() => this.desplegarAcordion(5)}>
                    <div class="accordion-title"> Cuando se habilita mi plan?</div> 
                    <div class="accordion-content">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam corporis tempore nobis laudantium explicabo velit aspernatur eveniet! Consequuntur sapiente atque natus alias tenetur expedita magni autem eum fugiat error.</p>
                    </div>
                </div>
            </li>
            
        </ul>
        </div>
    </div>
                </div>
            </div>
        )
    }
}

export default Questions;