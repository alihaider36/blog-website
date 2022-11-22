class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer container-fluid padding_all">
        <div class="footer-column container flex">
            <div class="footer-column-child">
                <h3 class="logo">CRL</h3>
            </div>
            <div class="footer-column-child"></div>
            <div class="footer-column-child"></div>
        </div>
    </footer>
        `
    }
}

customElements.define('main-footer', MyFooter);