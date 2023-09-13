import React from 'react'
import '../App.css';

const Header = (props) => {
    return (
        <div className='container-fluid flex shopping-card'>
            <div onClick={() => props.handleShow(false)} className='fs-2 p-2'><b>Mega Mart</b> </div>

            <div className='navbar search-bar  '>
                <form className="container-fluid">
                    <div className="input-group p-2">
                        {/* <span>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </span> */}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </form>
            </div>

            <div onClick={() => props.handleShow(true)}  className='fs-3 p-2'> <b>Cart</b>
                <sup className='bg-warning px-2 rounded-circle'><b>{props.count} </b> </sup>
            </div>


        </div>
    )
}

export default Header
