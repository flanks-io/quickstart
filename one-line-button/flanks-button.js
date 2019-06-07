class SplitButton {

    constructor(element) {
        this.element = element;
        //this.applylink();
        this.renderButton();
    }

    disappear() {
        event.stopPropagation();
    }

    processForm() {
        event.preventDefault();
        console.log("processForm function!!!");
        var API = 'https://cors-anywhere.herokuapp.com/https://api.splitapp.one/server';
        var url = API + '/api/payment';
        console.log(url);

        //Call
        var formData = new FormData(document.querySelector('form'));
        formData.append('amount', '40');
        formData.append('access_key', 'xEeZJLDw5lWG5cXOYkiGf7U1a');
        formData.append('alias', 'popeye');

        fetch(url,
            {
                method: 'POST',
                body: formData
            })
            .then(res => {
                var Json = res.json();
                return Json;
            })
            .then(data => {
                this.showLink(data.link);
            })


    }
    copyToClipBoard() {
        var copyText = document.getElementById("split-link");
        /* Select the text field */
        console.log(copyText);
        copyText.select();

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        console.log("Copied the text: " + copyText.value);
    }

    showLink(link) {
        let contentToHide = document.getElementById('hideContent');
        contentToHide.style.display = 'none';

        var link_element = document.createElement('div');
        link_element.id = 'linkContainer';
        link_element.innerHTML = `
                                <span class="contact1-form-title">
                                    Genial! Por favor indíquenos con cuantas personas comparte su pedido
                                    y su IBAN.
                                </span>
                                <div class="link-container">
                                    <input class="input1" style="width:80%;margin:auto;" type=text readonly="readonly" id="split-link" value="`+ link + `"></input>
                                    <img class="icono-copy" src="copy.png" alt="Copy!" id="copyIcon">
                                </div>
        `

        document.getElementById('flanks-main-modal-content').appendChild(link_element);

        let icon = document.getElementById('copyIcon');
        icon.onclick = this.copyToClipBoard;
    }


    attachForm() {
        console.log(this);
        let popup = document.getElementById('flanks-main-modal-content');
        popup.onclick = this.disappear;
    }






    renderButton() {
        if (!this.element) {
            this.element = document.createElement('div');
            this.element.id = 'flanks-button';
        }
        this.element.innerHTML = `
        <div class="btn_wrap" id="flanks-button-wrap">
            <span class='fantasia'>Lo compartimos?</span>
            <div class="container">
                <img src="../button/assets/Split.png" alt="Avatar" class="icono">   
            </div>
        </div>

        <div id="flanks-main-modal" class="modal">
            <!-- Modal content -->
            <div id="flanks-main-modal-content" class="modal-content">
                <span class="close">&times;</span>
                <div id="bbva-tile" class="bank-tile">
                    <div class="inner-frame">
                        <img src="https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDE0NjQxfGltYWdlL2pwZWd8aGVkL2g2Zi84ODI5NjYwMjY2NTI2fDQ5OTdhYmFhZWMzMmZjN2Q3Y2Y2OTA5YWQzZjliMTZhNDYxOTFhNDgyYjM3YjQ4NjY3MzE4NGMzMTI1NTQwZWE" />
                        <b>BBVA</b>
                    </div>
                </div>
                <div id="santander-tile" class="bank-tile">
                    <div class="inner-frame">
                        <img src="https://img.huffingtonpost.com/asset/5b880250200000430034b929.jpeg?ops=scalefit_720_noupscale" />
                        <b>Santander</b>
                    </div>
                </div>
            </div>
            <div id="hideContent"></div>
        </div>    
        `;
        document.body.appendChild(this.element);
        // Get the modal
        var modal = document.getElementById('flanks-main-modal');

        // Get the button that opens the modal
        var btn = document.getElementById("flanks-button-wrap");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        this.attachForm();
    }

    applylink() { // Crea e inserta un elemento <link> en el header
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "main.css"; //necesitamos que esté accesible (¿problema?)
        document.getElementsByTagName("head")[0].appendChild(link);
        var icons = document.createElement('link');
        icons.rel = "stylesheet";
        icons.href = "https://fonts.googleapis.com/icon?family=Material+Icons"; //necesitamos que esté accesible (¿problema?)
        document.getElementsByTagName("head")[0].appendChild(icons);
    }


}

(function () {
    const button = document.createElement('div');
    button.id = 'flanks-button';
    new SplitButton(button);
})();


