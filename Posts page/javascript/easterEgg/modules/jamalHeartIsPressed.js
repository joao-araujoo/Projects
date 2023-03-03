export default function jamalHeartPressed(){
    if(document.getElementById('jamal-heart').src == 'https://cdn-icons-png.flaticon.com/512/833/833300.png'){
        document.getElementById('jamal-heart').src = 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
    } else {
        document.getElementById('jamal-heart').src = 'https://cdn-icons-png.flaticon.com/512/833/833300.png'
    }
}