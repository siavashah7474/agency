// Article body (markdown) for /blog/business-process-automation-readiness-checklist. Title, date and excerpt live in ../index.ts.
export default `
A business process is ready to automate when it runs often, follows rules a new employee could learn from a written page, starts from a clear trigger, uses information that already exists in digital form, has exceptions that are rare and recognisable, and has an owner who will check the result. If a process fails two or more of those six questions, fix the process first and automate it afterwards. This checklist explains each question with examples.

## Why some automation projects disappoint

Automation rarely fails because the technology cannot do the job. It fails because the process underneath was unclear: nobody could say exactly when it starts, who decides what, or what "done" looks like. Automating an unclear process produces the same confusion, faster.

The six questions below take about ten minutes per process. They are worth asking before any tool is chosen.

## The 6-question checklist

### 1. Does it happen often?

A task done fifty times a week is a good candidate. A task done twice a year is not, however tedious it is, because the time to build and maintain the automation will exceed the time saved.

**Good candidates:** replying to new enquiries, sending appointment reminders, entering supplier invoices, chasing unpaid invoices. **Poor candidates:** the annual budget, a one-off office move.

### 2. Could you write the rules on one page?

Ask the person who does the task to explain it as if training a new colleague. If the explanation is a clear list of steps and conditions ("if the invoice has a purchase order number, match it; if not, send it to the manager"), it can be automated. If the explanation is "it depends" or "you get a feel for it", the judgement is still in someone's head and has to be written down first.

### 3. Is there a clear trigger?

Every automation starts with an event: a form is submitted, an email arrives, a date is reached, a status changes. If nobody can say what starts the process, a system cannot know either.

### 4. Is the information already digital?

Automation works on data it can read. Details kept in a notebook, on a whiteboard or only in someone's memory must be captured first. Scanned documents and photos are fine: current document processing reads them well. See [AI document processing for small business](/blog/ai-document-processing-small-business-2026-invoices-forms-contracts).

### 5. Are exceptions rare and recognisable?

No process is free of exceptions. What matters is whether they are a small share of cases and whether they can be recognised. "Amount over the approval limit" is recognisable. "Customer seems upset" is harder, though a well-built AI agent can pass a conversation to a person when it detects frustration or is unsure. A good automation handles the routine cases and hands the exceptions to a person with the context attached.

### 6. Will someone own it?

Every automated process needs a named person who looks at the results, hears about failures and decides on changes. Without an owner, small errors go unnoticed until a customer points them out.

## Scoring a process

Give one point for each "yes".

| Score | What it means | What to do |
| --- | --- | --- |
| 6 | Ready | Automate it now |
| 4–5 | Nearly ready | Fix the missing points, then automate |
| 0–3 | Not ready | Simplify and document the process first |

## A worked example

This example is illustrative, not a client result. A small property agency wants to automate its viewing requests.

- **Often?** Yes, many requests every week.
- **Rules on one page?** Yes: confirm the property is available, offer two time slots, confirm, remind the day before.
- **Clear trigger?** Yes: a portal enquiry or a WhatsApp message.
- **Digital information?** Partly. Agent availability lives in a paper diary.
- **Exceptions recognisable?** Yes: the property is under offer, or the buyer wants a video viewing.
- **Owner?** Yes, the office manager.

The score is five out of six. The missing point is the paper diary. Moving agent availability into a shared calendar is a one-day job, and after that the process is ready. Without that step, the automation would have offered time slots nobody could attend.

## What to automate first when several processes are ready

When more than one process scores six, pick the one closest to revenue. Replying to new enquiries usually comes before invoice entry, because a lost enquiry is lost income while a late invoice entry is only a delay. A fuller ranking is in [10 tasks to automate first](/blog/ai-automation-for-small-business-2026-what-to-automate-first).

## Frequently Asked Questions

### What is business process automation?

It is using software to carry out a repeatable business task, such as replying to enquiries, processing documents or sending reminders, according to rules the business has defined, with people handling the exceptions.

### How do I know if a process is ready to automate?

Check six things: it runs often, its rules fit on one page, it has a clear trigger, its information is digital, its exceptions are rare and recognisable, and someone owns the result.

### Should I fix a process before automating it?

Yes. If the steps or the decision rules are unclear, automation will repeat the confusion. Write the process down, remove steps nobody needs, and then automate what remains.

### Does automation replace staff?

In small businesses it usually changes what staff spend their time on. The routine messages and data entry move to software, and people handle the conversations, exceptions and decisions.

## Key takeaways

- Ask six questions before automating any process: frequency, rules, trigger, digital inputs, exceptions and ownership.
- A process that fails two or more questions needs fixing before it needs software.
- When several processes are ready, start with the one closest to revenue.

Webimot's [free AI audit](/contact) applies this checklist to your business in 3 days and lists the processes worth automating first. See [AI systems for small businesses](/small-business) and [the four systems](/systems).
`;
