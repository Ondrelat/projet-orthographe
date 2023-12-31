# Déclaration d'un tableau contenant les dictées
$dictes = @(
    "<speak>Le matin, virgule<break time='300ms'/> le soleil brille et les oiseaux chantent<break time='500ms'/> point<break time='700ms'/> Les chats dans le jardin jouent avec les feuilles qui tombent<break time='500ms'/> point</speak>",
    "<speak>Sur la route, virgule<break time='300ms'/> les voitures passent rapidement<break time='500ms'/> point<break time='700ms'/> Les enfants regardent les camions et les bus aller et venir<break time='500ms'/> point</speak>",
    "<speak>Dans le parc, virgule<break time='300ms'/> il y a un grand lac avec des canards<break time='500ms'/> point<break time='700ms'/> Les gens viennent les nourrir et se promener<break time='500ms'/> point</speak>",
    "<speak>Le ciel est bleu et il n'y a pas de nuages<break time='500ms'/> point<break time='700ms'/> L'après-midi, virgule<break time='300ms'/> il fait chaud et tout le monde aime jouer dehors<break time='500ms'/> point</speak>",
    "<speak>La nuit, virgule<break time='300ms'/> la lune brille dans le ciel<break time='500ms'/> point<break time='700ms'/> Les étoiles scintillent et tout est calme autour<break time='500ms'/> point</speak>"
)

# Boucle sur chaque dictée
for ($i = 0; $i -lt $dictes.Length; $i++) {
    $text = $dictes[$i]
    $filename = "dictee_niveau1_num$(($i + 1)).mp3"
    
    # Commande AWS Polly pour générer l'audio
    aws polly synthesize-speech `
        --output-format mp3 `
        --voice-id Lea `
        --engine neural `
        --text-type ssml `
        --text $text `
        $filename
}