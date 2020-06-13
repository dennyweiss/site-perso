<template>
  <header class="nav-header">
    <div class="logos">
      <img src="/logo.svg" class="nav-logo" />
      <i class="fab fa-creative-commons fa-2x"></i>
      <i class="fab fa-creative-commons-by fa-2x"></i>
    </div>

    <div class="header-text">
      <p>Mathieu NICOLAS</p>
      <p>JavaScript, FOSS, écriture, théâtre, enseignement.</p>
    </div>
    <ul class="menu">
      <li>
        <a href="/">
          <i class="fas fa-home"></i>
          Accueil
        </a>
      </li>
      <li>
        <a href="https://diaspodon.fr/web/accounts/101167">
          <i class="fab fa-mastodon"></i>
          mastodon
        </a>
      </li>
      <li>
        <a href="https://framasphere.org/people/8afe88907bc10138dfca2a0000053625">
          <i class="fab fa-diaspora"></i>
          diaspora
        </a>
      </li>
    </ul>
  </header>
</template>

<style>
.nav-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
ul.menu {
  list-style-type: none;
  padding: 0;
}
a {
  text-decoration: none;
  color: #1a8a21;
}
a:hover {
  border-bottom: 1px solid #1a8a21;
}
.nav-logo {
  width: 5rem;
}
.logos {
  margin-bottom: 0.5rem;
}
.header-text p {
  text-indent: 0;
  text-align: left;
  margin: 0 0 0.5rem;
}
</style>
