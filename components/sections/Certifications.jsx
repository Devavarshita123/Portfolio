import { certifications } from "../../data/certifications";



import {
  FaAward,
  FaExternalLinkAlt,
  FaGlobe,
  FaCode,
} from "react-icons/fa";

const globalCertifications = certifications.filter(
  (certificate) =>
    certificate.issuer === "Amazon Web Services (AWS)" ||
    certificate.issuer === "ServiceNow"
);

const technicalCertifications = certifications.filter(
  (certificate) =>
    certificate.issuer !== "Amazon Web Services (AWS)" &&
    certificate.issuer !== "ServiceNow"
);

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="
        py-24
        bg-slate-50
        dark:bg-slate-900
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-blue-100
              dark:bg-blue-900/30
              text-blue-600
              font-medium
              text-sm
              mb-5
            "
          >
            <FaAward />
            Professional Credentials
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-5
            "
          >
            Certifications
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              text-gray-600
              dark:text-gray-400
              text-lg
              leading-relaxed
            "
          >
            Industry-recognized certifications demonstrating expertise in
            cloud computing, ServiceNow development, software engineering,
            and modern technologies.
          </p>

        </div>


        {/* GLOBAL CERTIFICATIONS */}

        <div className="mb-20">

          <div className="flex items-center gap-4 mb-8">

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-gradient-to-br
                from-blue-500
                to-purple-600
                text-white
                flex
                items-center
                justify-center
                text-xl
              "
            >
              <FaGlobe />
            </div>

            <div>

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                "
              >
                Global Professional Certifications
              </h3>

              <p
                className="
                  text-gray-600
                  dark:text-gray-400
                  mt-1
                "
              >
                Globally recognized credentials from leading technology platforms.
              </p>

            </div>

          </div>


          <div className="grid md:grid-cols-2 gap-6">

            {globalCertifications.map((certificate) => (

              <div
                key={certificate.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-700
                  bg-white
                  dark:bg-slate-800
                  p-7
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >

                {/* Top gradient line */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-1
                    bg-gradient-to-r
                    from-blue-500
                    via-purple-500
                    to-pink-500
                  "
                />


                <div className="flex justify-between items-start gap-6">

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-slate-100
                      dark:bg-slate-700
                      flex
                      items-center
                      justify-center
                      text-2xl
                    "
                  >
                    {certificate.icon}
                  </div>


                  <span
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-blue-50
                      dark:bg-blue-900/30
                      text-blue-600
                      text-sm
                      font-semibold
                    "
                  >
                    {certificate.year}
                  </span>

                </div>


                <h4
                  className="
                    text-xl
                    font-bold
                    mt-6
                    group-hover:text-blue-600
                    transition
                  "
                >
                  {certificate.title}
                </h4>


                <p
                  className="
                    text-blue-600
                    font-medium
                    mt-2
                  "
                >
                  {certificate.issuer}
                </p>


                <p
                  className="
                    text-gray-600
                    dark:text-gray-400
                    mt-4
                    leading-relaxed
                  "
                >
                  {certificate.description}
                </p>


                {certificate.link !== "#" && (

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-6
                      text-blue-600
                      font-semibold
                      hover:gap-3
                      transition-all
                    "
                  >
                    View Credential

                    <FaExternalLinkAlt className="text-sm" />

                  </a>

                )}

              </div>

            ))}

          </div>

        </div>


        {/* TECHNICAL CERTIFICATIONS */}

        <div>

          <div className="flex items-center gap-4 mb-8">

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-blue-100
                dark:bg-blue-900/30
                text-blue-600
                flex
                items-center
                justify-center
                text-xl
              "
            >
              <FaCode />
            </div>


            <div>

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                "
              >
                Technical & Professional Learning
              </h3>

              <p
                className="
                  text-gray-600
                  dark:text-gray-400
                  mt-1
                "
              >
                Certifications and programs supporting continuous technical growth.
              </p>

            </div>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {technicalCertifications.map((certificate) => (

              <div
                key={certificate.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-700
                  bg-white
                  dark:bg-slate-800
                  p-6
                  hover:border-blue-400
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <div className="flex justify-between items-center">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-slate-100
                      dark:bg-slate-700
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    {certificate.icon}
                  </div>


                  <span
                    className="
                      text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    {certificate.year}
                  </span>

                </div>


                <h4
                  className="
                    text-lg
                    font-bold
                    mt-5
                    group-hover:text-blue-600
                    transition
                  "
                >
                  {certificate.title}
                </h4>


                <p
                  className="
                    text-blue-600
                    text-sm
                    font-medium
                    mt-2
                  "
                >
                  {certificate.issuer}
                </p>


                <p
                  className="
                    text-gray-600
                    dark:text-gray-400
                    text-sm
                    mt-4
                    leading-relaxed
                  "
                >
                  {certificate.description}
                </p>


                {certificate.link !== "#" && (

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-5
                      text-blue-600
                      text-sm
                      font-semibold
                    "
                  >
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
