 const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const img = urlParams.get('img');
    const price = parseFloat(urlParams.get('price'));
   const productDescriptions = {
  "Daffodil": "Fresh Daffodil bouquet, handpicked with care.",
  "Tulip": "Bright and colorful Tulip bouquet, perfect for spring.",
  "Red Roses": "Classic Red Roses, symbol of love and passion.",
  "Dahlia": "Elegant Dahlia bouquet, hand-arranged for special occasions.",
  "Daisy": "Cheerful Daisy bouquet, ideal for gifting or decorating.",
  "Sunflower": "Sunny Sunflower bouquet, brings happiness and warmth.",
  "Orchid": "Exotic Orchid bouquet, luxurious and long-lasting.",
  "Lily": "Fragrant Lily bouquet, elegant and timeless.",
  "Hydrangea": "Beautiful Hydrangea bouquet, soft and romantic.",
  "Freesia": "Delicate Freesia bouquet, sweet and fragrant.",
  "Dandelion": "Bright Dandelion bouquet, cheerful and sunny.",
  "DontForgetMeNot": "Delicate bouquet of Forget-Me-Nots, a symbol of remembrance.",
  "Gardenia": "Elegant Gardenia bouquet, fragrant and luxurious.",
  "Hibiscus": "Tropical Hibiscus bouquet, vibrant and eye-catching.",
  "Hyacinth": "Fragrant Hyacinth bouquet, colorful and fresh.",
  "Jasmine": "Sweet Jasmine bouquet, aromatic and elegant.",
  "Lavender": "Calming Lavender bouquet, perfect for relaxation.",
  "Magnolia": "Beautiful Magnolia bouquet, soft and sophisticated.",
  "Poppy": "Bright Poppy bouquet, lively and cheerful.",
  "Ranunculus": "Elegant Ranunculus bouquet, delicate and colorful.",
  "Spider Lily": "Unique Spider Lily bouquet, exotic and striking.",
  "Blue Peony": "Lush Blue Peony bouquet, romantic and charming.",
  "Pink Roses": "Lovely Pink Roses bouquet, perfect for any occasion.",
  "Red Orchid": "Exquisite Red Orchid bouquet, luxurious and elegant."
};
    document.getElementById('productName').textContent = name;
    document.getElementById('productImage').src = img;
    document.getElementById('productDesc').textContent = productDescriptions[name] || "Beautiful fresh bouquet, handpicked and arranged with care.";
    document.getElementById('productPrice').textContent = '$' + price.toFixed(2);

    const sizeSelect = document.getElementById('sizeSelect');
    const productPriceEl = document.getElementById('productPrice');

    sizeSelect.addEventListener('change', () => {
      let selectedSize = sizeSelect.value;
      let updatedPrice = price;

      if(selectedSize === "medium") updatedPrice += 10;
      else if(selectedSize === "large") updatedPrice += 20;

      productPriceEl.textContent = '$' + updatedPrice.toFixed(2);
    });

const orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', orderProduct);

function orderProduct() {
  const size = sizeSelect.value;
  let finalPrice = price;
  if(size === "medium") finalPrice += 10;
  else if(size === "large") finalPrice += 20;
  alert(`You have added ${name} (${size}) to your order!\nTotal Price: $${finalPrice.toFixed(2)}`);
  setTimeout(() => {
    window.location.href = "bouquets.html";
  }, 2000);
}
