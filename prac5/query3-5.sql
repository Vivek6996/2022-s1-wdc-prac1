SELECT st.given_name, st.family_name, en.mark FROM Students st, Enrolments en, Subjects su
WHERE st.student_id = en.student_id AND su.subject_code = en.subject_code AND su.subject = 'Computer Systems' AND en.mark < 50;
