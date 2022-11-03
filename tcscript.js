var subtotaltext;

function storeSubtotal() {
    var subtotal = document.querySelector("#subtotal");
    subtotaltext = +subtotal.value;
};

const fifthteenbtn = document.querySelector("#fifthteenbtn");
const eighteenbtn = document.querySelector("#eighteenbtn");
const twentybtn = document.querySelector("#twentybtn");

var fifthteentip;
var eighteentip;
var twentytip;
var totalbill;

function tipfifthteen() {
    function calculatetip() {
        var tipspace = document.querySelector("#tipspace");
        fifthteentip = subtotaltext * 0.15;
        tipspace.textContent = `$${fifthteentip.toFixed(2)}`;
    };
    function calculatetotal() {
        var billspace = document.querySelector("#billspace");
        totalbill = subtotaltext + fifthteentip;
        billspace.textContent = `$${totalbill.toFixed(2)}`;
    };
    storeSubtotal();
    calculatetip();
    calculatetotal();
};

fifthteenbtn.addEventListener("click", tipfifthteen);

function tipeightteen() {
    function calculatetip() {
        var tipspace = document.querySelector("#tipspace");
        eighteentip = subtotaltext * 0.18;
        tipspace.textContent = `$${eighteentip.toFixed(2)}`;
    };
    function calculatetotal() {
        var billspace = document.querySelector("#billspace");
        totalbill = subtotaltext + eighteentip;
        billspace.textContent = `$${totalbill.toFixed(2)}`;
    };
    storeSubtotal();
    calculatetip();
    calculatetotal();
};

eighteenbtn.addEventListener("click", tipeightteen);

function tiptwenty() {
    function calculatetip() {
        var tipspace = document.querySelector("#tipspace");
        twentytip = subtotaltext * 0.20;
        tipspace.textContent = `$${twentytip.toFixed(2)}`;
    };
    function calculatetotal() {
        var billspace = document.querySelector("#billspace");
        totalbill = subtotaltext + twentytip;
        billspace.textContent = `$${totalbill.toFixed(2)}`;
    };
    storeSubtotal();
    calculatetip();
    calculatetotal();
};

twentybtn.addEventListener("click", tiptwenty);