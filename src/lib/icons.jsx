import {
  BookOpen,
  PenLine,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  PhoneCall,
  GraduationCap,
  Handshake,
  Smile,
  Star,
  CheckCircle2,
} from "lucide-react";

// Maps icon names used in src/content.js to the actual icon components,
// so content stays plain data while components stay declarative.
export const icons = {
  BookOpen,
  PenLine,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  PhoneCall,
  GraduationCap,
  Handshake,
  Smile,
  Star,
  CheckCircle2,
};

export function Icon({ name, className }) {
  const Cmp = icons[name];
  if (!Cmp) return null;
  return <Cmp className={className} aria-hidden="true" />;
}
