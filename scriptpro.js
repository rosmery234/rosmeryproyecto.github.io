function loadMoreProducts() {
    const menu = document.getElementById('menu');

    const newProducts = `
        <div class="product">
            <img src="" alt="Hamburguesa Picante">
            <h2>Hamburguesa Picante</h2>
            <p>Carne picante, jalapeños, queso pepper jack y salsa especial.</p>
            <p><strong>Precio: $11</strong></p>
        </div>
        <div class="product">
            <img src="hamburguesa5.jpg" alt="Hamburguesa con Queso">
            <h2>Hamburguesa con Queso</h2>
            <p>Carne jugosa, doble queso cheddar y cebolla crujiente.</p>
            <p><strong>Precio: $13</strong></p>
        </div>
        <div class="product">
            <img src="hamburguesa6.jpg" alt="Hamburguesa Deluxe">
            <h2>Hamburguesa Deluxe</h2>
            <p>Carne premium, aguacate, bacon y salsa de mostaza miel.</p>
            <p><strong>Precio: $15</strong></p>
        </div>
    `;

    menu.insertAdjacentHTML('beforeend', newProducts);
}
