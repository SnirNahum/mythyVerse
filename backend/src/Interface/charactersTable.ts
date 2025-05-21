export interface characterBody {
  id: string;
  universe_id: string;
  family_id: string;
  name: string;
  bio: string;
  dob: string | number | null;
  dod: string | number;
  image_url: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}
