<?php
session_start();
// moet je session opnieuw starten bij logout?
session_destroy();

header("Location: ./../../index.html");
exit;
