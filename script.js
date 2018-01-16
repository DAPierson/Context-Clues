
var friends = ['dustin', 'alysia', 'will', 'joshua', 'jane'];
var place = ['kitchen', 'bedroom', 'bathroom', 'livingroom', 'laundryroom', 'bonusroom', 'garage', 'backyard', 'frontyard', 'hallway'];
var weapon = ['knife', 'gun', 'shovel', 'banana', 'avocado', 'car', 'poolfloat', 'beerbottle', 'hammer', 'rubber ducky', 'baby', 'wild mongoose', 'wrench', 'shark', 'stick', 'butter knife', 'shoe', 'belt', 'iron', 'candlestick'];

for (var i = 1; i < 101; i++) {

    var h3 = $('<h3>Acusation' + i + '</h3>').appendTo(document.body);

    $(h3).click(greeter(i))
}

function greeter(i) {

    return function () {

        alert('Accusation ' + i + ':' + 'I accuse ' + friends[i % friends.length] + ' with the ' + weapon[i % weapon.length] + ' in the ' + place[i % place.length]);


    }
}





