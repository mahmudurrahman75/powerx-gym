import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {

    
    const [registerData, setRegisterData] = useState();

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        setRegisterData(data)
        console.log(registerData);
    }



    // const handelRegister = () => {
    //     const newRegister = {...registerData};
    //     fetch('url', {
    //         method: 'POST',
    //         headers: {'content-Type': 'application/json'},
    //         body: JSON.stringify(newRegister)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }





    return (
        <div className="col-md-10 contact">
            
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                
                    <div className="row d-flex">
                        <div>
                            <label>First Name</label><br/>
                            <input type="text" name="firstName" ref= {register}/>
                            {errors.firstName && <p>{errors.firstName.message}</p>}
                        </div>
                        
                        <div>
                            <label>Last Name</label><br/>
                            <input type="text" name="lastName" ref= {register}/>
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </div>
                        
                    </div>
                   
                    <div className="row d-flex">
                        <div>
                            <label>Email</label><br/>
                            <input type="text" name="email"  ref={register}/>
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        
                        <div>
                            <label>Mobile Number</label><br/>
                            <input type="number" name="number" ref= {register}/>
                        </div>
                        
                    </div>

                    <div className="row d-flex">
                        <div>
                            <label>Date of Birth</label><br/>
                            <input type="date" name="date"  ref={register}/>
                        </div>
                        
                        <div style={{marginTop:"10px", marginLeft:"10px"}}>
                            <label>Gender</label><br/>
                            <select name="gender" ref={register}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        
                    </div>

                    <div  className="row d-flex">
                        <div>
                            <label>Address</label><br/>
                            <input type="text"  name="Description"  ref={register}/>
                        </div>
                        
                        <div>
                            <label>Country/Region</label><br/>
                            <input type="text"  name="Description"  ref={register}/>
                        </div>
                    </div>


                    <div className="row d-flex">
                        <div>
                            <label>City</label><br/>
                            <input type="text" name="text"  ref={register}/>
                        </div>
                        
                        <div>
                            <label>PostCode</label><br/>
                            <input type="number" name="number" ref= {register}/>
                        </div> 
                    </div>
                    
                    <input  className="test" type="submit"  value="NEXT"/>

                    {/* <Link  to ="/"><button >Go</button></Link> */}
                    {/* onClick={handelRegister} */}
                </form>
        </div>
    );
};

export default Contact;