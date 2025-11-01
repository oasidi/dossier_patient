insert into allergy_type (id, allergy_name, last_modified_date, creation_date, created_by, updated_by)
values (nextval('hibernate_sequence'), 'Alimentaire', current_timestamp, current_timestamp, 'SYSINFO', 'SYSINFO');

insert into allergy_type (id, allergy_name, last_modified_date, creation_date, created_by, updated_by)
values (nextval('hibernate_sequence'), 'Médicamenteuse', current_timestamp, current_timestamp, 'SYSINFO', 'SYSINFO');

insert into allergy_type (id, allergy_name, last_modified_date, creation_date, created_by, updated_by)
values (nextval('hibernate_sequence'), 'Environnementale', current_timestamp, current_timestamp, 'SYSINFO', 'SYSINFO');;
