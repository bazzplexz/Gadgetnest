/**
 * GadgetNest — App Logic
 * Renders products from PRODUCTS array and handles search.
 */

(function () {
    "use strict";

    const grid = document.getElementById("product-grid");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const noResults = document.getElementById("no-results");

    /** Create a single product card element */
    function createCard(product, index) {
        const card = document.createElement("a");
        card.href = product.link || "#";
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.className = "product-card";
        card.id = `product-${index}`;
        card.setAttribute("data-name", product.name.toLowerCase());
        card.setAttribute("data-category", (product.category || "").toLowerCase());
        card.style.animationDelay = `${index * 0.07}s`;

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${product.image}" alt="${product.name}" loading="lazy" />
                <div class="card-overlay">
                    <span class="view-btn">View Product →</span>
                </div>
            </div>
            <h2 class="card-title">${product.name}</h2>
        `;

        return card;
    }

    /** Render the full product grid */
    function renderProducts(filter = "") {
        grid.innerHTML = "";
        const query = filter.toLowerCase().trim();
        let count = 0;

        PRODUCTS.forEach((product, i) => {
            const name = product.name.toLowerCase();
            const cat = (product.category || "").toLowerCase();
            if (query && !name.includes(query) && !cat.includes(query)) return;
            grid.appendChild(createCard(product, i));
            count++;
        });

        noResults.style.display = count === 0 ? "block" : "none";
    }

    /** Search handler */
    function handleSearch() {
        renderProducts(searchInput.value);
    }

    searchBtn.addEventListener("click", handleSearch);
    searchInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") handleSearch();
        // Live filter after 2+ chars or if cleared
        if (searchInput.value.length >= 2 || searchInput.value.length === 0) {
            handleSearch();
        }
    });

    // Initial render
    renderProducts();
})();
