export interface Claim {
  id: string;
  dossier_id: string;
  nom_assure: string;
  numero_police: string;
  categorie_risque: 'Automobile' | 'Habitat' | 'Agricole' | 'Maritime' | 'Sante';
  severite: 'Mineure' | 'Moderate' | 'Severe' | 'Critique';
  statut: 'En_attente' | 'En_analyse' | 'Approuve' | 'A_auditer' | 'Signale_fraude' | 'Rejete' | 'En_appel';
  montant_estime: number;
  montant_indemnise: number | null;
  description: string;
  wilaya: string;
  date_sinistre: string;
  date_declaration: string;
  score_fraude: number;
  elements_endommages: DamageElement[];
  verifications_forensic: ForensicCheck[];
  historique_audit: AuditEntry[];
  decision_motif: string | null;
  blockchain_hash: string | null;
  created_at: string;
  updated_at: string;
  user_id: string | null;
}

export interface DamageElement {
  id: string;
  element: string;
  statut_inspection: string;
  cout_estime: number;
}

export interface ForensicCheck {
  id: string;
  check: string;
  statut: boolean;
  detail: string;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  auteur: string;
  action: string;
}

export interface FraudScore {
  id: string;
  claim_id: string;
  isf_global: number;
  niveau: 'Mineur' | 'Modere' | 'Severe' | 'Critique';
  facteurs_declencheurs: string[];
  decision: 'Approuve' | 'Verification' | 'Signale' | 'Rejete';
  created_at: string;
}

export interface ActuarialReport {
  id: string;
  periode: string;
  gwp: number;
  loss_ratio: number;
  expense_ratio: number;
  combined_ratio: number;
  solvabilite: number;
  rating: string;
  resultat_net: number;
  created_at: string;
}

export interface BlockchainBlock {
  id: string;
  bloc_numero: number;
  timestamp: string;
  dossier_id: string;
  decision: string;
  montant_dzd: number;
  score_fraude: number;
  hash_precedent: string;
  hash_actuel: string;
  score_consensus: number;
  type: string;
  created_at: string;
}

export interface PromptTemplate {
  id: string;
  key: string;
  label: string;
  color: string;
  icon: string;
  content: string;
  category: string;
  created_at: string;
}

export type RiskCategory = 'Automobile' | 'Habitat' | 'Agricole' | 'Maritime' | 'Sante';
export type Severity = 'Mineure' | 'Moderate' | 'Severe' | 'Critique';
export type ClaimStatus = 'En_attente' | 'En_analyse' | 'Approuve' | 'A_auditer' | 'Signale_fraude' | 'Rejete' | 'En_appel';
