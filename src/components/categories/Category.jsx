import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { articlesArray } from '../../mocks/articles/articles';
import './categories.scss';

const Categories = ({ onSelectedCategoryChange }) => {
    const [sidebarNavItems, setSidebarNavItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('ifrane')
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    
    const updatedCategoriesState = articlesArray.map((category) => {
        return {
            display: category,
            section: category
        }
    })

    const handleUpdateCitiesState = () => {
        setSidebarNavItems(updatedCategoriesState);
    }

    useEffect(() => {
        const stateUpdate = () => handleUpdateCitiesState();
        return stateUpdate()
    }, [])

    useEffect(() => {
        const sidebarEl = sidebarRef.current;
        const activeEl = sidebarEl.childNodes[activeIndex];
        if (activeEl) {
            const activeElTop = activeEl.getBoundingClientRect().top - sidebarEl.getBoundingClientRect().top - 10;
            const activeElHeight = activeEl.clientHeight;
            indicatorRef.current.style.top = `${activeElTop}px`;
            indicatorRef.current.style.height = `${activeElHeight}px`;
        }
    }, [activeIndex])

    useEffect(() => {
        setStepHeight(sidebarRef.current.clientHeight / sidebarNavItems.length);
    }, [sidebarNavItems])

    useEffect(() => {
        const index = sidebarNavItems.findIndex((item) => location.pathname.includes(item.to));
        setActiveIndex(index);
    }, [location, sidebarNavItems])

    

    const handleClick = (item) => {
        setSelectedCategory(item.display);
        onSelectedCategoryChange(item.display)
    }

    return (
        <div className='categories'>
            <div className="categoriesSidebar" ref={sidebarRef}>
                {sidebarNavItems.map((item, index) => (
                    <Link key={index} className={activeIndex === index ? 'active' : ''} onClick={() => handleClick(item)}>
                    <div>
                        <div>{item.display.charAt(0).toUpperCase() + item.display.slice(1)}</div>
                    </div>
                    </Link>
                ))}
            </div>
            <div className="indicator" ref={indicatorRef}></div>
      </div>
    )
};

export default Categories;