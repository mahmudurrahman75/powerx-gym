import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Payment.css";
import paypal from "../../icons/paypal.png";
import amex from "../../icons/amex.png";
import mastercard from "../../icons/mastercard.png";
import visa from "../../icons/visa.png";

const Payment = () => {


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
        <div className="col-md-10 payment">
            
            <form onSubmit={handleSubmit(onSubmit)} className="form">

                <div className="box1">
                    <div className="row d-flex">
                            <div className="col-md-6 crd">
                                <h3>Credit Card</h3><br/>
                                <p>Safe money transfer using your bank visa, Maestro Discover, American Express.</p>
                            </div>
                            
                            <div className="col-md-6 icon">
                                <img src={amex} alt=""/>
                                <img src={visa} alt=""/>
                                <img src={mastercard} alt=""/>
                            </div>
                    </div>
                    
                    <div className="number" style={{marginTop:"30px"}}>
                            <label>CARD NUMBER</label><br/>
                            <input type="number" name="number" ref= {register}/>
                    </div>


                    <div className="row d-flex cardName">
                        <div className="name">
                            <label>NAME ON CARD</label><br/>
                            <input type="text" name="Name" ref= {register}/>
                        </div>
                        <div>
                            <label>EXPIRY DATE</label><br/>
                            <input type="date" name="date"  ref={register}/>
                        </div>
                        <div>
                            <label>CVV CODE</label><br/>
                            <input type="number" name="number" ref= {register}/>
                        </div>
                    </div>

                </div>
                
                    
                   
                    <div className="box2">
                        <div className="row d-flex paypal">
                                <div className="col-md-6 crd text">
                                    <h3>PayPal</h3><br/>
                                    <p>You will be redirected to PayPal website to complete your purchase securely.</p>
                                </div>
                                
                                <div className="col-md-6 icon">
                                    <img src={paypal} alt=""/>
                                </div>
                        </div>
                        
                    </div>
                    
                    <input  className="test" type="submit"  value="NEXT"/>

                    {/* <Link  to ="/"><button >Go</button></Link> */}
                    {/* onClick={handelRegister} */}
                </form>
        </div>
    );
};

export default Payment;