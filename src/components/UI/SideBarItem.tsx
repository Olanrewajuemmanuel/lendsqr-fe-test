import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";


interface SideBarItemProp {
    iconBefore?: any;
    text: string;
    iconAfter?: any;
    linkTo?: string;

}

export default function SideBarItem({ text, iconBefore, iconAfter, linkTo }: SideBarItemProp) {
    const pathname = usePathname();
    return (
        <a className={`${styles.sidebaritem} ${pathname === linkTo ? styles.sidebaritemActive : ''} `} href={linkTo}>
            <div>{iconBefore}</div>
            <p>{text}</p>
            <div>{iconAfter}</div>
        </a>
    )
}
