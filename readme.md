# Prerequisites


After cloning from Git, run 'npm install' to generate the node_modules folder. This is necessary to run the app.

Run npm audit to see vulnerabilities. We need to address the 20 high and 9 critical attention vulnerabilities at some point. Ensure backup before running npm audit fix or npm audit fix --force.

All Variables:
- int: question_id
    - answer_a = answer_a(question_id)
    - answer_b = answer_b(question_id)
    - answer_c = answer_c(question_id)
    - answer_d = answer_d(question_id)
    - correct_answer = correct_answer(question_id)
    - explanation_a
    - explanation_b
    - explanation_c
    - explanation_d
- list: used_question_id
    - questions_completed = len(used_question_id)
- int: attempts
- float: time_per_question