import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  // private imgUrl = "http://im3.hnsdhb.cn/forum/201703/06/184059t9kql3vlorkrgttx.jpg"

  public products: Array<Product>;

  constructor() { }

  // ngOnInit是其中一个钩子，被初始化的时候调用一次
  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.99, 3.5, "我是第一个商品", ["我是类别1", "我是类别2"]),
      new Product(2, "第二个商品", 2.99, 2.5, "我是第二个商品", ["我是类别4", "我是类别5"]),
      new Product(3, "第三个商品", 15.99, 1.5, "我是第三个商品", ["我是类别6", "我是类别7"]),
      new Product(4, "第四个商品", 15.99, 1.5, "我是第四个商品", ["我是类别8", "我是类别9"]),
      new Product(5, "第五个商品", 17.99, 4.5, "我是第五个商品", ["我是类别1", "我是类别2"]),
      new Product(6, "第六个商品", 18.99, 0.5, "我是第六个商品", ["我是类别1", "我是类别2"]),
      new Product(7, "第七个商品", 16.99, 2.0, "我是第七个商品", ["我是类别1", "我是类别2"]),
      new Product(8, "第八个商品", 17.99, 3.5, "我是第八个商品", ["我是类别1", "我是类别2"]),
      new Product(9, "第九个商品", 13.99, 3.9, "我是第九个商品", ["我是类别1", "我是类别2"]),
      new Product(10, "第十个商品", 11.99, 3.0, "我是第十个商品", ["我是类别1", "我是类别2"]),
      new Product(11, "第十一个商品", 2.99, 1.5, "我是第十一个商品", ["我是类别1", "我是类别2"]),
      new Product(12, "第十二个商品", 1.99, 1.5, "我是第一个商品", ["我是类别1", "我是类别2"]),
      new Product(13, "第十三个商品", 8.99, 3.0, "我是第十二个商品", ["我是类别1", "我是类别2"]),
      new Product(14, "第十四个商品", 9.99, 1.5, "我是第十三个商品", ["我是类别1", "我是类别2"]),
      new Product(15, "第十五个商品", 6.99, 2.5, "我是第十四个商品", ["我是类别1", "我是类别2"]),
      new Product(16, "第十六个商品", 12.99, 0.5, "我是第十五个商品", ["我是类别1", "我是类别2"])
    ]
  }

}

export class Product {
  constructor(
    // 商品ID
    public id: number,
    // 商品标题
    public title: string,
    // 价格
    public price: number,
    // 星际评价
    public rating: number,
    // 商品简介
    public desc: string,
    // 商品类别
    public categories: Array<string>
  ) {

  }
}
