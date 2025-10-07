
import { useState, useEffect } from 'react';
import './SortSelectTrain.css';

const SortSelectTrain = ({ 
    totalCount = 0, 
    onSortChange, 
    onLimitChange,
    defaultSort = 'time',
    defaultLimit = 5
}) => {
    const [sort, setSort] = useState(defaultSort);
    const [limit, setLimit] = useState(defaultLimit);

    
    const handleSortChange = (event) => {
        const newSort = event.target.value;
        setSort(newSort);
        if (onSortChange) {
            onSortChange(newSort);
        }
    };

    
    const handleLimitChange = (newLimit) => {
        setLimit(newLimit);
        if (onLimitChange) {
            onLimitChange(newLimit);
        }
    };


    return (
        <div className="info-search-ticket">
            <div className="found-ticket">найдено {totalCount}</div>
            
            <div className="sort-by">
                сортировать по:
                <select 
                    name="sort" 
                    value={sort}
                    onChange={handleSortChange}
                >
                    <option value="time">времени</option>
                    <option value="price">стоимости</option>
                    <option value="duration">длительности</option>
                </select>
            </div>
            
            <div className="view-by">
                показывать по: 
                {[5, 10, 20].map((pageSize) => (
                    <span
                        key={pageSize}
                        className={`view-option ${limit === pageSize ? 'active' : ''}`}
                        onClick={() => handleLimitChange(pageSize)}
                    >
                        {pageSize}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SortSelectTrain;