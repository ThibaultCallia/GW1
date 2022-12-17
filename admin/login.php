<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Styles -->
  <link rel="stylesheet" href="./admin_page.css" />

  <!-- Fonts and icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,700;1,900&display=swap" rel="stylesheet" />
  <script src="https://kit.fontawesome.com/cdb38844a4.js" crossorigin="anonymous"></script>

  <!-- Title -->
  <title>Admin Page</title>
</head>

<body>
  <div class="login-container">
    <h1>Login</h1>
    <form method="post" action="#">
      <div class="form_input">
        <input type="text" required />
        <span></span>
        <label>Username</label>
      </div>
      <div class="form_input">
        <input type="password" required />
        <span></span>
        <label>Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
</body>

</html>