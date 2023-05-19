(function () {
    //constants
    let userSelectedInfo = {}

    //modals
    const successfulModalAnimation = () => {
        document.querySelector("#modal-successful").style.cssText = "translate: 40% 0%;"
        setTimeout(() => {
            document.querySelector("#modal-successful").style.cssText = "translate: 40% -120%;"
        }, 2000);
    }

    //animation
    const submitButtonAnimation = (active) => {
        if (active) {
            document.querySelector("form aside button[type='submit'] p").style.cssText = "left: -100%;";
            document.querySelector("form aside button[type='submit'] .loader").style.cssText = "right: -50%; transform: translateY(-50%) translateX(-50%);";
        } else {
            document.querySelector("form aside button[type='submit'] p").style.cssText = "left: 50%;";
            document.querySelector("form aside button[type='submit'] .loader").style.cssText = "right: -100%; transform: translateY(-50%) translateX(0%);";
        }
    }

    //BAR
    let indiceMenuAdd = 0;
    document.querySelector(".bar .add-button").addEventListener("click", () => {
        if (indiceMenuAdd == 0) {
            //open form div
            document.querySelector(".form-div").style.cssText = "height: 280px;";
            indiceMenuAdd = 1;
            document.querySelector("form").reset()
            document.querySelector("form .photo-preview img").style.opacity = 0;
            document.querySelector("form #upload-file-button").value = "";
        } else {
            //close form div
            document.querySelector(".form-div").style.cssText = "height: 0;";
            indiceMenuAdd = 0;
        }
    })

    //FORM
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
    document.querySelector("form #upload-file-button").addEventListener("change", (e) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        document.querySelector("form .photo-preview img").style.opacity = 1;
        document.querySelector("form .photo-preview img").src = url;

        console.log(document.querySelector("form aside #upload-file-button").value)
    })
    document.querySelector("form").addEventListener("submit", (e) => {
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

    //TABLE
    document.querySelector("table").addEventListener("click", (e) => {
        if (e.target.classList.contains("edit-button")) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
            //open form div
            document.querySelector(".form-div").style.cssText = "height: 280px;";
            indiceMenuAdd = 1;
            document.querySelector("form").reset()
            //extract user info from table
            const userInfoElement = e.target.closest("tr");
            userSelectedInfo = {
                name: userInfoElement.querySelector(".name-td").textContent,
                age: userInfoElement.querySelector(".age-td").textContent,
                email: userInfoElement.querySelector(".email-td").textContent,
                id: userInfoElement.querySelector(".id-td").textContent,
                url: userInfoElement.querySelector(".photo-td img").src,
            }

            //complete form with user info
            document.querySelector("form .name-input").value = userSelectedInfo.name
            document.querySelector("form .age-input").value = userSelectedInfo.age
            document.querySelector("form .email-input").value = userSelectedInfo.email
            document.querySelector("form .id-input").value = userSelectedInfo.id
            document.querySelector("form aside .photo-preview img").src = userSelectedInfo.url
            document.querySelector("form .photo-preview img").style.opacity = 1;
        }
    })

}())