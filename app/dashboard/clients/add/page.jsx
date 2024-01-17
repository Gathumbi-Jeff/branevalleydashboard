import styles from "/app/ui/dashboard/clients/addClients/addClients.module.css"

const AddClientPage = () => {
    return (
      <div className={styles.container}>
        <form action="" className={styles.form}>

          <input type="text" placeholder="Name" required/>
          <input type="text" placeholder="Email" required/>
          <input type="number" placeholder="Client ID" required/>
          <input type="number" placeholder="Phone Number" required/>
          <input type="text" placeholder="Location" required/>
         
          <select name="isActive" id="isActive">
            <option value={true} selected>isActive?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          
          <textarea 
          name="desc" 
          id="desc" 
          rows="10" 
          placeholder="description">
          </textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default AddClientPage;