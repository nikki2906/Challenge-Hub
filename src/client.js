import { createClient } from '@supabase/supabase-js'

const URL = 'https://bgobjkouhzkzjokkjera.supabase.co';
const API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnb2Jqa291aHprempva2tqZXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjUzNzAsImV4cCI6MjAyODAwMTM3MH0.hBE48O-l3oFuG0FEE1IM1PQcEWksxYYC_XzeiZmOEgs';

export const supabase = createClient(URL, API_KEY);
