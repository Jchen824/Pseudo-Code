//

$(".click").click(function() {
    $("h2").fadeOut();
    $(".duck").attr("src", "https://imgs.search.brave.com/6cql96EcA8yXhnGnB8uIOLPWDWUp_mie0JwQLZcD6u0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5q/YW1pZXNhbGUtY2Fy/dG9vbmlzdC5jb20v/d3AtY29udGVudC91/cGxvYWRzL2NhcnRv/b24tZHVjay1mcmVl/LnBuZw");
    $("h1").show();
});

$(".duck").click(function() {
    $(".duck2").fadeOut();
    $(".fireworks").show();
    $(".duck").hide();
    $(".fireworks2").show();
});

$(".fireworks").click(function() {
    $(".fireworks2").hide();
    $(".words").text("Ahhh");
});