import NavBack from "@/components/UI/NavBack";
import UserDetail from "@/components/UserDetails";
import { findByUsername } from "@/lib/actions/users";

export default async function Page({ params }: Readonly<{ params: { slug: string } }>) {
    const userDetail = await findByUsername(params.slug)

    return (
        <div>
            <NavBack />
            <div>
                <UserDetail user={userDetail} />
            </div>
        </div>
    )
}
