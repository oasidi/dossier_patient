alter table medical_service
    add code varchar not null default '';

create unique index medical_service_code_uindex
    on medical_service (code);

