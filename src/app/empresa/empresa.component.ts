
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmpresaService } from '../empresa.service';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public cnpj  = '';
  public numero1  = '';
  public numero2 = '';
  public submitted = false;
  public retornoEndereco: any = 0;
  public retornoMedia: any = 0;

  constructor(private service: EmpresaService) { }

  ngOnInit() {

  }

  findEmpresa(){
    this.submitted = true;
    this.service.getEndereco(new String(this.cnpj))
    .subscribe(success => {
      console.log(success);
      this.retornoEndereco = success;

    },
      err => {
        console.log(err);
        this.retornoEndereco = "Endereço não encontrado";

      });

  }

  media(){
    this.submitted = true;
    let num_a: number = +this.numero1;
    let num_b: number = +this.numero2;
    this.service.soma(num_a, num_b )
    .subscribe(success => {
      console.log(success);
      this.retornoMedia = success;

    },
      err => {
        console.log(err);
        this.retornoMedia = "Ocorreu um problema no cálculo.";
      });
  }

}
