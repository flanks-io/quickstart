var button = document.createElement('div');
button.id = 'splitbutton';
button.onclick = this.appear;
button.innerHTML = `
    <link rel="stylesheet" type="text/css" href="main.css">
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <form class="contact1-form validate-form">
                    <span class="close">&times;</span>
                <span class="contact1-form-title">
                    Genial! sdfsdfsfsdfsdfsf
                    sdfsfsfdv ffffffffffffffffffffffffffffff
                </span>

                <div class="wrap-input1 validate-input" data-validate="Name is required">
                    <input class="input1" type="number" name="name" placeholder="Personas a compartir">
                    <span class="shadow-input1"></span>
                </div>

                <div class="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="input1" type="number" name="email" placeholder="IBAN">
                    <span class="shadow-input1"></span>
                </div>

                <div class="container-contact1-form-btn">
                    <button class="contact1-form-btn">
                        <span>
                            Send Email
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
            </form>
        

        </div>
    </div>

    <script>
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
    </script>
`;
document.body.appendChild(button);