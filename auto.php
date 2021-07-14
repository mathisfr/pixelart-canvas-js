<?php 

/**
* --------------------------------------------------------------------------
* Les différents types de dossier
* --------------------------------------------------------------------------
**/
$dossiers = [
    'css',
    'js',
    'media'
];

$nbr_dossiers = count($dossiers);




/**
* --------------------------------------------------------------------------
* La boucle principale du programme
* --------------------------------------------------------------------------
**/

echo '-----------------------------'."\n";
echo '- Générateur de projet v1.0 -'."\n";
echo '-----------------------------'."\n";
basicHtmlFile();
$i = 0;
foreach($dossiers as $dossier){
    if(!file_exists($dossier)){
        if(mkdir($dossier)){
            $i++;
            echo '['.$i.'] dossier(s) sur ['.$nbr_dossiers.'] de cré(ent)'."\n";
        }
    }else{
        echo 'Le dossier: '.$dossier.' existe déjà.'."\n";
    }
        switch($dossier){
            case 'css':
                basicCssFile($dossier);
                break;
            case 'js':
                basicJsFile($dossier);
                break;
            case 'media':
                break;
        }
}
echo '----------------------------'."\n";
echo 'Génération du projet terminé'."\n";





/**
* --------------------------------------------------------------------------
* Les différentes fonctions pour les différents types de fichier et dossier
* --------------------------------------------------------------------------
**/

function basicCssFile($dossier){

(string) $css =
"
body{
    margin:0;
    padding:0;
}
"
;

    $file = $dossier.'/style.css';

    if(!file_exists($file)){
        return fputs(fopen($file, "x"), $css);
    }else{
        echo 'Le fichier: '.$file.' existe déjà.'."\n";
    }
}

function basicJsFile($dossier){

    (string) $js =
    "
    document.addEventListener('DOMContentLoaded', function(event) {
        //Votre code ici
      })
    "
    ;
    
    $file = $dossier.'/app.js';

    if(!file_exists($file)){
        return fputs(fopen($file, "x"), $js);
    }else{
        echo 'Le fichier: '.$file.' existe déjà.'."\n";
    }
}

function basicHtmlFile(){

    (string) $html =
    '
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <title>Document</title>
    </head>
    <body>
        <h1>Titre</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum qui hic ullam nobis assumenda quas similique beatae ratione. Reprehenderit dolor officia quam laborum nostrum dolorem nesciunt repellat accusantium tempora praesentium.</p>
        <script src="js/app.js"></script>
    </body>
    </html>
    '
    ;
    
    $file = "index.html";

    if(!file_exists($file)){
        return fputs(fopen('index.html', "x"), $html);
    }else{
        echo 'Le fichier: '.$file.' existe déjà.'."\n";
    }
}

?>