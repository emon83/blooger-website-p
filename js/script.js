$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle__collapse');

    /* click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.$toggleClass('collapse');
    })

});