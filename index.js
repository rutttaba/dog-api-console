'use strict';

function getNewUrl(num) {
    let url = 'https://dog.ceo/api/breeds/image/random/';
    return url + num;
}

function getDogImage(num) {
    fetch(getNewUrl(num))
        .then(response => response.json())
        .then(responseJson =>
            console.log(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let num = parseInt($('#number').val());
        getDogImage(num);
       
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
    
});