export const fadeIn = (direction: string | number, delay: number) => {
    return {
        hidden: {
            // Startposition abhängig von der Richtung
            y: direction === 'up' ? 100 : direction === "down" ? -100 : 0, // Verstärkte Bewegung
            x: direction === 'left' ? 100 : direction === "right" ? -100 : 0,
            opacity: 0
        },
        show: {
            // Endposition
            y: 0,
            x: 0,
            opacity: 1, // volle Deckkraft
            transition: {
                // Übergangseigenschaften
                type: "tween", // Art des Übergangs
                duration: 2.5, // Dauer des Übergangs in Sekunden
                delay: delay, // Verzögerung des Übergangs in Sekunden
                ease: [0.25, 0.25, 0.25, 0.75] // Easing-Funktion für den Übergang
            }
        }
    }
}
