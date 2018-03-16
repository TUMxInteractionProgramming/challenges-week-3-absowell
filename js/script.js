// Test that the JS works
console.log('app is alive')

// Write a function to change the channel name when a new channel is clicked
function switchChannel(channelName) {
    console.log('Tuning into channel', channelName); 
    document.getElementById('active-channel').innerHTML = channelName;  
    document.getElementById('active-location').innerHTML = '<a href="http://w3w.co/upgrading.never.helps" target="_blank">upgrading.never.helps</a>';  
}

//Write a function that changes the star to unfilled when channel is selected
function unfillStar(){
    $('#active-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

//Write a function that changes the star to filled when star is selected
function fillStar() {
    $('#active-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

//Write a function that changes the highlighted tab to whichever was selected
function highlightTab(tabId) {
    $('#new-tab, #trending-tab, #favorites-tab').removeClass('selected');
    $(tabId).addClass('selected');
    console.log('Changing to tab', tabId);
}