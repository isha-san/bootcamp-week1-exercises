import Link from 'react-router-dom';

export default function NavBar() {
    return(
        <nav>
            <Link exact to="/weather"></Link>
            <Link exact to="/todos"></Link>
        </nav>
    )
}