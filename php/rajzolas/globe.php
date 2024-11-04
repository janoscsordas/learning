<?
    header("Content-type: image/gif") ;                                     // kép-formátum beállítása (1)

    $kep = imagecreate( 180, 180) ;                                         // 180x180 méretű kép létrehozása (2)

	$feherhatter = imagecolorallocate( $kep, 255, 255, 255 ) ;          // háttérszín beállítása, mely most éppen fehér (3)
	$vilagoskek  = imagecolorallocate( $kep, 150, 150, 255 ) ;          // világoskék szín létrehozása
	$sotetkek    = imagecolorallocate( $kep,   0,   0,  48 ) ;          // sötétkék   szín létrehozása

	/* A tényleges rajzolás kezdete */

        imagefilledellipse( $kep, 90,90 , 160,160 , $sotetkek   ) ;     // nagy sötétkék kitöltött ellipszis
        imagefilledellipse( $kep, 90,90 , 154,154 , $vilagoskek ) ;     // benne kisebb világos kitöltött ellipszis

        imageline( $kep , 10,90 , 170,90  , $sotetkek ) ;               // vízszintes vonal (egyenlítő)
        imageline( $kep , 90,10 ,  90,170 , $sotetkek ) ;               // függőleges vonal

        imageellipse( $kep, 90,90 , 80,160 , $sotetkek ) ;              // hosszúsági vonal (középső ellipszis)

        imagearc( $kep, 90, 30 , 100,25 ,   0,180 , $sotetkek ) ;       // északi sarkkör
        imagearc( $kep, 90,150 , 100,25 , 180,0   , $sotetkek ) ;       //   déli sarkkör

        imagefilledellipse( $kep, 108,57 ,  8,4 , $sotetkek ) ;         // Magyarország

	/* A tényleges rajzolás vége */

    imagegif( $kep ) ;                                                      // kép megjelenítése a böngészőben (4)

    imagedestroy( $kep ) ;                                                  // használt memóriaterület felszabadítása (5)

?>
