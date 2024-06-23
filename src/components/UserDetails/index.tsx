"use client";

import styles from "./styles.module.scss";
import GenericProfileImg from "@/assets/icons/generic.svg";
import { Status } from "@/types";
import ImageWithFallback from "../UI/ImageWithFallback";
import StarRating from "../UI/StarRating";
import Tab from "../Tab";
import { useEffect, useState } from "react";
import Summary from "../UI/Summary";
import { updateByStatus } from "@/lib/actions/users";

export default function UserDetail({ userId }: { userId: string }) {
    const [currDisplayIndex, setCurrDisplayIndex] = useState(0);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState<any>({});

    useEffect(() => {
        function findByUsernameInLocalStorage(username: string) {
            const userRecordsDB = localStorage.getItem("userRecords");
            if (!userRecordsDB) {
                return;
            }

            const userRecords = JSON.parse(userRecordsDB);
            const user = userRecords.find((user: { username: string; }) => user.username === username);
            setUser(user);
        }
        findByUsernameInLocalStorage(userId);
    }, [userId])


    const handleUserUpdate = async (id: string, type: Status) => {
        await updateByStatus(id, type);
        setMessage(`User is now ${type === Status.blacklist ? 'blacklisted' : type}`);
        setTimeout(() => setMessage(""), 3000)
    }

    if (!user) return <div className={styles.notFound}>User does not exist!</div>

    return (
        <div className={styles.container}>
            {message && <div className={styles.message}>{message}</div>}
            <div className={styles.navigation}>
                <h3>User Details</h3>
                <div>
                    <button className={styles.button} onClick={() => handleUserUpdate(user._id, Status.blacklist)}>blacklist user</button>
                    <button className={styles.button} onClick={() => handleUserUpdate(user._id, Status.active)}>activate user</button>
                </div>
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.profile}>
                    <div className={styles.left}>
                        <div className={styles.imgWrapper}>
                            <ImageWithFallback src={user.picture} fallbackSrc={GenericProfileImg} alt="" width={40} height={40}></ImageWithFallback>

                        </div>
                        <div>
                            <h2>{user.name}</h2>
                            <p>{user.guid?.slice(0, 11)}</p>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <p>User&apos;s Tier</p>
                        <div>
                            <StarRating rating={user?.tier ? Number.parseInt(user.tier) : 1} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <h3>₦200,000.00</h3>
                        <p>{user.bankDetails?.number}/{user.bankDetails?.name}</p>
                    </div>
                </div>
                {/* Tab region */}
                <Tab onTabChange={setCurrDisplayIndex} />
            </div>

            <div className={styles.summary}>
                <Summary user={user} currIndex={currDisplayIndex} />
            </div>
        </div>
    )
}
