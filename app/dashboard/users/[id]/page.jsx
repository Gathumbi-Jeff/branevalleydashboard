import styles from "/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image
                      src="/noavatar.png"
                      alt=""fill       
                    />  
                </div>  
             Joe Joe
            </div>
            <div className={styles.formContainer}>

            <form action="" className={styles.form}>
                <label>Username</label>
                <input type="text" name="username" placeholder="Joe Joe"></input>
                <label>Email</label>
                <input type="email" name="email" placeholder="jim@gmail.com"></input>
                <label>Password</label>
                <input type="text" name="password" placeholder="jimjim"></input>
                <label>Phone</label>
                <input type="text" name="+254706720343" placeholder="Joe Joe"></input>
                <label>Address</label>
                <input type="text" name="address" placeholder="Nairobi"></input>
                <label>isAdmin?</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label>is Active?</label>
                <select name="isActive" id="isActive">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}
export default SingleUserPage