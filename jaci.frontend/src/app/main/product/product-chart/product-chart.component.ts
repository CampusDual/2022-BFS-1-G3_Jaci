import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration, DiscreteBarDataAdapter, LineChartConfiguration, LineDataAdapter, OChartComponent } from 'ontimize-web-ngx-charts';
import { ChartAxisConfiguration } from 'ontimize-web-ngx-charts/lib/models/options/ChartAxisConfiguration.class';

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent implements OnInit {

  private data;
  private productId;
  private chartAdapter: LineDataAdapter;

  @ViewChild("chart", {static: false}) chart: OChartComponent;

  constructor(private _Activatedroute:ActivatedRoute, private ontimizeService: OntimizeService) {
  }

  ngOnInit() {
    this._Activatedroute.params.subscribe(params => {
        this.productId = params['id'];
        this.createChart();
        });
  }

  //ngAfterViewInit(){

  //}

  createChart(){
    var chartParametersAdapter =
      new LineChartConfiguration();
    chartParametersAdapter.xAxis = "date";
    chartParametersAdapter.yAxis = ["product_id"];


    this.chartAdapter = new LineDataAdapter(chartParametersAdapter);



    let service: OntimizeService = this.ontimizeService;
    let conf = service.getDefaultServiceConfiguration('sales');
    service.configureService(conf);

    let filter = {
      'product_id': this.productId
    };

    let columns = ['date', 'product_id'];
    service.query(filter, columns, 'productChart',{'product_id':4}).subscribe((resp) => {
      // response ok
      if (resp.code === 0) {
        this.chart.setDataArray(
          this.chartAdapter.adaptResult(resp.data)
        );
        console.log(resp.data);
      } else {
        alert('Impossible to query data!');
      }
    });
  }

}
