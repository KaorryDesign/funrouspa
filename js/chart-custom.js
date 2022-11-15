Highcharts.chart('container', {
  
	chart: {
	  styledMode: true
	},

	legend: {
		margin: 20
	},
  
	title: {
	  text: '2019年度<br />經費收入合計<br />6,770,470,147',
	  align: 'center'
	},

	tooltip: {
    pointFormat: '{point.y:.0f}'
  },
	
	plotOptions: {
		pie: {
			size:'100%',
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
			enabled: true,
			format: '{point.percentage:.1f} %',
			connectorColor: 'silver'
			}
		}
	},
	
	series: [{
	  type: 'pie',
	  allowPointSelect: false,
	  //innerSize: '50%',
	  keys: ['name', 'y', 'selected', 'sliced'],
	  data: [
		['捐贈收入', 5853160257, false,false],
		['財務收入', 541573734, false,false],
		['附屬作業組織收入', 164090969, false,false],
		['其他收入', 211645187, false,false]
	  ],
	  showInLegend: true
	}]
});

Highcharts.chart('container2', {
  
	chart: {
	  styledMode: true
	},

	legend: {
		margin: 20
	},
  
	title: {
	  text: '2018年度<br />經費收入合計<br />6,180,475,507',
	  align: 'center'
	},

	tooltip: {
    pointFormat: '{point.y:.0f}'
  },
	
	plotOptions: {
		pie: {
			size:'100%',
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
			enabled: true,
			format: '{point.percentage:.1f} %',
			connectorColor: 'silver'
			}
		}
	},
	
	series: [{
	  type: 'pie',
	  allowPointSelect: false,
	  //innerSize: '50%',
	  keys: ['name', 'y', 'selected', 'sliced'],
	  data: [
		['捐贈收入', 5161376691, false],
		['財務收入', 479851716, false],
		['附屬作業組織收入', 81435214, false],
		['其他收入', 457811886, false]
	  ],
	  showInLegend: true
	}]
});

Highcharts.chart('container3', {
  
	chart: {
	  styledMode: true
	},

	legend: {
		margin: 20
	},
  
	title: {
	  text: '2019年度<br />經費支出合計<br />6,228,128,088',
	  align: 'center'
	},

	tooltip: {
    pointFormat: '{point.y:.0f}'
  },
	
	plotOptions: {
		pie: {
			size:'100%',
			allowPointSelect: false,
			cursor: 'pointer',
			dataLabels: {
			enabled: true,
			format: '{point.percentage:.1f} %',
			connectorColor: 'silver'
			}
		}
	},
	
	series: [{
	  type: 'pie',
	  allowPointSelect: false,
	  //innerSize: '50%',
	  keys: ['name', 'y', 'selected', 'sliced'],
	  data: [
		['社會救助', 1544862701, false],
		['災害救助', 1008274814, false],
		['獎助學金', 365508877, false],
		['兒少福利', 732551978, false],
		['老人福利', 338782793, false],
		['福利社區', 43968366, false],
		['志願服務', 171421221, false],
		['教育志業', 711224075, false],
		['附屬作業組織支出', 174461844, false],
		['行政管理支出', 372397177, false],
		['其他支出', 764674242, false]
	  ],
	  showInLegend: true
	}]
});

Highcharts.chart('container4', {
  
	chart: {
	  styledMode: true
	},

	legend: {
		margin: 20
	},
  
	title: {
	  text: '2018年度<br />經費支出合計<br />5,520,225,183',
	  align: 'center'
	},

	tooltip: {
    pointFormat: '{point.y:.0f}'
  },
	
	plotOptions: {
		pie: {
			size:'100%',
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
			enabled: true,
			format: '{point.percentage:.1f} %',
			connectorColor: 'silver'
			}
		}
	},
	
	series: [{
	  type: 'pie',
	  allowPointSelect: true,
	  //innerSize: '50%',
	  keys: ['name', 'y', 'selected', 'sliced'],
	  data: [
		['社會救助', 1346709182, false],
		['災害救助', 510202783, false],
		['獎助學金', 381675517, false],
		['兒少福利', 317665493, false],
		['老人福利', 47795779, false],
		['福利社區', 1059801517, false],
		['志願服務', 230659697, false],
		['教育志業', 861797813, false],
		['附屬作業組織支出', 74677292, false],
		['行政管理支出', 428291199, false],
		['其他支出', 260948911, false]
	  ],
	  showInLegend: true
	}]
});