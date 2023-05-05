$(document).ready(function(){

    let records = []

    $("#submit").click(function(){
        let f = $("#financial_input").val()
        let sp = $("#spiritual_input").val()
        let s = $("#social_input").val()
        let m = $("#mental_input").val()
        let p = $("#physical_input").val()

        add_record(f, sp, s, m, p)
        reset_ui()
    })

    function add_record(f, sp, s, m, p){
        console.log("new entry")

        let new_entry = new Object();
        new_entry.date = new Date().toLocaleDateString('en-US');
        new_entry.physical_score = p
        new_entry.mental_score = m
        new_entry.social_score = s
        new_entry.spiritual_score = sp
        new_entry.financial_score = f

        records.push(new_entry)
    }

    function reset_ui(){
        $("#financial_input").val(-100)
        $('#financial_slider').val(-100)
        $("#spiritual_input").val(-100)
        $('#spiritual_slider').val(-100)
        $("#social_input").val(-100)
        $('#social_slider').val(-100)
        $("#mental_input").val(-100)
        $('#mental_slider').val(-100)
        $("#physical_input").val(-100)
        $('#physical_slider').val(-100)

        $("#financial_input").focus()
        fill_recs()
    }

    function fill_recs(){

        $("#records_container").empty()

        records.forEach(entry => {
            let row = $("<div class='row record'>")
            $("#records_container").prepend(row)

            let rec_date = $('<div class="col-md-2">'+entry.date+'</div>');
            let rec_physical = $('<div class="col-md-2">Physical:&nbsp'+entry.physical_score+'</div>');
            let rec_mental = $('<div class="col-md-2">Mental:&nbsp'+entry.mental_score+'</div>');
            let rec_social = $('<div class="col-md-2">Social:&nbsp'+entry.social_score+'</div>');
            let rec_spiritual = $('<div class="col-md-2">Spiritual:&nbsp'+entry.spiritual_score+'</div>');
            let rec_financial = $('<div class="col-md-2">Financial:&nbsp'+entry.financial_score+'</div>');

            $(row).append(rec_date)
            $(row).append(rec_physical)
            $(row).append(rec_mental)
            $(row).append(rec_social)
            $(row).append(rec_spiritual)
            $(row).append(rec_financial)
        });
    }


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


    // on open
    $("#financial_input").focus()
    fill_recs()

})