const quotes = [
    { text: "La vita è come una scatola di cioccolatini. Non sai mai quello che ti capita.", correct: "Forrest Gump", options: ["Forrest Gump", "Il Gladiatore", "Titanic", "Inception"] },
    { text: "Mi chiamo Bond, James Bond.", correct: "James Bond", options: ["Harry Potter", "James Bond", "Indiana Jones", "Mission Impossible"] },
    { text: "Non ci sono posti come casa.", correct: "Il mago di Oz", options: ["Il mago di Oz", "Mary Poppins", "Cenerentola", "Alice nel paese delle meraviglie"] },
    { text: "Alcuni uomini giustificano i loro mezzi.", correct: "Il Padrino", options: ["Il Padrino", "Scarface", "Goodfellas", "Donnie Brasco"] },
    { text: "Siamo tutti a caccia di un sogno.", correct: "La ricerca della felicità", options: ["La ricerca della felicità", "Forrest Gump", "Il lato positivo", "A Beautiful Mind"] },
    { text: "Siamo stati tutti un po' folli.", correct: "Il grande Gatsby", options: ["Il grande Gatsby", "Il Padrino", "Shutter Island", "Gone Girl"] },
    { text: "Non smettere mai di credere.", correct: "Il diritto di contare", options: ["Il diritto di contare", "Hidden Figures", "Il lato positivo", "The Help"] },
    { text: "Dobbiamo fare qualcosa, altrimenti moriremo.", correct: "Il giorno della marmotta", options: ["Il giorno della marmotta", "Ritorno al futuro", "Groundhog Day", "Ritorno al futuro"] },
    { text: "Nessuno è perfetto.", correct: "A qualcuno piace caldo", options: ["A qualcuno piace caldo", "Titanic", "La vita è bella", "Il Padrino"] },
    { text: "Ho visto cose che voi umani non potreste immaginare.", correct: "Blade Runner", options: ["Blade Runner", "Alien", "The Matrix", "Inception"] },
    { text: "Io non sono un animale!", correct: "Il Pianista", options: ["Il Pianista", "The Elephant Man", "A Beautiful Mind", "Cinderella Man"] },
    { text: "Non si può sempre fare quello che si vuole.", correct: "Big Fish", options: ["Big Fish", "Forrest Gump", "Eternal Sunshine of the Spotless Mind", "L'attimo fuggente"] },
    { text: "Mamma diceva sempre: non si può tornare indietro.", correct: "Forrest Gump", options: ["Forrest Gump", "A Beautiful Mind", "The Pursuit of Happyness", "The Social Network"] },
    { text: "La vita è una sfida, affrontala.", correct: "La vita è bella", options: ["La vita è bella", "Il miglio verde", "Cappuccetto rosso", "L'attimo fuggente"] },
    { text: "Chi è il vero cattivo?", correct: "Il silenzio degli innocenti", options: ["Il silenzio degli innocenti", "Psycho", "Se7en", "Zodiac"] },
    { text: "Vivi e lascia vivere.", correct: "Il club degli imperatori", options: ["Il club degli imperatori", "Dead Poets Society", "A Few Good Men", "Good Will Hunting"] },
    { text: "Le cose non sono sempre come sembrano.", correct: "Inception", options: ["Inception", "Memento", "Fight Club", "The Sixth Sense"] },
    { text: "Cosa faresti se avessi solo un giorno da vivere?", correct: "Il giardino delle vergini suicide", options: ["Il giardino delle vergini suicide", "The Virgin Suicides", "Donnie Darko", "The Notebook"] },
    { text: "È un mondo duro per una ragazza.", correct: "Precious", options: ["Precious", "The Help", "The Pursuit of Happyness", "Moonlight"] },
    { text: "La vita è un viaggio.", correct: "Into the Wild", options: ["Into the Wild", "Wild", "The Secret Life of Walter Mitty", "The Way"] },
    { text: "Le persone non sono sempre ciò che sembrano.", correct: "Il sesto senso", options: ["Il sesto senso", "Se7en", "Fight Club", "The Others"] },
    { text: "Nessuno è perfetto.", correct: "A qualcuno piace caldo", options: ["A qualcuno piace caldo", "Il Padrino", "Via col vento", "La vita è bella"] },
    { text: "Un uomo può cambiare la sua vita.", correct: "Rocky", options: ["Rocky", "Creed", "Warrior", "The Fighter"] },
    { text: "C'è sempre un modo per vincere.", correct: "L'arte di vincere", options: ["L'arte di vincere", "The Social Network", "The Pursuit of Happyness", "Moneyball"] },
    { text: "Siamo solo umani.", correct: "Her", options: ["Her", "Ex Machina", "Blade Runner", "I, Robot"] },
    { text: "Cosa faresti se avessi solo un giorno da vivere?", correct: "The Bucket List", options: ["The Bucket List", "Before I Go", "A Walk to Remember", "The Fault in Our Stars"] },
    { text: "Non smettere mai di sognare.", correct: "La ricerca della felicità", options: ["La ricerca della felicità", "Il lato positivo", "Eternal Sunshine of the Spotless Mind", "A Beautiful Mind"] },
    { text: "La paura è l'assassino della mente.", correct: "Dune", options: ["Dune", "Star Wars", "Blade Runner", "Inception"] },
    { text: "Ogni grande viaggio inizia con un piccolo passo.", correct: "Il viaggio di Arlo", options: ["Il viaggio di Arlo", "Inside Out", "Up", "Finding Dory"] },
    { text: "Ho sempre sognato di volare.", correct: "Peter Pan", options: ["Peter Pan", "Hook", "The Wizard of Oz", "Mary Poppins"] },
    { text: "Ricorda, la forza è con te.", correct: "Star Wars", options: ["Star Wars", "Dune", "Matrix", "Avatar"] },
    { text: "Abbiamo bisogno di più colori nel nostro mondo.", correct: "Fifty Shades of Grey", options: ["Fifty Shades of Grey", "The Notebook", "Titanic", "La La Land"] },
    { text: "La musica è una forma di comunicazione.", correct: "Whiplash", options: ["Whiplash", "La La Land", "A Star is Born", "Coco"] },
    { text: "In ogni storia c'è sempre un eroe.", correct: "Il Signore degli Anelli", options: ["Il Signore degli Anelli", "Harry Potter", "Narnia", "Star Wars"] },
    { text: "Tutti possono essere un eroe.", correct: "Batman", options: ["Batman", "Spider-Man", "Iron Man", "Superman"] },
    { text: "Vivi come se non ci fosse un domani.", correct: "The Notebook", options: ["The Notebook", "Titanic", "A Walk to Remember", "P.S. I Love You"] },
    { text: "Non si può fuggire dal destino.", correct: "The Matrix", options: ["The Matrix", "Inception", "Predestination", "Looper"] },
    { text: "L'amore è l'unica cosa che conta.", correct: "Titanic", options: ["Titanic", "The Notebook", "P.S. I Love You", "A Walk to Remember"] },
    { text: "Chi non rischia non guadagna.", correct: "The Pursuit of Happyness", options: ["The Pursuit of Happyness", "The Social Network", "The Wolf of Wall Street", "Catch Me If You Can"] },
    { text: "Il tempo è un'illusione.", correct: "Interstellar", options: ["Interstellar", "Inception", "The Time Machine", "Looper"] },
    { text: "Ciò che non uccide, rinforza.", correct: "Il cavaliere oscuro", options: ["Il cavaliere oscuro", "The Dark Knight Rises", "Batman Begins", "Joker"] },
    { text: "Ciò che cerchiamo è spesso proprio davanti a noi.", correct: "Kung Fu Panda", options: ["Kung Fu Panda", "Zootopia", "Ratatouille", "Finding Nemo"] },
    { text: "La vita è una grande avventura.", correct: "Up", options: ["Up", "The Secret Life of Walter Mitty", "Life of Pi", "Into the Wild"] },
    { text: "Non c'è mai una fine, solo un nuovo inizio.", correct: "Harry Potter", options: ["Harry Potter", "Narnia", "Percy Jackson", "The Golden Compass"] },
    { text: "Houston, abbiamo un problema.", correct: "Apollo 13", options: ["Apollo 13", "Armageddon", "Gravity", "Interstellar"] },
    { text: "Che la forza sia con te.", correct: "Star Wars", options: ["Star Wars", "Star Trek", "Dune", "Avatar"] },
    { text: "E.T. telefono casa.", correct: "E.T.", options: ["E.T.", "Alien", "Ritorno al Futuro", "Predator"] },
    { text: "Non sono cattivo, è che mi disegnano così.", correct: "Chi ha incastrato Roger Rabbit", options: ["Chi ha incastrato Roger Rabbit", "Toy Story", "Shrek", "La Bella e la Bestia"] },
    { text: "Ti farò un'offerta che non potrai rifiutare.", correct: "Il Padrino", options: ["Il Padrino", "Scarface", "Quei bravi ragazzi", "Donnie Brasco"] },
    { text: "Lo chiamerò Squishy e sarà mio.", correct: "Alla ricerca di Nemo", options: ["Alla ricerca di Nemo", "Toy Story", "Shrek", "L'era glaciale"] },
    { text: "Dopotutto, domani è un altro giorno.", correct: "Via col vento", options: ["Via col vento", "Casablanca", "Colazione da Tiffany", "Titanic"] },
    { text: "Ho sempre basato la mia vita su scelte sbagliate.", correct: "Fight Club", options: ["Fight Club", "American Psycho", "Se7en", "Matrix"] },
    { text: "Hasta la vista, baby.", correct: "Terminator 2", options: ["Terminator 2", "Robocop", "Predator", "Matrix"] },
    { text: "C'è sempre un posto dove si sta meglio.", correct: "Il mago di Oz", options: ["Il mago di Oz", "Mary Poppins", "Alice nel paese delle meraviglie", "Cenerentola"] },
    { text: "Non c'è posto come casa.", correct: "Il mago di Oz", options: ["Il mago di Oz", "Forrest Gump", "Titanic", "Via col vento"] },
    { text: "O fai parte della polizia o sei un gangster.", correct: "The Departed", options: ["The Departed", "Scarface", "Donnie Brasco", "Heat"] },
    { text: "Non puoi gestire la verità!", correct: "Codice d'onore", options: ["Codice d'onore", "Il padrino", "Full Metal Jacket", "Apocalypse Now"] },
    { text: "È solo un graffio!", correct: "Monty Python e il Sacro Graal", options: ["Monty Python e il Sacro Graal", "Robin Hood: Un uomo in calzamaglia", "Hot Shots!", "Scary Movie"] },
    { text: "Chiunque può cucinare.", correct: "Ratatouille", options: ["Ratatouille", "Kung Fu Panda", "Shrek", "Toy Story"] },
    { text: "Vivi ogni giorno come se fosse l'ultimo, un giorno avrai ragione.", correct: "The Curious Case of Benjamin Button", options: ["The Curious Case of Benjamin Button", "Forrest Gump", "Titanic", "Big Fish"] },
    { text: "Non potete passare!", correct: "Il Signore degli Anelli", options: ["Il Signore degli Anelli", "Harry Potter", "Narnia", "Willow"] },
    { text: "Io sono tuo padre.", correct: "Star Wars", options: ["Star Wars", "Star Trek", "Alien", "Inception"] },
    { text: "Mi fido di te, e tu?", correct: "Aladdin", options: ["Aladdin", "Cenerentola", "La Bella e la Bestia", "Frozen"] },
    { text: "Mamma diceva sempre: la vita è come una scatola di cioccolatini.", correct: "Forrest Gump", options: ["Forrest Gump", "Il Miglio Verde", "La Vita è Bella", "Philadelphia"] },
    { text: "Qual è il senso della vita? 42.", correct: "Guida galattica per autostoppisti", options: ["Guida galattica per autostoppisti", "Matrix", "2001: Odissea nello Spazio", "Blade Runner"] },
    { text: "Non è mai troppo tardi per essere chi vuoi essere.", correct: "Il curioso caso di Benjamin Button", options: ["Il curioso caso di Benjamin Button", "Il grande Gatsby", "Il lato positivo", "A Beautiful Mind"] },
    { text: "Mi piace il tuo stile, è fico!", correct: "Pulp Fiction", options: ["Pulp Fiction", "Scarface", "Quei bravi ragazzi", "Le iene"] },
    { text: "Sempre il mio cuore sarà con te.", correct: "Titanic", options: ["Titanic", "Forrest Gump", "Ghost", "Pretty Woman"] },
    { text: "Ho visto cose che voi umani non potreste immaginare.", correct: "Blade Runner", options: ["Blade Runner", "2001: Odissea nello Spazio", "Matrix", "Inception"] },
    { text: "Frankly, my dear, I don’t give a damn.", correct: "Via col vento", options: ["Via col vento", "Casablanca", "Colazione da Tiffany", "Quarto potere"] },
    { text: "Hasta la vista, baby!", correct: "Terminator 2", options: ["Terminator 2", "RoboCop", "Matrix", "Total Recall"] },
    { text: "La paura è la vera prigione.", correct: "Shawshank Redemption", options: ["Shawshank Redemption", "Il miglio verde", "Schindler's List", "Forrest Gump"] },
    { text: "Non sono cattivo, è che mi disegnano così.", correct: "Chi ha incastrato Roger Rabbit", options: ["Chi ha incastrato Roger Rabbit", "Toy Story", "Shrek", "La Bella e la Bestia"] },
    { text: "Non voglio che la morte sia il mio capo.", correct: "Il miglio verde", options: ["Il miglio verde", "Schindler's List", "L'attimo fuggente", "Forrest Gump"] },
    { text: "Ecco guardati ora, siamo i Re del Mondo!", correct: "Titanic", options: ["Titanic", "The Great Gatsby", "Pirates of the Caribbean", "Inception"] },
];

