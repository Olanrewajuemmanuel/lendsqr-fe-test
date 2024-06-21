import styles from "./styles.module.scss";


interface SideBarItemProp {
    iconBefore?: any;
    text: string;
    iconAfter?: any;
    linkTo?: string;

}

export default function SideBarItem({ text, iconBefore, iconAfter, linkTo }: SideBarItemProp) {
    return (
        <a className={styles.sidebaritem} href={linkTo}>
            <div>{iconBefore}</div>
            <p>{text}</p>
            <div>{iconAfter}</div>
        </a>
    )
}
