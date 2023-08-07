function Footer() {
    return (
        <>
            <section>
                <div className="container mt-4">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-3 mb-3">
                                <h5>Giới thiệu</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Về SNAKE-STORE
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Tuyển dụng
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Hệ thống cửa hàng
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-3 mb-3">
                                <h5>Dịch vụ khách hàng</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Chính sách điều khoản
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Hướng dẫn mua trả
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Chính sách thanh toán
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Chính sách đổi trả
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Chính sách bảo hành
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-3 mb-3">
                                <h5>LIÊN HỆ</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Hotline
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Email
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Live chat
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Messager
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            Liên hệ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-3 mb-3">
                                <form>
                                    <h5>Nhập thông tin các trương trình của SNAKE-STORE</h5>
                                    <p>Nhập thông tin địa chỉa email</p>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                        <label htmlFor="newsletter1" className="visually-hidden">
                                            Email address
                                        </label>
                                        <input
                                            id="newsletter1"
                                            type="text"
                                            className="form-control"
                                            placeholder="Email address"
                                        />
                                        <button className="btn btn-dark thong-bao" type="button">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                      <ul class="list-unstyled d-flex">
                          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24"
                                      height="24">
                                      <use xlink:href="#twitter" />
                                  </svg></a></li>
                          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24"
                                      height="24">
                                      <use xlink:href="#instagram" />
                                  </svg></a></li>
                          <li style="color: black;" class="ms-3"><a class="link-body-emphasis" href="#"><svg
                                      class="bi" width="24" height="24">
                                      <use xlink:href="#facebook" />
                                  </svg></a></li>
                      </ul>
                  </div> */}
                    </footer>
                </div>
            </section>

        </>
    )
}
export default Footer