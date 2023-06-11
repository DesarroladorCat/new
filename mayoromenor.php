<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Mayor o Menor de Edad</title>
</head>
<body>
    <div class="main-frame-cal">
    <form action="" method="POST">
        <div class="form-group">
            <label for="exampleFormControlInput1">Edad</label>
            <input type="number" name="edad" class="form-control" id="exampleFormControlInput1" placeholder="Digite su edad">
        </div>
        <button type="submit" name="verificar" class="btn btn-outline-info">Inicio</button>
    </form>

    <?php

    $edad = 0;
    
    if (isset($_POST['verificar'])) {
        $edad = $_POST['edad'];

        if ($edad >= 18) {
            echo "<h1>Es mayor de edad</h1>";
        }
        else if (18 > $edad && 0 < $edad) {
            echo "<h1>No esmayor de edad</h1>";
        }else{
            echo "<h1>No es valido</h1>";
        }

    }

    ?>

    </div>
</body>
</html>