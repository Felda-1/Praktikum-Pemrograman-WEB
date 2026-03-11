<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator</title>
</head>
<body>
    <?php
    function Kalkulator(float $x, int $y, int $z, string $op): float {
        switch ($op) {
            case "+":
                return $y + $z;
            case "-":
                return $z - $x;
            case "*":
                return $x * $y;
            case "/":
                return $y / $z;
            case "%":
                return $x % $z;
            case "**":
                return $y ** $z;
            case "++":
                return $x++;
            default:
                return "Operator tidak valid";
        }
    }  
    
    echo Kalkulator(5.5, 10, 2, "+");
    echo Kalkulator(0,10,2, "-");
    echo Kalkulator(1,10,2, "*");
    echo Kalkulator(5.5, 10, 2, "/");
    echo Kalkulator(5.5, 10, 2, "%");
    echo Kalkulator(5.5, 10, 2, "**");
    echo Kalkulator(5.5, 10, 2, "++");
    ?>
</body>
</html>