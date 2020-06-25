import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ConvertitoreTemperature';
    tempF: number;
    tempC: number;
    tempK: number;

    faranaithToCelsius(temp) {
        return (temp - 32) / 1.8;
    }

    celsiusToFaranaith(temp) {
        return (temp * 1.8) + 32;
    }

    celsiusToKelvin(temp) {
        return temp + 237.36;
    }

    convertitore(temp, from, to) {
        switch(from) {
            case 'Celsius': {
                switch (to) {
                    case 'Celsius': {
                        return temp;
                    }
                    case 'Fara': {
                        return 1
                    }
                }
                break;
            }

        }
    }
}
