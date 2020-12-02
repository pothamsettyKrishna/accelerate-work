import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-selection',
  templateUrl: './asset-selection.component.html',
  styleUrls: ['./asset-selection.component.css']
})
export class AssetSelectionComponent implements OnInit {

  constructor() { }

  data=[
    {
      assetId:1101,
      name:"Pension Deposit",
      grossValue:56000,
      netValue:95000,
      time:2.5
    },
    {
      assetId:1102,
      name:"Pension Deposit",
      grossValue:65000,
      netValue:75000,
      time:1.5
    },
    {
      assetId:1103,
      name:"Pension Deposit",
      grossValue:40000,
      netValue:85000,
      time:3
    },{
      assetId:1104,
      name:"Pension Deposit",
      grossValue:56000,
      netValue:85000,
      time:2
    }
  ]

  asset=null;

  ngOnInit() {
  }

  getAsset(value){
    console.log("value",value)
    for (let index = 0; index <this.data.length; index++) {
      if(value==this.data[index].assetId){
        console.log("data",this.data[index])
        this.asset=this.data[index]
        console.log("asset",this.asset)
      }
  }

}
}
