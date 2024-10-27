import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../config';
@Injectable({
  providedIn: 'root'
})
export class CallService {
  REDIRECT_URI = location.origin + location.pathname;
  constructor(private http: HttpClient, private router: Router) { }

  getUserData() {
    this.refrehToken().subscribe({
      next: (res: any) => {

        localStorage.setItem("refresh_token", `${res["refresh_token"]}`);
        const headers = new HttpHeaders()
          .set('Authorization', localStorage.getItem('access_token') || "");
        this.http.get(`https://api.decent.ec/api/v1/realms/decent.ec/user-info/me`, { 'headers': headers }).subscribe({
          next: (res: any) => console.log(res)

        })
      }
    })
  }

  getTokenByCode(): void {
    const codeForToken = localStorage.getItem("code") || ""
    const body = new URLSearchParams();
    body.set('code', codeForToken || "");
    body.set('grant_type', 'authorization_code');
    body.set('client_id', 'openremote');
    body.set('redirect_uri', this.REDIRECT_URI);

    this.http.post(`https://orb.met3r.com/auth/realms/decent.ec/protocol/openid-connect/token`, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', },), observe: 'response'
    }).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', 'Bearer ' + res["body"]['access_token']);
        localStorage.setItem('refresh_token', res["body"]['refresh_token']);
        this.router.navigateByUrl(location.pathname)
      }
    });
  }
  refrehToken() {
    const refreshToken = localStorage.getItem('refresh_token');
    const body = new URLSearchParams();
    body.set('refresh_token', refreshToken || "");
    body.set('grant_type', 'refresh_token');
    body.set('client_id', 'openremote');
    body.set('redirect_uri', this.REDIRECT_URI)

    return this.http.post(`https://orb.met3r.com/auth/realms/decent.ec/protocol/openid-connect/token`, body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getCode() {
    window.open(
      `https://orb.met3r.com/auth/realms/decent.ec/protocol/openid-connect/auth?response_type=code&client_id=openremote&redirect_uri=${this.REDIRECT_URI}`,
      '_self'
    );
  }
  getCodeFromUrl(code: string) {
    localStorage.setItem("code", code)
    this.getTokenByCode()
  }

  testMethod() {
    this.http.get(`https://api.decent.ec/api/v1/realms/decent.ec/subscription/infos`).subscribe({
      next: (res: any) => console.log(res)
    })
  }
  testMethod2() {
    this.http.get(`https://api.decent.ec/api/v1/realms/decent.ec/invoice/monthly?startYYYY-MM=2022-01&endYYYY-MM=2024-10&limit=10&offset=0`).subscribe({
      next: (res: any) => console.log(res)
    })
  }

  testMethod3() {
    this.http.get(`${environment.DECENT_API_URL}/invoice/compare-tariff-monthly`).subscribe({
      next: (res: any) => console.log(res)
    });
  }

  checkParamsInUrl(_router: any) {
    setTimeout(() => {
      const queryParams = _router.snapshot.queryParams
      if (queryParams.hasOwnProperty("code")) {
        this.getCodeFromUrl(queryParams["code"])
      } else {
        this.getCode()
      }
    }, 50)
  }

 
}
