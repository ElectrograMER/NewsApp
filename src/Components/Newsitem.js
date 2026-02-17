import React from 'react'

function Newsitem(props) {
        let { title, description, ImageUrl, newsurl, author, date,source } = props;
        return (
            <>
                <div className="card text-center mb-3" style={{ width: 350 }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%'}}>{source}</span>
                    <img src={!ImageUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-dark">Read more</a>
                    </div>
                </div>
                {/* <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={!ImageUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : ImageUrl} className="img-fluid rounded-start" alt="..." style={{ maxWidth: 150 }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}...</h5>
                                <p className="card-text">{description}...</p>
                                <a href={newsurl} target='_blank' rel="noreferrer" className='btn btn-dark'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
        )
    
}

export default Newsitem