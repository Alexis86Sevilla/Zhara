import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  categoria?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('categoria') ?? undefined;
  }

}
