import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-second-page',
    templateUrl: './second-page.page.html',
    styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {	}

    onClickPrevPage() {
      this.router.navigate(['home']);
    }

	onClickRedirect(event: string) {
		console.log(event);
	}
}
