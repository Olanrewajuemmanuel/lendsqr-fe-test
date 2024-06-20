'use client';

type User = {
    id: string,
    name: string;

}

export default function Users(props: { users: User[] }) {
    return (
        <div>
            <h3>Users</h3>
        </div>
    )
}
