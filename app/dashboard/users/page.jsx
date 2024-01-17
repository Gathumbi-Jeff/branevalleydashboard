import styles from '/app/ui/dashboard/users/users.module.css'
import Search from '../../ui/dashboard/search/search'
import Link from "next/link";
import Pagination from "/app/ui/dashboard/pagination/pagination"
import {fetchUsers} from "/app/lib/data";

const UsersPage = async () => {
    const users = await fetchUsers();
    console.log(users)
    return(
        <div className={styles.container}>
            <div className={styles.top}>
               <Search placeholder={"Search for a user..."}/>
               <Link href="/dashboard/users/addUsers">
                  <button className={styles.addButton}>Add New User</button>
               </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>ID Number</td>
                        <td>Phone Number</td>
                        <td>Role</td>
                        <td>Location</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <img src="/noavatar.png" 
                                  alt=""
                                  width={40}
                                  height={40} 
                                  className={styles.userImage}
                            />
                             Jeff Gathumbi
                            </div>
                        </td>
                        <td>gathumbijeff@gmail.com</td>
                        <td>3903212</td>
                        <td>0706720396</td>
                        <td>Admin</td>
                        <td>Manhattan</td>
                        <td>Active</td>
                        <td>
                            <Link href="/dashboard/users/edit">
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
export default UsersPage