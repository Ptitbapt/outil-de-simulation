import { $locationShim } from '@angular/common/upgrade';
import { Component } from '@angular/core';

interface hypothesesData {
  locataire: string; // Locataire actuel
  nb_lots: number; // Nb lots
  num_lot: string; // N° Lot
  type_lot: string; // Type de lot
  etage: string; // Etage
  surface: number; // Surface louable (m²)
  date_dispo: string; // Disponibilité (fin bail / dispo non loué)
  strat_app: string; // Stratégie Appliquée
  date_tenant_departure: string; // Date de départ du locataire
  construction_length: string; // Durée travaux (mois)
  cost_construction: number; // Coût total des travaux (€ NR + I)
  date_relocation: string; // Date de relocation
  freeze_length: number; // Durée du gel (mois)
  loyer_actuel: number; // Loyer actuel (€/m²)
  loyer_futur: number; // Loyer futur (€/m²)
  nb_aff_pkg: number; // Nombres de parking affectés
  loyer_actuel_pkg: number; // Loyer actuel (€ avec pkg)
  loyer_futur_pkg: number; // Loyer futur (€ avec pkg)
  input_check: boolean; // Saisie ok ?
}

@Component({
  selector: 'app-validation-hypotheses-calcul',
  templateUrl: './validation-hypotheses-calcul.component.html',
  styleUrls: ['./validation-hypotheses-calcul.component.css']
})
export class ValidationHypothesesCalculComponent {
  pathsDirectory: string = 'Stratégie Commerciale Tertiaire > Façonnage des lots >​ ';
  actualDirectory: string = 'Hypothèses de simulation';

  // Exemple de données
  data: hypothesesData[] = [
    {
      locataire: 'Locataire 1',
      nb_lots: this.generateRandomNbLots(),
      num_lot: this.generateRandomNumLot(),
      type_lot: 'Bureau',
      etage: this.generateRandomEtage(),
      surface: this.generateRandomSurface(),
      date_dispo: this.generateRandomDate(),
      strat_app: 'Renouvellement',
      date_tenant_departure: this.generateRandomDate(),
      construction_length: '6',
      cost_construction: 50000,
      date_relocation: this.generateRandomDate(),
      freeze_length: 2,
      loyer_actuel: 200,
      loyer_futur: 250,
      nb_aff_pkg: 2,
      loyer_actuel_pkg: 50,
      loyer_futur_pkg: 60,
      input_check: false
    },
    {
      locataire: 'Locataire 2',
      nb_lots: this.generateRandomNbLots(),
      num_lot: this.generateRandomNumLot(),
      type_lot: 'Commerce',
      etage: this.generateRandomEtage(),
      surface: this.generateRandomSurface(),
      date_dispo: this.generateRandomDate(),
      strat_app: 'Nouvelle location',
      date_tenant_departure: this.generateRandomDate(),
      construction_length: '8',
      cost_construction: 75000,
      date_relocation: this.generateRandomDate(),
      freeze_length: 3,
      loyer_actuel: 300,
      loyer_futur: 350,
      nb_aff_pkg: 1,
      loyer_actuel_pkg: 60,
      loyer_futur_pkg: 70,
      input_check: false
    },
    {
      locataire: 'Locataire 3',
      nb_lots: this.generateRandomNbLots(),
      num_lot: this.generateRandomNumLot(),
      type_lot: 'Entrepôt',
      etage: this.generateRandomEtage(),
      surface: this.generateRandomSurface(),
      date_dispo: this.generateRandomDate(),
      strat_app: 'Renouvellement',
      date_tenant_departure: this.generateRandomDate(),
      construction_length: '4',
      cost_construction: 30000,
      date_relocation: this.generateRandomDate(),
      freeze_length: 1,
      loyer_actuel: 150,
      loyer_futur: 180,
      nb_aff_pkg: 3,
      loyer_actuel_pkg: 40,
      loyer_futur_pkg: 50,
      input_check: true
    }
  ];

  generateRandomNbLots(): number {
    return Math.floor(Math.random() * 3) + 1; // 1 à 3
  }

  generateRandomEtage(): string {
    const etage = Math.floor(Math.random() * 8) - 2; // -2 à 5
    return etage.toString();
  }

  generateRandomSurface(): number {
    return Math.floor(Math.random() * 1101) + 100; // 100 à 1200
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
    const part1 = Math.floor(Math.random() * 2 + 1).toString().padStart(2, '0');
    const part2 = Math.floor(Math.random() * 3).toString().padStart(3, '0'); 
    const part3 = Math.floor(Math.random() * 9 + 1).toString().padStart(2, '0');
    const part4 = Math.random() < 0.5 ? '' : String.fromCharCode(97 + Math.floor(Math.random() * 2));

    return `${part1}-${part2}${part3}${part4}`;
  }
}
