<img src="https://media1.giphy.com/media/6s9vFCTbDzeD8ktj2U/giphy.gif?cid=ecf05e47mf0wjs6yuigffiuo1u3ouc06hxckc1epr8i0fbth&rid=giphy.gif&ct=g">

# Useless Diccces

Link to [Useless website](https://useless-web-five.vercel.app)

This site is probably useless. This game is about finding the right dice. The correct die is the number in the text.  

# Code Review
1. `styles.css: 11-14` - Använd antingen engelska eller svenska variabler, blir lite förvirrande när de blandas, (engelska är standard)
1. `game.js: 1` - Lite förvirrande att variabeln heter main men referar till en kontainer.
1. `styles.css: 30` - Box-sizing kan du sätta på samma ställe som padding och margin för att det ska verka globalt ( mer standard också tror jag).
1. `styles.css: 26` - Glömt en kommentar.
1. `typogrofy.css: 2` - Ingen fallback med din font, är alltid bra att ha ifall webbläsaren inte har just den fonten.

# Testers

Tested by the following people:

1. Johanna
2. Magnus

