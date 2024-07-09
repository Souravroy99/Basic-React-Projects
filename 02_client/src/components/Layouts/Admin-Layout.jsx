// Outlet --> When we use nested loop then for showing the child routes we need to use 'Outlet'.
import {NavLink, Outlet} from 'react-router-dom'
import {FaUser , FaRegListAlt , FaHome} from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'


const AdminLayout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li> <NavLink to='/admin/users'> <FaUser/> Users </NavLink> </li>
                            <li> <NavLink to='/admin/contacts'> <FaMessage/> Contacts </NavLink> </li>
                            <li> <NavLink to='/service'> <FaRegListAlt/> Services </NavLink> </li>
                            <li> <NavLink to='/'> <FaHome/> Home </NavLink> </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <Outlet/>

        </>
    )
}

export default AdminLayout ;