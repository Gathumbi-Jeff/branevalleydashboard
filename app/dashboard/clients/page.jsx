import styles from '/app/ui/dashboard/clients/clients.module.css'
import Search from '../../ui/dashboard/search/search'
import Link from "next/link";
import Pagination from "/app/ui/dashboard/pagination/pagination"
const ClientsPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
               <Search placeholder={"Search for a client..."}/>
               <Link href="/dashboard/clients/add">
                  <button className={styles.addButton}>Add a New Client</button>
               </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Client ID</td>
                        <td>Phone Number</td>
                        <td>Location</td>
                        <td>Status</td>
                        <td>Created on</td>
                        <td>Action</td>
                     </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <img src="/noproduct.jpg" 
                                  alt=""
                                  width={40}
                                  height={40} 
                                  className={styles.userImage}
                            />
                             Quiver Eastlands
                            </div>
                        </td>
                        <td>eastlands@quiver.com</td>
                        <td>002328</td>
                        <td>0706720396</td>
                        <td>Umoja Phase 3</td>
                        <td>Active</td>
                        <td>10.01.2024</td>
                        <td>
                            <Link href="/dashboard/clients/edit">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>    
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            
                        </td>
                    </tr>
                </tbody>
                <thead></thead>
            </table>
            <Pagination/>
        </div>
    )
}
export default ClientsPage