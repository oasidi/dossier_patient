create sequence if not exists hibernate_sequence;

create table if not exists allergy_type
(
    id integer not null
        constraint allergy_type_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    allergy_name varchar(255)
);

create table if not exists constant_type
(
    id integer not null
        constraint constant_type_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    constant_name varchar(255),
    constant_unit varchar(255)
);

create table if not exists hospital
(
    id integer not null
        constraint hospital_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    dashboard_photo varchar(255),
    director_name varchar(255),
    email varchar(255),
    locality varchar(255),
    latitude bigint,
    longitude bigint,
    logo varchar(255),
    name varchar(255),
    phone_number varchar(255),
    status varchar(255),
    web_site_url varchar(255)
);

create table if not exists medical_background_type
(
    id integer not null
        constraint medical_background_type_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    background_name varchar(255)
);

create table if not exists medical_case_type
(
    id integer not null
        constraint medical_case_type_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    description varchar(255),
    title varchar(255)
);

create table if not exists medical_service
(
    id integer not null
        constraint medical_service_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    active boolean not null,
    billable boolean not null,
    can_hospitalize boolean not null,
    description varchar(255),
    director varchar(255),
    latitude bigint,
    longitude bigint,
    logo varchar(255),
    name varchar(255),
    phone_number varchar(255),
    hospital_id integer
        constraint fkqa4ekxwse5pvtitxeb4vy1hjo
            references hospital
);

create table if not exists booking
(
    id integer not null
        constraint booking_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    booking_date date,
    end_hour time,
    start_hour time,
    service_id integer
        constraint fkb0bsi19355ivkx1cs3vyy0uih
            references medical_service
);

create table if not exists patient
(
    id integer not null
        constraint patient_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    birth_place varchar(255),
    birthdate date,
    blood_group varchar(255),
    date_of_death date,
    email varchar(255)
        constraint uk_bawli8xm92f30ei6x9p3h8eju
            unique,
    firstname varchar(255),
    lastname varchar(255),
    marital_status varchar(255),
    middle_name varchar(255),
    national_id varchar(255)
        constraint uk_gfvwqe45nja6ktq7bjegpnpf8
            unique,
    phone_number varchar(255),
    rhesus varchar(255),
    sexe varchar(255)
);

create table if not exists address
(
    id integer not null
        constraint address_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    country varchar(255),
    house_number varchar(255),
    postal_code varchar(255),
    street varchar(255),
    patient_id integer
        constraint fkm6svejh11etrox7dkwuqw05cr
            references patient
);

create table if not exists allergy
(
    id integer not null
        constraint allergy_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    allergy varchar(255),
    confidential boolean not null,
    remarks varchar(255),
    allergy_type_id integer
        constraint fkfvb8wh1ia4b2wc1gouadnan4y
            references allergy_type,
    patient_id integer
        constraint fkg2ytn0t43rqrd6ag29e9hiowq
            references patient
);

create table if not exists appointment
(
    id integer not null
        constraint appointment_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    consultation_id integer,
    end_time time,
    personnel_id integer,
    start_time time,
    booking_id integer
        constraint fkgq8gbre23pnc1sc4yjfl7mvif
            references booking,
    patient_id integer
        constraint fk4apif2ewfyf14077ichee8g06
            references patient
);

create table if not exists constant
(
    id integer not null
        constraint constant_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    value double precision not null,
    constant_type_id integer
        constraint fkj4eaqsm2co4v6vkhca78xs1w8
            references constant_type,
    patient_id integer
        constraint fk7ivnjcb800j6kcetohb7t1uts
            references patient
);

create table if not exists contact_person
(
    id integer not null
        constraint contact_person_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    first_name varchar(255),
    last_name varchar(255),
    phone_number varchar(255),
    patient_id integer
        constraint fks6vvvj57k76n1qpeti47lwr89
            references patient
);

create table if not exists document
(
    id integer not null
        constraint document_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    document oid,
    name varchar(255),
    type varchar(255),
    patient_id integer
        constraint fkrs6dkc7k70t7h1pitq4f8074o
            references patient
);

create table if not exists medical_background
(
    id integer not null
        constraint medical_background_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    background varchar(255),
    confidential boolean not null,
    period integer not null,
    remarks varchar(255),
    treatment varchar(255),
    medical_background_type_id integer
        constraint fkbfjqqh0a3346mg0u4x16f2a84
            references medical_background_type,
    patient_id integer
        constraint fk5h220kiw4v7bmssv3axsfy90y
            references patient
);

create table if not exists medical_case
(
    id integer not null
        constraint medical_case_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    comment varchar(255),
    description varchar(255),
    status varchar(255),
    title varchar(255),
    medical_case_type_id integer
        constraint fk9amxvyefmhhectw92rdhye3ty
            references medical_case_type,
    patient_id integer
        constraint fknonbw61hbta3jxym7i8hxyb8p
            references patient
);

create table if not exists preference
(
    id integer not null
        constraint preference_pkey
            primary key,
    created_by varchar(255) not null,
    creation_date timestamp not null,
    last_modified_date timestamp,
    updated_by varchar(255),
    description varchar(255),
    patient_id integer
        constraint fki7qkv4jxwkoamf5mqw2un1ycp
            references patient
);

