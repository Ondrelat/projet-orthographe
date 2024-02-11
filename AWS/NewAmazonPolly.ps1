# D�claration d'un tableau contenant les dict�es
$dictes = @(
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
    "<speak></speak>",
)

# Boucle sur chaque dict�e
for ($i = 0; $i -lt $dictes.Length; $i++) {
    $text = $dictes[$i]
    $filename = "dictee_niveau2_num$(($i + 1)).mp3"
    
    # Commande AWS Polly pour g�n�rer l'audio
    aws polly synthesize-speech `
        --output-format mp3 `
        --voice-id Lea `
        --engine neural `
        --text-type ssml `
        --text $text `
        $filename
}