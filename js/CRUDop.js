var ProductName = document.getElementById('ProductName');
var ProductPrice = document.getElementById('ProductPrice');
var ProductCategory = document.getElementById('Productcategory');
var ProductDescription = document.getElementById('ProductDesc');
var Searchbtn = document.getElementById('Searchbtn');
var AddProductbtn = document.getElementById('Addbtn');

var inputs = document.getElementsByClassName('form-control');

var currentIndex = 0;

var Products = [];
if (Products.length != null) {
    Products = JSON.parse(localStorage.getItem('ProductsArray'));
    DisplayProduct();
}
//add
AddProductbtn.onclick = function () {
    if (AddProductbtn.innerHTML == 'Add Product') {
        AddProduct();
    }
    else {
        UpdateProduct();
    }
    DisplayProduct();
    ClearForm();
};
function AddProduct() {
    var product = {
        name: ProductName.value,
        price: ProductPrice.value,
        category: ProductCategory.value,
        description: ProductDescription.value
    }

    Products.push(product);
    localStorage.setItem('ProductsArray', JSON.stringify(Products));
}

function DisplayProduct() {
    var cartona = '';
    for (let i = 0; i < Products.length; i++) {
        cartona +=
            `<tr>
        <td>${Products[i].name}</td>
        <td>${Products[i].price}</td>
        <td>${Products[i].category}</td>
        <td>${Products[i].description}</td>
        <td><button class="btn btn-warning"id="Updatebtn" onclick='GetProductInfo(${i})'>Update</button></td>
        <td><button class="btn btn-danger" id="Deletebtn" onclick='DeleteProduct(${i})' >Delete</button></td>
        </tr>`

    }
    document.getElementById('tableBody').innerHTML = cartona;

}
//delete
var Deletebtn = document.getElementById('Deletebtn');

function DeleteProduct(index) {
    Products.splice(index, 1);
    localStorage.setItem('ProductsArray', JSON.stringify(Products));
    DisplayProduct();
}

function ClearForm() {
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}
//search
Searchbtn.onkeyup = function () {
    var cartona = '';
    for (let i = 0; i < Products.length; i++) {
        if (Products[i].name.toLowerCase().includes(Searchbtn.value.toLowerCase())) {
            cartona +=
                `<tr>
        <td>${Products[i].name}</td>
        <td>${Products[i].price}</td>
        <td>${Products[i].category}</td>
        <td>${Products[i].description}</td>
        <td><button class="btn btn-warning"id="Updatebtn" onclick='GetProductInfo(${i})'>Update</button></td>
        <td><button class="btn btn-danger" id="Deletebtn" onclick='DeleteProduct(${i})' >Delete</button></td>
        </tr>`
        }
    }
    document.getElementById('tableBody').innerHTML = cartona;

}
//update
function GetProductInfo(index) {
    currentIndex = index;
    var currentProduct = Products[index];
    //console.log(currentProduct);
    ProductName.value = currentProduct.name;
    ProductCategory.value = currentProduct.category;
    ProductPrice.value = currentProduct.price;
    ProductDescription.value = currentProduct.description;
    AddProductbtn.innerHTML = 'Update Product';

}
function UpdateProduct() {
    var product = {
        name: ProductName.value,
        price: ProductPrice.value,
        category: ProductCategory.value,
        description: ProductDescription.value
    }
    Products[currentIndex] = product;
    localStorage.setItem('ProductsArray', JSON.stringify(Products));
    AddProductbtn.innerHTML = 'Add Product';

}

//validation
var ProductNameAlert = document.getElementById('PNameAlert');
var DescriptionRegix = /^[a-zA-Z ]{3,}$/;
var ProductNameRegix = /^[A-Z][a-z]{2,8}$/;
var CategoryRegix = /^[a-zA-Z]{4,9}$/;
var PriceRegix = /^[1-9][0-9]{2,4}$/;
ProductName.onkeyup = function () {

    if (ProductNameRegix.test(ProductName.value)) {

        ProductNameAlert.classList.add('d-none');
        ProductName.classList.add('is-valid');
        ProductName.classList.remove('is-invalid');
    }
    else {
        ProductNameAlert.classList.remove('d-none');
        ProductName.classList.remove('is-valid');
        ProductName.classList.add('is-invalid');
    }
    checkFormValidity();
}
ProductPrice.onkeyup = function () {

    if (PriceRegix.test(ProductPrice.value)) {
        ProductPrice.classList.add('is-valid');
        ProductPrice.classList.remove('is-invalid');
        ProductNameAlert.classList.add('d-none');
    }
    else {
        ProductPrice.classList.remove('is-valid');
        ProductPrice.classList.add('is-invalid');
        ProductNameAlert.classList.remove('d-none');
    }
    checkFormValidity();
}
ProductCategory.onkeyup = function () {

    if (CategoryRegix.test(ProductCategory.value)) {
        ProductCategory.classList.add('is-valid');
        ProductCategory.classList.remove('is-invalid');
        ProductNameAlert.classList.add('d-none');
    }
    else {
        ProductCategory.classList.remove('is-valid');
        ProductCategory.classList.add('is-invalid');
        ProductNameAlert.classList.remove('d-none');
    }
    checkFormValidity();
}
ProductDescription.onkeyup = function () {

    if (DescriptionRegix.test(ProductDescription.value)) {
        ProductDescription.classList.add('is-valid');
        ProductDescription.classList.remove('is-invalid');
        ProductNameAlert.classList.add('d-none');
    }
    else {
        ProductDescription.classList.remove('is-valid');
        ProductDescription.classList.add('is-invalid');
        ProductNameAlert.classList.remove('d-none');
    }
    checkFormValidity();
}
function checkFormValidity() {
    if (ProductName.classList.contains('is-valid') &&
        ProductPrice.classList.contains('is-valid') &&
        ProductCategory.classList.contains('is-valid') &&
        ProductDescription.classList.contains('is-valid')) {
        AddProductbtn.removeAttribute('disabled');
    } else {
        AddProductbtn.setAttribute('disabled', 'true');
    }
}
