export type CitizenRole = 'general' | 'senior' | 'farmer' | 'student' | 'vulnerable';

export interface CitizenProfile {
  id: string;
  full_name: string;
  age: number;
  monthly_income: number;
  district: string;
  occupation: string;
  is_freedom_fighter_family?: boolean;
  has_disability?: boolean;
}

export interface EligibilityScheme {
  id: string;
  name_bn: string;
  name_en: string;
  ministry: string;
  min_age: number;
  max_income: number;
  required_documents: string[];
  deadline_days: number;
  portal_url: string;
}

export interface EligibilityResult {
  scheme_id: string;
  status: 'likely_eligible' | 'maybe_eligible' | 'not_eligible';
  reason_bn: string;
  next_steps_bn: string[];
}
