import React from 'react';
import styled from "styled-components";

const Contact = () => {
    return <StyleWrapper>
        <div className='contact__container' id>
            <div className='content-conteiner'>

                <div className="contact-text-info">
                    <h2>My Contacts</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        it over 2000 years old.</p>
                    <div className="adress">
                        <h3>Address</h3>
                        <span>245 King Street, Touterie Victoria 8520 Australia</span>
                    </div>
                    <div className="phone">
                        <h3>Phone</h3>
                        <span>0-123-456-7890</span>
                        <span>0-123-456-7890</span>
                    </div>
                    <div className="email">
                        <h3>Email</h3>
                        <span>sample@gmail.com</span>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Quick Contact Form</h2>
                    <form method="post" className="contact-validation-active" id="contact-form">
                        <div className='half-col_cont'>
                            <div className="half-col "><input type="text" name="name" id="name"
                                                              className="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="half-col "><input type="email" name="email" id="email"
                                                              className="form-control" placeholder="Your Email"/>
                            </div>
                            <div className="half-col "><input type="text" name="phone" id="phone"
                                                              className="form-control" placeholder="Your Phone"/>
                            </div>
                            <div className="half-col "><input type="text" name="address" id="address"
                                                              className="form-control" placeholder="Address"/>
                            </div>
                        </div>
                        <div>
                            <textarea className="form-textarea " name="note" id="note" placeholder="Your Massage..."/>
                        </div>
                        <div>
                            <button className="submit-btn" type="submit">Submit</button>
                        </div>
                        {/*<div className="clearfix error-handling-messages">*/}
                        {/*    <div id="success">Thank you</div>*/}
                        {/*    <div id="error"> Error occurred while sending email. Please try again later.</div>*/}
                        {/*</div>*/}
                    </form>
                </div>
            </div>
        </div>

    </StyleWrapper>
};

export default Contact;
const StyleWrapper = styled.div`
  scroll-snap-align: end;

.contact__container{
  color: white;
  padding: 100px 20px;
  width: 100%;
  margin: 0 auto;
  background-color: #111;
  display: flex;
  justify-content: center;
  .content-conteiner{
    max-width: 1150px;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 3fr;
    @media (max-width: 1151px) {
      max-width: 100%;
    }@media (max-width: 600px) {
         grid-template-columns: auto;
    }
  
  }
  .contact-text-info{
    h2{
      font-size: 30px;  
    } 
    p{
      font-size: 15px;
      margin-top: 30px;
      color: #bbb;
      line-height: 30px;
      letter-spacing: 1px;
      margin-bottom: 30px;
    }
    .phone,
    .email,
    .adress{
      margin-bottom: 40px;
      letter-spacing: 1px;
      h3{
        font-size: 20px;
        margin-bottom: 10px;
      }
      span{
        font-size: 15px;
      }
    }
    .phone{}
    .email{
            margin-bottom: 0;
    }
  }
  .contact-form{
    h2{
        font-size: 30px;  
        margin-bottom: 30px;
      } 
    .half-col_cont{
       display: flex;
       flex-wrap: wrap;
       gap: 20px;
       margin-bottom: 20px;
      .half-col{
        background-color: rgba(51,51,51,.5);
        padding: 6px 15px;
        height: 50px;
        flex: 1 1 40%;
        @media (max-width: 500px) {
         flex: 1 1 100%;
        }
        input{
          width: 100%;
          height: 100%;
          background-color: transparent;
          border: none;
          color: white;
          font-size: 15px;

          &::placeholder{
            font-size: 15px;
            color: white;
         }
        }
       }   
    }
    .form-textarea{
      font-size: 20px;
      color: white;
      height: 150px;
      width: 100%;
      border: none;
      background-color: rgba(51,51,51,.5);
      padding: 15px;
      margin-bottom: 20px;
      &::placeholder{
           color: white;
       }
    }
    .submit-btn{
      background-color: rgba(51,51,51,.5);
      width: 100px;
      height: 40px;
      color: white;
      border: none;
      font-size: 15px;
      
    }
  }
}
`