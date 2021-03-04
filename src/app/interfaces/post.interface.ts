export interface Post {
  id: number;
  title?: string;
  description?: string;
  content?: string;
  // need new interface to resolve nested object in 'image'
  image?: any;
  created_at?: any;
  updated_at?: any;

}
