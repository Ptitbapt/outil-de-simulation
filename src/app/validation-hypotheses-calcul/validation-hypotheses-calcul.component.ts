import { Component } from '@angular/core';

interface HypothesesData {
  locataire: string;
  nb_lots: number;
  num_lot: string;
  type_lot: string;
  etage: string;
  surface: number;
  date_dispo: string;
  strat_app: string;
  date_tenant_departure: string;
  construction_length: string;
  cost_construction: number;
  date_relocation: string;
  freeze_length: number;
  loyer_actuel: number;
  loyer_futur: number;
  nb_aff_pkg: number;
  loyer_actuel_pkg: number;
  loyer_futur_pkg: number;
  input_check: boolean;
}

@Component({
  selector: 'app-validation-hypotheses-calcul',
  templateUrl: './validation-hypotheses-calcul.component.html',
  styleUrls: ['./validation-hypotheses-calcul.component.css']
})
export class ValidationHypothesesCalculComponent {
  pathsDirectory: string = 'Stratégie Commerciale Tertiaire > Façonnage des lots >​ ';
  actualDirectory: string = 'Hypothèses de simulation';

  data: HypothesesData[] = Array.from({ length: 3 }, (_, i) => this.generateRandomData(`Locataire ${String.fromCharCode(65 + i)}`));

  generateRandomData(locataire: string): HypothesesData {
    return {
      locataire,
      nb_lots: this.getRandomInt(1, 3),
      num_lot: this.generateRandomNumLot(),
      type_lot: this.getRandomElement(['Bureaux', 'Archives']),
      etage: this.getRandomInt(-2, 5).toString(),
      surface: this.getRandomInt(100, 1200),
      date_dispo: this.generateRandomDate(),
      strat_app: this.getRandomElement(['Relocation après travaux', 'Maintien', 'Relocation en l\'état', 'Stratégie par lot', 'Gel']),
      date_tenant_departure: this.generateRandomDate(),
      construction_length: this.getRandomInt(1, 24).toString(),
      cost_construction: this.getRandomInt(100000, 1000000),
      date_relocation: this.generateRandomDate(),
      freeze_length: this.getRandomInt(12, 24),
      loyer_actuel: this.getRandomInt(200, 450),
      loyer_futur: this.getRandomInt(240, 480),
      nb_aff_pkg: this.getRandomInt(3, 20),
      loyer_actuel_pkg: this.getRandomInt(20000, 520000),
      loyer_futur_pkg: this.getRandomInt(23000, 577000),
      input_check: false
    };
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  generateRandomDate(): string {
    const start = new Date(2020, 0, 1);
    const end = new Date(2025, 11, 31);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  }

  generateRandomNumLot(): string {
    const part1 = this.getRandomInt(1, 2).toString().padStart(2, '0');
    const part2 = this.getRandomInt(0, 2).toString().padStart(3, '0');
    const part3 = this.getRandomInt(1, 9).toString().padStart(2, '0');
    const part4 = Math.random() < 0.5 ? '' : String.fromCharCode(97 + this.getRandomInt(0, 1));
    return `${part1}-${part2}${part3}${part4}`;
  }
}
