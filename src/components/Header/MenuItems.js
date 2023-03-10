import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
 
const MenuItems = (props) => {
    
    const { parentMenu } = props;

    const location = useLocation();
    const postURL = location.pathname.split('/'); 
    const pathLength = Number(postURL.length)

    const [home, setHome] = useState(false)
	const [page, setPage] = useState(false)
	const [event, setEvent] = useState(false)
	const [course, setCourse] = useState(false)
	const [blog, setBlog] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setPage(false)
			setEvent(false)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'page') {
			setHome(false)
			setPage(!page)
			setEvent(false)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'event') {
			setHome(false)
			setPage(false)
			setEvent(!event)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'course') {
			setHome(false)
			setPage(false)
			setEvent(false)
			setCourse(!course)
			setBlog(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setPage(false)
			setEvent(false)
			setCourse(false)
			setBlog(!blog)
		}
	};

    return (
        <>
            <li className={location.pathname === "/" ? "menu-active" : ""}>
                <Link to="/">
                    Home
                </Link>
            </li>

            <li className={location.pathname === "/course" ? "menu-active" : ""}>
                <Link to="/course">
                    Courses
                </Link>
            </li>

            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/contact">Contact</Link>
            </li>
        </>
    );
}

export default MenuItems;