window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu"),
        menuLink = document.querySelectorAll(".menu__link"),
        hamburger = document.querySelector(".hamburger"),
        portfolioGalleria = document.querySelector(".portfolio__galleria"),
        portfolioItemImg = document.querySelectorAll(".portfolio__galleria__item-img");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
        //   cross.classList.toggle("cross_active");
    });

    menuLink.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("hamburger_active");
            menu.classList.remove("menu_active");
        });
    });

    // hover эффект portfolio-item
    function showDescr(index) {
        portfolioItemImg[index].classList.add("portfolio__galleria__item-img_hover");
    }

    function hideDescr(index) {
        portfolioItemImg[index].classList.remove("portfolio__galleria__item-img_hover");
    }

    function itemHover(parent) {
        parent.addEventListener("mouseover", (event) => {
            const target = event.target;

            if (target && target.classList.contains("portfolio__galleria__item-img")) {
                portfolioItemImg.forEach((item, index) => {
                    if (target == item) {
                        showDescr(index);
                    }
                });
            }
        });

        parent.addEventListener("mouseout", (event) => {
            const target = event.target;

            if (target && target.classList.contains("portfolio__galleria__item-img_hover")) {
                portfolioItemImg.forEach((item, index) => {
                    if (target == item) {
                        hideDescr(index);
                    }
                });
            }
        });
    }

    itemHover(portfolioGalleria);

    // отправка писем через form
    $("form").submit(function (e) {
        e.preventDefault();

        if (!$(this).valid()) { // не отправляет пустую форму
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val(""); // очистка input после отправки



            $("form").trigger("reset"); // очистка всех форм на странице
        });
        return false;
    });
});

//пересчет процентов progress__items
const percents = document.querySelectorAll(".progress__item-percents"),
    lines = document.querySelectorAll(".progress__item__value span");

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
