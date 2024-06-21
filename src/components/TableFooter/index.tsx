"use client";

import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import ReactPaginate from "react-paginate";

export default function TableFooter({ rowsPerPage, onPageChange }: { rowsPerPage: number, onPageChange: (currOffSet: number) => void }) {
    const [currPage, setCurrPage] = useState(0);

    const MAXROWS = 500
    const totalPages = Math.ceil(MAXROWS / rowsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = event.selected;
        console.log(event.selected);


        onPageChange(newOffset + 1);
        setCurrPage(newOffset + 1);

    };

    const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPage = parseInt(event.target.value);
        console.log(selectedPage);

        setCurrPage(selectedPage);
        onPageChange(selectedPage);
    };

    return (
        <div className={styles.tableFooter}>
            <div>
                <p>Showing</p>
                <select name="currIndex" value={currPage} onChange={handlePageChange}>
                    {

                        [...Array(totalPages)].map((_, idx) =>
                            <option value={idx + 1} key={idx}>{idx + 1}</option>
                        )

                    }
                </select>
                <p>out of {totalPages}</p>
            </div>
            <div>

                {/* Pagination component */}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="4" fill="#213F7D" fill-opacity="0.1" />
                                <path d="M8.99391 7.94274C8.15281 7.10165 9.45656 5.8405 10.255 6.68165L15.0058 11.4324C15.3842 11.7687 15.3842 12.3572 15.0058 12.6935L10.3814 17.36C9.54033 18.159 8.27918 16.8973 9.12033 16.0568L13.1141 12.063L8.99391 7.94274Z" fill="#213F7D" />
                            </svg>
                        </button>


                    }
                    onPageChange={handlePageClick}

                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    pageCount={totalPages}
                    previousLabel={
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="4" fill="#213F7D" fill-opacity="0.1" />
                                <path d="M8.99391 7.94274C8.15281 7.10165 9.45656 5.8405 10.255 6.68165L15.0058 11.4324C15.3842 11.7687 15.3842 12.3572 15.0058 12.6935L10.3814 17.36C9.54033 18.159 8.27918 16.8973 9.12033 16.0568L13.1141 12.063L8.99391 7.94274Z" fill="#213F7D" />
                            </svg>
                        </button>


                    }
                    renderOnZeroPageCount={null}
                />

            </div>
        </div>
    )
}
