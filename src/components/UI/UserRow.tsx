import Link from "next/link";
import styles from "./styles.module.scss";


interface UserRowProps {
    organisationName: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
}

export default function UserRow({ organisationName, username, email, phoneNumber, dateJoined, status }: UserRowProps) {
    return (

        <tr className={styles.userRow}>
            <td>{organisationName} </td>
            <td><Link href={`users/${username}`}>{username}</Link></td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{dateJoined}</td>
            <td>{status}</td>
            <td>
                <button role="menu" aria-label="Activate or block a user">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5530_2613)">
                            <path d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z" fill="#545F7D" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5530_2613">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
            </td>
        </tr>
    )
}
