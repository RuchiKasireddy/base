# HEAL EXPERT
## _SRS Markdown Structure_

## Overview
The document contains a full description of the "HEAL EXPERT" requirements. It will demonstrate the application's goal and overall flow.

## Software Requirements
The software requirements are a list of the target system's characteristics and functions. Users' expectations of the software product are expressed in requirements. From the client's perspective, the requirements might be evident or buried, known or unknown, expected or unexpected.
  
## Functional Requirements
  
## Login Page
| ID | Requirement |
| :-------------: | :----------: |
| FR1 | Login page shall consist of two fields which are username and password. |
| FR2 | Login page shall be accessible for both doctor and patient. |
| FR3 | After entering the required details, Doctor and patient shall be redirected to their respective dashboards. |
| FR4 | For incorrect login credentials application shall display a popup message – “Invalid username and password”.|
| FR5 | Uesr shall be provided an option to change the password by clicking on Forgot Password link.|
| … | … | … |

### Dashboard – Doctor
| ID | Requirement |
| :-------------: | :----------: |
| FR6 | Doctor shall be able to onboard a patient and provide access to the application.|
| FR7 | The website shall provide a dashboard with patient information. |
| FR8 | The doctor shall be able to see and analyze the survey findings in real time. |
| FR9 | Doctor shall be able to notify patient if patient fails to take survey on daily basis.|
| FR10 | Following the doctors review, patient survey records shall be marked as completed. |
| … | … | … |

### Dashboard- Patient
| ID | Requirement |
| :-------------: | :----------: |
| FR11 | System shall display links providing exercise videos which will improve the patient regimen.|
| FR12 | Based on the patient's health condition, the system shall display medical information on the patient dashboard |
| FR13 | Survey shall be triggered to the patient on daily basis to capture the responses and other vital information. |
| FR14 | After being onboarded, the patient shall have access to the contact information for the relevant doctor, which they shall be able to use in the event of an emergency. |
| FR15 | Patient shall be prompted to answer the assigned questions which will ease the recovery allowing their doctors to understand their health status and interact accordingly. |
| … | … | … |

### Manage Patients
| ID | Requirement |
| :-------------: | :----------: |
| FR16 | The doctor will be able to make changes to the patient's information. |
| FR17 | Doctor shall be able to reset the password on patient's request. |
| FR18 | An email with user credentials shall be sent to the patient once the doctor creates a patient record in the system. |
| FR19 | When a patient's therapy is over, the doctor shall be able to offboard them .|
| FR20 | The patient access to the application shall be blocked once the doctor offboards the patient. |
| … | … | … |

### Onboard Patient
| ID | Requirement |
| :-------------: | :----------: |
| FR21 | Doctor shall be able to add new patients to the system by entering patient details. |
| FR22| The patient shall be alerted through email with a username, temporary password to access the site. |
| FR23| Patient shall be able to take the assigned survey on a daily basis.  |
| FR24 | Doctor can email patient in case of emergency. |
| FR25 | All the mandetory fields shall be required to onbaord a patient.|
  
## Non-Functional Requirements
  
### Security
| ID | Requirement |
| :-------------: | :----------: |
| NFR1 | Patient Identification: The system shall identify the patient with the credentials provided. |
| NFR2 | Login: A Login ID and password shall be required for all the users who use the system. |
| NFR3 | Modifications: Any changes like insert, delete, update, etc. for the database shall be synchronized quickly. |
| NFR4 | Staff Rights: The staff shall be able to view any data in the Patient Management system and add new patients record to the system. |
| NFR5 | Inactivity: User shall be logged off if he is inactive for most of his login duration. |

  
### Performance
| ID | Requirement |
| :-------------: | :----------: |
| NFR6 | Responsiveness: The system shall display confirmation message in less than two second once the patient's information is changed/updated. |
| NFR7 | Capacity: The system shall support at least 100 users at once. |
| NFR8 | User-Interface: The user interface shall acknowledge within five seconds. |
| NFR9 | Login: The system shall allow every user to sign in within 5 seconds. |
| NFR10 | Scalability: The system shall be able to handle multiple users without any delay. This will show that the application is very scalable and can handle the load if required. |
| … | … | … |
  
### Maintainability
| ID | Requirement |
| :-------------: | :----------: |
| NFR11 | Back-Up: The system shall offer data backup efficiency. |
| NFR12 | Errors: The system shall track the issues as well as keep a log of it. |
| NFR13 | Flexibility: Maintenance of the application shall be required to address any problems that arise unexpectedly. |
| NFR14 | Modifiability: The application shall be easy to modify in case of new changes. |
| NFR15 | Accuracy: The information presented within the application shall be correct. |
  
### Usability
| ID | Requirement |
| :-------------: | :----------: |
| NFR16 | Reliability: The system shall be easy to work with and should be available all day for use. |
| NFR17 | The application shall be self‐explanatory. |
| NFR18 | Efficiency: The system shall be efficient in handling the capacity, throughput, and response time. |
| NFR19 | The user interface of the application should be designed in such a way that patients and doctors shall not go through the hassle of searching for things to interact with. |
| NFR20 | Patients and Doctors shall be trained on how to use the application. |
  
