5 + "34"
// Prediction:534 il les considere comme des chaines de carateres et fait une concatenation
// Actual:534

5 - "4"
// Prediction:1 car il verifie les different types et voit qu'ils sont des nombre donc effectue l'action de l'operateur
// Actual:1


10 % 5
// Prediction: 0 car le reste de la division eclidienne de 10 par 5 est 0
// Actual: 0

5 % 0
// Prediction: 5 car le reste de la division eclidienne est 5
// Actual: 5

"Java" + "Script"
// Prediction:'JavaScript' car il concatene la valeur des deux chaines de caracteres
// Actual:JavaScript

" " + " "
// Prediction:'  ' car il concatene les espaces qui sont des carateres
// Actual:'  '

" " + 0
// Prediction:' 0' car il concatene l'espace a 0
// Actual:' 0'

true + true
// Prediction: 2 car la valeur de true est 1 vue que c'est un booleen donc comme il sont tous deux des nombres il additionne
// Actual: 2

true + false 
// Prediction: 1 car la valeur de true est 1 et false 0 vue que c'est un booleen donc comme il sont tous deux des nombres il additionne
// Actual:1

false + true
// Prediction: 1 car la valeur de true est 1 et false 0 vue que c'est un booleen donc comme il sont tous deux des nombres il additionne
// Actual:1

false - true
// Prediction: -1 car la valeur de true est 1 et false 0 vue que c'est un booleen donc comme il sont tous deux des nombres il applique l'operateur
// Actual:-1

!true
// Prediction: false car le ! donne le contraire de la variable
// Actual:false

3 - 4
// Prediction: -1 car ils sont tous deux de type nombre donc il applique l'operateur
// Actual:-1

"Bob" - "bill"
// Prediction:NaN car les deux sont de type string donc cet operateur ne s'applique pas a eux
// Actual:NaN