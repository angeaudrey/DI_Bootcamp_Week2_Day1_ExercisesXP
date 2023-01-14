typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual:boolean

"hamburger" + "s"
// Prediction: 'hamburgers' parce que les deux elements sont de type string
// Actual:'hamburgers'

"hamburgers" - "s"
// Prediction:NaN parce que les deux elements ne sont pas des nombres pour utiliser un operateur relatif aux nombres
// Actual: NaN

"1" + "3"
// Prediction: "13" parce que les deux elements sont de type string donc il fait une concatenation
// Actual:13

"1" - "3"
// Prediction:-2 parce que les deux elements ont le meme type
// Actual: -2


"johnny" + 5
// Prediction:'johnny5' parce qu'il concatene tout element associé a une chaine de caratere
// Actual:'johnny5'

"johnny" - 5
// Prediction:NaN parce que l'un des elements n'est pas de type nombre pour utiliser un operateur relatif aux nombres
// Actual:NaN

99 * "hello"
// Prediction:NaN parce que l'un des elements n'est pas de type nombre pour utiliser un operateur relatif aux nombres
// Actual:NaN

1 != 1
// Prediction: false parce que 1 n'est pas different de lui meme
// Actual: false

1 == "1"
// Prediction: true parce que les deux valeurs sont pareil
// Actual: true

1 === "1"
// Prediction: false parce que les deux elements sont de type different
// Actual:false
