import './FromWayFilter.css'
import IcoLeftArrowAside from "../../../assets/images/ico-left-arrow-aside.svg";
import IcoMoreAside from "../../../assets/images/ico-more-aside.svg";
import IcoCloseHidden from "../../../assets/images/ico-close-hidden.svg";

import { useDispatch, useSelector } from 'react-redux';
import { selectTripsSearch } from "../../../slices/tripsSearch";
import { changeTripsSearchInput } from '../../../slices/tripsSearch';
import { useState, useEffect } from 'react';

const ToWayFilter = () => {
    
    const dispatch = useDispatch();
    const filter = useSelector(selectTripsSearch);

    const [isHidden, setIsHidden] = useState(true);

    const handleOnClickHidden = () => {
        setIsHidden(!isHidden);
    }

  
    const hiddenWays = isHidden ? 'hidden' : 'no-hidden';
    const icoHidden = isHidden ? IcoMoreAside : IcoCloseHidden;

    return (
        <>
        <div className="aside-ways">
            <div className="ico-way"><img src={IcoLeftArrowAside} alt="" /></div>
            <div className="text-aside-ways">Обратно</div>
            <div className="ico-more-aside-ways">
                <img onClick={handleOnClickHidden} src={icoHidden} alt="" />
            </div>
        </div>
        <div className={`ways-times ${hiddenWays}`}>
              
        </div>
        </>
    )
}

export default ToWayFilter;