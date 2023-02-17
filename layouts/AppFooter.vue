<template>
  <div>
    <footer class="footer">
      <div class="footer-row">
        <div class="footer-logo">EX</div>
        <nav class="footer-menu">
          <ul>
            <li class="footer-menu-item">Terms of Service</li>
            <li class="footer-menu-item">Privacy Policy</li>
            <li class="footer-menu-item">Contact Us</li>
          </ul>
        </nav>
        <div class="footer-social">
          <a href="#" class="footer-social-icon">Facebook</a>
          <a href="#" class="footer-social-icon">Twitter</a>
          <a href="#" class="footer-social-icon">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* footer */
.footer {
  margin-top: 1100px;
  background-color: #222;
  color: #fff;
  padding: 20px;
  font-size: 14px;
}

/* footer row */
.footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* footer logo */
.footer-logo {
  font-size: 24px;
  font-weight: bold;
}

/* footer menu */
.footer-menu {
  margin-right: 40px;
}

.footer-menu ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu li {
  margin-left: 20px;
}

.footer-menu-item {
  color: #fff;
  text-decoration: none;
}

/* footer social */
.footer-social {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-social-icon {
  color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
}
</style>