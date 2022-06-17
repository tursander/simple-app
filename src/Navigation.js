import React, {useState} from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

 
const Navigation = () => {

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () =>{
        setModalIsOpen(true)
    };

    const setModalIsOpenToFalse = () =>{
        setModalIsOpen(false)
    };

    return (
        <div className="top-menu">
            <nav className="menu">
                <ul className="nav-menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-us">About</NavLink></li>
                    <li><NavLink to="/category">Category</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><button className='ticker-btn' onClick={setModalIsOpenToTrue}>View Modal</button></li>
                </ul>
            </nav>
            <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <p>Hello world !!</p>
            </Modal>
        </div>
    );
}
 
export default Navigation;