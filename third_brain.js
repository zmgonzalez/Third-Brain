$(document).ready(function(){

    $('#financial_slider').on('input change',function () {
        $("#financial_input").val($(this).val());
    });

    $('#financial_input').keyup(function(e){
        if (e.keyCode==13) { // on 'Enter'
            $('#financial_slider').val($(this).val())
        }
    });

    $('#spiritual_slider').on('input change',function () {
        $("#spiritual_input").val($(this).val());
    });

    $('#spiritual_input').keyup(function(e){
        if (e.keyCode==13) { // on 'Enter'
            $('#spiritual_slider').val($(this).val())
        }
    });

    $('#social_slider').on('input change',function () {
        $("#social_input").val($(this).val());
    });

    $('#social_input').keyup(function(e){
        if (e.keyCode==13) { // on 'Enter'
            $('#social_slider').val($(this).val())
        }
    });

    $('#mental_slider').on('input change',function () {
        $("#mental_input").val($(this).val());
    });

    $('#mental_input').keyup(function(e){
        if (e.keyCode==13) { // on 'Enter'
            $('#mental_slider').val($(this).val())
        }
    });

    $('#physical_slider').on('input change',function () {
        $("#physical_input").val($(this).val());
    });

    $('#physical_input').keyup(function(e){
        if (e.keyCode==13) { // on 'Enter'
            $('#physical_slider').val($(this).val())
        }
    });

})