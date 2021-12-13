# Overview
<Describe the purpose of this document in 1 paragraph of less … hint: it is
your SRS>
# Software Requirements
<Describe the structure of this section>
  
## Functional Requirements
  
### <Name of Feature 1>
| ID | Requirement |
| :-------------: | :----------: |
| FR1 | <Requirement 1> |
| FR2 | <Requirement 2> |
| FR3 | <Requirement 3> |
| … | … | … |
### <Name of Feature 2>
| ID | Requirement |
| :-------------: | :----------: |
| FR4 | <Requirement 1> |
| FR5 | <Requirement 2> |
| FR6 | <Requirement 3> |
| … | … |
  
## Non-Functional Requirements
  
### Security
| ID | Requirement |
| :-------------: | :----------: |
| NFR1 | Patient Identification: The system shall identify the patient with the credentials provided. |
| NFR2 | Login: A Login ID and password shall be required for all the users who use the system. |
| NFR3 | Modifications: Any changes like insert, delete, update, etc. for the database shall be synchronized quickly.|
| NFR4 | Staff Rights: The staff shall be able to view any data in the Patient Management system and add new patients record to the system.|
| NFR5 | Inactivity: User shall be logged off if he is inactive for most of his login duration.|

  
### Performance
| ID | Requirement |
| :-------------: | :----------: |
| NFR6 | Responsiveness : The system shall display confirmation message in less than two second once the patient's information is changed/updated. |
| NFR7 | Capacity: The system shall support at least 100 users at once.|
| NFR8 | User-Interface: The user interface shall acknowledge within five seconds.|
| NFR9 |Login: The system shall allow every user to sign in within 5 seconds|
| NFR5 | Scalability: The system shall be able to handle multiple users without any delay. This will show that the application is very scalable and can handle the load if required.|
| … | … | … |
  
# Change management plan
<Description of what this section is>
  
# Traceability links
<Description of this section>
  
## Use Case Diagram Traceability
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| UseCase1 | Move Player | FR5 |
| … | … | … |
  
## Class Diagram Traceability
| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| classPlayer | NFR3, FR5 |
| … | … | … |
  
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
