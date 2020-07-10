import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-temperature-converter',
    templateUrl: './temperature-converter.component.html',
    styleUrls: ['./temperature-converter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureConverterComponent {
    public from: string;
    public temp: number;
    public celsius: number;
    public fahrenheit: number;
    public kelvin: number;
    public rankine: number;

    public convert(temp: number, from: string) {
        if (temp !== undefined && from !== undefined) {
            switch (from) {
                case 'Celsius': {
                    this.celsius = temp;
                    this.fahrenheit = (temp * 1.8) + 32;
                    this.kelvin = temp + 273.15;
                    this.rankine = temp * 1.8 + 491.67;
                    break;
                }
                case 'Fahrenheit': {
                    this.celsius = (temp - 32) / 1.8;
                    this.fahrenheit = temp;
                    this.kelvin = (temp - 32) / 1.8 + 273.15;
                    this.rankine = temp + 459.67;
                    break;
                }
                case 'Kelvin': {
                    this.celsius = temp - 273.15;
                    this.fahrenheit = ((temp - 273.15) * 1.8) + 32;
                    this.kelvin = temp;
                    this.rankine = temp * 1.8;
                    break;
                }
                case 'Rankine': {
                    this.celsius = (temp / 1.8) - 273.15;
                    this.fahrenheit = temp - 459.67;
                    this.kelvin = temp / 1.8;
                    this.rankine = temp;
                    break;
                }
            }

            // New technique to round number
            this.celsius = Math.round((this.celsius + Number.EPSILON) * 100) / 100;
            this.fahrenheit = Math.round((this.fahrenheit + Number.EPSILON) * 100) / 100;
            this.kelvin = Math.round((this.kelvin + Number.EPSILON) * 100) / 100;
            this.rankine = Math.round((this.rankine + Number.EPSILON) * 100) / 100;
        }
    }
}
