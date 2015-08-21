$(function () {
    
    var d1 = [10,15,10,13,9,15,8,6,30],
        d2 = [1,1,4,1,1,2,3,1,9];
    
    var dt1 = [], 
        dt2 = [], 
        st = new Date(2012, 1, 1).getTime();

    for( var i = 0; i < d2.length; i++ ) {
        
        dt1.push([st + i * 3600000, parseFloat( (d1[i]).toFixed( 3 ) )]);
        dt2.push([st + i * 3600000, parseFloat( (d2[i]).toFixed( 3 ) )]);
    }
    
    var data = [{ 
        data: dt1,
        label: 'Minutsex'
    }, { 
        data: dt2, 
        label: 'Calls', 
        points: { show: false }, 
        lines: { lineWidth: 2, fill: false }
    }];

    //Charts.line ( '#line-chart', data);
    
});
