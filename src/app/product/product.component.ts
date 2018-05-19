import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  protected products: Array<Product>;
  protected imgUrl = 'http://via.placeholder.com/320x150';

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我刚创建的', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 7.5, '这是第二个商品，是我刚创建的', ['电子产品', '硬件设备']),
      new Product(3, '第三个商品', 3.99, 6.5, '这是第三个商品，是我刚创建的', ['电子产品', '硬件设备']),
      new Product(4, '第四个商品', 4.99, 4.5, '这是第四个商品，是我刚创建的', ['电子产品', '硬件设备']),
      new Product(5, '第五个商品', 5.99, 5.5, '这是第五个商品，是我刚创建的', ['电子产品', '硬件设备'])
    ];
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<String>
  ) {

  }
}
