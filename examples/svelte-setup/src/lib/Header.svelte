<script>
  import { page } from "$app/stores"
  import logo from "$lib/images/logo.svg"
  import cart from "$lib/images/cart.svg"
</script>

<header class='container'>
  <div class="logo">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="Logo" />
    </a>
  </div>

  <nav class="nav">
    <ul class="nav_links">
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a class="nav_link" href="/">Products</a>
      </li>
      <!-- <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
      <li
        aria-current={$page.url.pathname.startsWith("/sverdle")
          ? "page"
          : undefined}
      >
        <a href="/sverdle">Sverdle</a>
      </li> -->
    </ul>
  </nav>

  <div class="cart">
    <a href="#">
      <img src={cart} alt="Cart" />
    </a>
  </div>
</header>

<style>
  header {
    display: flex;
    width: 100%;
    padding: 20px;
    align-items: center;
  }

  .logo {
    width: 2em;
    height: 2em;
  }

  .nav {
    flex: 1;
    width: 100%;
    justify-content: flex-start;
  }

  .nav_links {
    padding: 0 20px;
    font-size: 1em;
  }

  .nav_link {
    color: #333;
  }

  .cart {
    width: 1.5em;
    height: 1.5em;
  }
</style>
