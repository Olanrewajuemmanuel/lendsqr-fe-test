import { Dispatch, SetStateAction } from "react";
import TabNavigation from "../UI/TabNavigation"

interface TabProps {
    onTabChange: Dispatch<SetStateAction<number>>
}


export default function Tab({ onTabChange }: TabProps) {
    const tabs = ["General details", "Documents", "Bank details", "Loans", "Savings", "App and system"]
    return (
        <div>
            <TabNavigation tabs={tabs} onTabClick={onTabChange} />
        </div>
    )
}
