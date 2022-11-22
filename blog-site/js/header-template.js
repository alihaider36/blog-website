class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <header class="header container-fluid padding_all">
        <nav class="navbar flex container">
            <div class="logo_wrapper">
                <h3 class="logo">CRL</h3>
            </div>
            <div class="menu_wrapper">
                <ul class="nav-menu_ul flex">
                    <li class="nav-menu_li">
                        <a href="/Day-01/index.html" class="menu-link">
                            Home
                        </a>
                    </li>

                    <li class="nav-menu_li">
                        <a href="/Day-01/pages/about.html" class="menu-link">
                            About
                        </a>
                    </li>

                    <li class="nav-menu_li">
                        <a href="/Day-01/pages/services.html" class="menu-link">
                            Services
                        </a>
                    </li>

                    <li class="nav-menu_li">
                        <a href="/Day-01/pages/portfolio.html" class="menu-link">
                            Portfolio
                        </a>
                    </li>

                    <li class="nav-menu_li">
                        <a href="/Day-01/pages/contact-us.html" class="menu-link">
                            Contact
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
        `
    }
}

customElements.define('main-header', MyHeader);