let usedQuotes = [];
let correctCount = 0;
let errorCount = 0;

const quoteElement = document.getElementById("quote");
const optionsElements = document.querySelectorAll(".option");
const gameOverElement = document.getElementById("game-over");
const scoreElement = document.getElementById("score");
const newGameButton = document.getElementById("new-game");

function loadQuote() {
    if (usedQuotes.length === quotes.length) usedQuotes = []; // Resetta se tutte le citazioni sono state usate

    let quote;
    do {
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (usedQuotes.includes(quote));

    usedQuotes.push(quote);
    quoteElement.innerText = quote.text;

    const shuffledOptions = [...quote.options].sort(() => Math.random() - 0.5);
    optionsElements.forEach((button, index) => {
        button.innerText = shuffledOptions[index];
        button.classList.remove("correct", "wrong");
        button.onclick = () => checkAnswer(button, quote.correct);
    });
}

function checkAnswer(button, correctAnswer) {
    if (button.innerText === correctAnswer) {
        button.classList.add("correct");
        correctCount++;
        setTimeout(nextQuote, 2000); // Passa alla citazione successiva dopo 2 secondi
    } else {
        button.classList.add("wrong");
        errorCount++;
        // Se si arriva al terzo errore, mostra la risposta corretta
        if (errorCount >= 3) {
            optionsElements.forEach(option => {
                if (option.innerText === correctAnswer) {
                    option.classList.add("correct");
                }
            });
            endGame();
        }
    }

    // Se ci sono 3 errori, termina il gioco
    if (errorCount >= 3) endGame();
}

function nextQuote() {
    if (errorCount < 3) { // Passa solo se non ci sono stati 3 errori
        loadQuote();
    }
}

function endGame() {
    gameOverElement.classList.remove("hidden");
    scoreElement.innerText = correctCount;
}

function resetGame() {
    correctCount = 0;
    errorCount = 0;
    usedQuotes = [];
    gameOverElement.classList.add("hidden");
    loadQuote();
}

// Evento per il bottone di nuova partita
newGameButton.onclick = resetGame;

// Avvia il gioco
loadQuote();
