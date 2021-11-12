# Overview
The documents specifies detailed description of the requirements for "Medical Expert Patient Health Management System". It will illustrate the purpose and 
complete flow of the application.


## Functional Requirements

1. **Login**
    1. The login page shall be displayed for both doctor and patient 
 
2. **Onboard Patient**
   1. Doctor shall be able to onboard a new patient into the system by capturing patient demographic details and health condition.
   2. Patient shall be notified on onboard via email with a username, temporary password and application link to access the site.
 
3. **Dashboard - Doctor**
   1. The website shall display different Dashboard views based on the user login.
   2. The website shall display a dashboard which provides details of patients(Total patients onboarded in the system, patient count based on their medical condition and patient survey responses) on doctor's login.
   3. Survey submission shall be sent to the doctor for review and analysis in real time.
   4. Patient record shall be moved to the escalated tab if the patient has not taken a survey for that day.
   5. The patient survey record shall be marked as completed after the doctor's review.
  
4. **Manage Patients**
   1. Doctor shall be able to edit/update patient details.
   2. Doctor shall be able to reset password for the patient when requested. (Patient shall receive an email with username and temporary password when reset password is initiated)
   3. Doctor shall be able to offboard a patient when treatment is completed.
   4.  If the doctor offboards a patient, a mail shall be sent to the respective patient and his application access shall be restricted.

5. **Dashboard - Patient**
   1. The patient after logging in to the application with the temporary login details provided shall be able to change his password.
   2. The system shall display medical information on the patient dashboard based on the patient's health condition.
   3. The system shall prompt patients to complete a survey once a day and capture the survey responses.
   4. The patient after being onboarded shall be able to access the contact of the concerned doctor to be able to contact during an emergency.
   5. The patient shall be able to access his Exercise Routine from his dashboard which redirects him to Youtube where videos related to the exercises that need to be performed can be watched.

6. **Notifications - Patient**
   1. The System shall display a notification/alert message to the patient when the doctor adds a comment against the patient.
   2. Patient shall receive a notification once a day to take the pain survey.



## Non-Functional Requirements

1. **Security**
   1. The system shall be secure and user information should be kept confidential. Passwords shall be encrypted and should not be displayed at any point in time.
   2. The web application shall be secured to industry standards and provides high durability.
   
2. **Usability**
   1. The application shall be self‐explanatory and intuitive.
   2. The system shall be easy to work with and should be available all day for use.
   3. The user interface of the application should be designed in such a way that patients and doctors shall not go through the hassle of searching for things to interact with. 

3. **Processing Time**
   1. Processing data time shall take 5-10 secs approximately.
 
4. **Scalability**
   1. Workloads shall be accepted by the system and it still perform as expected.
   2. The web application shall be able to handle multiple patients/ multiple doctors without any stutter or delay. This will show that the application is very scalable and can handle the load if required.

5. **Maintainability**
   1. Maintenance of the application shall be done to fix any problems occurring suddenly.
   2. The application shall be easy to maintain after the development phase is done because there should not be a load on the development team when the customers start using the application.
   3. The system shall be able to handle and recover from unexpected failures.

6. **Responsiveness**
   1. Execution of operations shall be fast throughout the application.

7. **Authentication**
   1. Users trying to access the system shall be correctly identified and unauthorized access must be prevented. 
 
8. **Serviceability**
   1. There shall not be much server lag or many server maintenances pauses in the application which will not let the doctors/ patients use the application temporarily. If there are any issues that need to be fixed on the server-side they can be done during a server maintenance shift at night times for the least crowd interaction. 

9. **Modifiability** 
   1. The application shall be easy to modify in case of new changes.
