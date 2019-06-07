
class SplitButton {

    disappear() {
        event.stopPropagation();
    }

    processForm(){
        event.preventDefault();
        console.log("processForm function!!!"); 
        var API = 'https://cors-anywhere.herokuapp.com/https://api.splitapp.one/server';
        var url = API + '/api/payment';
        console.log(url);
    
        //Call
        var formData = new FormData(document.querySelector('form'));
        formData.append('amount','40');
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

     showLink(link){
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
                                    <input class="input1" style="width:80%;margin:auto;" type=text readonly="readonly" id="split-link" value="`+ link+ `"></input>
                                    <img class="icono-copy" src="copy.png" alt="Copy!" id="copyIcon">
                                </div>
        `
            
        document.getElementById('content').appendChild(link_element);
        
        let icon = document.getElementById('copyIcon');
        icon.onclick = this.copyToClipBoard;
    }


    attachForm() {
        console.log(this);
        let popup = document.getElementById('content');
        popup.onclick = this.disappear;

        var form = document.getElementById('data-f');
        if (form.attachEvent) {
            form.attachEvent("submit", this.processForm.bind(this));
        } else {
            form.addEventListener("submit", this.processForm.bind(this));
        }
        
    }

    

    

    
    renderButton() {
        var button = document.createElement('div');
        button.innerHTML = `

        <div class="btn_wrap" id="myBtn">
            <span class='fantasia'>Lo compartimos?</span>
            <div class="container">
            <img src="../button/assets/Split.png" alt="Avatar" class="icono">   
            </div>
        </div>

        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div id="content" class="modal-content">
                <div id="hideContent">
                    <form id="data-f" class="contact1-form validate-form">
                            <span class="close">&times;</span>
                        <span class="contact1-form-title">
                            Genial! Porfavor indíquenos con cuantas personas comparte su pedido
                            y su IBAN.
                        </span>

                        <div class="wrap-input1 validate-input" data-validate="Name is required">
                            <input class="input1" type="number" name="members" placeholder="Personas a compartir">
                            <span class="shadow-input1"></span>
                        </div>

                        <div class="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input class="input1" name="iban" placeholder="IBAN">
                            <span class="shadow-input1"></span>
                        </div>

                        <div class="container-contact1-form-btn">
                            <button class="contact1-form-btn" type="submit">
                                <span>
                                    Compartir
                                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            

            </div>
        </div>

        
        `;
        document.body.appendChild(button);
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

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

    applylink(){ // Crea e inserta un elemento <link> en el header
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

let b = new SplitButton();
b.applylink();
b.renderButton();