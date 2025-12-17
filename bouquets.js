document.addEventListener("DOMContentLoaded", () => {
  const priceRange = document.getElementById("priceRange");
  const maxPriceLabel = document.getElementById("maxPriceLabel");
  const applyBtn = document.getElementById("applyPriceFilter");
  const products = document.querySelectorAll(".product-card");
  const flowerForm = document.getElementById("flowerFilterForm");

  priceRange.addEventListener("input", () => {
    maxPriceLabel.textContent = `$${priceRange.value}`;
  });

  function filterProducts() {
    const maxPrice = Number(priceRange.value);
    const selectedFlowers = [...flowerForm.querySelectorAll("input[name='flowers']:checked")]
      .map(item => item.value.toLowerCase());

    let firstVisibleProduct = null;

    products.forEach(product => {
      const priceText = product.querySelector(".price").textContent.replace("$", "");
      const price = Number(priceText);
      const title = product.querySelector("h3").textContent.toLowerCase();

      const matchesPrice = price <= maxPrice;
      const matchesFlower =
        selectedFlowers.length === 0 ||
        selectedFlowers.some(flower => title.includes(flower));

      if (matchesPrice && matchesFlower) {
        product.classList.remove("hidden");
        if (!firstVisibleProduct) firstVisibleProduct = product;
      } else {
        product.classList.add("hidden");
      }
    });

    if (firstVisibleProduct) {
      firstVisibleProduct.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  applyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    filterProducts();
  });

  flowerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filterProducts();
  });
});
