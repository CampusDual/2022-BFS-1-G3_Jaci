import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OntimizeService } from 'ontimize-web-ngx';
import { ChartService, DiscreteBarChartConfiguration, DiscreteBarDataAdapter, OChartComponent } from 'ontimize-web-ngx-charts';

declare var d3: any;

@Component({
  selector: 'app-sales-charts',
  templateUrl: './sales-charts.component.html',
  styleUrls: ['./sales-charts.component.css']
})

export class SalesChartsComponent implements OnInit {
  private d3Locale;
  protected service: OntimizeService;

  @ViewChild("chartSales", {static:false}) chartSales: OChartComponent;

  private chartAdapterSales: DiscreteBarDataAdapter;

  constructor(private injector: Injector, private router: Router) {  }

  ngOnInit() {
  }


  navigate(){
    this.router.navigateByUrl("main/sales");
  }

  ngAfterViewInit() {
    var chartParamatersSalesAdapter = new DiscreteBarChartConfiguration();
     chartParamatersSalesAdapter.xAxis = "date";
     chartParamatersSalesAdapter.yAxis = ["sales_id"];
     this.chartAdapterSales = new DiscreteBarDataAdapter(chartParamatersSalesAdapter);



  }

  getExpPayments() {
     this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("sales");
    this.service.configureService(conf);

    this.service
      .query(
         void 0,
        ["total"],
        "clientExperienceTotalAmountsOfTheMonthsOfAYear"
       )
      .subscribe((resp) => {
         if (resp.code === 0) {

          /*var finalMonth: number = new Date().getMonth() + 1;
          var dataExp = this.validDataOfArrayOfMonthsOfYear(resp.data, 1, finalMonth);
           this.adaptTotalAmount(dataExp); */


           /* this.discreteBarChartdiscreteBarChartTotalAmountsOfTheMonthsOfAYear.setDataArray(
            this.chartAdapterTotalMonthAdapter.adaptResult(dataExp)
            );*/
            console.log(resp.data);


         } else {
          console.log("Error");
        }
      });
   }

}
