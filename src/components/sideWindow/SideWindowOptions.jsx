import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './side-window.scss';

const SideWindowOptions = ({ type, handleModal, handleSelectedMonth }) => {
    const [sidebarNavItems, setSidebarNavItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const [selectedId, setSelectedId] = useState('');
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    
    useEffect(() => {
        switch (type) {
            case 'fournisseurs':
                setSidebarNavItems([
                    {
                        title: 'Ajouter Fournisseurs',
                    }
                ]);
                break;
            case 'bonsCommande':
                setSidebarNavItems([
                    {
                        title: 'Liste des bons de commandes',
                        id: null
                    },
                    {
                        title: 'Janvier',
                        id: 1,
                    },
                    {
                        title: 'Fevrier',
                        id: 2,
                    },
                    {
                        title: 'Mars',
                        id: 3
                    },
                    {
                        title: 'Abril',
                        id: 4
                    },
                    {
                        title: 'Mai',
                        id: 5
                    },
                    {
                        title: 'Juin',
                        id: 6
                    },
                    {
                        title: 'Juillet',
                        id: 7
                    },
                    {
                        title: 'Aout',
                        id: 8 
                    }, 
                    {
                        title: 'Septembre',
                        id: 9
                    },
                    {
                        title: 'Octobre',
                        id: 10
                    },
                    {
                        title: 'Novembre',
                        id: 11
                    },
                    {
                        title: 'Decembre',
                        id: 12
                    }
                ])
                break;
            default:
                break;
        }
    }, [type]);
    
    useEffect(() => {
        console.log(selectedId);
        // onSelectedIdChange(selectedId);
    }, [selectedId]);
    
    useEffect(() => {
        const sidebarEl = sidebarRef.current;
        const activeEl = sidebarEl.childNodes[activeIndex];
        if (activeEl) {
            const activeElTop = activeEl.getBoundingClientRect().top - sidebarEl.getBoundingClientRect().top - 10;
            const activeElHeight = activeEl.clientHeight;
            indicatorRef.current.style.top = `${activeElTop}px`;
            indicatorRef.current.style.height = `${activeElHeight}px`;
        }
    }, [activeIndex]);
    
    useEffect(() => {
        setStepHeight(sidebarRef.current.clientHeight / sidebarNavItems.length);
    }, [sidebarNavItems]);
    
    useEffect(() => {
        const index = sidebarNavItems.findIndex((item) => location.pathname.includes(item.to));
        setActiveIndex(index);
    }, [location, sidebarNavItems]);
    
    const handleClick = (item) => {
        setSelectedId(item.id);
    };
    
    return (
        <div className='sideWindow'>
            <div className="sideWindowSidebar" ref={sidebarRef}>
                {sidebarNavItems.map((item, index) => (
                    <Link key={index} className={selectedId === item.id ? 'active' : ''} onClick={() => {
                        handleClick(item);
                        handleSelectedMonth && handleSelectedMonth(item.id)
                        handleModal && handleModal();
                    }}>
                        <div>
                            <div>{item['title'].charAt(0).toUpperCase() + item['title'].slice(1)}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="indicator" ref={indicatorRef}></div>
        </div>
    );
};

export default SideWindowOptions;