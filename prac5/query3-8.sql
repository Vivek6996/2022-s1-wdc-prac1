Delete FROM Enrolments
WHERE student_id IN (SELECT student_id FROM Students WHERE given_name='Jane');
Delete FROM Students where given_name ='Jane';


