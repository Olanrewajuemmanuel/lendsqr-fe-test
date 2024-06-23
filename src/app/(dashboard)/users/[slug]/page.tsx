import NavBack from "@/components/UI/NavBack";
import UserDetail from "@/components/UserDetails";
import { findAll } from "@/lib/actions/users";


export default async function Page({ params }: Readonly<{ params: { slug: string } }>) {

    return (
        <div>
            <NavBack />
            <div>
                <UserDetail userId={params.slug} />
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const users = await findAll(500);

    return users.map((user: { username: any; }) => ({
        slug: user.username,
    }))
}
