// Article body (markdown) for /blog/medical-tourism-patient-journey-automation-7-stages. Title, date and excerpt live in ../index.ts.
export default `
A medical tourism patient goes through seven stages: search, first enquiry, assessment, quote, decision, travel and treatment, and aftercare. A clinic can automate the repetitive parts of each stage (instant replies, photo collection, reminders, document handling, follow-up) and should keep the clinical and trust-building parts with people. This guide walks through the seven stages in order, with what to automate, what to keep human and what to measure.

## Why the journey matters more in medical tourism

A local patient can walk into a clinic. An international patient cannot. They decide from another country, in another language, often in the evening after work, and they usually talk to several clinics at once. Every stage therefore happens in writing, on a phone, and the clinic that makes each step easy tends to be the one that gets the booking.

That is also why medical tourism suits automation well. Most of the journey is messages, photos, documents and dates, which software handles reliably. What software should not handle is the medical judgement and the reassurance a nervous patient needs from a real person.

## The 7 stages at a glance

| Stage | What the patient is doing | What to automate | What to keep human |
| --- | --- | --- | --- |
| 1. Search | Looking for clinics and comparing | Content publishing, tracking which pages bring enquiries | Deciding what the clinic stands for |
| 2. First enquiry | Sending the first message | Instant reply in the patient's language, first questions | Nothing yet, if the reply is good |
| 3. Assessment | Sending photos and history | Collecting photos and forms, checking they are complete | The medical opinion |
| 4. Quote | Waiting for a plan and a price | Sending the plan, package details and next steps | Setting the plan and the price |
| 5. Decision | Hesitating, comparing, asking family | Timed follow-up, answers to common questions | The conversation that builds trust |
| 6. Travel and treatment | Booking flights, arriving, being treated | Reminders, transfer and hotel details, document checks | The care itself |
| 7. Aftercare | Recovering at home | Check-in messages, aftercare instructions, review requests | Any clinical concern |

## Stage 1: Search

The patient types a treatment and a destination into Google, or asks an AI assistant which clinics to consider. What the clinic controls here is whether it can be found and whether its pages answer real questions.

**Automate:** publishing on a schedule, and reporting on which pages and which ads actually lead to enquiries. **Keep human:** the clinic's positioning, its doctors' credentials and its real patient stories. A related guide covers [how clinics get recommended by AI assistants](/blog/generative-engine-optimization-medical-tourism-clinics-2026).

## Stage 2: First enquiry

This is the stage where most clinics lose patients without noticing. The enquiry arrives on WhatsApp or a web form at an hour when nobody is at the desk, and the reply comes the next morning, after the patient has already had answers from other clinics. Research published in Harvard Business Review found that companies that respond to online enquiries quickly are far more likely to have a real conversation with the lead than those that wait ([Harvard Business Review](https://hbr.org/2011/03/the-short-life-of-online-sales-leads)).

**Automate:** the first reply. An AI agent on the clinic's WhatsApp number can greet the patient in their own language, answer common questions about the treatment and ask the first qualifying questions. **Keep human:** a clear route to a person whenever the patient asks for one. The [Capture system](/systems#capture) is built for this stage, and a separate article shows [what an AI assistant says at each step of that first conversation](/blog/ai-assistant-medical-tourism-patient-journey).

## Stage 3: Assessment

For most treatments the doctor needs photos or records before giving an opinion. Patients send blurry photos, the wrong angles, or half of what was asked, and coordinators spend days chasing the rest.

**Automate:** the request itself (which photos, from which angles, with an example), the check that everything has arrived, and the reminder when it has not. **Keep human:** the assessment. Software can sort and prepare a case; the medical opinion belongs to the doctor.

## Stage 4: Quote

Once the doctor has decided on a plan, the patient wants three things: what will be done, what it costs and what is included. Delay here feels like disinterest to the patient.

**Automate:** sending the plan in a clear, consistent format with package details (transfers, hotel, aftercare), and a simple way to ask follow-up questions. **Keep human:** the plan and the price.

## Stage 5: Decision

Few patients book on the day they receive a quote. They think, compare and talk to family. Clinics that send one message and then wait lose patients who were only undecided.

**Automate:** a planned series of follow-ups over the following days and weeks that stops the moment the patient replies or books. **Keep human:** the call or voice message that settles the last doubt. The [Follow-up system](/systems#convert) runs this stage.

## Stage 6: Travel and treatment

After the deposit, the work becomes logistics: flight details, airport transfer, hotel, pre-operative instructions and consent documents. Missed appointments are costly at this point. A Cochrane review of mobile phone reminders found attendance of 67.8% with no reminder and 78.6% with text message reminders ([Cochrane](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments)).

**Automate:** reminders, pre-arrival instructions in the patient's language, and checks that documents and forms are complete before arrival. **Keep human:** the welcome and the care. A separate guide covers [reducing no-shows step by step](/blog/reduce-patient-no-shows-clinics-ai-whatsapp-2026).

## Stage 7: Aftercare

The patient flies home and the clinic's coordinators move on to new enquiries. This is when patients have the most questions and the least contact.

**Automate:** scheduled check-ins, aftercare instructions at the right day, and a review request once recovery is going well. **Keep human:** anything that sounds like a clinical concern, which should be passed to the medical team straight away.

## What to measure

Measure one number per stage, so you can see where patients drop out:

- **Enquiry:** time to first reply, and the share of enquiries answered outside office hours.
- **Assessment:** share of enquiries that send a complete set of photos.
- **Quote:** time from complete photos to quote sent.
- **Decision:** share of quotes that become bookings.
- **Treatment:** share of booked patients who arrive.
- **Aftercare:** share of patients who receive every planned check-in.

The stage with the largest drop is the one to automate first. For most clinics that is the first enquiry.

## Frequently Asked Questions

### What is the medical tourism patient journey?

It is the path an international patient follows from first searching for a treatment abroad to recovering at home. It has seven stages: search, first enquiry, assessment, quote, decision, travel and treatment, and aftercare.

### Which stage should a clinic automate first?

Usually the first enquiry, because a slow first reply loses patients before any other stage begins. Check your own numbers first: the stage where the most patients drop out is the right starting point.

### Can AI give patients a medical opinion?

No. An AI agent can collect photos and information, check that they are complete and prepare the case. The medical opinion, the treatment plan and the price are decisions for the doctor.

### How long does it take to automate the first stages?

Webimot has the WhatsApp AI live within 48 hours of onboarding, including connecting the clinic's WhatsApp Business number and testing with the team. Follow-up, document and reporting systems are added over the following 2–4 weeks.

## Key takeaways

- The medical tourism journey has seven stages, and patients can drop out at each one.
- Automate messages, photos, reminders and documents. Keep medical judgement and reassurance with people.
- Measure one number per stage and start with the stage that loses the most patients.

Webimot builds these systems for clinics. The [free AI audit](/contact) takes 3 days and shows which stage to start with. See [AI systems for clinics](/clinics) for how the parts fit together.
`;
