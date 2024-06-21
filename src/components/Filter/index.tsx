import { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.scss";
import DatePicker from "react-date-picker";
import { findAll } from "@/lib/actions/organization"
import { FormState } from "@/types";


export default function Filter({ display, onSubmit }: Readonly<{ display: boolean, onSubmit: (reset: boolean, data: FormState) => void }>) {
    const initialFormState = {
        organisation: '',
        username: '',
        email: '',
        date: new Date(),
        phoneNumber: '',
        status: '',
    }
    const [formData, setFormData] = useState(initialFormState);

    const [organisations, setOrganisations] = useState<Array<string>>([]);
    useEffect(() => {
        const fetchOrganisations = async () => {
            const orgs = await findAll();
            setOrganisations(orgs);
        };

        fetchOrganisations();
    }, [])

    if (!display) {
        return;
    }



    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (date: any) => {
        setFormData({
            ...formData,
            date: date,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(false, formData);
    };

    const handleReset = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(true, initialFormState)
        setFormData(initialFormState);
    }

    return (
        <form className={styles.filterContainer} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="organisation">Organisation</label>
                <select name="organisation" value={formData.organisation} onChange={handleChange}>
                    <option value="">Select Organisation</option>
                    {
                        organisations.map((org, idx) =>
                            <option value={org} key={idx}>{org}</option>
                        )
                    }
                </select>
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />

            </div>
            <div>
                <label htmlFor="date">Date</label>
                <DatePicker onChange={(value) => handleDateChange(value)} value={formData.date} />

            </div>
            <div>
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="status">Status</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="blacklist">Blacklist</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
            <div>
                <button type="reset" onClick={handleReset}>Reset</button>
                <button type="submit">Apply Filters</button>

            </div>
        </form>
    );




}
