SELECT st.given_name, st.family_name FROM Students st, Subjects su, Enrolments en
WHERE su.subject = "Web and Database Computing" AND st.student_id = en.student_id AND su.subject_code = en.subject_code;

