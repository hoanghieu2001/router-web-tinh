

function Products() {
    return (
        <>
            <main className="d-flex flex-nowrap">
                <div
                    className="flex-shrink-0 p-3 mt-5"
                    style={{ width: 280, position: "relative" }}
                >
                    <a
                        href="/"
                        className="d-flex align-items-center position-fixed pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
                    >
                        <svg className="bi pe-none me-2" width={30} height={24}>
                            <use xlinkHref="#bootstrap" />
                        </svg>
                        <span className="fs-5 fw-semibold" style={{ color: "black" }}>SNAKE-STORE</span>
                    </a>
                    <ul className="list-unstyled ps-0 position-fixed mt-5">
                        <li className="mb-1">
                            <button
                                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#home-collapse"
                                aria-expanded="true"
                            >
                                Bộ sưu tập
                            </button>
                            {/* <div className="collapse show" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <a
                                            href="#"
                                            className=" link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            style={{ fontSize: 16 }}
                                        >
                                            Bộ công sở nữ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            style={{ fontSize: 16 }}
                                        >
                                            Chân váy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            style={{ fontSize: 16 }}
                                        >
                                            Áo
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="mb-1">
                            <button
                                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-collapse"
                                aria-expanded="false"
                            >
                                Phụ kiện
                            </button>
                            <div className="collapse" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <a
                                            href="#"
                                            className="link-body-emphasis d-inline-flex text-decoration-none rounded "
                                            style={{ fontSize: 16 }}
                                        >
                                            Giày
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            style={{ fontSize: 16 }}
                                        >
                                            Vòng
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            style={{ fontSize: 16 }}
                                        >
                                            Bông tai
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            style={{ fontSize: 16 }}
                                        >
                                            Kính
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="border-top my-3" />

                    </ul>
                </div>
                <section className="me-4 mt-5">
                    <div className="row g-2 mb q-4">
                        <div className="col-sm-4 col-xxl-3 mt-2 col-sm-6 col-xs-12 p">
                            <article className="series position-relative p-10">
                                <a href="/sanpham" className="series-link d-block">
                                    <img
                                        className="series-poster mw-100"
                                        src="./images/product1.jpg"
                                        alt=""
                                    />
                                </a>
                                <h5>
                                    <a href="./product.html" className="series-link d-block"></a>
                                    <a href="">Bộ đầm trắng đen 02</a>
                                    <div className="price">
                                        <a href="">1.300.000VND</a>
                                        <i className="bi bi-handbag" />
                                    </div>
                                </h5>
                            </article>
                        </div>
                        <div className="col-sm-4 col-xxl-3 mt-2  col-xs-12">
                            <article className="series position-relative p-10">
                                <a href="./product.html" className="series-link d-block">
                                    <img
                                        className="series-poster mw-100"
                                        src="./images/product2.jpg"
                                        alt=""
                                    />
                                </a>
                                <h5>
                                    <a href="./product.html" className="series-link d-block"></a>
                                    <a href="">Bộ đầm họa tiết xanh chấm hoa</a>
                                    <div className="price">
                                        <a href="">1.900.000VND</a>
                                        <i className="bi bi-handbag" />
                                    </div>
                                </h5>
                            </article>
                        </div>
                        <div className="col-sm-4 col-xxl-3 mt-2 col-sm-6 col-xs-12">
                            <article className="series position-relative p-10">
                                <a href="./product.html" className="series-link d-block">
                                    <img
                                        className="series-poster mw-100"
                                        src="./images/product3.jpg"
                                        alt=""
                                    />
                                </a>
                                <h5>
                                    <a href="./product.html" className="series-link d-block"></a>
                                    <a href="">Bộ đầm xanh ngọc</a>
                                    <div className="price">
                                        <a href="">2.000.000VND</a>
                                        <i className="bi bi-handbag" />
                                    </div>
                                </h5>
                            </article>
                        </div>
                        <div className="col-sm-4 col-xxl-3 mt-2 col-sm-6 col-xs-12 feature-product-card">
                            <article className="series position-relative p-10">
                                <a href="./product.html" className="series-link d-block">
                                    <img
                                        className="series-poster mw-100"
                                        src="./images/product4.jpg"
                                        alt=""
                                    />
                                </a>
                                <h5>
                                    <a href="./product.html" className="series-link d-block"></a>
                                    <a href="">Bộ đồ công sở xanh</a>
                                    <div className="price">
                                        <a href="">1.500.000VND</a>
                                        <i className="bi bi-handbag btn-add-to-cart" />
                                    </div>
                                </h5>
                            </article>
                        </div>
                        <div className="col-sm-4 col-xxl-3 mt-2 col-sm-6 col-xs-12 feature-product-card">
                            <article className="series position-relative p-10">
                                <a href="./product.html" className="series-link d-block">
                                    <img
                                        className="series-poster mw-100"
                                        src="./images/product5.jfif"
                                        alt=""
                                    />
                                </a>
                                <h5>
                                    <a href="./product.html" className="series-link d-block"></a>
                                    <a href="">Bộ đồ công sở xanh</a>
                                    <div className="price">
                                        <a href="">1.500.000VND</a>
                                        <i className="bi bi-handbag btn-add-to-cart" />
                                    </div>
                                </h5>
                            </article>
                        </div>
                        <div className="col-sm-4 col-xxl-3 mt-2 col-sm-6 col-xs-12 feature-product-card">
                            <article className="series position-relative p-10">
                                <a href="./product.html" className="series-link d-block">
                                    <img
                                        className="series-poster mw-100"
                                        src="./images/product 6.jfif"
                                        alt=""
                                    />
                                </a>
                                <h5>
                                    <a href="./product.html" className="series-link d-block"></a>
                                    <a href="">Bộ đồ công sở xanh</a>
                                    <div className="price">
                                        <a href="">1.500.000VND</a>
                                        <i className="bi bi-handbag btn-add-to-cart" />
                                    </div>
                                </h5>
                            </article>
                        </div>
                        <div className="col-sm-4 col-xxl-3 mt-2 col-sm-6 col-xs-12 feature-product-card">
                            <article className="series position-relative p-10">
                                <a href="./product.html" className="series-link d-block">
                                    <img
                                        className="series-poster mw-100"
                                        src="./images/product 7.webp"
                                        alt=""
                                    />
                                </a>
                                <h5>
                                    <a href="./product.html" className="series-link d-block"></a>
                                    <a href="">Bộ đồ công sở xanh</a>
                                    <div className="price">
                                        <a href="">1.500.000VND</a>
                                        <i className="bi bi-handbag btn-add-to-cart" />
                                    </div>
                                </h5>
                            </article>
                        </div>
                        <div className="col-sm-4 col-xxl-3 mt-2 col-sm-6 col-xs-12 feature-product-card">
                            <article className="series position-relative p-10">
                                <a href="./product.html" className="series-link d-block">
                                    <img
                                        className="series-poster mw-100"
                                        src="./images/anh4.webp"
                                        alt=""
                                    />
                                </a>
                                <h5>
                                    <a href="./product.html" className="series-link d-block"></a>
                                    <a href="">Bộ đồ công sở xanh</a>
                                    <div className="price">
                                        <a href="">1.500.000VND</a>
                                        <i className="bi bi-handbag btn-add-to-cart" />
                                    </div>
                                </h5>
                            </article>
                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}
export default Products