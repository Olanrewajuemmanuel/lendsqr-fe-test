import styles from "./styles.module.scss";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export default function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <h2>Generic Dashboard Home Showing Information</h2>
            <Skeleton count={4} height={150} />
        </div>
    )
}
