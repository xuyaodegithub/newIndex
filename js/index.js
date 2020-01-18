$(function(){
    move()
    initSome()
    // initLoop(168)
    setScroll()
    document.addEventListener( 'scroll',setScroll)
    $( window ).resize( function () {
        initLoop(168)
    } )
})
function move(){
    $('header .compom span').css({right:0,opacity:1})
}

function setScroll(){
    var scrollTop=document.documentElement.scrollTop || document.body.scrollTop,allOffset=[0,$('#slot1').offset().top,$('#slot2').offset().top,$('#slot3').offset().top], oLi=$('.uls li'),oLi2=$('.munes li');
    // console.log(scrollTop,allOffset)
    if(scrollTop) $('.nav').addClass('active');
    else $('.nav').removeClass('active');
    var i=allOffset.findIndex(function(item,k){
        return (scrollTop>=parseInt(item-70) && scrollTop<parseInt(allOffset[k+1]-70))
    })
    oLi.eq(i).addClass('active').siblings().removeClass('active')
    oLi2.eq(i).addClass('active').siblings().removeClass('active')
}
function initSome() {
    $('.showMune').on('click',function(){
        $('.munes').css('right',0)
        $('.bigZhe').show()
    })
    $('.close').on('click',function(){
        $('.munes').css('right','-100%')
        $('.bigZhe').hide()
    })
    $('.bigZhe').on('click',function(){
        $('.munes').css('right','-100%')
        $('.bigZhe').hide()
    })
    // var ht=$('.loop .list_item').html(),w=$('.loop .list_item').width();
    // $('.loop .list_item').html(ht+ht)
    // $('.loop .pro').click( fnMove(1))
    // $('.loop .next').click( fnMove(0))
    var oLi=$('.uls li'),oLi2=$('.munes li');
    oLi.each(function(i,item){
        $(this).click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            if(!i)$('html,body').animate({scrollTop:0},300);
            else $('html,body').animate({scrollTop:$($(this).attr('slot')).offset().top-70},300);
        })
    })
    oLi2.each(function(i,item){
        $(this).click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            if(!i)$('html,body').animate({scrollTop:0},300);
            else $('html,body').animate({scrollTop:$($(this).attr('slot')).offset().top-70},300);
        })
    })

}
function initLoop(sc){
    var w=$('#list').width(),num=Math.floor(($('#list').width())/sc);
    var wid=Math.floor((w-(num-1)*30)/num)
    $('#list img').css('width',wid)
}
function fnMove(i){
    var tof=true;
    return function (){
        if(tof){
            tof=false;
            var oleft=$('.loop .list_item').position().left,bwid=$('.loop .list_item').width(),iw=$('.loop .list_item > div').width();
            let inw=0,wid= i ? iw+30 : -iw-30;
            if(oleft<=-bwid/2 && !i){
                $('.loop .list_item').css('left',0);
                inw=0
            }else if(oleft>=0  && i){
                $('.loop .list_item').css('left',-bwid/2);
                inw=-bwid/2
            }//定义到边界的时候，实现无缝衔接
            else{
                inw=oleft
            }
            $('.loop .list_item').animate({'left':inw+wid},300,function(){
                tof=true
            })
        }
    }

//定义图片的右边距随着速度不断不断增加，或减小，实现运动的效果
}
