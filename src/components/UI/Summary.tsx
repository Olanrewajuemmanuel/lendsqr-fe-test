import styles from "../UserDetails/styles.module.scss"
import { User } from "@/types";
import InfoGroup from "./InfoGroup";



export default function Summary({ currIndex, user }: { currIndex: number, user: User }) {
    const loanAmount = user.loans?.reduce((total, loan) =>
        total + Number.parseFloat(loan.amount.replace(',', ''))
        , 0)


    {/** Expand as needed  */ }
    if (currIndex === 2) {
        // Display bank details
        return (
            <>
                <InfoGroup title="Bank name" value={user.bankDetails.name} />
                <InfoGroup title="Account number" value={user.bankDetails.number} />
            </>
        );
    }
    if (currIndex === 3) {
        // Display Loans
        return (
            <>
                <p>Total: ₦{loanAmount}</p>
                {user.loans.map(loan =>
                    <section key={loan.id}>
                        <InfoGroup title="amount" value={loan.amount} />
                        <InfoGroup title="Date received" value={loan.dateLoaned} />
                        <InfoGroup title="Repayment date" value={loan.repaymentDate} />
                    </section>
                )}
            </>
        )

    }

    //   Display general details as fallback UI
    return (
        <>
            <section>
                <h3>Personal Information</h3>
                <div>
                    <InfoGroup title="full name" value={user.name} />
                    <InfoGroup title="phone number" value={user.phone} />
                    <InfoGroup title="email address" value={user.email} />
                    <InfoGroup title="BVN" value={user.BVN} />
                    <InfoGroup title="gender" value={user.gender} />
                    <InfoGroup title="marital status" value={user.marital} />
                    <InfoGroup title="children" value={user.childrenNumber} />
                    <InfoGroup title="type of residence" value={user.residence} />
                </div>

            </section>
            <section>
                <h3>Education and Employment</h3>
                <div>
                    <InfoGroup title="level of education" value={user.education} />
                    <InfoGroup title="employment status" value={user.employmentDetails?.status} />
                    <InfoGroup title="sector of employment" value={user.employmentDetails?.sector} />
                    <InfoGroup title="duration of employment" value={user.employmentDetails?.duration} />
                    <InfoGroup title="office email" value={user.employmentDetails?.office_email} />
                    <InfoGroup title="monthly income" value={`₦100,000.00 - ₦${user.employmentDetails?.income}`} />
                    <InfoGroup title="loan repayment" value={loanAmount?.toString()} />
                </div>

            </section>
            <section>
                <h3>Socials</h3>
                <div>
                    <InfoGroup title="twitter" value={`@${user.socials?.twitter}`} />
                    <InfoGroup title="facebook" value={user.socials?.facebook} />
                    <InfoGroup title="instagram" value={user.socials?.instagram} />
                </div>


            </section>
            <section>
                <h3>Guarantor</h3>
                {
                    user.guarantors?.map(guarantor =>
                        <div key={guarantor.email} className={styles.guarantor}>
                            <InfoGroup title="full name" value={guarantor.name} />
                            <InfoGroup title="phone number" value={user.phone} />
                            <InfoGroup title="email address" value={guarantor.email} />
                            <InfoGroup title="relationship" value={guarantor.relationship} />
                        </div>
                    )
                }

            </section>
        </>
    )
}
