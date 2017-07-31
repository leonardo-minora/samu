import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {DadoBruto} from '../types/dado-bruto';

@Injectable()
export class DadosBrutoService {
    private baseUrl: string = 'https://samu.restlet.net/v1/valores';

    constructor(private http : Http) { }

    getAll(): Observable<DadoBruto[]>{
        let dados = this.http
            .get(
                `${this.baseUrl}/samu.json`,
                { headers: this.getHeaders() })
            .map(this.handleMap)
            .catch(this.handleError);
        return dados;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private handleMap(response: Response): DadoBruto[]{
        return response.json().valores.map(toDadoBruto);
    }

    private handleError(error: any) {
        let errorMsg =
            error.message ||
            `oopps! problema em recuperar os dados do servidor!`;
        console.error(errorMsg);

        // throw an application level error
        return Observable.throw(errorMsg);
    }

}

function toDadoBruto(r: any): DadoBruto {
    let dado = <DadoBruto>({
        estado_ibge: r.estado_ibge,
        valor: r.valor,
        ano: r.ano
    });
    return dado;
}
