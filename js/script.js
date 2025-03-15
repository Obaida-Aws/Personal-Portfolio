document.addEventListener('DOMContentLoaded', function() {
    loadCard(); 
    loadFooter(); 
});

function loadCard() {
    const cardsContainer = document.getElementById("cards-container");

    const cardData = [
        {
            title: "Asal Technologies",
            description: "Completed a 320-hour front-end development training mastering HTML, CSS, TypeScript, Git, GitHub, and React."
        },
        {
            title: "Dimensions Infotech",
            description: "Worked as a Full Stack Developer with C#, SQL, ASP.NET, Web Forms, DevExpress, and ORM in the BookSaleFair project."
        },
        {
            title: "Udacity",
            description: "Completed front-end training, reviewing HTML, CSS, and key concepts while working on projects."
        },
        {
            title: "An-Najah National University",
            description: "Studied Computer Engineering for five years, building a solid foundation in hardware, software, and problem-solving."
        }
    ];

    fetch('components/card.html')
        .then(response => response.text())
        .then(cardHTML => {
            let cardsContent = '';
            cardData.forEach(card => {
                let cardTemplate = cardHTML.replace('{{title}}', card.title)
                                           .replace('{{description}}', card.description);
                cardsContent += cardTemplate;
            });

            cardsContainer.innerHTML = cardsContent;
        })
        .catch(error => console.log('Error loading card:', error));
}

function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(err => console.log('Error loading footer:', err));
}
