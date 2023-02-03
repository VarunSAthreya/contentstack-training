const buttons = document.querySelectorAll("button");
const cartCount = document.querySelector(".cart-count");
const cartPreview = document.querySelector(".cart-preview");
const cartPreviewList = document.querySelector(".cart-preview-list");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let count = parseInt(cartCount.textContent);
        count++;
        cartCount.textContent = count;

        let product = this.dataset.product;
        console.log(product);
        let item = document.createElement("li");
        item.innerHTML = `
      <div class="cart-preview-item">
        <img src="${product}.jpg" alt="${product}">
        <h3>${product}</h3>
      </div>
    `;
        cartPreviewList.appendChild(item);

        cartPreview.style.display = "block";
    });
}
