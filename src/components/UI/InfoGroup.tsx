import styles from "./styles.module.scss";

export default function InfoGroup(props: { title?: string, value?: string }) {
    return (
        <div className={styles.infoGroup}>
            <h4>{props?.title}</h4>
            <p>{props?.value}</p>
        </div>
    )
}
