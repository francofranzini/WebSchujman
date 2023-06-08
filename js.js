(function () {
    //HISTORY
    let latestHistoryState = ""
    window.addEventListener("popstate", (e) => {
        switch (latestHistoryState) {
            case "openSign":
                openSection();
                break;
            case "openConfiguration":
                openSection();
                break;
        }
    })

    //constants
    let userSelectedInfo = {}

    //capas
    const openConfiguration = () => {
        history.pushState("openConfiguration", "", ""); latestHistoryState = "openConfiguration";
        document.querySelector("body").style.cssText = "position: fixed;"
        document.querySelector(".section-conteiner").style.display = "none"
        document.querySelector(".configuration-conteiner").style.display = "block";
        document.querySelector("nav .logo").style.display = "none"
        document.querySelector("nav .arrow-back").style.display = "block"
    }
    const openSignRestore = () => {
        if (document.querySelector(".sign-conteiner").style.display != "block")
            history.pushState("openSign", "", ""); latestHistoryState = "openSign";
        document.querySelector("body").style.cssText = "position: fixed;"
        document.querySelector(".section-conteiner").style.display = "none"
        document.querySelector(".sign-conteiner").style.display = "block"
        document.querySelector(".sign-conteiner .conteiner").style.cssText = " translate: 0%;"
        document.querySelector("nav .logo").style.display = "none"
        document.querySelector("nav .arrow-back").style.display = "block"
    }
    const openSignIn = () => {
        if (document.querySelector(".sign-conteiner").style.display != "block")
            history.pushState("openSign", "", ""); latestHistoryState = "openSign";
        document.querySelector("body").style.cssText = "position: fixed;"
        document.querySelector(".section-conteiner").style.display = "none"
        document.querySelector(".sign-conteiner").style.display = "block"
        document.querySelector(".sign-conteiner .conteiner").style.cssText = " translate: -100%;"
        document.querySelector("nav .logo").style.display = "none"
        document.querySelector("nav .arrow-back").style.display = "block"
    }
    const openSignUp = () => {
        if (document.querySelector(".sign-conteiner").style.display != "block")
            history.pushState("openSign", "", ""); latestHistoryState = "openSign";
        document.querySelector("body").style.cssText = "position: fixed;"
        document.querySelector(".section-conteiner").style.display = "none"
        document.querySelector(".sign-conteiner").style.display = "block"
        document.querySelector(".sign-conteiner .conteiner").style.cssText = " translate: -200%;"
        document.querySelector("nav .logo").style.display = "none"
        document.querySelector("nav .arrow-back").style.display = "block"
    }
    const openSection = () => {
        document.querySelector("body").style.cssText = "position: relative;"
        document.querySelector(".section-conteiner").style.display = "block"
        document.querySelector(".configuration-conteiner").style.display = "none"
        document.querySelector(".sign-conteiner").style.display = "none"
        document.querySelector(".sign-conteiner .conteiner").style.cssText = " translate: 0%;"
        document.querySelector("nav .logo").style.display = "block"
        document.querySelector("nav .arrow-back").style.display = "none"
    }

    //modals
    const successfulModalAnimation = () => {
        document.querySelector("#modal-successful").style.cssText = "translate: 40% 0%;"
        setTimeout(() => {
            document.querySelector("#modal-successful").style.cssText = "translate: 40% -120%;"
        }, 2000);
    }
    const signUpModalAnimation = (message) => {
        document.querySelector("#modal-sign-div").style.display = "block"
        document.querySelector("#modal-sign-div span").textContent = message
        document.querySelector("#modal-sign-div button").onclick = () => {
            document.querySelector("#modal-sign-div").style.display = "none"
            openSignIn()
        }
    }

    //animation
    const submitButtonAnimation = (active) => {
        if (active) {
            document.querySelector("form button[type='submit'] p").style.cssText = "left: -100%;";
            document.querySelector("form button[type='submit'] .loader").style.cssText = "right: -50%; transform: translateY(-50%) translateX(-50%);";
        } else {
            document.querySelector("form button[type='submit'] p").style.cssText = "left: 50%;";
            document.querySelector("form button[type='submit'] .loader").style.cssText = "right: -100%; transform: translateY(-50%) translateX(0%);";
        }
    }

    //CONFIGURATION GUARDAR
    document.querySelectorAll(".configuration-conteiner .inputs-div input").forEach(input => {
        input.addEventListener("input", () => {
            document.querySelector(".configuration-conteiner button").style.cssText = "opacity: 1; pointer-events: all;"
        })
    })

    //SIGN RESTORE
    document.querySelector(".sign-conteiner .sign-restore-div").addEventListener("submit", (e) => {
        e.preventDefault()

        const mail = e.target.querySelector("input").value
        const message = "Le enviamos un mail a " + mail + " para que puedas restablecer tu contraseña"
        signUpModalAnimation(message)

        e.target.reset()
    })
    document.querySelector(".sign-conteiner .sign-restore-div .span-create-account").addEventListener("click", () => {
        openSignUp();
    })
    document.querySelector(".sign-conteiner .sign-restore-div .span-sign-up").addEventListener("click", () => {
        openSignIn();
    })

    //SIGN IN
    document.querySelector(".sign-conteiner .sign-in-div .span-create-account").addEventListener("click", () => {
        openSignUp();
    })
    document.querySelector(".sign-conteiner .sign-in-div .span-forgot-password").addEventListener("click", () => {
        openSignRestore();
    })

    //SIGN UP
    document.querySelector(".sign-conteiner .sign-up-div").addEventListener("submit", (e) => {
        e.preventDefault()

        const mail = e.target.querySelector("input").value;
        const message = "Le enviamos un mail de confirmacion a " + mail + ". Posterior a la confirmacion le generaremos una contraseña"
        signUpModalAnimation(message)

        e.target.reset()
    })
    document.querySelector(".sign-conteiner .sign-up-div .span-sign-up").addEventListener("click", () => {
        openSignIn();
    })

    //NAV BACK ARROW
    document.querySelector("nav .arrow-back").addEventListener("click", () => {
        history.back()
    })

    //NAV H1
    document.querySelector("h1").addEventListener("click", () => {
        openSection()
    })

    //NAV OPTIONS
    document.querySelector(".options .config-button").addEventListener("click", () => {
        document.querySelector("#menu-sign").checked = false;
        openConfiguration()
    })
    document.querySelector(".options .sign-in-button").addEventListener("click", () => {
        document.querySelector("#menu-sign").checked = false;
        openSignIn()
    })
    document.querySelector(".options .sign-up-button").addEventListener("click", () => {
        document.querySelector("#menu-sign").checked = false;
        openSignUp()
    })

    //SECTION BAR
    let indiceMenuAdd = 0;
    document.querySelector(".bar .add-button").addEventListener("click", () => {
        if (indiceMenuAdd == 0) {
            //open form div
            document.querySelector("section .form-div").style.cssText = "height: 280px;";
            indiceMenuAdd = 1;
            document.querySelector("section form").reset()
            document.querySelector("section form .photo-preview img").style.opacity = 0;
            document.querySelector("section form #upload-file-button").value = "";
        } else {
            //close form div
            document.querySelector("section .form-div").style.cssText = "height: 0;";
            indiceMenuAdd = 0;
        }
    })

    const searchFunction = (inputValue, selectValue) => {
        switch (selectValue) {
            case "name":
                const tdList = document.querySelectorAll("." + selectValue + "-td")
                tdList.forEach(td => {
                    td.textContent.includes(inputValue)
                        ? td.closest("tr").style.display = "table-row"
                        : td.closest("tr").style.display = "none"
                })
                break;
            case "age":
                document.querySelectorAll("." + selectValue + "-td").forEach(td => {
                    td.textContent.includes(inputValue)
                        ? td.closest("tr").style.display = "table-row"
                        : td.closest("tr").style.display = "none"
                })
                break;
            case "email":
                document.querySelectorAll("." + selectValue + "-td").forEach(td => {
                    td.textContent.includes(inputValue)
                        ? td.closest("tr").style.display = "table-row"
                        : td.closest("tr").style.display = "none"
                })
                break;
            case "dni":
                document.querySelectorAll("." + selectValue + "-td").forEach(td => {
                    td.textContent.includes(inputValue)
                        ? td.closest("tr").style.display = "table-row"
                        : td.closest("tr").style.display = "none"
                })
                break;
        }
    }
    document.querySelector("section input").addEventListener("input", (e) => {
        const inputValue = e.target.value
        const selectValue = document.querySelector("section select").value;
        searchFunction(inputValue, selectValue)
    })
    document.querySelector("section select").addEventListener("change", () => {
        document.querySelector("section input").value = "";
        document.querySelector("section input").focus();
        const selectValue = document.querySelector("section select").value;
        searchFunction("", selectValue)
        switch (selectValue) {
            case "name":
                document.querySelector("section input").type = "text"
                break;
            case "age":
                document.querySelector("section input").type = "number"
                break;
            case "email":
                document.querySelector("section input").type = "text"
                break;
            case "dni":
                document.querySelector("section input").type = "number"
                break;
        }
    })

    //SECTION FORM
    const ifFormChanged = (e) => {
        const currentUserInfo = {
            name: e.target.querySelector("form .name-input").value,
            age: e.target.querySelector("form .age-input").value,
            email: e.target.querySelector("form .email-input").value,
            id: e.target.querySelector("form .id-input").value,
            url: e.target.querySelector("form aside .photo-preview img").src,
        }
        for (i in currentUserInfo) {
            if (currentUserInfo[i] !== userSelectedInfo[i])
                return true
        }
    }
    document.querySelector("section form #upload-file-button").addEventListener("change", (e) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        document.querySelector("form .photo-preview img").style.opacity = 1;
        document.querySelector("form .photo-preview img").src = url;
    })
    document.querySelector("section form").addEventListener("submit", (e) => {
        e.preventDefault();

        //verify if form changed
        if (!ifFormChanged(e)) {
            //close form div
            document.querySelector(".form-div").style.cssText = "height: 0;";
            indiceMenuAdd = 0;
            return
        }

        //simulacion de envio
        submitButtonAnimation(true)
        setTimeout(() => {
            if (document.querySelector("form #upload-file-button").value == "") {
                //si no hay cambio con la foto no subir ni actualizar la foto
            }
            //animation
            submitButtonAnimation(false)
            successfulModalAnimation()
            //reset form
            e.target.reset();
            document.querySelector("form .photo-preview img").style.opacity = 0;
            document.querySelector("form #upload-file-button").value = "";
            //close form div
            document.querySelector(".form-div").style.cssText = "height: 0;";
            indiceMenuAdd = 0;
        }, 2000);
    })

    //SECTION TABLE
    document.querySelector("table").addEventListener("click", (e) => {
        if (e.target.classList.contains("edit-button")) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
            //open form div
            document.querySelector("section .form-div").style.cssText = "height: 280px;";
            indiceMenuAdd = 1;
            document.querySelector("section form").reset()
            //extract user info from table
            const userInfoElement = e.target.closest("tr");
            userSelectedInfo = {
                name: userInfoElement.querySelector(".name-td").textContent,
                age: userInfoElement.querySelector(".age-td").textContent,
                email: userInfoElement.querySelector(".email-td").textContent,
                id: userInfoElement.querySelector(".id-td").textContent,
                url: userInfoElement.querySelector(".photo-td img") != null
                    ? userInfoElement.querySelector(".photo-td img").src
                    : ""
                ,
            }

            //complete form with user info
            document.querySelector("section form .name-input").value = userSelectedInfo.name
            document.querySelector("section form .age-input").value = userSelectedInfo.age
            document.querySelector("section form .email-input").value = userSelectedInfo.email
            document.querySelector("section form .id-input").value = userSelectedInfo.id
            document.querySelector("section form aside .photo-preview img").src = userSelectedInfo.url
            document.querySelector("section form .photo-preview img").style.opacity = 1;
        }
    })

}())