### Privacy
| ID | Requirement |
| :-------------: | :----------: |
| NFR21 | The system shall ensure the privacy of the communication between the patient and doctor. |
| NFR22 | The system shall enforce the privacy of patient survey results, which will be shared with the caregiver. |
| NFR23 | The system shall ensure the confidentiality of details of consultation. |
| NFR24 | The system shall ensure protection of patient's health information. |
| NFR25 | Patient information shall be disclosed only when the patient has agreed it to be used or disclosed for any specific purposes. |
  
  
# Change management plan
Change management- When implementing change in a company, a change management strategy describes actions and roles for managing and controlling change. Businesses must continually incorporate change in order to prosper. Business must constantly evaluate and adapt what it offers to consumers, as well as how essential procedures are performed, who is responsible, and how improvement is accomplished. Because running a business may be a trial and error process, firms must be quick and nimble in their response to change in order to thrive
  
**How will you train people to use it?**

New requirements will necessitate changes in people's work habits, which can be challenging. Changes will be minimal in some circumstances but can be significant in others. To get started with, the workflow of the application must be clearly explained to all the stakeholders and all the potential problems which might arise while implementation must be addressed. At the unit level, it will be important to involve frontline staff and physicians as this will ensure improvement of procedures if needed. staff must be involved and be able to give suggestions on how to personalize the program for it to be a success. Proper management support and training resources will be provided for the staff to get more involved in the application use. Assist staff in fully accepting the new procedures and ensuring that they understand they offer promising ways for providing high-quality patient care. It is important to ensure that staff are aware of their responsibilities and that they have the necessary knowledge and resources to carry them out. Also, the staff will be guided and assisted the execution effort as the new practices are rolled out across the application to effectively manage the change process. Staff should be involved in defining challenges and testing solutions so that they feel ownership of the changes and see the potential for success.
  
  
**How will you ensure it integrates within their ecosystem / software?**

The data that is produced and added to this software can be helpful to integrate with the system that is used to manage hospitals. For example, the data of patients and doctors that oversee a certain patient help to maintain a record of the whole time the patient stays within the hospital and the medication taken place. The data collected through this system can be integrated into the management system of hospital to find the beds available, doctor shifts, average occupancy of the hospital and helps to assign vacated spots to new patients. This can overtake the other calendar and dashboard systems used by doctor's as the dashboard of the current application helps to keep track of daily tasks to go through and also help to maintain records of doctors attendance with every patient. The medication data present per patient helps the finance department and the medicinal store of the hospital to keep track of the patient's bill of materials used and also helps to upkeep their inventory of medicinal supplies thus also acting as a data source in terms of inventory. Thus, this system integration within the already existing software will reduce the burden of the employee and centralizes the whole system which can share and get the required data.

  
**How will you ensure that it any discovered issues are resolved?**

With the requirements taken, the developer shall have an idea of challenges that may arise during development and before the application goes into production. Most of the discovered issues shall be resolved by web testing, where before the website goes live and is accessible to the public, we tested it for potential flaws. Functionality, Security, Performance, which are the main testing activities that should be tested thoroughly. Functionality testing entails a variety of testing characteristics, including user interface, APIs, database testing, security, server testing, and fundamental website functionalities. Functional testing is quite handy since it allows users to do both manual and automated tests. It is carried out to check the functionality of each website attribute. We checked forms in the application and confirmed they are functioning normally. If a user does not input a necessary field, an error message will display. We made sure that the data submitted in forms to a database is linked to an email address. We checked Business flow from end to end which navigates the user through multiple web pages to finish the process. Performed negative testing as well, where a user takes an unexpected action, the web application displays the relevant error message. Website navigation was tested where buttons or links that navigate to different pages worked as expected. We verified that search engines can simply crawl our site by testing the HTML and CSS. The main component of the web application is a database, and it was tested thoroughly. Examined query response times and tuned them. Web application displayed the correct test data collected from the database. If any change management modification is requested from the client, After the team worked on the new changes the entire application shall be tested again from end to end to make sure no regression is impacted.
  
# Traceability links
Traceability is a type of requirements management that focuses on tracing needs that are clearly described in higher-level requirements but are required to achieve those requirements and make the whole system operate as planned.
  
## Use Case Diagram Traceability
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| UseCase1 | Add patient |FR6, FR14, F16, FR21, NFR3, NFR4, NFR19|
| UseCase2 | Assign Survey |FR8, FR9, FR10, FR13, NFR22|  
| UseCase3 | User credentials |FR1, FR2, FR4, FR5, FR17, FR18, FR22, NFR1, NFR2|  
| … | … | … |
  
## Class Diagram Traceability
| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| Login | NFR1, NFR2,NFR7, NFR9,NFR10, FR1, FR2, FR3, FR4 |
| Doctor | NFR4, NFR5, NFR6, NFR8, FR5, FR6, FR7, FR8, FR9, FR10 |
| Patient | NFR5, NFR7, NFR8, FR11, FR12, FR14 |
| Daily Report | NFR8, FR13, FR15 |
| Forgetpwd | NFR3, FR5 |
| Email Notification | NFR16, NFR17, FR9, FR18 |

  
## Activity Diagram Traceability
<In this case, it makes more sense (I think, feel free to disagree) to link
to the file and to those requirements impacted>
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| <filename> | Handle Player Input | FR1-5, NFR2 |
| … | … | … |
  
# Software Artifacts
<Describe the purpose of this section>
* [I am a link](to_some_file.pdf)
