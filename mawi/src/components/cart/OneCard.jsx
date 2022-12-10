import React from 'react'

const OneCard = () => {
  return (
    <div>
      <div className="card mb-3 mb-lg-0">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: 65 }}
                          />
                        </div>
                        <div className="ms-3">
                          <h5>MacBook Pro</h5>
                          <p className="small mb-0">1TB, Graphite</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 50 }}>
                          <h5 className="fw-normal mb-0">1</h5>
                        </div>
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">$1799</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <i className="fas fa-trash-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

    </div>
  )
}

export default OneCard