insert into medical_case_type (id, created_by, creation_date, last_modified_date, updated_by, description, title)
values (nextval('hibernate_sequence'), 'SYSINFO', current_timestamp, current_timestamp, 'SYSINFO', 'Autre cas medical', 'Autre');
