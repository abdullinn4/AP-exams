create table test_questions (
     id uuid primary key default gen_random_uuid(),
     test_id uuid not null references tests(id) on delete cascade,
     question_id uuid not null references question_bank(id) on delete cascade,
     order_index int not null, -- порядок вопроса в тесте

     unique(test_id, question_id), -- один вопрос не может быть дважды в одном тесте
     unique(test_id, order_index)  -- порядок уникален в рамках теста
);