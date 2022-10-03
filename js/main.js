$(function() {

    var reservaObj = {
        dataDaReserva: "",
        dataDaSolicitacao: "",
        quemSolicitou: "Morador"
    }

    var selecionei = "Reservado";

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Hoje',
            list: 'Lista'
        },
        selectable: true,
        select: function (start) {
        let valorDataAtual = new Date().toISOString().slice(0,10);   
        let valorSelecionado = start.startStr;       

        if (valorDataAtual < valorSelecionado){
            let valorSelecionadoBr = formataBr(valorSelecionado);
            reservaObj.dataDaReserva = valorSelecionado;
            reservaObj.dataDaSolicitacao = valorDataAtual;
            $(".mensagem-modal").html("Você está prestes a demonstrar interesse de reservar o quiosque para o dia <strong>" + valorSelecionadoBr + "</strong>, está correto?");
            abreModal();           
        }
       
        },
        plugins: [ 'interaction', 'dayGrid' ],
        defaultDate: new Date(),
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
        {
            title: selecionei,
            start: '2022-10-15'
        },
        {
            title: 'Evento longo',
            start: '2020-02-07',
            end: '2020-02-10'
        },        
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2020-02-28'
        },
        {
            title: "Reservado",
            start: '2022-10-29'
        }
        
        ]
    });

    
    calendar.render();
      
    function adicionarEvento(){

        var calendario = new FullCalendar.Calendar(calendarEl, {
            locale: 'pt-br',
            buttonText: {
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Hoje',
                list: 'Lista'
            },
            selectable: true,
            select: function (start) {
                let valorDataAtual = new Date().toISOString().slice(0,10);   
                let valorSelecionado = start.startStr;       
        
                if (valorDataAtual < valorSelecionado){
                    let valorSelecionadoBr = formataBr(valorSelecionado);
                    reservaObj.dataDaReserva = valorSelecionado;
                    reservaObj.dataDaSolicitacao = valorDataAtual;
                    $(".mensagem-modal").html("Você está prestes a demonstrar interesse de reservar o quiosque para o dia <strong>" + valorSelecionadoBr + "</strong>, está correto?");
                    abreModal();           
                }
            },
            plugins: [ 'interaction', 'dayGrid' ],
            defaultDate: new Date(),
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
            {
                title: "Reservado: " + reservaObj.quemSolicitou,
                start: reservaObj.dataDaReserva
            },        
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2020-02-28'
            },
            {
                title: selecionei,
                start: '2022-10-15'
            },
            {
                title: "Reservado",
                start: '2022-10-29'
            }
            ]
        });

        $("#calendar").html("");
        
        calendario.render();

    }

    function abreModal() {
        $("#myModal").modal({
          show: true
        });
    }

    function fechaModal() {
        $("#myModal").modal({
          show: false
        });
    }


    function formataBr(data)
    {
        data = data.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
        return data;
    }
     
    $("#btn-solicitar-reservar-id").click(function(){
        //console.log("Confirmou que era aquela data mesmo");
        adicionarEvento();       
        $('#myModal').modal('hide');
    });
    

});

