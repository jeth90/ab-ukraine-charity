export default function Signup() {
    return (
        <div className="container">        
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-md-10 requests__content">
                    <div className="requests__wrap space-y-20">
                        <div>
                            <h1 className="text-left">Register user</h1>
                        </div>
                        <div className="box is__big">
                            <form>
                                <div className="space-y-20 mb-0">
                                    <div className="space-y-10">
                                        <span className="nameInput">Title</span>
                                        <input type="text" className="form-control"
                                            name="title"  />
                                    </div>
                                    <div className="space-y-10">
                                        <span className="nameInput">Description</span>
                                        <textarea style={{minHeight: '110px'}}
                                            className="mb-0" name="description">
                                        </textarea>
                                        <p>Please enter the details of your request. A
                                            member of our support staff will respond as
                                            soon as possible.</p>
                                    </div>
                                    
                                    <div className="requests_footer">
                                        
                                        <div>
                                            <button type="submit" className="btn
                                                btn-grad">Submit message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}