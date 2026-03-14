### Ethical and Social Issues Around Data Collection

### Privacy Risks in Data Collection

When using a computer, personal privacy is at risk. Every action online—searches, purchases, location check-ins, social media posts—can be collected, stored, analyzed, and potentially shared. Programmers have a responsibility to safeguard the personal privacy of users.

#### How Data Is Collected

- **Directly:** Users enter information into forms, profiles, or preferences.
- **Indirectly:** Browsing history, cookies, location data, device identifiers.
- **Passively:** Sensors (cameras, microphones), IoT devices, background app activity.

#### Privacy Risks

- **Data breaches:** Unauthorized access to databases exposing personal information (credit cards, health records, passwords).
- **Surveillance:** Governments or corporations monitoring individuals without consent.
- **Profiling:** Building detailed profiles of individuals for targeted advertising or influencing behavior.
- **Identity theft:** Using stolen personal data to impersonate someone.

#### Programmer Responsibility

- **Collect only what is necessary:** Avoid collecting data that is not essential for the application's functionality.
- **Be transparent:** Inform users what data is collected, how it is used, and with whom it is shared.
- **Secure the data:** Use encryption, access controls, and secure storage practices.
- **Respect user choices:** Provide options to opt out, delete data, or control privacy settings.

### Algorithmic Bias

**Algorithmic bias** describes systemic and repeated errors in a program that create unfair outcomes for a specific group of users. Bias can enter algorithms in several ways:

- **Biased training data:** If the data used to train a machine learning model does not represent all groups equally, the model may perform poorly for underrepresented groups. For example, facial recognition systems trained primarily on light-skinned faces have higher error rates for people with darker skin.
- **Biased assumptions:** Programmers may unknowingly embed their own biases into the logic of an algorithm.
- **Feedback loops:** An algorithm that makes decisions based on past data can perpetuate and amplify existing societal biases (e.g., hiring algorithms that favor men because historical data shows more men in certain roles).

#### Examples of Algorithmic Bias

- **Facial recognition:** Lower accuracy for women and people of color.
- **Predictive policing:** Algorithms trained on historical crime data may over-police minority neighborhoods, creating a self-fulfilling cycle.
- **Loan approval:** Models may deny loans to qualified applicants from certain demographics based on biased training data.

### Data Quality and Completeness

Programmers should be aware of the data set collection method and the potential for bias before using the data to extrapolate new information or draw conclusions.

#### Issues with Data Quality

- **Incomplete data:** Missing values or gaps in the data can lead to incorrect conclusions.
- **Inaccurate data:** Errors in data entry, measurement, or transmission can propagate through the program.
- **Outdated data:** Data that is no longer relevant may lead to poor decisions.
- **Non-representative data:** Data that does not reflect the diversity of the population can cause bias.

Using such data in the development or use of a program can cause the program to work incorrectly or inefficiently, and can lead to unfair or harmful outcomes.

### Selecting Appropriate Data Sets

Contents of a data set might be related to a specific question or topic and might not be appropriate to give correct answers or extrapolate information for a different question or topic.

#### Questions to Ask When Selecting Data

- **Is the data relevant?** Does it contain the information needed to answer the question?
- **Is the data representative?** Does it reflect the population or context to which the conclusions will be applied?
- **Is the data current?** Is it recent enough to be valid?
- **Is the data complete?** Are there significant gaps?
- **Is the data biased?** Could it lead to unfair outcomes?

Programmers should critically evaluate data sources and be transparent about limitations.

### Key Terminology for Topic 4.1

| Term | Definition |
|------|------------|
| **Privacy** | The right of individuals to control access to their personal information. |
| **Data breach** | Unauthorized access to confidential data. |
| **Algorithmic bias** | Systematic errors in a program that create unfair outcomes for specific groups. |
| **Training data** | Data used to develop machine learning models. |
| **Data quality** | The accuracy, completeness, and relevance of data. |
| **Representative sample** | A subset of a population that accurately reflects the members of the entire population. |

### AP Exam Tips

- **Recognize privacy risks:** Be able to identify situations where personal data might be at risk and suggest safeguards.
- **Identify bias:** Given a scenario, recognize potential sources of algorithmic bias (e.g., non‑representative training data, biased assumptions).
- **Data selection:** Understand why choosing the right data set is critical for solving a problem correctly.
- **Ethical responsibilities:** Know that programmers have a responsibility to consider the ethical implications of their programs.
- **Real-world examples:** Familiarity with cases like biased facial recognition or predictive policing can help answer questions.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "If data is anonymous, there's no privacy risk." | Anonymous data can often be re-identified by combining with other data sources. |
| "Bias only comes from intentionally prejudiced code." | Bias often arises unintentionally from biased training data or assumptions. |
| "More data is always better." | More data can amplify bias if the data is low quality or non-representative. |
| "Programmers are not responsible for how their programs are used." | Programmers have an ethical responsibility to consider potential misuse and harms. |