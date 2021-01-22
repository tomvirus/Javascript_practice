console.log("We are learning here events");

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded and we are here to learn events');
    
    var checkData = document.getElementById('data');

    checkData.addEventListener('click', (event)=>
    {
        document.getElementById('data').innerHTML = Date(); // adding the event listener to the page 
    })

});