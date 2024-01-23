import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://exvzhljpekifoiiwjxbb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4dnpobGpwZWtpZm9paXdqeGJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MDc3NDUsImV4cCI6MjAwOTM4Mzc0NX0.WVENV7Uo6BMHqurmev9am5Llwvf6xxJic4IXIKjMHGA';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;