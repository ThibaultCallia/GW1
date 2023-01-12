<?php
session_start();
$loggedIn = false;
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"]) {
    $loggedIn = true;
}
?>

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
                        <li class="full-nav"><a href="#footer">Contact</a></li>
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
                    <!-- <div class="text-container"> -->
                    <?php
                    echo $loggedIn ? '<p class="title">Logged in as Admin</p>' : '<p class="title">Anything For <br> Mechanical Keyboards</p>';
                    ?>
                    <!-- </div> -->
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
                                        <?php
                                        if ($loggedIn) {
                                            echo
                                            '<div class="subfilter__row">
                                                <label for="adminActive">Non active first</label>
                                                <input class="sort-radio" type="radio" id="adminActive" name="sort" />
                                            </div>';
                                        }
                                        ?>
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
                    <?php
                    echo $loggedIn ? '<p>Non active products highlighted: </p>' : '';
                    ?>
                </div>

                <div class="grid-container">

                    <a href="#products" class="back2prods"><i class="fa-solid fa-circle-chevron-up"></i></a>
                    <?php
                    include "./php/includes/showProducts.inc.php"
                    ?>
                </div>
            </section>
        </div>
    </main>
    <footer id="footer">
        <div class="footer__background"></div>
        <div class="footer__content-container">
            <div class="footer__main-content">
                <div class="footer__part developers">
                    <ul>
                        <li class="footer__heading">DEVELOPERS</li>
                        <li>Rinzin Tenzin</li>
                        <li>Thibault Calliauw</li>
                    </ul>
                </div>
                <div class="footer__part get-connected">
                    <ul>
                        <li class="footer__heading">CONTACT</li>
                        <li>calliauw.t@gmail.com</li>
                        <li>tenzin.rinzin@tenzin.rinzin</li>
                    </ul>
                </div>
                <div class="footer__part pricing">
                    <ul>
                        <li class="footer__heading">PRICING</li>
                        <li>Mechanical keyboards are overpriced </li>
                        <li>Still cool though</li>
                    </ul>
                </div>
                <div class="footer__part social">
                    <ul>
                        <li class="footer__heading">SOCIAL</li>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div class="footer__sub-content"></div>
        </div>
    </footer>
</body>

</html>