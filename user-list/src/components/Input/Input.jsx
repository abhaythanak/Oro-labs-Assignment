import './Input.css';

export default function Input(props) {
    const {closeModal, getData, onChangeHandler, onSubmit, getEdit, onUpdate, result} = props
    return(
        <div className="container"
        onClick={(e)=>{
            if (e.target.className === "container") closeModal();
        }}>
          <div className="model">
            <div className="group">
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                placeholder="name..." 
                name="name" 
                value={getData.name}
                onChange={onChangeHandler} 
                />
            </div>
            <div className="group">
                <label htmlFor="email">Email</label>
                <input 
                type="text" 
                placeholder="Email..." 
                name="email" 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Enter valid email address"
                value={getData.email}
                onChange={onChangeHandler}
                />
            </div>
            <div className="group">
                <label htmlFor="phone">Phone No.</label>
                <input 
                type="number"
                required
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                placeholder="Phone no...." 
                name="phone" 
                value={getData.phone} 
                onChange={onChangeHandler}
                />
            </div>
            {/* <div className="btn"> */}
                {getEdit ? (
                    <button type="submit" className="btn" onClick={onUpdate} >Update</button>
                ) : (
                    <button type="submit" className="btn" onClick={onSubmit}>Submit</button>
                )}
                <div className="InputError"><h1 className="userListResult">{result}</h1></div>
            {/* </div> */}
          </div>
          
        </div>
    )
}
