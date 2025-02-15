async function fetchQuotes() {
    try {
        const response = await fetch('data/quotes.json');
        const data = await response.json();
        
        const maxIndex = data.length;
        console.log(maxIndex);

        let index1 = Math.floor(Math.random() * maxIndex);
        let index2;
        do {
            index2 = Math.floor(Math.random() * maxIndex);
        } while (index1 === index2);
        console.log(index1,index2);
        
        const card1=document.getElementById('card1');
        const card2=document.getElementById('card2');

        card1.innerHTML=`<p>${data[index1].quote}</p>
        <h2>- ${data[index1].author} -</h2>`;

        card2.innerHTML=`<p>${data[index2].quote}</p>
        <h2>- ${data[index2].author} -</h2>`;

    } catch (error) {
        console.error('Error loading quotes: ', error);
    }
}
fetchQuotes();
