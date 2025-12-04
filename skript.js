document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('form').onsubmit = function() {
                    const name = document.querySelector('#name').value;
                    event.preventDefault();
                    document.querySelector('#pumpkinname').innerHTML = name;
                    document.querySelector('#color-change').onchange = function() {
                    document.querySelector('#pumpkinname').style.color = this.value;
                };
                };
            });