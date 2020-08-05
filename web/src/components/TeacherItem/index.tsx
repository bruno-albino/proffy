import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/52510650?s=460&u=05681a2ebc440a66847d3d3a137c858f7322443a&v=4" alt="Bruno" />
                <div>
                    <strong>Bruno</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Texto teste para iojfgoidfnbçioerjnfovksdzfngok~smdkjbsçndskclvndscçmndfvnd
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem