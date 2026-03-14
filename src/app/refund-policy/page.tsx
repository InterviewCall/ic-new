import Footer from "@/components/Footer";
import TopBarBookACall from "@/components/TopBarBookACall";


export default function RefundPolicyPage() {
  return (
    <div className="relative min-h-screen bg-white text-black  flex flex-col items-center">
      <TopBarBookACall/>
      <div className="w-95/100 md:w-8/10 pt-20 ">

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
          Refund Policy
        </h1>
        <p className="text-sm text-black/40 font-medium mb-12 uppercase tracking-widest">
          Last Updated: 29/10/24
        </p>

        <div className="space-y-12 text-base md:text-lg leading-relaxed text-black/75">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Overview</h2>
            <p className="mb-4">
              At <span className="text-black font-semibold">IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED</span>{" "}
              {`("InterviewCall," "we," "our," or "us")`}, we are committed to providing a transparent
              and fair refund experience. This policy outlines the terms and conditions under which
              candidates may request refunds and receive placement assistance.
            </p>
            <p>
              By enrolling in any of our programs, you agree to the terms described in this Refund
              and Placement Assistance Policy.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* 14-Day Trial */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Initial 14-Day Trial
            </h2>
            <p className="mb-4">
              Candidates may opt out of the program within the first{" "}
              <span className="text-black font-semibold">14 days</span> of enrollment and request a
              full refund of their entire payment amount.
            </p>
            <p className="mb-4">
              To qualify for a refund during the 14-day trial period, you must meet{" "}
              <span className="text-black font-semibold">all</span> of the following conditions:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Attend 100% of all live classes conducted during the trial period.",
                "Complete 100% of all assignments provided within the trial period.",
                "Submit all assignments within the given deadlines.",
                "Maintain active participation as required by the program guidelines.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Failure to meet any of the above conditions will render the trial period invalid and
              you will not be eligible for a refund.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Refund Request Process */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Refund Request Process
            </h2>
            <p className="mb-4">
              All refund requests must be submitted in writing within the 14-day trial window to{" "}
              <a
                href="mailto:refund@interviewcall.club"
                className="text-black font-medium underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                refund@interviewcall.club
              </a>
              . Each request will be reviewed against attendance records and assignment completion
              status. Refunds are processed only if all eligibility conditions are satisfied.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Performance-Based Refund */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Performance-Based Refund
            </h2>
            <p className="mb-4">
              Post trial, candidates remain eligible for a performance-based refund at the end of
              the program. To qualify, candidates must complete all program requirements within the
              specified time frame —{" "}
              <span className="text-black font-semibold">8 or 10 months</span>, depending on the
              program enrolled in.
            </p>
            <p className="mb-4">
              Candidates must meet <span className="text-black font-semibold">all</span> of the
              following clauses to be eligible:
            </p>
            <ol className="space-y-4 pl-1">
              {[
                {
                  title: "Attendance",
                  desc: "Maintain a minimum of 90% attendance in all live classes.",
                },
                {
                  title: "Assignments",
                  desc: "Submit at least 85% of all assigned work.",
                },
                {
                  title: "Assessments",
                  desc: "Successfully complete all assessments by the scheduled dates as specified after the program starts.",
                },
                {
                  title: "Projects / Hackathons",
                  desc: "Participate in and complete all required projects or hackathons by the scheduled dates.",
                },
                {
                  title: "Mock Interviews",
                  desc: "Successfully clear all mock interviews by the scheduled dates as specified after the program starts.",
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

          {/* Placement Assistance */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Placement Assistance
            </h2>
            <p className="mb-4">
              After completing the 8 or 10-month learning period, candidates who have fulfilled all
              requirements within the scheduled screening day (as announced after the program starts)
              will receive{" "}
              <span className="text-black font-semibold">4 months of dedicated placement assistance</span>.
              During this time, the placement team will actively support candidates through:
            </p>
            <ul className="space-y-2 mb-6 pl-1">
              {[
                "Resume building and profile optimization",
                "Interview preparation and mock sessions",
                "Networking guidance and referrals",
                "Active job matching with hiring partners",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Outcome After Placement */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Outcome After Placement Assistance
            </h2>
            <p className="mb-4">
              If a candidate does not secure a job within the 4-month placement assistance window,
              they may choose one of the following options:
            </p>
            <ol className="space-y-4 pl-1">
              {[
                {
                  title: "Refund Option",
                  desc: "Request a full refund, processed within 45–60 business days.",
                },
                {
                  title: "Extended Assistance Option",
                  desc: "Access an additional 8 months of self-paced assistance with ongoing support and resources. Candidates who select this option forfeit the right to request a refund.",
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

          {/* Failure to Meet Clauses */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Failure to Meet Clauses
            </h2>
            <p className="mb-4">
              Candidates who fail to complete any of the performance clauses (attendance, assignment
              submission, assessment completion, project participation, or mock interview clearance)
              on the scheduled screening day will{" "}
              <span className="text-black font-semibold">not</span> be eligible for the
              performance-based refund.
            </p>
            <p className="mb-4">
              In such cases, the team may grant a{" "}
              <span className="text-black font-semibold">
                non-changeable extension of up to 2 additional months
              </span>{" "}
              post the screening day for candidates to fulfill the pending requirements. Upon
              completion, candidates proceed to the 4-month dedicated placement assistance period.
            </p>
            <p>
              If candidates fail to complete the pending clauses within the extended period, they
              will not be eligible for further placement assistance or a refund.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* General Terms */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">General Terms</h2>
            <ul className="space-y-3 pl-1">
              {[
                "All refund requests must be submitted in writing via the designated email: refund@interviewcall.club.",
                "Refunds will be processed only if eligibility criteria and timelines are strictly met.",
                "Once approved, refunds will be transferred within 45–60 business days to the original payment method.",
                "During the placement assistance period, the placement team will provide support services including resume building, interview preparation, and networking.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions or concerns about this Refund Policy, please reach out to
              us using the contacts below.
            </p>
            <div className="bg-white/5 border border-black/10 rounded-xl p-6 space-y-3 text-base">
              {[
                { label: "Refund Requests", email: "refund@interviewcall.club" },
                { label: "Support", email: "support@interviewcall.club" },
                { label: "General Inquiries", email: "info@interviewcall.club" },
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
          <p className="text-sm text-black/40 border-t border-black/10 pt-8 mb-10">
            This policy should be read alongside any other agreements you may have with InterviewCall
            and the Terms of Service published on our website. By enrolling in a program, you expressly
            consent to the terms outlined herein.
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