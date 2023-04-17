import React from 'react'

function ListCard() {
    return (
        <>
            <main>
                <div className="container-fluid">
                
                    <div className="row">
                    <h1 className="text-center fs-1 fw-bold mt-5 mb-5">My Course</h1>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="card bounded" >
                                <img style={{height:'auto'}} src="https://seeklogo.com/images/S/semantic-ui-logo-AFDC4C7E31-seeklogo.com.png" className="w-100 card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-3 col-sm-6 col-12">
                            <div className="card bounded">
                                <img src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png" className="w-100 card-img-top" style={{height:'auto'}} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="card bounded" >
                                <img style={{height:'auto'}} src="https://seeklogo.com/images/C/CSS-logo-A4457044AA-seeklogo.com.gif" className="w-100 card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="card bounded" >
                                <img style={{height:'auto'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnCKu1a97PCQjo4_5Zd39xvsXCE6EM4uBdgVe6Zo_zpAK_7C_w4CJ6SlII1Ml23wVlf4&usqp=CAU" className="card-img-top w-100" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ListCard