import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StateAndCityService } from '../state-and-city.service';

@Component({
  selector: 'app-primary-form',
  templateUrl: './primary-form.component.html',
  styleUrls: ['./primary-form.component.scss']
})
export class PrimaryFormComponent implements OnInit {

  estados: Array<any> = [];
  cidades: Array<any> = [];

  usuario: any = {
    nome: null,
    cpf: null,
    cep: null,
    rua: null,
    numero: null,
    complemento: null,
    bairro: null,
    estado: null,
    cidade: null,
    telefone: null,
    celular: null,
    email: null,
    description: null
  }

  title = 'Formulário de Cadastro';
  public message: any = { description: '' };
  formulario: any;
  form: any;
  formData: any[] = [];
  alert: boolean = false;

  constructor(private http: HttpClient, private stateAndCity: StateAndCityService) { }

  ngOnInit(): void {
    this.brazilianStates();
  }

  verifyValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  applyCssError(campo: any) {
    return {
      'has-error': this.verifyValidTouched(campo),
      'has-feedback': this.verifyValidTouched(campo)
    }
  }

  onSubmit(form: any) {
    const userToInsert = JSON.parse(JSON.stringify(form));
    this.formData.push(userToInsert);
    this.alert = true;
  }

  clearFilter() {
    this.usuario = '';
  }

  searchCEP(cep: any) {
    var code = cep.target.value;
    code = code.replace(/\D/g, '');
    if (code !== '') {
      this.http.get(`https://viacep.com.br/ws/${code}/json`)
        .toPromise().then(dados => { this.applyDataForm(dados); });
    }
  }

  async applyDataForm(dados: any) {
    this.usuario.rua = dados.logradouro;
    this.usuario.complemento = dados.complemento;
    this.usuario.bairro = dados.bairro;
    this.usuario.numero = dados.numero;
    this.usuario.estado = dados.uf;
    await this.brazilianCities(dados.uf);
    this.usuario.cidade = this.cidades.find(cidade => cidade.nome == dados.localidade);
  }

  brazilianStates() {
    this.stateAndCity.getState().then(response => { this.estados = response });
  }

  async brazilianCities(sigla: string) {
    await this.stateAndCity.getCity(sigla).then(response => { this.cidades = response });
  }

}
