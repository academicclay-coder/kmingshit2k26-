const friends = {

    Andro:{
        image:"images/andro.png",
        description:"One of my closest friends.",
        Chicks:"Kits",
        hobby:"Playing Valorant",
        quote:"A true friend is always there.",
        location:"https://earth.google.com/web/search/newstar+angeles/@15.1392482,120.5864697,97.41664152a,812.61981978d,35y,0h,0t,0r/data=CiwiJgokCYfFaLXSaTJAEYXFaLXSaTLAGXPLFWFqskhAIXPLFWFqskjAQgIIAToDCgEwQgIIAEoNCP___________wEQAA"
    },

    Crislee:{
        image:"images/crislee.png",
        description:"Always making everyone laugh.",
        Chicks:"Leo",
        hobby:"Tiktokerist",
        quote:"Smile every day.",
        location:"https://earth.google.com/web/search/Sapalibutad,+Angeles,+Pampanga/@15.15810148,120.6293504,60.26278369a,4382.53906595d,35y,0h,0t,0r/data=Co0BGl8SWQolMHgzMzk2ZjFmYzU3NGY2YzAxOjB4Njc3ZDA1MWM3MDI2MmNiZhm6Gcl5WlEuQCERKoJJOyheQCoeU2FwYWxpYnV0YWQsIEFuZ2VsZXMsIFBhbXBhbmdhGAIgASImCiQJSsLhuZ1ILkAR8PIlVflFLkAZmEDAl-wlXkAhjYuq2CQlXkBCAggBOgMKATBCAggASg0I____________ARAA"
    },

    Darel:{
        image:"images/darel.png",
        description:"Very kind and helpful.",
        Chicks:"Kitty, Nancy, Andrea",
        hobby:"CVT Tuning",
        quote:"Never give up.",
        location:"https://earth.google.com/web/search/Kmingda+PH,+Kmingda,+Pampanga/@15.1569287,120.5805265,104.43008573a,812.42868875d,35y,0h,0t,0r/data=CowBGl4SWAolMHgzMzk2ZjMwMDJkMDc4ZDQ3OjB4ZDU0NWY1YzFjNDM2OWE1NBmHHufsU1AuQCHIBtLFJiVeQCodS21pbmdkYSBQSCwgS21pbmdkYSwgUGFtcGFuZ2EYAiABIiYKJAkdDU70ZVcuQBGWQ8PkfkouQBnH_zUPLypeQCHAPAJ_XyZeQEICCAE6AwoBMEICCABKDQj___________8BEAA"
    },

    Ford:{
        image:"images/ford.png",
        description:"Always ready for adventures.",
        Chicks:"Jelly",
        hobby:"Traveling",
        quote:"Life is an adventure.",
        location:"https://earth.google.com/web/search/New+Jersey,+USA/@40.19952038,-74.48644924,114.46098245a,200208.65211524d,35y,-0h,0t,0r/data=Cn4aUBJKCiUweDg5YzBmYjk1OWUwMDQwOWY6MHgyY2QyN2IwN2Y4M2Y2ZDhkGQrKfid3B0RAIWTQZFr2mVLAKg9OZXcgSmVyc2V5LCBVU0EYAiABIiYKJAlGoVMsyKlEQBHZev0v3FdDQBlbsK17X61RwCE8DnQiV69TwEICCAE6AwoBMEICCABKDQj___________8BEAA"
    },

    Jerson:{
        image:"images/jerson.png",
        description:"Hardworking and Scientist.",
        Chicks:"Desiree",
        hobby:"Scientits",
        quote:"Success comes with effort.",
        location:"https://earth.google.com/web/search/Mining,+Angeles,+Pampanga/@15.13954175,120.6103154,74.82033127a,4383.2069224d,35y,0h,0t,0r/data=CogBGloSVAolMHgzMzk2ZjIyMWRkYmE5NmNkOjB4ODBjY2M2NTQ1ZTczN2FkOBlTRhJz_0cuQCF-JUaFICdeQCoZTWluaW5nLCBBbmdlbGVzLCBQYW1wYW5nYRgCIAEiJgokCamJjyBWYURAER7WF2iCzkNAGdKIb0KVMFLAISzag7WuDVPAQgIIAToDCgEwQgIIAEoNCP___________wEQAA"
    },

    Mike:{
        image:"images/mike.png",
        description:"The funniest member of the group.",
        Chicks:"BLess, Myleen",
        hobby:"Singing",
        quote:"Laugh every day.",
        location:"https://earth.google.com/web/search/Fiesta+Porac+II+Basketball+Court,+Porac,+Pampanga/@15.1186056,120.5623971,114.57089256a,812.59279457d,35y,0h,0t,0r/data=CqABGnISbAolMHgzMzk2ZjNiY2JkMzUxODAzOjB4MmFkYzcxOTA0MzA0MmNhYxmyPorfuTwuQCFg92dQ_iNeQCoxRmllc3RhIFBvcmFjIElJIEJhc2tldGJhbGwgQ291cnQsIFBvcmFjLCBQYW1wYW5nYRgCIAEiJgokCTJdRBeJZi5AEaMHv5nMYy5AGVbGRcoQJF5AIcJ51N5BI15AQgIIAToDCgEwQgIIAEoNCP___________wEQAA"
    },

    Shanon:{
        image:"images/shanon.png",
        description:"A loyal and supportive friend.",
        Chicks:"Unknown",
        hobby:"Jogging",
        quote:"Friendship never ends.",
        location:"https://earth.google.com/web/search/Clark+International+Airport+(CRK),+Clark+Airport+Road,+Clark+Freeport,+Zone,+Pampanga/"
    }

};

function openFriend(name){
    localStorage.setItem("friend", name);
    window.location = "profile.html";
}

if(document.getElementById("name")){
    const friendName = localStorage.getItem("friend");
    const friend = friends[friendName];

    document.getElementById("name").innerText = friendName;
    document.getElementById("photo").src = friend.image;

    document.getElementById("description").innerHTML = `
        <strong>About:</strong> ${friend.description}<br><br>

        ❤️ <strong>Chicks:</strong> ${friend.Chicks}<br><br>

        🎮 <strong>Hobby:</strong> ${friend.hobby}<br><br>

        💬 <strong>Favorite Quote:</strong><br>
        "${friend.quote}"
    `;
}

function goLocation(){
    const friendName = localStorage.getItem("friend");
    window.open(friends[friendName].location, "_blank");
}

/* ===========================
   MEMORY VIEWER
=========================== */

function openMemory(image){

    const viewer = document.getElementById("viewer");
    const fullImage = document.getElementById("fullImage");

    fullImage.src = image;
    viewer.style.display = "flex";
}

function closeMemory(){

    document.getElementById("viewer").style.display = "none";

}

window.onclick = function(event){

    const viewer = document.getElementById("viewer");

    if(event.target === viewer){

        closeMemory();

    }

}