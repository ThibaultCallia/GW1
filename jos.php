<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
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
    <?php
    include "./php/includes/scripts.incl.php";
    ?>
</body>

</html>