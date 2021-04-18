import React from 'react';

const Contact = () => {
    return (
        <section className="contact my-5 py-5 form-container heading">
               <div className="container">
            <div className="section-header text-center text-white mb-5">
                 <h1 style={{color: '#FFFFFF'}}>REQUEST FREE QUOTE</h1>
                 <span></span>
               <p className="">Send your request using the form and you will get a free estimation.</p>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-right">
                        <button type="button" className="btn btn-brand"> Submit </button>
                    </div>
                </form>
            </div>
        </div>
              
    </section>    
      
    );
};

export default Contact;