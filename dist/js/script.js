const data = '/src/data/data.json';

async function getSourceData() {
    try {
        const response = await fetch(data);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        const results = await response.json();

        if (location.pathname === '/pages/menu.html' || location.pathname === '/index.html') getMenuResult(results);

        if (location.pathname === '/pages/promo.html' || location.pathname === '/index.html') getPromoResult(results);
    } catch (error) {
        if (location.pathname === '/pages/menu.html') {
            const cardWrapper = document.querySelector('.card-wrapper');

            const responseError = document.createElement('h1');
            responseError.innerText = error;

            cardWrapper.appendChild(responseError);
        };

        if (location.pathname === '/pages/promo.html') {
            const promoCardWrapper = document.querySelector('.promo-card-wrapper');

            const responseError = document.createElement('h1');
            responseError.innerText = error;

            promoCardWrapper.appendChild(responseError);
        };
    };
};
document.addEventListener('DOMContentLoaded', getSourceData);

function getMenuResult(results) {
    const menus = results.menu;
    const favouriteMenus = results.favourite_menu;

    return listMenu(menus, favouriteMenus) || searchMenu(menus) || filterMenu(menus);
};

function searchMenu(menus) {
    const searchInput = document.getElementById('search-input');

    if (location.pathname === '/pages/menu.html') {
        searchInput.addEventListener('input', () => {
            const inputValue = searchInput.value.trim().toLowerCase();

            const cardWrapper = document.querySelector('.card-wrapper');
            cardWrapper.innerHTML = '';

            menus.forEach(menu => {
                if (menu.name.includes(inputValue)) {
                    let menuList =
                        `
                        <figure id="${menu.id}" class="card">
                            <span>
                                <img src="${menu.image}" alt="image" class="menu-image">
                                <figcaption class="menu-description">
                                    <h1>${menu.name}</h1>
                                    <small>${menu.description}</small>
                                </figcaption>
                            </span>
                            <h4>${menu.price}k</h4>
                        </figure>
                        `;
                    cardWrapper.innerHTML += menuList;
                };
            });
        });

        searchInput.addEventListener('blur', () => {
            searchInput.value = '';
        });
    };
};

function filterMenu(menus) {
    if (location.pathname === '/pages/menu.html') {
        const filterButtonGroups = document.querySelectorAll('.filter-button-group li button');

        filterButtonGroups.forEach(filterButton => {
            filterButton.addEventListener('click', () => {
                filterButtonGroups.forEach(recentButtonClicked => {
                    if (recentButtonClicked.classList.contains('filter-active')) {
                        recentButtonClicked.classList.remove('filter-active');
                    };
                });

                filterButton.classList.add('filter-active');

                const headingText = document.querySelector('.heading-text');
                headingText.textContent = filterButton.textContent;

                const filterMenu = menus.filter(menu => menu.cattegory === filterButton.textContent);

                if (filterButton.textContent === 'semua menu') {
                    return listMenu(menus);
                } else {
                    return listMenu(filterMenu);
                };
            });
        });
    };
};

function listMenu(menus, favouriteMenus, filterMenu) {
    if (location.pathname === '/pages/menu.html') {
        const cardWrapper = document.querySelector('.card-wrapper');
        cardWrapper.innerHTML = '';

        try {
            if (filterMenu) {
                filterMenu.forEach(menu => {

                    let menuList =
                        `
                        <figure class="card">
                            <span>
                                <img src="${menu.image}" alt="image" class="menu-image">
                                <figcaption class="menu-description">
                                    <h1>${menu.name}</h1>
                                    <small>${menu.description}</small>
                                </figcaption>
                            </span>
                            <h4>${menu.price}k</h4>
                        </figure>
                        `;

                    cardWrapper.innerHTML += menuList;
                });
            } else {
                menus.forEach(menu => {
                    let menuList =
                        `
                        <figure id="${menu.id}" class="card">
                            <span>
                                <img src="${menu.image}" alt="image" class="menu-image">
                                <figcaption class="menu-description">
                                    <h1>${menu.name}</h1>
                                    <small>${menu.description}</small>
                                </figcaption>
                            </span>
                            <h4>${menu.price}k</h4>
                        </figure>
                        `;

                    cardWrapper.innerHTML += menuList;
                });
            };
        } catch (error) {
            if (location.pathname === '/pages/menu.html') {
                const cardWrapper = document.querySelector('.card-wrapper');

                const responseError = document.createElement('h1');
                responseError.innerText = error;

                cardWrapper.appendChild(responseError);
            };
        };
    };

    if (location.pathname === '/index.html') {
        favouriteMenus.forEach(favouriteMenu => {
            const cardWrapper = document.querySelector('.card-wrapper');

            let favouriteMenuList =
                `
                <figure id="${favouriteMenu.id}" class="card">
                    <span>
                        <img src="${favouriteMenu.image}" alt="image" class="menu-image">
                        <figcaption class="menu-description">
                            <h1>${favouriteMenu.name}</h1>
                            <small>${favouriteMenu.description}</small>
                        </figcaption>
                    </span>
                    <h4>${favouriteMenu.price}k</h4>
                </figure>
                `;

            cardWrapper.innerHTML += favouriteMenuList;
        });
    };
};

function getPromoResult(results) {
    const promos = results.promo;
    const interestingPromos = results.interesting_promo;

    return listPromo(promos, interestingPromos);
};

function listPromo(promos, interestingPromos) {
    if (location.pathname === '/pages/promo.html') {
        promos.forEach(promo => {
            const cardWrapper = document.querySelector('.card-wrapper');

            let promoList =
                `
                <figure id="${promo.id}" class="promo-card">
                    <img src="${promo.image}" alt="image" class="promo-image">
                    <figcaption class="promo-description">
                        <h1>${promo.title}</h1>
                        <p>${promo.description}</p>
                        <small>
                            <i class="fa-regular fa-calendar-days"></i>
                            Berlaku hingga ${promo.expired}
                        </small>
                    </figcaption>
                </figure>
                `;

            cardWrapper.innerHTML += promoList;
        });
    };

    if (location.pathname === '/index.html') {
        interestingPromos.forEach(interestingPromo => {
            const promoCardWrapper = document.querySelector('.promo-card-wrapper');

            let interestingPromoList =
                `
                <a href="/pages/promo.html#${interestingPromo.id}">
                    <figure class="promo-card">
                        <img src="${interestingPromo.image}" alt="image" class="promo-image">
                        <figcaption class="promo-description">
                            <h1>${interestingPromo.title}</h1>
                            <small>
                                <i class="fa-regular fa-calendar-days"></i>
                                Berlaku hingga ${interestingPromo.expired}
                            </small>
                        </figcaption>
                    </figure>
                </a>
                `;

            promoCardWrapper.innerHTML += interestingPromoList;
        });
    };
};