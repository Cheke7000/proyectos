document
.querySelectorAll(".project-card")
.forEach(card => {
    card.setAttribute(
        "tabindex", "0"
    );


    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                const link =
                    card.querySelector(
                        ".open-project"
                    );


                if (link) {

                    link.click();

                }

            }

        }
    );

});