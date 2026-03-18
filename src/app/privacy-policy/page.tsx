import Footer from "@/components/Footer";
import TopBarBookACall from "@/components/TopBarBookACall";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center relative">
      <TopBarBookACall/>
      <div className="w-95/100 md:w-8/10 mx-auto pt-20 ">

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 ">
          Privacy Policy
        </h1>
        <p className="text-sm text-black/40 font-medium mb-12 uppercase tracking-widest">
          Last Updated: 29/10/24
        </p>

        <div className="space-y-12 text-base md:text-lg leading-relaxed text-black/75">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Introduction</h2>
            <p className="mb-4">
              At <span className="text-black font-semibold">IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED</span>{" "}
              {`("InterviewCall," "we," "our," or "us")`}, we are committed to protecting your privacy.
              This Privacy Policy outlines how we collect, use, disclose, and safeguard personal
              information, including special or sensitive personal data, when you interact with our
              website, products, and services {`(collectively referred to as "Services")`}.
            </p>
            <p className="mb-4">
              By using our Services, you consent to the practices described in this Privacy Policy
              regarding the collection, use, and disclosure of your information.{` "Personal Data"`}
              refers to any information related to an individual{` ("you" or "your") `}as defined in
              the relevant sections below.
            </p>
            <p>
              This Privacy Policy applies to the InterviewCall website, any subdomains under{" "}
              <span className="text-black/90">http://interviewcall.club/</span>, and all associated
              products and services. Please refer to our Terms of Service for additional information
              on using our products and Services.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Scope */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Scope and Applicability of Policy
            </h2>
            <p className="mb-4">
              This policy outlines{" InterviewCall's"}, its {"subsidiaries'"}, and affiliated{" companies'"}
              practices for handling personal information and how we collect and use information
              provided by you during your use or access of our systems, which include online
              interfaces such as our website and mobile applications {`(collectively, "Company Systems")`}.
            </p>
            <p className="mb-4">
              This policy applies to all information collected through the Company Systems or in the
              course of your use of {"InterviewCall's"} Services. However, it does not apply to, nor does
              InterviewCall take any responsibility for, information collected by any third party using
              our Company Systems, via links on our website, through advertisements, or through BOTS.
            </p>
            <p className="mb-4">
              In this Privacy Policy, {`"Personal Data"`} means any information that can be used to
              individually identify a person, including but not limited to, name, email address,
              postal or physical addresses, job title, and other personally identifiable information.
            </p>
            <p className="mb-4">
              By using our Services, you acknowledge that you have read, understood, and agreed to be
              bound by the terms detailed in this Privacy Policy.
            </p>
            <p>
              We act as the processor of the Personal Data that is provided, collected, and/or
              processed pursuant to this policy, except where otherwise expressly stated.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you choose to share with us. You decide what information to
              provide, and we only collect data that you voluntarily submit through the Company
              Systems. The types of information we may collect include:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              <li className="flex gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>
                  <span className="text-black font-semibold">Personal and Identifiable Information (PII):</span>{" "}
                  This may be required for registration, use of Company Systems, or for receiving
                  services from InterviewCall. Examples include name, title, gender, date of birth,
                  {"father's"} name, email address, phone numbers (home/work/mobile), profile picture,
                  login/screen names, nickname or handle, country/state/city of residence, postal
                  address, educational details (such as school/university name, grades, graduation
                  year), work information (employer name, job title, salary), resume/CV, and social
                  profile data (e.g., Facebook, Google, GitHub).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>
                  <span className="text-black font-semibold">Additional Information:</span>{" "}
                  Any extra information you choose to provide, such as account updates, survey
                  feedback, articles submitted on Company Systems, or when using specific Company
                  System features.
                </span>
              </li>
            </ul>
            <p className="mb-4">
              We may collect and process Personal Data through the following activities related to
              our Products:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              <li className="flex gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>
                  <span className="text-black font-semibold">Account & Product Usage:</span>{" "}
                  Information for account registration, utilizing product features, participating in
                  tests, and generating reports.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>
                  <span className="text-black font-semibold">Service and Support Requests:</span>{" "}
                  Data required when requesting or providing service support, event registration,
                  participating in online surveys, or discussion groups.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span>
                  <span className="text-black font-semibold">Newsletter and Content Customization:</span>{" "}
                  Information needed for newsletter subscriptions or to tailor content to your interests.
                </span>
              </li>
            </ul>
            <p className="mb-4">
              When you voluntarily send us electronic mail or fill up the form, we will keep a record
              of this information so that we can respond to you. In case you have submitted your
              personal information and contact details, we reserve the rights to Call, SMS, Email or
              WhatsApp about our products and offers, even if your number has DND activated on it.
            </p>
            <p className="mb-4">
              We may use the {"candidate's"} name and details for marketing purposes once they secure a
              job after enrolling in our program. We may also share the information provided during
              signup with a third-party learning management system provider that supports the
              effective operation of our product.
            </p>
            <p>
              Please avoid including any unnecessary personal or sensitive data unless specifically
              requested by InterviewCall as part of registration or other required processes.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Third-Party */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Third-Party Information and Integrations
            </h2>
            <p className="mb-4">
              We may occasionally supplement your information with data received from affiliated
              entities, business partners, and other third-party sources. For example, if you access
              or log in to our systems via third-party platforms like Facebook, Twitter, or LinkedIn,
              we may collect your registration details and other updates from these platforms.
            </p>
            <p className="mb-4">
              In certain cases, where permitted by law and applicable regulations, we may obtain
              reports from public sources or conduct background checks.
            </p>
            <p>
              The GDPR grants EU citizens control over their Personal Data, and this regulation
              applies to all relevant data controllers and processors handling EU {"citizens'"} data,
              regardless of location. InterviewCall is committed to complying with the GDPR in
              processing the Personal Data of EU citizens.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* How We Use */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              InterviewCall uses your information to provide, improve, and secure our Services.
              This includes, but is not limited to:
            </p>
            <ul className="space-y-2 pl-1">
              {[
                "Creating and managing your account",
                "Providing you with relevant course recommendations and customized content",
                "Facilitating interview preparation, assessments, and career recommendations",
                "Communicating updates, offers, and information about the Services",
                "Enhancing user experience and analyzing usage trends",
                "Complying with legal obligations and protecting against potential fraudulent activities",
                "Providing you with the websites and services and any support you request",
                "Responding to your inquiries and fulfilling your requests",
                "Diagnosing technical issues with our websites and services",
                "Sending information that may interest you, such as service announcements and newsletters",
                "Understanding how the websites and services are used to enhance and optimize them",
                "Preventing, detecting, mitigating, and investigating fraudulent or illegal activities",
                "Complying with legal obligations and resolving disputes with users",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-white/10" />

          {/* Sharing */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Sharing of Information
            </h2>
            <p className="mb-4">
              We only share your personal information in specific circumstances, such as:
            </p>
            <ol className="space-y-4 pl-1">
              {[
                {
                  title: "Service Providers",
                  desc: "We may share your information with vendors or service providers who assist in operating our Services (e.g., hosting services, analytics providers, LMS).",
                },
                {
                  title: "Hiring Partners",
                  desc: "With your consent, we may share your profile information with our hiring partners who may offer relevant job opportunities.",
                },
                {
                  title: "Legal and Regulatory",
                  desc: "We may disclose your information to comply with legal obligations, enforce our policies, or protect the rights, property, or safety of InterviewCall, our users, or others.",
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

          <hr className="border-white/10" />

          {/* Data Security */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information against
              unauthorized access, alteration, and loss. However, please note that no transmission
              over the internet or electronic storage is entirely secure.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Data Retention</h2>
            <p className="mb-4">
              We retain your personal data only as long as necessary to fulfill the purposes outlined
              in this policy unless a longer retention period is required by law. Upon request, we
              will delete your data from our systems, subject to applicable legal requirements.
            </p>
            <p className="mb-4">
              We retain your data as long as you have an active account. If you request deletion, it
              will be completed within <span className="text-black font-semibold">thirty (30) days</span>,
              although some residual data may remain in logs and will be purged within a year. After
              deletion, your account with InterviewCall will no longer exist.
            </p>
            <p>
              For deletion requests, please contact:{" "}
              <a
                href="mailto:support@interviewcall.club"
                className="text-black font-medium underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                support@interviewcall.club
              </a>
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have rights regarding your personal data, including:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                { right: "Access", desc: "Request access to your personal data." },
                { right: "Correction", desc: "Request corrections to any inaccurate or incomplete information." },
                { right: "Deletion", desc: "Request the deletion of your data (subject to legal restrictions)." },
                { right: "Objection", desc: "Object to the processing of your data for specific purposes." },
                { right: "Portability", desc: "Request a copy of your personal data in a portable format." },
                { right: "Withdraw Consent", desc: "Withdraw your consent where we rely on it to process your data." },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>
                    <span className="text-black font-semibold">{item.right}: </span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-white/10" />

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              International Data Transfers
            </h2>
            <p>
              As a global service, InterviewCall may transfer and store your data outside of your
              country. We take appropriate steps to protect your data in compliance with applicable laws.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Consent */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Consent</h2>
            <p className="mb-4">
              Your decision to provide Personal Data to InterviewCall is entirely voluntary and is
              considered granted when you register and create an account on our Company Systems.
              Please be aware that some options, offers, and services may not be accessible if you
              choose not to provide the required Personal Data.
            </p>
            <p>
              By signing up, you consent to receive email or newsletter communications from us.
              Should you wish to discontinue these communications, you can update your preferences
              using the {"'Unsubscribe'"} link in the emails or by contacting us at{" "}
              <a
                href="mailto:hello@interviewcall.club"
                className="text-black font-medium underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                hello@interviewcall.club
              </a>
              .
            </p>
          </section>

          <hr className="border-white/10" />

          {/* User Data & Privacy Rights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              User Data Collection and Privacy Rights
            </h2>
            <p className="mb-4">
              We utilize various systems for organizing and storing your data, including{" "}
              <span className="text-black font-semibold">AWS Relational Database</span> (main
              database for user information) and{" "}
              <span className="text-black font-semibold">Google Analytics</span> (for monitoring and
              analyzing website traffic).
            </p>
            <p className="mb-4">
              InterviewCall may automatically collect certain data while you use our products through
              cookies and other tracking technologies, including:
            </p>
            <ul className="space-y-2 mb-6 pl-1">
              {[
                "Cookies",
                "Page views",
                "Geolocation data",
                "IP addresses",
                "Browser and OS types",
                "ISP details",
                "Clickstream data",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">
              We use cookies to remember and process items in your shopping cart and to understand
              your preferences based on previous activity. You can manage your cookie preferences
              through your browser settings, but disabling cookies may affect your site experience
              and the functionality of our services.
            </p>
            <p className="mb-4">
              InterviewCall will{" "}
              <span className="text-black font-semibold">not sell or rent</span> your Personal Data
              to third parties for marketing purposes without your explicit consent.
            </p>
            <p>
              You confirm that you are{" "}
              <span className="text-black font-semibold">18 years of age or older</span> unless
              represented by a parent or legal guardian.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Policy Updates</h2>
            <p>
              We may update this policy periodically. We encourage you to review this policy whenever
              you use our Services to stay informed about our practices.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Grievances */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Grievances</h2>
            <p className="mb-4">
              If you have any concerns or grievances regarding our policy, the collection or storage
              of your information, or any other matter related to your personal data, please reach
              out to us at{" "}
              <a
                href="mailto:hello@interviewcall.club"
                className="text-black font-medium underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                hello@interviewcall.club
              </a>
              .
            </p>
            <p>
              We will make every reasonable effort to address and resolve your grievance within{" "}
              <span className="text-black font-semibold">30 days</span> from the date of receipt.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions or concerns about this Privacy Policy or our data practices,
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
                  <span className="text-black/50 font-medium text-sm w-44 shrink-0">{item.label}</span>
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
          <p className="text-sm text-black/40 border-t border-white/10 pt-8 mb-10">
            This policy should be read alongside any other agreements you may have with InterviewCall
            and the Terms of Service published on our website. By accepting this policy, you expressly
            consent to {"InterviewCall's"} use and disclosure of your personal information as outlined herein.
            <br /><br />
            © IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED. All rights reserved.
          </p>

        </div>
      </div>
      <div className="w-full md:pt-36 mt-16 md:bg-linear-to-b from-[#080C19] via-[#0C142D] to-[#080C19] flex justify-center ">
        <div className="w-full md:w-8/10">
          <Footer />
        </div>
      </div>
    </div>
  );
}