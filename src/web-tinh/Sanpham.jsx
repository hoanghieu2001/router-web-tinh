import '../Css/Sanpham.css'
function Sanpham() {
    return (
        <>
            <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                                Link liên hệ trực tiếp với quản lý
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <img style={{ width: 480 }} src="./images/qr-code.png" alt="" />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                data-bs-target="#exampleModalToggle2"
                                data-bs-toggle="modal"
                            >
                                Quay lại trang chủ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_product ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-5 col-sm-7 col-lg-7 col-md-6">
                            <div className="main_product_image">
                                <div
                                    className="swiper product_image_large position-relative"
                                    style={{ height: "100%" }}
                                >
                                    <div className="swiper-wrapper ">
                                        {/* Slides */}
                                        <div className="swiper-slide">
                                            <img
                                                style={{ height: 554 }}
                                                src="images/sp1.webp"
                                                alt="Tên sản phẩm"
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                style={{ height: 554 }}
                                                src="images/sp2.webp"
                                                alt="Tên sản phẩm"
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                style={{ height: 554 }}
                                                src="images/sp3.webp"
                                                alt="Tên sản phẩm"
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                style={{ height: 554 }}
                                                src="images/sp4.webp"
                                                alt="Tên sản phẩm"
                                            />
                                        </div>
                                        <div style={{ height: 554 }} className="swiper-slide">
                                            <img src="images/sp5.webp" alt="Tên sản phẩm" />
                                        </div>
                                    </div>
                                    <div className="swiper-button-prev" />
                                    <div className="swiper-button-next" />
                                </div>
                                <div className="swiper product_image_thumb position-relative">
                                    <div className="swiper-wrapper">
                                        {/* Slides */}
                                        <div className="swiper-slide">
                                            <img src="images/sp1.webp" alt="Tên sản phẩm" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/sp2.webp" alt="Tên sản phẩm" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/sp3.webp" alt="Tên sản phẩm" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/sp4.webp" alt="Tên sản phẩm" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/sp5.webp" alt="Tên sản phẩm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-sm-5 col-lg-5 col-md-6">
                            <h1>Tên của sản phẩm này</h1>
                            <div className="product_status mb-3">
                                <div className="product_type d-inline pe-2">
                                    <b>Loại: </b>Quần áo
                                </div>
                                <div className="product_quantity mt-1 d-block">
                                    <b>Tình trạng: </b>
                                    <span>Còn hàng</span>
                                </div>
                            </div>
                            <div className="product_price mb-3 text-center">
                                <div className="price d-inline">1.220.000VNĐ</div>
                            </div>
                            <div className="product_variants mb-3">
                                <div className="variants_title mb-2">Size</div>
                                <div className="variants_options">
                                    <div className="option position-relative d-inline-block mb-2 me-2">
                                        <input
                                            className="size position-absolute"
                                            type="radio"
                                            id="sizeS"
                                            defaultChecked="checked"
                                            name="optionsize"
                                        />
                                        <div className="variant_label position-relative d-inline-block">
                                            <label htmlFor="sizeS">Size S</label>
                                        </div>
                                    </div>
                                    <div className="option position-relative d-inline-block mb-2 me-2">
                                        <input
                                            className="size position-absolute"
                                            type="radio"
                                            id="sizeM"
                                            name="optionsize"
                                        />
                                        <div className="variant_label position-relative d-inline-block">
                                            <label htmlFor="sizeM">Size M</label>
                                        </div>
                                    </div>
                                    <div className="option position-relative d-inline-block mb-2 me-2">
                                        <input
                                            className="size position-absolute"
                                            type="radio"
                                            id="sizeL"
                                            name="optionsize"
                                        />
                                        <div className="variant_label position-relative d-inline-block">
                                            <label htmlFor="sizeL">Size L</label>
                                        </div>
                                    </div>
                                    <div className="option position-relative d-inline-block mb-2 me-2">
                                        <input
                                            className="size position-absolute"
                                            type="radio"
                                            id="sizeXL"
                                            name="optionsize"
                                        />
                                        <div className="variant_label position-relative d-inline-block">
                                            <label htmlFor="sizeXL">Size XL</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product_variants mb-3">
                                <div className="variants_title mb-2">Màu sắc</div>
                                <div className="variants_options">
                                    <div className="option position-relative d-inline-block mb-2 me-2">
                                        <input
                                            className="color bd-1 position-absolute"
                                            type="radio"
                                            id="color1"
                                            defaultChecked="checked"
                                            name="optioncolor"
                                        />
                                        <div className="variant_label position-relative d-inline-block">

                                            <label htmlFor="color1">Màu 1</label>
                                        </div>
                                    </div>
                                    <div className="option position-relative d-inline-block mb-2 me-2">
                                        <input
                                            className="color position-absolute"
                                            type="radio"
                                            id="color2"
                                            name="optioncolor"
                                        />
                                        <div className="variant_label position-relative d-inline-block">
                                            {/* <img src="https://bizweb.dktcdn.net/thumb/small/100/459/533/products/sm-s908-galaxys22ultra-front-green-211119.jpg?v=1660808747257"
                                  alt="" /> */}
                                            <label htmlFor="color2">Màu 2</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product_controls mt-4">
                                <div className="product_numberorder">
                                    <span className="me-3">Số lượng</span>
                                    <button className="quantity-reduce">-</button>
                                    <input
                                        className="number_quantity text-center"
                                        type="text"
                                        defaultValue={1}
                                    />
                                    <button className="quantity-pluss">+</button>
                                </div>
                                <div className="title-ivy mt-4">
                                    <div className=" mt-2">
                                        <div className=" p-2 rounded-3 text-center d-inline-block">
                                            <button className="btn-light btn buy mua"><a href="/buy">Mua</a></button>
                                        </div>
                                        <div className=" p-2 rounded-3 text-center d-inline-block">
                                            <button className="btn btn-light buy card-alert">
                                                <a style={{ color: "black" }} href="">
                                                    Thêm vào giỏ hàng
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Sanpham