"use client";

import { useState } from "react";
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

        setCurrPage(selectedPage);
        onPageChange(selectedPage);
    };

    return (
        <div className={styles.tableFooter}>
            <div>
                <p>Showing</p>
                <div className={styles.selectWrapper}>
                    <select name="currIndex" value={currPage} onChange={handlePageChange}>
                        {

                            [...Array(totalPages)].map((_, idx) =>
                                <option value={idx + 1} key={idx}>{idx + 1}</option>
                            )

                        }
                    </select>
                </div>
                <p>out of {totalPages}</p>
            </div>
            <div>

                {/* Pagination component */}
                <div className={styles.paginateWrapper}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={
                            <button className={styles.paginateLabel}>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.993905 1.94274C0.152813 1.10165 1.45656 -0.159498 2.255 0.68165L7.00576 5.43241C7.38419 5.76873 7.38419 6.35718 7.00576 6.6935L2.38142 11.36C1.54033 12.159 0.279177 10.8973 1.12033 10.0568L5.1141 6.063L0.993905 1.94274Z" fill="#213F7D" />
                                </svg>

                            </button>


                        }
                        onPageChange={handlePageClick}

                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        pageCount={totalPages}
                        breakClassName={styles.paginateBreak}
                        containerClassName={styles.paginateContainer}
                        activeLinkClassName={styles.paginateActive}
                        previousClassName={styles.prevLink}
                        nextClassName={styles.nextLink}
                        disabledClassName={styles.disabled}
                        previousLabel={
                            <button className={styles.paginateLabel}>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00609 10.0573C7.84719 10.8984 6.54344 12.1595 5.745 11.3184L0.994244 6.56759C0.61581 6.23127 0.61581 5.64282 0.994244 5.3065L5.61858 0.640017C6.45967 -0.158963 7.72082 1.10267 6.87967 1.94322L2.8859 5.937L7.00609 10.0573Z" fill="#213F7D" />
                                </svg>
                            </button>


                        }
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    )
}
