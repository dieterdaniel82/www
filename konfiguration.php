

<?php
    // die Konstanten auslagern in eigene Datei
    // die dann per require_once ('konfiguration.php');
    // geladen wird.
    
    // Damit alle Fehler angezeigt werden
    error_reporting(E_ALL);
    
    define ( 'MYSQL_HOST',      'smolk_seb.no-li-mit.de' );
    define ( 'MYSQL_BENUTZER',  'smolk_seb' );
    define ( 'MYSQL_KENNWORT',  'dieapp69' );
    define ( 'MYSQL_DATENBANK', 'smolkenbur_dieapp' );

    ?>

