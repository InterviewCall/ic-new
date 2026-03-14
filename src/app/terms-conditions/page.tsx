import Footer from "@/components/Footer";
import TopBarBookACall from "@/components/TopBarBookACall";

export default function TermsAndConditions() {
  return (
    <div className="relative min-h-screen bg-white text-black  w-full flex flex-col items-center">
      <TopBarBookACall />
      <div className="w-95/100 md:w-8/10 pt-20">

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-black/40 font-medium mb-12 uppercase tracking-widest">
          IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED
        </p>

        <div className="space-y-12 text-base md:text-lg leading-relaxed text-black/75">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Introduction</h2>
            <p className="mb-4">
              These Terms of Service (ToS) govern the use of the InterviewCall platform and services
              offered by{" "}
              <span className="text-black font-semibold">IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED</span>{" "}
              {`("InterviewCall," "we," or "us")`}, a private limited company registered under the
              Companies Act, 2013, with its registered office at 86 Golaghata Rd, Jamuna Bl-B, 7th
              Floor, Sreebhumi, North 24 Parganas – 700048, Kolkata, West Bengal.
            </p>
            <p className="mb-4">
              The ToS applies to all platforms, including mobile apps, social media groups, and other
              communication channels associated with InterviewCall. By using InterviewCall Services,
              you agree to these ToS, which incorporate our Privacy Policy and any other related
              policies. Your acceptance binds you to comply with all obligations outlined herein.
            </p>
            <p>
              You are presumed to continue consenting to these ToS until you explicitly withdraw your
              consent in writing. If a separate agreement exists between you and InterviewCall
              regarding its services, any deviations from these ToS must be agreed upon in writing.
              If you do not agree to these conditions, please refrain from using the platform or
              services.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Updates */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Updates to Terms</h2>
            <p>
              We may update, amend, modify, or revise these ToS from time to time. Any changes will
              be communicated to you via email, through the Website, or by other means. Your
              continued use of the InterviewCall Services after such updates constitutes your
              acceptance of the modified terms. We encourage you to periodically review these ToS to
              stay informed about any additions, revisions, amendments, or modifications we may have
              made.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Services */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Services Provided</h2>
            <p className="mb-4">
              InterviewCall offers users access to various training programs in preparation for tech
              interviews and professional development. These programs, collectively referred to as{" "}
              <span className="text-black font-semibold">{`"InterviewCall Services"`}</span> or{" "}
              <span className="text-black font-semibold">{`"Programs,"`}</span> include various
              specialized courses aimed at undergraduates and professionals seeking to enhance their
              skills.
            </p>
            <p className="mb-4">
              InterviewCall reserves the right to modify, suspend, or discontinue any part of the
              InterviewCall Services at its discretion. Continued use of the services after any
              changes signifies your acceptance of those modifications. Users are responsible for
              providing accurate, complete, and updated information during account registration and
              must maintain the security of their accounts.
            </p>
            <p>
              By accepting these ToS and any applicable agreements, users receive a personal,
              non-exclusive, non-transferable, and revocable license to access and use the
              InterviewCall platform and services. Users are responsible for all activities on their
              accounts, including actions taken by authorized individuals.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Resource Access */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Access to Resources
            </h2>
            <p className="mb-4">
              While enrolled in InterviewCall, you have access to several learning resources, each
              with its specific access policy:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                {
                  title: "Class & Session Recordings",
                  desc: "Access to all recorded classes and sessions is available for 12 months post last mandatory class.",
                },
                {
                  title: "1:1 Mentorship Sessions",
                  desc: "Total 6 sessions from starting to post 4th last mandatory class (mock interviews excluded).",
                },
                {
                  title: "Mock Sessions",
                  desc: "Enrolled students are provided with a total of 8 mock sessions — 2 sessions for each module (DSA, Web Development, System Design, and Soft Skills).",
                },
                {
                  title: "Teaching Assistant (TA) Support",
                  desc: "A maximum extension of TA support is available for up to 2 years from the enrollment date. TA support may be discontinued once you secure a job.",
                },
                {
                  title: "Assignments & Notes",
                  desc: "Access to course assignments and notes is permanent. In rare cases where access might end, a 30-day notice will be provided to download your materials.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>
                    <span className="text-black font-semibold">{item.title}: </span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              InterviewCall reserves the right to revoke resource access if you withdraw, violate
              the ToS, or if your account is terminated. InterviewCall does not guarantee job
              placements; refer to the placement policy for details.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Course Pause */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Course Pause</h2>
            <ul className="space-y-3 pl-1">
              {[
                `InterviewCall offers a "Pause" feature allowing learners to temporarily pause their program to manage pace and workload.`,
                "Learners may pause the program up to 2 times. During the pause, access to previously covered recordings and doubt resolution is available; however, no new lectures will be accessible.",
                "When resuming, learners will be placed in the next relevant batch (as applicable) at the module where they paused the program.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Support */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Support</h2>
            <p>
              InterviewCall provides online support tools accessible to registered students. Students
              can initiate a chat or request a call with the InterviewCall support team through the
              student dashboard. InterviewCall will make commercially reasonable efforts to address
              support requests or resolve any issues as applicable. Any guidance provided by
              InterviewCall on platform usage is not to be considered a warranty.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Refund & Placement */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Refund &amp; Placement Assistance Policy
            </h2>

            <p className="mb-2">
              <span className="text-black font-semibold">Initial 7-Day Trial</span>
            </p>
            <p className="mb-6">
              Candidates may opt out within the first 7 days of the program and request a full
              refund of their down payment.
            </p>

            <p className="mb-2">
              <span className="text-black font-semibold">Performance-Based Refund</span>
            </p>
            <p className="mb-6">
              Post trial, candidates remain eligible for a performance-based refund at the end of
              the program. To qualify, all program requirements must be completed within the
              specified timeframe (8 or 10 months, depending on the enrolled program).
            </p>

            <p className="mb-3">
              <span className="text-black font-semibold">Qualifying Criteria</span>
            </p>
            <ol className="space-y-2 mb-6 pl-1">
              {[
                "Maintain 90% attendance in live classes.",
                "Submit 85% of assignments.",
                "Successfully complete all assessments by the scheduled date.",
                "Participate in and complete all required projects or hackathons by the scheduled date.",
                "Successfully clear all mock interviews by the scheduled date.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold min-w-6">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <p className="mb-2">
              <span className="text-black font-semibold">Placement Assistance</span>
            </p>
            <p className="mb-4">
              After completing the learning period and fulfilling all requirements by the screening
              day, candidates receive 4 months of dedicated placement assistance. If no job is
              secured within this window, candidates have the following options:
            </p>
            <ol className="space-y-2 mb-6 pl-1">
              {[
                {
                  title: "Refund Option",
                  desc: "Candidates can request a full refund, processed within 45–60 business days.",
                },
                {
                  title: "Extended Assistance Option",
                  desc: "Candidates can choose an additional 8 months of self-paced assistance, gaining access to ongoing support and resources for their job search. Candidates who select this option forfeit the right to request a refund.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold min-w-6">{i + 1}.</span>
                  <span>
                    <span className="text-black font-semibold">{item.title}: </span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mb-2">
              <span className="text-black font-semibold">Extension of Clause Completion</span>
            </p>
            <p className="mb-6">
              In cases of incomplete clauses, the team may grant a non-changeable extension of up to
              2 additional months post the screening day for candidates to fulfill pending
              requirements. Upon completion, candidates will proceed to the 4-month dedicated
              placement assistance period. Failure to complete within the extension results in
              ineligibility for further placement assistance.
            </p>

            <p className="mb-3">
              <span className="text-black font-semibold">General Refund Terms</span>
            </p>
            <ul className="space-y-2 pl-1">
              {[
                "Candidates must submit all refund requests in writing via the designated email or contact method.",
                "Refunds will be processed only if eligibility criteria and timelines are strictly met.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Termination */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Termination</h2>
            <p className="mb-4">
              InterviewCall reserves the right to suspend or terminate your access to the Platform
              and its services, with or without notice, and pursue any other legal remedies if:
            </p>
            <ul className="space-y-2 mb-6 pl-1">
              {[
                "You violate any terms of the ToS.",
                "InterviewCall cannot verify or authenticate information you have provided.",
                "There is suspicion of illegal, fraudulent, or abusive activity.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              If your account is suspended or terminated, you may not continue to use the Platform
              with the same, a different, or new account. InterviewCall may delete all data
              associated with your account at its discretion. Provisions of the ToS that should
              survive termination — including disclaimers, indemnity, and liability limitations —
              will remain in effect.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Registration */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Registration &amp; Account Integrity
            </h2>
            <p className="mb-4">
              To register on InterviewCall, users must agree to the ToS and provide their name,
              phone number, email, and in some cases, a parent or {`guardian's`} contact information.
              Users should never share passwords, unless explicitly permitting access for support.
              Account information must be accurate, secure, and not misleading, and usernames must
              not infringe on {`others'`} rights or contain offensive language.
            </p>
            <p>
              Users must notify InterviewCall of any security breaches and are fully responsible for
              all activity on their accounts. InterviewCall is not liable for losses from
              unauthorized account use.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Third-Party */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Third-Party Links &amp; Services
            </h2>
            <p>
              InterviewCall uses third-party service providers to deliver its services, which may
              involve sharing user data as needed. The Platform may include links to third-party
              websites, but InterviewCall does not control and is not responsible for their content,
              privacy policies, or practices. By using the Platform, users release InterviewCall
              from any liability related to third-party websites or services.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Acceptable Usage Policy
            </h2>
            <p className="mb-4">While using the Platform, users must not:</p>
            <ul className="space-y-2 pl-1">
              {[
                "Harass or use foul language against others, including peers, teaching assistants, or instructors.",
                "Create disharmony or hostility within groups.",
                "Employ unethical methods during assignments or tests.",
                "Share InterviewCall Content or solutions to assignments and tests with others.",
                "Use unfair methods to complete evaluations, as repeated infractions may lead to scrutiny or suspension.",
                "Impose unreasonable loads on InterviewCall's infrastructure.",
                "Interfere with the proper functioning of the Platform.",
                "Bypass access restrictions or modify InterviewCall Services.",
                "Copy, rent, or distribute any part of the Platform without permission.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Content Ownership */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Content Ownership &amp; Copyright
            </h2>
            <ul className="space-y-3 pl-1">
              {[
                {
                  title: "Ownership",
                  desc: "The Platform and its content — including text, graphics, interfaces, sounds, artwork, and code — are owned by InterviewCall and its licensors, protected by copyright, patent, trademark laws, and other intellectual property rights.",
                },
                {
                  title: "Intellectual Property",
                  desc: `InterviewCall's logos and trademarks, including "InterviewCall," are protected by intellectual property laws.`,
                },
                {
                  title: "User Restrictions",
                  desc: "Users are prohibited from copying, distributing, displaying, reproducing, modifying, or using the content in any unauthorized manner.",
                },
                {
                  title: "User Data Ownership",
                  desc: "Users retain full ownership and rights to their User Data but assume responsibility for any breaches of confidentiality or third-party rights. By posting User Data, users grant InterviewCall a worldwide, non-exclusive, royalty-free license to use, modify, display, and distribute that data in connection with its services.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>
                    <span className="text-black font-semibold">{item.title}: </span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Feedback */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Reviews &amp; Feedback
            </h2>
            <p className="mb-4">
              You agree that we may contact you via telephone, email, SMS, or other electronic means
              for the following purposes:
            </p>
            <ul className="space-y-2 mb-4 pl-1">
              {[
                "To obtain feedback regarding the Platform or InterviewCall services.",
                "To address any complaints, inquiries, or information you provide related to our services.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Any feedback you provide may be used by InterviewCall without any restrictions or
              obligation to compensate you, and we are not required to keep such feedback
              confidential.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Prohibited Content */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Prohibited Content
            </h2>
            <p className="mb-4">
              You must not host, display, upload, modify, publish, transmit, update, or share any
              content that:
            </p>
            <ul className="space-y-2 pl-1">
              {[
                "Belongs to someone else and to which you do not have rights.",
                "Is harmful, harassing, defamatory, obscene, or otherwise inappropriate.",
                "Harms minors in any way.",
                "Infringes on any intellectual property rights.",
                "Violates any applicable laws.",
                "Is misleading or deceptive regarding the origin of communications.",
                "Impersonates another person.",
                "Contains software viruses or harmful code.",
                "Threatens national security or public order.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Disclaimer</h2>
            <p className="mb-4">
              {`InterviewCall's`} services and content are provided on an{" "}
              <span className="text-black font-semibold">{`"as is"`}</span> and{" "}
              <span className="text-black font-semibold">{`"as available"`}</span> basis, without any
              express or implied warranties. InterviewCall makes no guarantees that:
            </p>
            <ul className="space-y-2 mb-4 pl-1">
              {[
                "The Platform or services will be secure, error-free, or available at all times.",
                "Defects will be corrected.",
                "Content will be free of viruses or other harmful components.",
                "Results from using the Platform will meet specific requirements.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold min-w-6">({String.fromCharCode(97 + i)})</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Certificates for program completion are awarded at {`InterviewCall's`} discretion, based
              on specific requirements, and may vary by program. InterviewCall has no obligation to
              ensure its programs are recognized by educational institutions or accreditation bodies.
              Enrollments are non-transferable.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless InterviewCall, its affiliates,
              subsidiaries, and each of their respective employees, contractors, directors,
              suppliers, and representatives from all liabilities, losses, claims, and expenses,
              including reasonable {`attorneys'`} fees, arising from or related to (i) your use or
              misuse of, or access to, the InterviewCall Platform and/or services; (ii) your
              violation of the Terms of Service or any applicable law; (iii) your infringement of
              any third-party rights through the Platform.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent allowed by law, InterviewCall and its affiliates — including
              directors, employees, agents, and partners — are not liable for any damages arising
              from the use of its services. This includes: (i) any loss of profits, data, goodwill,
              or special, indirect, incidental, punitive, or consequential damages; (ii) reliance on
              InterviewCall services; (iii) direct damages exceeding{" "}
              <span className="text-black font-semibold">₹1,000</span> in total; or (iv) issues
              beyond {`InterviewCall's`} reasonable control, even if advised of the possibility of such
              damages.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Governing Law</h2>
            <p>
              These ToS are governed by the laws of{" "}
              <span className="text-black font-semibold">India</span>, without regard to any
              conflicting legal provisions. Any claims, disputes, or differences arising in relation
              to the Platform, the ToS, or transactions conducted through the Platform will be
              subject to the exclusive jurisdiction of the courts at{" "}
              <span className="text-black font-semibold">Kolkata</span>. Users consent to this
              jurisdiction by using the Platform.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Payments */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Payments</h2>
            <p className="mb-4">
              Full payment is required at the time of registration for any program offered by
              InterviewCall, unless otherwise agreed in writing. InterviewCall does not store credit
              card information and uses third-party payment gateways. By using these providers, you
              agree to their terms and policies, and InterviewCall is not responsible for any
              information stored by them.
            </p>
            <p>
              InterviewCall may not support all payment methods, currencies, or locations. Taxes
              will be calculated based on the billing information provided during enrollment.
              A <em>bill of supply</em> will be issued for exempt services, while a separate{" "}
              <em>tax invoice</em> will be provided for other programs.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* NDNC */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">NDNC Policy</h2>
            <p>
              By using the website and registering on InterviewCall.club, you authorize InterviewCall
              to contact you via email, phone call, or SMS to provide services, share product
              information, and offer promotions, even if you are registered under DND/DNC/NCPR
              services. This authorization is valid for up to{" "}
              <span className="text-black font-semibold">365 days</span> from your registration
              date.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Copyright Infringement */}
          <section className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Copyright Infringement Notice
            </h2>
            <p className="mb-4">
              If a user believes their copyright has been infringed, they may send a written notice
              containing:
            </p>
            <ul className="space-y-2 mb-6 pl-1">
              {[
                "An electronic or physical signature of the copyright owner or their authorized representative.",
                "A description of the copyrighted work claimed to be infringed.",
                "Details identifying the location of the infringing material on the platform.",
                "The user's contact information (email, address, and phone number).",
                "A statement affirming the user's good faith belief that the disputed use is unauthorized.",
                "A declaration, under penalty of perjury, that the notice information is accurate and that the user is the copyright owner or authorized to act on behalf of the owner.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">Notices should be sent to:</p>
            <div className="bg-white/5 border border-black/10 rounded-xl p-6 text-base">
              <p className="text-black font-semibold mb-1">
                IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED
              </p>
              <p className="text-black/70">
                86 Golaghata Rd, Jamuna Bl-B, 7th Floor,
                <br />
                Sreebhumi, North 24 Parganas,
                <br />
                West Bengal – 700048
              </p>
            </div>
          </section>

          <hr className="border-black/10" />

          {/* Miscellaneous */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Miscellaneous</h2>
            <ul className="space-y-3 pl-1">
              {[
                {
                  title: "Validity and Enforceability",
                  desc: "If any provision in these ToS is deemed unenforceable or invalid, it will be limited as needed, ensuring the remaining terms remain fully effective.",
                },
                {
                  title: "Waiver of Rights",
                  desc: "Any failure by InterviewCall to enforce a right does not waive any provisions of the ToS unless explicitly stated in writing.",
                },
                {
                  title: "Non-Transferability",
                  desc: "The ToS is personal to each user and cannot be transferred without InterviewCall's written consent, although InterviewCall may assign its rights without the user's consent.",
                },
                {
                  title: "Relationship of Parties",
                  desc: "These terms do not create any agency, partnership, joint venture, or employment relationship between the parties, nor does either party have binding authority over the other.",
                },
                {
                  title: "Force Majeure",
                  desc: "InterviewCall is not liable for failure to perform due to events beyond its control, including natural disasters, wars, strikes, or pandemics.",
                },
                {
                  title: "Age Requirement",
                  desc: "Users must be 18 or older, or if under 18, use the Platform under a guardian's supervision, with the guardian assuming full responsibility. By using the Platform, users confirm their legal capacity to agree to the ToS.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>
                    <span className="text-black font-semibold">{item.title}: </span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Grievances */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Grievances</h2>
            <p className="mb-4">
              If you have any queries or complaints regarding the use of the Platform, including
              reporting any violations of these Terms of Service, please reach out to our grievance
              cell at{" "}
              <a
                href="mailto:hello@interviewcall.club"
                className="text-black font-medium underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                hello@interviewcall.club
              </a>
              .
            </p>
            <p>
              Complaints will be addressed in accordance with the Information Technology Act, 2000,
              and the rules established thereunder.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Definitions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Definitions</h2>
            <ol className="space-y-4 pl-1">
              {[
                {
                  title: "Customer",
                  desc: "A user who has paid and subscribed to any InterviewCall program.",
                },
                {
                  title: "Platform",
                  desc: "Refers to the website interviewcall.club and any additional platforms (such as chat groups or InterviewCall-hosted social media pages) that enable access to InterviewCall Services.",
                },
                {
                  title: "InterviewCall Content",
                  desc: "All proprietary course materials, tools, software, and intellectual property developed by InterviewCall, excluding any data provided by users.",
                },
                {
                  title: "User Data",
                  desc: "Electronic data or content submitted by a user for storage or processing in connection with InterviewCall Services.",
                },
                {
                  title: "User",
                  desc: "Any person using the Platform.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold min-w-6">{i + 1}.</span>
                  <span>
                    <span className="text-black font-semibold">{item.title}: </span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <hr className="border-black/10" />

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions or concerns about these Terms of Service or our practices,
              please reach out to us using any of the contacts below.
            </p>
            <div className="bg-white/5 border border-black/10 rounded-xl p-6 space-y-3 text-base">
              {[
                { label: "General Inquiries", email: "info@interviewcall.club" },
                { label: "Support", email: "support@interviewcall.club" },
                { label: "Security Concerns", email: "security@interviewcall.club" },
                { label: "Grievances", email: "hello@interviewcall.club" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-black/50 font-medium text-sm w-44 shrink-0">
                    {item.label}
                  </span>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-black font-medium hover:text-black/60 transition-colors"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pt-1">
                <span className="text-black/50 font-medium text-sm w-44 shrink-0">Phone</span>
                <a
                  href="tel:6295797609"
                  className="text-black font-medium hover:text-black/60 transition-colors"
                >
                  6295797609
                </a>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <p className="text-sm text-black/40 border-t border-black/10 pt-8 mb-10">
            These Terms of Service constitute an {`"electronic record"`} as defined under applicable
            law, including the Information Technology Act, 2000, and are generated by a computer
            system without requiring any physical or digital signatures. This policy should be read
            alongside any other agreements you may have with InterviewCall. By accepting these terms,
            you expressly consent to {`InterviewCall's`} use and disclosure of your information as
            outlined herein.
            <br />
            <br />
            © IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED. All rights reserved.
          </p>

        </div>
        {/* <Footer /> */}
      </div>
      <div className="md:pt-36 mt-16  w-full md:bg-linear-to-b from-[#080C19] via-[#0C142D] to-[#080C19] flex justify-center ">
        <div className="w-full md:w-8/10">
          <Footer />
        </div>
      </div>
    </div>
  );
}