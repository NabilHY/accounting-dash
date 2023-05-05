import { useEffect, useRef, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CategoriesContext } from '../../context/categoriesContext';
import './categories.scss';

const Categories = ({ onSelectedCategoryChange, selectedCategory, setParentSelectedId }) => {
    const [sidebarNavItems, setSidebarNavItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const [selectedId, setSelectedId] = useState('');
    const { categories, id, setId } = useContext(CategoriesContext);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {

    }, [selectedId])
    
    useEffect(() => {
        console.log(categories);
        setSidebarNavItems(categories);
    }, [categories])
    
    useEffect(() => {
        console.log(selectedId)
        setParentSelectedId(selectedId)
        // onSelectedIdChange(selectedId);
    }, [selectedId])
    
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
        onSelectedCategoryChange(item.id)
        setSelectedId(item.id)
        setId(item.id);
    }
    
    return (
        <div className='categories'>
            <div className="categoriesSidebar" ref={sidebarRef}>
                {sidebarNavItems.map((item, index) => (
                    <Link key={index} className={selectedCategory === item.id ? 'active' : ''} onClick={() => handleClick(item)}>
                        <div>
                            <div>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="indicator" ref={indicatorRef}></div>
        </div>
    )
}

export default Categories;