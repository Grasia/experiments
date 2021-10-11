<html>

<head>
  <meta charset="utf-8" />
  <title> DColbici3 </title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap" rel="stylesheet">

  <!-- Ionic Icons -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <!-- Custon CSS -->
  <link href="../style/style.css" rel="stylesheet">

</head>

<body>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <div class="navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <?php
          // Tienen que tener el mismo nombre que el archivo .php y funciona automáticamente
          $tabs = ["welcome", "demos", "publications", "software"];
          $filename = basename($_SERVER['PHP_SELF']);
          $currTab = "";
          for ($i = 0; $i < count($tabs); $i++) {
            $tab = $tabs[$i];
            $active = '';
            if (strpos($filename, $tab) !== false) {
              $active = 'active';
              $currTab = $tab;
            }
            echo '<li class="nav-item">';
            echo ' <a class="nav-link ' . $active . '" href="' . $tab . '.php">' . strtoupper($tab) . '</a>';
            echo '</li>';
          }
          ?>
        </ul>
      </div>
    </nav>

  </header>

  <?php
  if ($currTab != "" && $currTab != "welcome") {
    echo '<section id="nav-title"><div class="content-center"><div class="text-primary">'
      . strtoupper($currTab) .
      '</div></div></section>';
    echo '<div class="content-center"><nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: \'>\';">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="welcome.php"><ion-icon name="home"></ion-icon> Home</a> </li>
      <li class="breadcrumb-item active" aria-current="page">' . ucfirst(strtolower($currTab)) . '</li>
    </ol>
  </nav></div>';
  }
