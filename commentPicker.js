var comment =  []
for (let i=0; i< document.querySelectorAll('span.nc684nl6 span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.fe6kdd0r.mau55g9w.c8b282yb').length ; i++){
    comment.push((document.querySelectorAll('span.nc684nl6 span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.fe6kdd0r.mau55g9w.c8b282yb')[i].innerText))
}




var randomWinner = function(){
 let winnerIndex = (Math.floor((Math.random()*comment.length)))
 let  winnerName = comment[winnerIndex]
 let  winner = 'the lucky winner is ' + winnerName;
 let winnersProfile = `https://www.facebook.com${document.querySelectorAll('span.nc684nl6 span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.fe6kdd0r.mau55g9w.c8b282yb')[winnerIndex].parentElement.parentElement.getAttribute('href')}`
return  (winner + ' and the profile is ' + winnersProfile )
}
