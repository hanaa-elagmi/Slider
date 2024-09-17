

var ProductName = document.getElementById('ProductName');
var ProductPrice = document.getElementById('ProductPrice');
var ProductCategory = document.getElementById('Productcategory');
var ProductDescription = document.getElementById('ProductDesc');


function DisplayProduct() {
    var display = document.getElementById('display');
    var info = 'Product Name:' + ProductName.value + '</br>' + 'Product Price:' + ProductPrice.value + '</br>' + 'Product Category:' + ProductCategory.value + '</br>' + 'Product Description:' + '</br>' + ProductDescription.value;
    display.innerHTML = info;

}