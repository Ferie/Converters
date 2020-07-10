import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-convert-temperature',
    templateUrl: './convert-temperature.component.html',
    styleUrls: ['./convert-temperature.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConvertTemperatureComponent {
    public from: string;
    public to: string;
    public temp: number;
    public result: number;

    public convertitore(temp: number, from: string, to: string) {
        if (temp !== undefined && !isNaN(temp) && from !== undefined && to !== undefined) {
            switch (from) {
                case 'Celsius': {
                    switch (to) {
                        case 'Celsius': {
                            this.result = temp;
                            break;
                        }
                        case 'Fahrenheit': {
                            this.result = (temp * 1.8) + 32;
                            break;
                        }
                        case 'Kelvin': {
                            this.result = temp + 273.15;
                            break;
                        }
                        case 'Rankine': {
                            this.result = temp * 1.8 + 491.67;
                            break;
                        }
                    }
                    break;
                }
                case 'Fahrenheit': {
                    switch (to) {
                        case 'Celsius': {
                            this.result = (temp - 32) / 1.8;
                            break;
                        }
                        case 'Fahrenheit': {
                            this.result = temp;
                            break;
                        }
                        case 'Kelvin': {
                            this.result = (temp - 32) / 1.8 + 273.15;
                            break;
                        }
                        case 'Rankine': {
                            this.result = temp + 459.67;
                            break;
                        }
                    }
                    break;
                }
                case 'Kelvin': {
                    switch (to) {
                        case 'Celsius': {
                            this.result = temp - 273.15;
                            break;
                        }
                        case 'Fahrenheit': {
                            this.result = ((temp - 273.15) * 1.8) + 32;
                            break;
                        }
                        case 'Kelvin': {
                            this.result = temp;
                            break;
                        }
                        case 'Rankine': {
                            this.result = temp * 1.8;
                            break;
                        }
                    }
                    break;
                }
                case 'Rankine': {
                    switch (to) {
                        case 'Celsius': {
                            this.result = (temp / 1.8) - 273.15;
                            break;
                        }
                        case 'Fahrenheit': {
                            this.result = temp - 459.67;
                            break;
                        }
                        case 'Kelvin': {
                            this.result = temp / 1.8;
                            break;
                        }
                        case 'Rankine': {
                            this.result = temp;
                            break;
                        }
                    }
                    break;
                }
            }
        }
    }
}
