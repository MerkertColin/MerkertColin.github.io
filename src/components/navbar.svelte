<script>
    import NavItem from "./navItem.svelte";

</script>
<nav
    class="navbar navbar-expand-sm bg-body-tertiary sticky-top"
    id="topLevelNav"
>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">MARTIN WINKLER</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExpandable"
            aria-controls="navbarExpandable"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarExpandable">
            <div class="navbar-nav ms-auto">
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="paintings"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Work
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="paintings">Paintings</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="installations">Installations</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="sketchbook">Sketchbook</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="video">Video</a>
                        </li>
                    </ul>
                </li>
                <NavItem href="http://www.martinwinklerart.bigcartel.com" target="_blank">Shop</NavItem>
                <NavItem href="about">About</NavItem>
                <NavItem href="contact">Contact</NavItem>
            </div>
        </div>
    </div>
</nav>
