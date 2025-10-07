import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    if (totalPages <= 1) {
        return null;
    }

    const getVisiblePages = () => {
        const visiblePages = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);


        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }

        return visiblePages;
    };

    const visiblePages = getVisiblePages();

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="brad-crumbs">
            <div
                className={`first-page ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={handlePrevious}
            >
                &lt;
            </div>

            {visiblePages.map(page => (
                <div
                    key={page}
                    className={`page-brad-crumbs ${page === currentPage ? 'brad-crumbs-active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </div>
            ))}

            <div
                className={`last-page ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={handleNext}
            >
                &gt;
            </div>
        </div>
    );
}

export default Pagination;