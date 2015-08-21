fun.views.profile = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    events: {
        'click #act_1': 'oneDay',
        'click #act_2': 'threeDays',
        'click #act_3': 'oneWeek',
        'click #act_4': 'oneMonth'
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.profile = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render profile view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.profile));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");

        //var cal = new CalHeatMap();
        //cal.init({
            //itemSelector: "#example-i",
            //domain: "day",
            //subDomain: "hour",
            //rowLimit: 1,
            //domainGutter: 0,
            //data: "datas-years.json",
            //start: new Date(2000, 0, 5),
            //cellSize: 15,
            //cellPadding: 5,
            //range: 7,
            //verticalOrientation: true,
            //displayLegend: false,
            //label: {
                //position: "left",
                //offset: {
                    //x: 20,
                    //y: 12
                //},
                //width: 110
            //},
            //legend: [1, 2, 3, 4],
            //legendColors: ["#ecf5e2", "#232181"]
        //});

        var startDate = new Date(2013, 6, 25);
        var startTimestamp = new Date(2013, 6, 1).getTime()/1000;

        function GAconverter(data) {
            var i, total, results = {};
            for(i = 0, total = data.length; i < total; i++) {
                results[+data[i].Hour * 3600 + startTimestamp] = +data[i].Visits;
            }
            return results;
        }

        var cal = new CalHeatMap();
        cal.init({
            //itemSelector: "#example-k",
            domain: "day",
            subDomain: "hour",
            rowLimit: 1,
            cellSize: 10,
            //cellSize: 21,
            domainGutter: 0,
            verticalOrientation: true,
            label: {
                position: "left",
                offset: {
                    x: 20,
                    y: 12
                },
                width: 110
            },
            //data: "google-analytics.csv",
            //dataType: "csv",
            start: startDate,
            //afterLoadData: GAconverter,
            range: 10,
            itemName: "visit",
            legend: [5, 10, 15, 20, 25, 30],
            legendHorizontalPosition: "right",
            legendColors: {
                empty: "#ededed",
                min: "#40ffd8",
                max: "#f20013"
            }
        });

        //var cal = new CalHeatMap();
        //cal.init({
        //    domain: "month",
		//	subDomain: "day",
		//	cellSize: 11, 
		//	range: 12,
		//	legendVerticalPosition: "center",
		//	legendOrientation: "vertical",
		//	legendMargin: [0, 20, 0, 0],
		//	displayLegend: true,
		//	
		//	label: {
		//		position: "top"
		//	}
        //});
    },

    oneDay: function(event){
        console.log('one day event');
    },

    threeDays: function(event){
        console.log('three days event');
    },

    oneWeek: function(event){
        console.log('one week event');
    },

    oneMonth: function(event){
        console.log('one month event');
    }
});