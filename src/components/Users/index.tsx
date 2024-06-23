'use client';

import styles from "./styles.module.scss";
import UserRow from "../UI/UserRow";
import { FormState, User } from "@/types";
import FilterBtn from "../UI/FilterBtn";
import TableFooter from "../TableFooter";
import Image from "next/image";
import UsersImg from "@/assets/icons/users-display.svg";
import ActiveUsersImg from "@/assets/icons/active-display.svg";
import LoansImg from "@/assets/icons/users-loans-display.svg";
import CoinsImg from "@/assets/icons/coins.svg";
import { useEffect, useState, Suspense } from "react";
import Filter from "../Filter";
import { findAll, filter } from "@/lib/actions/users";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


function formatDateString(dateString: string) {
    const date = new Date(dateString + "Z");

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours || 12; // the hour '0' should be '12'
    const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;

    return `${month} ${day}, ${year} ${hours}:${minutesFormatted} ${ampm}`;
}

export default function Users() {
    const [filterMode, setFilterMode] = useState(false);
    const [userRows, setUserRows] = useState<Array<User>>([])
    const [totalUsers, setTotalUsers] = useState<Array<User>>([])

    useEffect(() => {
        const fetchUserRows = async () => {
            let users = await findAll(10);
            setUserRows(users);
            users = await findAll(500);
            setTotalUsers(users);
        }

        fetchUserRows();
    }, [])

    async function handleSubmit(reset: boolean, data: FormState) {
        if (reset) {
            const users = await findAll(10);
            setUserRows(users);
        } else {
            const userRows = await filter(data.organisation, data.username, data.email, data.date.toISOString(), data.phoneNumber, data.status);
            setUserRows(userRows);
        }

    }

    async function handlePageChange(currIndex: number) {
        const newStart = currIndex === 1 ? 0 : (currIndex * 10) % 500
        const users = await findAll(newStart + 10, newStart)
        setUserRows(users)
    }

    return (
        <div className={styles.usersContainer}>
            <h3>Users</h3>
            <div className={styles.user}>
                <div>
                    <Image src={UsersImg} alt="" width={40} />
                    <p>Users</p>
                    <p>{totalUsers.length}</p>
                </div>
                <div>
                    <Image src={ActiveUsersImg} alt="" width={40} />
                    <p>Active users</p>
                    <p>{totalUsers.filter(user => user.status === 'active').length}</p>
                </div>
                <div>
                    <Image src={LoansImg} alt="" width={40} />
                    <p>Users with loans</p>
                    <p>{totalUsers.filter(user => user.loans.length > 0).length}</p>
                </div>
                <div>
                    <Image src={CoinsImg} alt="" width={40} />
                    <p>Users with savings</p>
                    <p>{totalUsers.length}</p>
                </div>
            </div>
            <section className={styles.section} role="presentation">
                <div className={styles.table} role="table">
                    <div className={styles.thead}>
                        <div className={styles.filter}><p>Organization </p><FilterBtn toggleFilterModeFn={setFilterMode} filterMode={filterMode} />
                            {/* Set Filter view only on first child */}
                            <Filter display={filterMode} onSubmit={handleSubmit} />
                        </div>
                        <div><p>Username </p><FilterBtn toggleFilterModeFn={setFilterMode} filterMode={filterMode} /></div>
                        <div><p>Email </p><FilterBtn toggleFilterModeFn={setFilterMode} filterMode={filterMode} /></div>
                        <div><p>Phone Number </p><FilterBtn toggleFilterModeFn={setFilterMode} filterMode={filterMode} /></div>
                        <div><p>Date Joined </p><FilterBtn toggleFilterModeFn={setFilterMode} filterMode={filterMode} /></div>
                        <div><p>Status </p><FilterBtn toggleFilterModeFn={setFilterMode} filterMode={filterMode} /></div>
                    </div>
                    <div className={styles.tbody}>
                        {/* <!-- Rows of user data will go here --> */}
                        {
                            userRows.map(user =>
                                <Suspense fallback={<Skeleton count={10} height={5} />} key={user._id}>
                                    <UserRow organisationName={user.organisation.name} username={user.username} email={user.email} phoneNumber={user.phone} dateJoined={formatDateString(user.registered)} status={user.status} />
                                </Suspense>
                            )
                        }
                    </div>
                </div>
                {/* Replace with custom number */}
                <TableFooter rowsPerPage={10} onPageChange={handlePageChange} />
            </section>
        </div>
    )
}
