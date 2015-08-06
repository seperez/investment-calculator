function plazoFijo(options) {
    var deposito = options.deposito,
        tna = options.tna,
        duracion = options.duracion,
        capitalFinal = 0;
    tna = tna / 100;
    capitalFinal = deposito * (1 + tna * (duracion / 365));

    return {
        'capitalFinal': capitalFinal.toFixed(2),
        'ganancia': (capitalFinal - deposito).toFixed(2)
    };
}

function getTnaByDays(dias) {
    var tna = 0;
    if (dias < 90) {
        if (dias > 59) {
            // 60-89
            tna = 25.13;
        } else if (dias < 45) {
            //30-40
            tna = 25.58;
        } else {
            // 45-59
            tna = 24.10;
        }
    } else {
        if (dias > 179) {
            // 180 
            tna = 26.14;
        } else if (dias > 119) {
            // 120-179
            tna = 25.87;
        } else {
            //90-119
            tna = 25.61;
        }
    }
    return tna;
}

function calcular() {
    var $monto = $('#txtMonto'),
        $dias = $('#txtDias'),
        $ganancia = $('#ganancia'),
        $total = $('#total')
        dias = $dias.val();

    var results = plazoFijo({
        deposito: $.trim($monto.val()),
        tna: getTnaByDays(dias),
        duracion: dias
    });
    
    $ganancia.text(results.ganancia);
    $total.text(results.capitalFinal);

    $monto.val('');
    $dias.val('');
    $monto.focus();
}