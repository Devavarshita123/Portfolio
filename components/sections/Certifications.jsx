import SectionTitle from "../ui/SectionTitle";
import CertificationCard from "../ui/CertificationCard";

import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-50
dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Certifications"
          subtitle="Industry-recognized certifications from leading technology organizations, demonstrating continuous learning and professional growth."
        />

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((cert) => (
            <CertificationCard
              key={cert.title}
              certification={cert}
            />
          ))}

        </div>

      </div>
    </section>
  );
}