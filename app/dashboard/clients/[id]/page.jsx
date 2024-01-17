import styles from "/app/ui/dashboard/clients/singleClient/singleClient.module.css"
import Image from "next/image"

const SingleClientPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image
                      src="/noavatar.png"
                      alt=""fill       
                    />  
                </div>  
             Quiver Eastlands
            </div>
            <div className={styles.formContainer}>

            <form action="" className={styles.form}>
                <label>Name</label>
                <input type="text" name="username" placeholder="Joe Joe"></input>
                <label>Email</label>
                <input type="email" name="email" placeholder="jim@gmail.com"></input>
                <label>Client ID.</label>
                <input type="text" name="password" placeholder="jimjim"></input>
                <label>Phone Number</label>
                <input type="text" name="+254706720343" placeholder="Joe Joe"></input>
                <label>Local</label>
                <input type="text" name="address" placeholder="Nairobi"></input>
                 
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
export default SingleClientPage