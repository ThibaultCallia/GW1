<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    include "./php/includes/head.inc.php"
    ?>
    <!-- Title -->
    <title>#️⃣ Keykaps</title>
</head>

<body>
    <main>
        <div class="modal-overlay"></div>
        <div class="overlay"></div>

        <div class="nav-container-mobile">
            <ul class="mobile-nav-list">
                <li><a class="mobile-home-btn" href="#">Home</a></li>
                <li><a class="mobile-products-btn" href="#products">Products</a></li>
                <li>Contact</li>
            </ul>
        </div>
        <header id="header">
            <div class="nav-container">
                <div class="logo-container">
                    <a class="logo-btn" href="#"><img class="logo-art" src="./images/welcome/keykaps-logo.jpg" alt="keycaps Logo" /></a>
                    <a class="logo-btn" href="#">
                        <h2 class="logo">KEYKAPS</h2>
                    </a>
                </div>
                <nav class="main-nav">
                    <ul class="nav__list">
                        <li class="full-nav">
                            <i class="theme-btn fa-solid fa-sun"></i>
                        </li>
                        <li class="full-nav"><a href="#">Home</a></li>
                        <li class="full-nav"><a href="#products">Products</a></li>
                        <li class="full-nav">Contact</li>
                        <li class="full-nav"><a href="./php/admin.php">Admin</a></li>
                        <li class="full-nav">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </li>

                        <li class="mobile-nav-list-item">
                            <i class="mobile-nav-btn fa-solid fa-bars"></i>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="main-container">
            <section class="welcome-container">
                <div class="welcome__text">
                    <div class="text-container">
                        <p class="title title1">Anything For</p>
                        <p class="title title2">Mechanical Keyboards</p>
                    </div>
                </div>
                <div class="welcome__image-container">
                    <!-- <img
              class="welcome__image"
              src="images/welcome/keykapsWelcome.jpg"
              alt=""
            /> -->
                </div>
            </section>
            <section class="products" id="products">
                <div class="products__filter">
                    <div class="main-filter">
                        <ul class="filter__list">
                            <li class="active-filter filter__item" data-filter="All">
                                ALL
                            </li>
                            <li class="filter__item" data-filter="Keyboard">KEYBOARDS</li>
                            <li class="filter__item" data-filter="Keycaps">KEYCAPS</li>
                            <li class="filter__item" data-filter="Switches">SWITCHES</li>
                        </ul>
                    </div>
                </div>
                <div class="subfilter-container">
                    <div class="subfilter">
                        <div class="subfilter__section subfilter__colors-section">
                            <button class="general-subfilter-btn subfilter-btn subfilter-btn-colors">
                                Colors <i class="fa-solid fa-chevron-down"></i>
                            </button>
                            <div class="hidden subfilter__selection animate__animated animate__fadeIn">
                                <div class="subfilter__clear">
                                    <span class="subfilter__clear-color">Clear</span>
                                </div>
                                <div class="subfilter__row-container">
                                    <?php
                                    include('./php/includes/createColors.inc.php');
                                    ?>

                                </div>
                            </div>
                        </div>
                        <div class="subfilter__section subfilter__brands-section">
                            <button class="general-subfilter-btn subfilter-btn">
                                Brands <i class="fa-solid fa-chevron-down"></i>
                            </button>
                            <div class="subfilter__selection hidden animate__animated animate__fadeIn">
                                <div class="subfilter__clear">
                                    <span class="subfilter__clear-brand">Clear</span>
                                </div>
                                <div class="subfilter__row-container">

                                    <?php
                                    include('./php/includes/createBrands.inc.php');
                                    ?>


                                </div>
                            </div>
                        </div>
                        <div class="sortDiv">
                            <div class="subfilter__section subfilter__sort-section">
                                <button class="general-subfilter-btn subfilter-btn">
                                    Sort <i class="fa-solid fa-chevron-down"></i>
                                </button>
                                <div class="hidden subfilter__selection sort__selection animate__animated animate__fadeIn">
                                    <div class="subfilter__row-container sort__row-container">
                                        <div class="subfilter__row">
                                            <label for="dateNO">Date, New to Old</label>
                                            <input class="sort-radio" type="radio" id="dateNO" name="sort" checked />
                                        </div>
                                        <div class="subfilter__row">
                                            <label for="dateON">Date, Old to New</label>
                                            <input class="sort-radio" type="radio" id="dateON" name="sort" />
                                        </div>
                                        <div class="subfilter__row">
                                            <label for="priceLH">Price, Low to High</label>
                                            <input class="sort-radio" type="radio" id="priceLH" name="sort" />
                                        </div>
                                        <div class="subfilter__row">
                                            <label for="priceHL">Price, High to Low</label>
                                            <input class="sort-radio" type="radio" id="priceHL" name="sort" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subfilter-active">
                        <button class="hidden active-filter-btn subfilter-btn-clear">
                            Clear All
                        </button>
                    </div>
                </div>
                <div class="grid-container">
                    <a href="#products" class="back2prods"><i class="fa-solid fa-circle-chevron-up"></i></a>
                    <?php
                    include "./php/includes/showProducts.inc.php"
                    ?>
                    <div class="product-card" data-category="Switches" data-color="c1,c4" data-brand="b1" data-price="199" data-order="7">
                        <section class="card-front">
                            <figure>
                                <img src="./images/welcome/kb-rk84.webp" alt="" />
                                <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                            </figure>
                            <div class="description">
                                <div class="prod-name">
                                    <span><i class="fa-solid fa-tags"></i>
                                        ROYAL KLUDGE
                                    </span>
                                    <h3 class="name">Royal Kludge RK84</h3>
                                </div>
                                <div class="ratings">
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4 class="price">€199</h4>
                                <div class="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum facilis tempore, commodi dignissimos ex magni?
                                </div>
                            </div>
                        </section>
                        <dialog class="product-modal">
                            <div class="product-details">
                                <!-- <i class="close fa-solid fa-chevron-left"></i> -->
                                <i class="close fa-solid fa-xmark"></i>
                                <div class="images">
                                    <figure>
                                        <img src="./images/welcome/kb-rk84.webp" alt="" />
                                        <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                        <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div class="text">
                                    <div class="product">
                                        <h3 class="name">Nuphy 1</h3>
                                        <span class="title brand">ROYAL KLUDGE</span>
                                    </div>
                                    <div class="price-container">
                                        <div class="price-wrapper wrap">
                                            <span class="title">PRICE</span>
                                            <h4 class="price">$59.00</h4>
                                        </div>
                                        <div class="amount-wrapper wrap">
                                            <span class="title">QUANTITY</span>
                                            <div class="counter">
                                                <span class="minus">-</span>
                                                <span class="amount">1</span>
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <span class="title">DESCRIPTION</span>
                                        <p class="description">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Placeat voluptate dicta doloribus dolor animi
                                            eveniet sint assumenda illo iste optio. Beatae, sapiente
                                            officia quae consequuntur nobis consequatur repellendus
                                            dolor amet?
                                        </p>
                                    </div>
                                    <div class="ratings">
                                        <span class="title">RATINGS</span>
                                        <figure>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </figure>
                                    </div>
                                    <div class="total-price">
                                        <span class="title">TOTAL PRICE</span>
                                        <h4>419.30</h4>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <div class="product-card" data-category="Switches" data-color="c1,c4" data-brand="b1" data-price="499" data-order="6">
                        <section class="card-front">
                            <figure>
                                <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                <img src="./images/welcome/kb-rk84.webp" alt="" />
                                <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                            </figure>
                            <div class="description">
                                <div class="prod-name">
                                    <span><i class="fa-solid fa-tags"></i>
                                        NUPHY
                                    </span>
                                    <h3 class="name">Nuphy 1 balkdf jakls;djfkl;asdf</h3>
                                </div>
                                <div class="ratings">
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4 class="price">€199</h4>
                                <div class="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum facilis tempore, commodi dignissimos ex magni?
                                </div>
                            </div>
                        </section>
                        <dialog class="product-modal">
                            <div class="product-details">
                                <!-- <i class="close fa-solid fa-chevron-left"></i> -->
                                <i class="close fa-solid fa-xmark"></i>
                                <div class="images">
                                    <figure>
                                        <img src="./images/welcome/kb-rk84.webp" alt="" />
                                        <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                        <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div class="text">
                                    <div class="product">
                                        <h3 class="name">Nuphy 1</h3>
                                        <span class="title brand">ROYAL KLUDGE</span>
                                    </div>
                                    <div class="price-container">
                                        <div class="price-wrapper wrap">
                                            <span class="title">PRICE</span>
                                            <h4 class="price">$59.00</h4>
                                        </div>
                                        <div class="amount-wrapper wrap">
                                            <span class="title">QUANTITY</span>
                                            <div class="counter">
                                                <span class="minus">-</span>
                                                <span class="amount">1</span>
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <span class="title">DESCRIPTION</span>
                                        <p class="description">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Placeat voluptate dicta doloribus dolor animi
                                            eveniet sint assumenda illo iste optio. Beatae, sapiente
                                            officia quae consequuntur nobis consequatur repellendus
                                            dolor amet?
                                        </p>
                                    </div>
                                    <div class="ratings">
                                        <span class="title">RATINGS</span>
                                        <figure>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </figure>
                                    </div>
                                    <div class="total-price">
                                        <span class="title">TOTAL PRICE</span>
                                        <h4>419.30</h4>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <div class="product-card" data-category="Switches" data-color="c1,c4" data-brand="b1" data-price="199" data-order="5">
                        <section class="card-front">
                            <figure>
                                <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                                <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                <img src="./images/welcome/kb-rk84.webp" alt="" />
                                <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                            </figure>
                            <div class="description">
                                <div class="prod-name">
                                    <span><i class="fa-solid fa-tags"></i>
                                        KEYCRON
                                    </span>
                                    <h3 class="name">Keycron blabdlab kadsi ndk</h3>
                                </div>
                                <div class="ratings">
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4 class="price">€199</h4>
                                <div class="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum facilis tempore, commodi dignissimos ex magni?
                                </div>
                            </div>
                        </section>
                        <dialog class="product-modal">
                            <div class="product-details">
                                <!-- <i class="close fa-solid fa-chevron-left"></i> -->
                                <i class="close fa-solid fa-xmark"></i>
                                <div class="images">
                                    <figure>
                                        <img src="./images/welcome/kb-rk84.webp" alt="" />
                                        <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                        <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div class="text">
                                    <div class="product">
                                        <h3 class="name">Nuphy 1</h3>
                                        <span class="title brand">ROYAL KLUDGE</span>
                                    </div>
                                    <div class="price-container">
                                        <div class="price-wrapper wrap">
                                            <span class="title">PRICE</span>
                                            <h4 class="price">$59.00</h4>
                                        </div>
                                        <div class="amount-wrapper wrap">
                                            <span class="title">QUANTITY</span>
                                            <div class="counter">
                                                <span class="minus">-</span>
                                                <span class="amount">1</span>
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <span class="title">DESCRIPTION</span>
                                        <p class="description">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Placeat voluptate dicta doloribus dolor animi
                                            eveniet sint assumenda illo iste optio. Beatae, sapiente
                                            officia quae consequuntur nobis consequatur repellendus
                                            dolor amet?
                                        </p>
                                    </div>
                                    <div class="ratings">
                                        <span class="title">RATINGS</span>
                                        <figure>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </figure>
                                    </div>
                                    <div class="total-price">
                                        <span class="title">TOTAL PRICE</span>
                                        <h4>419.30</h4>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <div class="product-card" data-category="Switches" data-color="c1,c4" data-brand="b1" data-price="299" data-order="4">
                        <section class="card-front">
                            <figure>
                                <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                <img src="./images/welcome/kb-rk84.webp" alt="" />
                                <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                            </figure>
                            <div class="description">
                                <div class="prod-name">
                                    <span><i class="fa-solid fa-tags"></i>
                                        ROYAL KLUDGE
                                    </span>
                                    <h3 class="name">Royal Kludge RK84</h3>
                                </div>
                                <div class="ratings">
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4 class="price">€199</h4>
                                <div class="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum facilis tempore, commodi dignissimos ex magni?
                                </div>
                            </div>
                        </section>
                        <dialog class="product-modal">
                            <div class="product-details">
                                <!-- <i class="close fa-solid fa-chevron-left"></i> -->
                                <i class="close fa-solid fa-xmark"></i>
                                <div class="images">
                                    <figure>
                                        <img src="./images/welcome/kb-rk84.webp" alt="" />
                                        <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                        <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div class="text">
                                    <div class="product">
                                        <h3 class="name">Nuphy 1</h3>
                                        <span class="title brand">ROYAL KLUDGE</span>
                                    </div>
                                    <div class="price-container">
                                        <div class="price-wrapper wrap">
                                            <span class="title">PRICE</span>
                                            <h4 class="price">$59.00</h4>
                                        </div>
                                        <div class="amount-wrapper wrap">
                                            <span class="title">QUANTITY</span>
                                            <div class="counter">
                                                <span class="minus">-</span>
                                                <span class="amount">1</span>
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <span class="title">DESCRIPTION</span>
                                        <p class="description">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Placeat voluptate dicta doloribus dolor animi
                                            eveniet sint assumenda illo iste optio. Beatae, sapiente
                                            officia quae consequuntur nobis consequatur repellendus
                                            dolor amet?
                                        </p>
                                    </div>
                                    <div class="ratings">
                                        <span class="title">RATINGS</span>
                                        <figure>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </figure>
                                    </div>
                                    <div class="total-price">
                                        <span class="title">TOTAL PRICE</span>
                                        <h4>419.30</h4>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <div class="product-card" data-category="Keyboard" data-color="c1,c8" data-brand="b2" data-price="399" data-order="3">
                        <section class="card-front">
                            <figure>
                                <img src="./images/welcome/kb-rk84.webp" alt="" />
                                <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                            </figure>
                            <div class="description">
                                <div class="prod-name">
                                    <span><i class="fa-solid fa-tags"></i>
                                        ROYAL KLUDGE
                                    </span>
                                    <h3 class="name">Royal Kludge RK84</h3>
                                </div>
                                <div class="ratings">
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4 class="price">€199</h4>
                                <div class="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum facilis tempore, commodi dignissimos ex magni?
                                </div>
                            </div>
                            </dialog>
                    </div>
                    <div class="product-card" data-category="Switches" data-color="c1,c4" data-brand="b1" data-price="199" data-order="1">
                        <section class="card-front">
                            <figure>
                                <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                <img src="./images/welcome/kb-rk84.webp" alt="" />
                                <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                            </figure>
                            <div class="description">
                                <div class="prod-name">
                                    <span><i class="fa-solid fa-tags"></i>
                                        ROYAL KLUDGE
                                    </span>
                                    <h3 class="name">Royal Kludge RK84</h3>
                                </div>
                                <div class="ratings">
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star yellow"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4 class="price">€199</h4>
                                <div class="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum facilis tempore, commodi dignissimos ex magni?
                                </div>
                            </div>
                        </section>
                        <dialog class="product-modal">
                            <div class="product-details">
                                <!-- <i class="close fa-solid fa-chevron-left"></i> -->
                                <i class="close fa-solid fa-xmark"></i>
                                <div class="images">
                                    <figure>
                                        <img src="./images/welcome/kb-rk84.webp" alt="" />
                                        <img src="./images/sliderImages/keykapsBlue.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy1.jpg" alt="" />
                                        <img src="./images/sliderImages/switchBrown.jpg" alt="" />
                                        <img src="./images/sliderImages/nuphy3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div class="text">
                                    <div class="product">
                                        <h3 class="name">Nuphy 1</h3>
                                        <span class="title brand">ROYAL KLUDGE</span>
                                    </div>
                                    <div class="price-container">
                                        <div class="price-wrapper wrap">
                                            <span class="title">PRICE</span>
                                            <h4 class="price">$59.00</h4>
                                        </div>
                                        <div class="amount-wrapper wrap">
                                            <span class="title">QUANTITY</span>
                                            <div class="counter">
                                                <span class="minus">-</span>
                                                <span class="amount">1</span>
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <span class="title">DESCRIPTION</span>
                                        <p class="description">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Placeat voluptate dicta doloribus dolor animi
                                            eveniet sint assumenda illo iste optio. Beatae, sapiente
                                            officia quae consequuntur nobis consequatur repellendus
                                            dolor amet?
                                        </p>
                                    </div>
                                    <div class="ratings">
                                        <span class="title">RATINGS</span>
                                        <figure>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star yellow"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </figure>
                                    </div>
                                    <div class="total-price">
                                        <span class="title">TOTAL PRICE</span>
                                        <h4>419.30</h4>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </section>
        </div>
    </main>
</body>

</html>