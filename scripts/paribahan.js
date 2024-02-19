const allSeat = document.getElementsByClassName('allSeat');
let count = 0;
for (const seat of allSeat) {

    seat.addEventListener('click', function (event) {
        count = count + 1;
        const selectSeat = event.target.innerText;
        const seat = document.getElementById(selectSeat);
        seat.style.backgroundColor = 'green';

        const seatElement = document.getElementById('leftSeat');
        const seattext = seatElement.innerText;
        const value = parseInt(seattext);
        const avilableSeat = value - count;
        console.log(avilableSeat)

        const changeElement = document.getElementById('leftseat').innerText;
        changeElement = avilableSeat;

        // const seatValue = getValueById('seat-left');
        // const avaleavail = seatValue - 1;
        // setTextById('seat-left', avaleavail);

        
        // function getValueById(elmentsId) {
        //     const elments = document.getElementById(elmentsId);
        //     const text = elments.innerText;
        //     const value = parseInt(text);
        //     return value;
        // }
        // function setTextById(elmentsId, value) {
        //     const elments = document.getElementById(elmentsId);
        //     elments.innerText = value;
        // }
    })

}