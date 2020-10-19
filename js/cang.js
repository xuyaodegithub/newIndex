var closess=false;
$(function () {
    $('.b_btn').click(function(){
        // document.documentElement.scrollTop=$('.addwx').eq(0).offset().top
        $('body,html').animate({scrollTop:$('.addwx').eq(0).offset().top},400)
    })
    $(document).scroll(scroll)
});
function scroll() {
    let stop=$(document).scrollTop(),oDiv=document.querySelector('.f_sec .row').getBoundingClientRect(),oh=$(window).height(),oH3=$('.f_sec .row h3'),oP=0,timer;
    if(oDiv.top<oh && !closess){
        closess=true;
        console.log(oDiv.top,oh,closess)
        timer= setInterval(function(){
            oP+=10;
            oH3.text(`${oP}%`);
            if(oP>=95){
                clearInterval(timer)
                oH3.eq(0).text(`99.99%`);
                oH3.eq(1).text(`100%`);
                oH3.eq(2).text(`100%`);
                oH3.eq(3).text(`99.95%`);
            }
        },100)
    }
}
